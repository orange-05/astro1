# Multi-stage production Dockerfile for Acharya Shastri Astrology Platform
# Stage 1: Build the Vite frontend application
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install --legacy-peer-deps

# Copy source code and assets
COPY . .

# Build production bundle
RUN npm run build

# Stage 2: Production runtime runner
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy package.json and install production dependencies
COPY package.json ./
RUN npm install --omit=dev --legacy-peer-deps

# Copy compiled frontend and full-stack server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./server.ts
COPY --from=builder /app/src ./src
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/data ./data

# Expose port 3000
EXPOSE 3000

# Health check probe
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

# Start full-stack server with Node.js 22 native TypeScript execution
CMD ["node", "server.ts"]
