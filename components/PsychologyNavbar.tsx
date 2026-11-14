'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function PsychologyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div
        className={`nav-backdrop ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <Link href="/" className="brand-link" onClick={closeMenu}>
            <h1>NTABLP</h1>
            <span className="brand-tag" style={{ color: 'var(--psych-teal)', borderColor: 'var(--psych-teal)' }}>
              HUSC • VLU
            </span>
          </Link>
        </div>

        <div className="nav-right">
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li>
              <Link href="/" onClick={closeMenu}>
                TRANG CHỦ
              </Link>
            </li>
            <li>
              <a href="#vlu-study" onClick={closeMenu}>
                NGÀNH HỌC VLU
              </a>
            </li>
            <li>
              <a href="#interdisciplinary" onClick={closeMenu}>
                ĐIỂM GIAO THOA
              </a>
            </li>
            <li>
              <a href="#bookshelf" onClick={closeMenu}>
                TỦ SÁCH
              </a>
            </li>
            <li>
              <Link href="/course/" onClick={closeMenu}>
                KHÓA HỌC KỸ THUẬT
              </Link>
            </li>
            <li>
              <a
                href="https://amdg-ad-majorem-dei-gloriam.notion.site/30501?v=a6d58564694e83b2aaf108ac39b94ef4"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                BLOG AMDG
              </a>
            </li>
          </ul>

          <ThemeToggle />

          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            aria-label="Mở menu điều hướng"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
    </>
  );
}
