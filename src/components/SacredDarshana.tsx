import React, { useState, useEffect, useRef } from 'react';
import { Shield, Sparkles, Sun, Compass, Heart, Eye } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';

interface SacredDarshanaProps {
  theme: 'dark' | 'light';
  whatsappNumber: string;
  currentLangName: string;
}

type ActiveDeity = 'durga' | 'munishvara';

export const SacredDarshana: React.FC<SacredDarshanaProps> = ({
  theme,
  whatsappNumber,
  currentLangName
}) => {
  const [activeDeity, setActiveDeity] = useState<ActiveDeity>('durga');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const cleanWaNumber = whatsappNumber.replace(/[^0-9]/g, '');
  const isLight = theme === 'light';

  // Procedural sacred geometry rendering (Sri Yantra & Trishula Dharma Mandala)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;
    const size = 320;
    canvas.width = size;
    canvas.height = size;

    const render = () => {
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;

      // Color selection based on theme
      const strokeColor = isLight
        ? 'rgba(146, 113, 58, 0.45)'
        : 'rgba(212, 175, 55, 0.55)';
      const auraColor = isLight
        ? 'rgba(237, 227, 207, 0.35)'
        : 'rgba(212, 175, 55, 0.15)';

      // Central radiant aura
      const radial = ctx.createRadialGradient(cx, cy, 10, cx, cy, 130);
      radial.addColorStop(0, auraColor);
      radial.addColorStop(1, 'transparent');
      ctx.fillStyle = radial;
      ctx.beginPath();
      ctx.arc(cx, cy, 130, 0, Math.PI * 2);
      ctx.fill();

      // Outer sacred lotus petal ring
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      const petals = 12;
      for (let i = 0; i < petals; i++) {
        const theta = angle + (i * Math.PI * 2) / petals;
        const x = cx + Math.cos(theta) * 110;
        const y = cy + Math.sin(theta) * 110;
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Middle concentric circles
      ctx.beginPath();
      ctx.arc(cx, cy, 100, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 80, 0, Math.PI * 2);
      ctx.stroke();

      // Interlocking triangles (Sacred Yantra)
      const numTriangles = 6;
      for (let i = 0; i < numTriangles; i++) {
        const rot = -angle * 0.7 + (i * Math.PI) / 3;
        ctx.beginPath();
        for (let j = 0; j < 3; j++) {
          const t = rot + (j * Math.PI * 2) / 3;
          const px = cx + Math.cos(t) * 65;
          const py = cy + Math.sin(t) * 65;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Inner Bindu (Point of Infinite Divine Light)
      ctx.fillStyle = isLight ? '#92713A' : '#FCD34D';
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fill();

      angle += 0.003;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isLight, activeDeity]);

  return (
    <section
      id="sacred-darshana"
      aria-label="Sacred Darshana Sanctum"
      className="py-16 sm:py-20 border-t border-amber-500/15 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Sacred Lineage Darshana</span>
            <span aria-hidden="true" className="text-amber-500/40">·</span>
            <span className="text-slate-400 normal-case font-normal">{currentLangName}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight text-balance">
            Spiritual Guardians & Divine Grace
          </h2>

          <p className="text-base text-slate-300/90 leading-relaxed font-normal">
            Authentic Vedic astrology operates under the divine guardianship of primordial cosmic powers.
            Every chart analysis honors Goddess Durga for strength and discernment, and Lord Munishvara for karmic protection.
          </p>

          {/* Interactive Deity Segmented Controller */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <div className="p-1 rounded-xl bg-slate-900/60 border border-amber-500/20 inline-flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveDeity('durga')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer min-h-[40px] ${
                  activeDeity === 'durga'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-amber-300'
                }`}
                aria-pressed={activeDeity === 'durga'}
              >
                Goddess Durga (Maa Shakti)
              </button>

              <button
                type="button"
                onClick={() => setActiveDeity('munishvara')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer min-h-[40px] ${
                  activeDeity === 'munishvara'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-amber-300'
                }`}
                aria-pressed={activeDeity === 'munishvara'}
              >
                Lord Munishvara (Dharma Guardian)
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Sacred Visual Canvas Left, Contemplation & Astrological Significance Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] aspect-square rounded-2xl celestial-card p-6 flex flex-col items-center justify-center overflow-hidden group">
              <canvas
                ref={canvasRef}
                className="w-[280px] h-[280px] pointer-events-none"
                aria-hidden="true"
              />

              {/* Central Symbolic Emblem Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="font-serif text-3xl font-extrabold text-amber-300/90 mb-1">
                  {activeDeity === 'durga' ? 'ॐ दुं' : 'ॐ मुनी'}
                </span>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-amber-400/80">
                  {activeDeity === 'durga' ? 'Maa Durga' : 'Lord Munishvara'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Narrative & Meaning Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {activeDeity === 'durga' ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                    Supreme Protectress & Jagadamba
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
                    Goddess Durga (Simhavahini)
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  In the traditional Gurukula lineage, Goddess Durga represents the sovereign cosmic energy
                  (Mahashakti) that dispels deep-seated fear, grants mental fortitude during malefic Sade Sati
                  or Rahu Mahadashas, and shields families from adverse astrological afflictions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl celestial-card space-y-1">
                    <div className="text-xs font-semibold text-amber-300 font-serif">
                      Astrological Mitigations
                    </div>
                    <div className="text-xs text-slate-300">
                      Harmonizes Rahu, Mars, and Saturn afflictions; dissolves chronic fear and anxiety.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl celestial-card space-y-1">
                    <div className="text-xs font-semibold text-amber-300 font-serif">
                      Sacred Traditional Upasana
                    </div>
                    <div className="text-xs text-slate-300">
                      Devi Suktam recitation, Navarna Mantra meditation, and pure sattvic ghee lamp offerings.
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                    Kuladevata & Guardian of Ancestral Dharma
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
                    Lord Munishvara (Muneshvara)
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Revered across ancient southern traditions as the protector of righteous deeds and guardian
                  of domestic peace. In authentic Vedic consultation, Lord Munishvara is propitiated for ancestral
                  harmony (Pitrudosha alleviation), property clarity, and clearing obstinate karmic delays.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl celestial-card space-y-1">
                    <div className="text-xs font-semibold text-amber-300 font-serif">
                      Astrological Mitigations
                    </div>
                    <div className="text-xs text-slate-300">
                      Pacifies severe Ketu obstacles, protects ancestral land, and safeguards family health.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl celestial-card space-y-1">
                    <div className="text-xs font-semibold text-amber-300 font-serif">
                      Sacred Traditional Upasana
                    </div>
                    <div className="text-xs text-slate-300">
                      Shiva-Muneeshwara Archana, white floral offerings, and honoring ethical dharma in daily life.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Consultation WhatsApp Action */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
                  `Namaste Acharya Shastri, I would like guidance on remedies honoring ${
                    activeDeity === 'durga' ? 'Maa Durga' : 'Lord Munishvara'
                  } for my horoscope (${currentLangName}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-500/30 bg-slate-900/60 hover:bg-slate-800 text-amber-200 font-semibold text-xs transition-all cursor-pointer min-h-[44px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Inquire About {activeDeity === 'durga' ? 'Durga' : 'Munishvara'} Remedies via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
