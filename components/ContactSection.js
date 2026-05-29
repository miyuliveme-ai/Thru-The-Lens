'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const email = 'nallaguno@sorsu.edu.ph';
  const facebookUrl = 'https://facebook.com';

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="card text-center">
        <h2 className="text-4xl font-bold mb-6 text-pink-700">Contact Me</h2>

        <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto leading-8">
          Thank you for visiting my biography website. Feel free to connect with me
          regarding collaborations, leadership opportunities, journalism projects,
          and community engagement activities.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={handleEmailCopy}
            className="btn-primary flex items-center gap-2"
            title="Click to copy email"
          >
            {copied ? '✓ Copied!' : '📧 Email: ' + email}
          </button>

          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            📱 Facebook Profile
          </a>
        </div>

        <div className="bg-pink-50 rounded-2xl p-6 text-left max-w-md mx-auto border border-pink-200">
          <h3 className="font-bold text-pink-900 mb-4">Quick Contact Info</h3>
          <p className="text-slate-700 mb-2">
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p className="text-slate-700 text-sm text-slate-600">
            Feel free to reach out anytime. I'll get back to you as soon as possible!
          </p>
        </div>
      </div>
    </section>
  );
}
