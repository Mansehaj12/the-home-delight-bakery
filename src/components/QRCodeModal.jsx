import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { X, QrCode, Download, Link2, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryInfo';

export default function QRCodeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Detect if current window is localhost or live
  const isLocal = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  // Initial suggested permanent URL
  const [targetUrl, setTargetUrl] = useState(
    isLocal ? 'https://thehomedelightbakery.com' : window.location.origin
  );
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [error, setError] = useState('');
  const canvasRef = useRef(null);

  // Generate QR Code when URL changes
  useEffect(() => {
    if (!targetUrl.trim()) {
      setError('Please enter a valid website URL');
      setQrDataUrl('');
      return;
    }

    try {
      // Basic URL format validation
      const formatted = targetUrl.startsWith('http://') || targetUrl.startsWith('https://') 
        ? targetUrl 
        : `https://${targetUrl}`;

      QRCode.toDataURL(formatted, {
        width: 600,
        margin: 2,
        color: {
          dark: '#5C131D', // Brand deep maroon
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'H'
      }).then((url) => {
        setQrDataUrl(url);
        setError('');
      }).catch((err) => {
        setError('Could not generate QR code: ' + err.message);
      });
    } catch (err) {
      setError('Invalid URL format');
    }
  }, [targetUrl]);

  // Download QR code PNG
  const handleDownload = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = `The-Home-Delight-Bakery-QR-Code.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-bakery-ivory rounded-3xl shadow-2xl border border-bakery-gold/40 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-bakery-cream border-b border-bakery-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-bakery-maroon text-bakery-gold flex items-center justify-center">
              <QrCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-bakery-maroon">
                Diwali Hamper QR Code Generator
              </h3>
              <p className="text-[11px] text-bakery-brown-muted">
                Create scannable QR codes for hamper boxes, stickers & flyers
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-bakery-brown-muted hover:text-bakery-maroon hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Permanent URL input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-bakery-brown block flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5 text-bakery-gold-dark" />
              <span>Permanent Public Website URL:</span>
            </label>
            <input
              type="url"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              placeholder="e.g. https://thehomedelightbakery.com"
              className="w-full text-xs p-3 rounded-xl bg-white border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-gold font-mono"
            />
            {isLocal && (
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2 mt-1">
                <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  <strong>Important:</strong> Never print a QR code with <code>localhost</code> or a temporary address. When you deploy the site (e.g. on Vercel or Netlify), enter your live permanent public URL here before downloading the QR code.
                </p>
              </div>
            )}
          </div>

          {/* QR Code Preview Display */}
          <div className="p-6 rounded-2xl bg-white border-2 border-bakery-gold/30 shadow-xs flex flex-col items-center justify-center space-y-3">
            {qrDataUrl ? (
              <div className="relative p-3 bg-white rounded-2xl shadow-inner border border-bakery-border">
                <img
                  src={qrDataUrl}
                  alt="Permanent QR Code for The Home Delight Bakery"
                  className="w-52 h-52 object-contain"
                />
                <div className="mt-2 text-center">
                  <span className="text-[11px] font-bold text-bakery-maroon uppercase tracking-wider block">
                    {BAKERY_INFO.name}
                  </span>
                  <span className="text-[10px] text-bakery-brown-muted block">
                    Scan for Diwali Hampers
                  </span>
                </div>
              </div>
            ) : (
              <div className="w-52 h-52 flex items-center justify-center text-xs text-red-600">
                {error || "Generating QR code..."}
              </div>
            )}
          </div>

          {/* Deployment guidance card */}
          <div className="p-3.5 rounded-xl bg-bakery-cream text-xs text-bakery-brown-muted space-y-1 border border-bakery-border">
            <p className="font-bold text-bakery-brown">How to obtain your permanent URL:</p>
            <ol className="list-decimal list-inside space-y-0.5 text-[11px]">
              <li>Deploy this repository to <strong>Vercel</strong> or <strong>Netlify</strong> (1-click free hosting).</li>
              <li>Your permanent URL will look like <code>https://your-bakery-name.vercel.app</code> or your custom domain.</li>
              <li>Enter that permanent URL above, click <strong>Download QR Code</strong>, and print!</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-bakery-cream border-t border-bakery-border flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-white text-xs font-semibold text-bakery-brown hover:bg-bakery-sand transition-colors border border-bakery-border"
          >
            Close
          </button>

          <button
            onClick={handleDownload}
            disabled={!qrDataUrl}
            className="px-5 py-2.5 rounded-xl bg-bakery-maroon hover:bg-bakery-maroon-hover text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5 disabled:opacity-50"
          >
            <Download className="w-4 h-4 text-bakery-gold" />
            <span>Download High-Res PNG</span>
          </button>
        </div>

      </div>
    </div>
  );
}
