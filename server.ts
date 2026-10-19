import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
// Dev server & internal container server must run on 3000 (proxied by NGINX / Cloud Run)
const PORT = 3000;

const DATA_DIR = path.join(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const CONFIG_FILE = path.join(DATA_DIR, 'config.json');

// Ensure data folder exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initial config if not present
const DEFAULT_CONFIG = {
  astrologerName: 'Acharya Keshava Shastri',
  lineage: '24+ Years Traditional Vedic Lineage (Varanasi & Udupi Traditions)',
  whatsappNumber: '+919876543210',
  displayPhone: '+91 98765 43210',
  email: 'acharya.shastri.jyotish@gmail.com',
  consultationHours: 'Monday – Saturday: 08:30 AM – 07:30 PM IST',
  consultationModes: ['In-Person (Bengaluru / Varanasi)', 'Direct WhatsApp Video/Voice', 'Detailed Audio Recording & Written Kundali Report'],
  baseLocation: 'Vedic Consultation Sanctum, Indiranagar, Bengaluru & Varanasi, India',
  languagesSpoken: ['English', 'Kannada', 'Tamil', 'Telugu', 'Malayalam', 'Hindi', 'Marathi']
};

if (!fs.existsSync(CONFIG_FILE)) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(DEFAULT_CONFIG, null, 2), 'utf8');
}

// Initial inquiries if not present
const INITIAL_INQUIRIES = [
  {
    id: 'inq-171800101',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    name: 'Suresh Kumar',
    contactMethod: 'whatsapp',
    contactValue: '+91 98450 12345',
    category: 'kundali_analysis',
    concern: 'Requesting Janam Kundali verification for career shift and foreign travel timeline during Shani Mahadasha.',
    preferredTime: 'Evening (5:00 PM – 7:00 PM IST)',
    preferredLanguage: 'Kannada',
    status: 'contacted',
    source: 'whatsapp_assistant',
    notes: 'Consultation scheduled for tomorrow 5:30 PM on WhatsApp video call.'
  },
  {
    id: 'inq-171800102',
    createdAt: new Date(Date.now() - 3600000 * 22).toISOString(),
    name: 'Ananya Raghavan',
    contactMethod: 'phone',
    contactValue: '+91 97412 88990',
    category: 'marriage_compatibility',
    concern: 'Kundali Milan (Horoscope Matching) for prospective marriage, checking Nadi Dosha and Graha Maitri.',
    preferredTime: 'Morning (10:00 AM – 12:00 PM IST)',
    preferredLanguage: 'Tamil',
    status: 'new',
    source: 'web_form',
    notes: 'Birth charts received via email; awaiting chart calculation.'
  },
  {
    id: 'inq-171800103',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    name: 'Marcus Campbell',
    contactMethod: 'whatsapp',
    contactValue: '+1 876 555 0192',
    category: 'spiritual_energy',
    concern: 'Persistent feeling of heavy negative aura at family estate, requesting Vedic Shanti and evil-eye protective remedies.',
    preferredTime: 'Anytime IST / Caribbean afternoon',
    preferredLanguage: 'Jamaican Patois',
    status: 'completed',
    source: 'whatsapp_assistant',
    notes: 'Completed Navagraha Shanti guidance and protective mantra recitation schedule.'
  }
];

if (!fs.existsSync(INQUIRIES_FILE)) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(INITIAL_INQUIRIES, null, 2), 'utf8');
}

function getInquiries() {
  try {
    const raw = fs.readFileSync(INQUIRIES_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveInquiries(data: unknown[]) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function getConfig() {
  try {
    const raw = fs.readFileSync(CONFIG_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return DEFAULT_CONFIG;
  }
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // Technical SEO: Dynamic Sitemap.xml endpoint with hreflang annotations
  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
    const languages = [
      'en', 'kn', 'ta', 'te', 'ml', 'hi', 'mr',
      'jam', 'yor', 'ig', 'ha', 'tt'
    ];
    const today = new Date().toISOString().split('T')[0];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    ${languages.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/?lang=${l}" />`).join('\n    ')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    ${languages.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/about?lang=${l}" />`).join('\n    ')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/about" />
  </url>
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });

  // Technical SEO: Robots.txt endpoint
  app.get('/robots.txt', (req, res) => {
    const baseUrl = process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
    const robots = `User-agent: *
Allow: /
Allow: /about
Disallow: /api/
Disallow: /admin

Sitemap: ${baseUrl}/sitemap.xml
`;
    res.header('Content-Type', 'text/plain');
    res.send(robots);
  });

  // Health probe endpoints for Docker and Cloud Run
  app.get(['/healthz', '/api/health'], (_req, res) => {
    res.status(200).json({ status: 'ok', service: 'Acharya Shastri Jyotish', uptime: process.uptime() });
  });

  // API Routes
  app.get('/api/config', (_req, res) => {
    res.json(getConfig());
  });

  app.post('/api/config', (req, res) => {
    try {
      const current = getConfig();
      const updated = { ...current, ...req.body };
      fs.writeFileSync(CONFIG_FILE, JSON.stringify(updated, null, 2), 'utf8');
      res.json({ success: true, config: updated });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // Get Inquiries (for astrologer review)
  app.get('/api/inquiries', (_req, res) => {
    const list = getInquiries();
    res.json({ inquiries: list });
  });

  // Submit Inquiry from Form or WhatsApp Chatbot
  app.post('/api/inquiries', (req, res) => {
    try {
      const {
        name,
        contactMethod,
        contactValue,
        category,
        concern,
        preferredTime,
        preferredLanguage,
        source
      } = req.body;

      if (!name || !contactValue) {
        return res.status(400).json({ error: 'Name and contact information are required.' });
      }

      const inquiries = getInquiries();
      const newInquiry = {
        id: `inq-${Date.now()}`,
        createdAt: new Date().toISOString(),
        name: String(name).trim(),
        contactMethod: contactMethod || 'whatsapp',
        contactValue: String(contactValue).trim(),
        category: category || 'general_consultation',
        concern: concern ? String(concern).trim() : 'General consultation inquiry',
        preferredTime: preferredTime || 'Flexible',
        preferredLanguage: preferredLanguage || 'English',
        status: 'new',
        source: source || 'web_intake',
        notes: ''
      };

      inquiries.unshift(newInquiry);
      saveInquiries(inquiries);

      res.status(201).json({ success: true, inquiry: newInquiry });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // Update status or notes of an inquiry
  app.patch('/api/inquiries/:id', (req, res) => {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;
      const inquiries = getInquiries();
      const index = inquiries.findIndex((i: any) => i.id === id);

      if (index === -1) {
        return res.status(404).json({ error: 'Inquiry not found' });
      }

      if (status) inquiries[index].status = status;
      if (notes !== undefined) inquiries[index].notes = notes;

      saveInquiries(inquiries);
      res.json({ success: true, inquiry: inquiries[index] });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // Mount Vite or static server
  const distPath = path.join(__dirname, 'dist');
  const hasDist = fs.existsSync(path.join(distPath, 'index.html'));

  if (isProduction || hasDist) {
    // Production static serving from pre-compiled dist
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    // Dev mode with Vite middleware and proper SPA HTML fallback
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR === 'true' ? false : undefined,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Astrology Full-Stack Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
