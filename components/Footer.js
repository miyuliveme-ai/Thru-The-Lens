'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-pink-200 py-8 text-center text-slate-500 text-sm">
      © {year} NICA ALTHEA LLAGUNO • Thru The Lens | Biography Website Portfolio
    </footer>
  );
}
