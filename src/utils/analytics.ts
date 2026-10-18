/**
 * Google Ads & GA4 Privacy-Compliant Conversion Tracking Utility
 * Safely dispatches standard analytics events with ZERO Personally Identifiable Information (PII).
 */

export type ConversionEvent =
  | 'whatsapp_initiate'
  | 'contact_form_submit'
  | 'inquiry_qualified'
  | 'service_view'
  | 'phone_call_click';

export interface EventPayload {
  source?: string;
  category?: string;
  language?: string;
  status?: string;
  [key: string]: unknown;
}

export function trackConversion(event: ConversionEvent, payload?: EventPayload): void {
  try {
    // 1. Google Tag / Google Ads gtag dispatch if present on window
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, {
        event_category: 'astrology_consultation',
        event_label: payload?.category || payload?.source || 'direct',
        language: payload?.language || 'en',
        non_interaction: false
      });
    }

    // 2. Google Tag Manager dataLayer dispatch if present
    if (typeof window !== 'undefined' && Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event,
        conversionData: {
          category: payload?.category || 'general',
          source: payload?.source || 'web',
          language: payload?.language || 'en'
        }
      });
    }

    // 3. Dispatch custom browser event for in-app monitoring & debugging
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('ad_conversion_logged', {
          detail: { event, payload, timestamp: new Date().toISOString() }
        })
      );
    }
  } catch (err) {
    console.debug('Analytics dispatch error (gracefully silenced):', err);
  }
}
