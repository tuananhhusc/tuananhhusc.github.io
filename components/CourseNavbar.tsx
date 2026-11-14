'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function CourseNavbar() {
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
      <div className="header-floating-wrap">
      <header className="nav-floating">
        <Link href="/" className="nav-brand-group" onClick={closeMenu}>
          <span className="nav-logo-text">NTABLP</span>
          <span className="nav-badge-mono">HUSC • VLU</span>
        </Link>

        <ul className={`nav-menu-desktop ${isOpen ? 'active' : ''}`}>
          <li><Link href="/" onClick={closeMenu}>Trang chủ</Link></li>
          <li><Link href="/psychology/" onClick={closeMenu}>Tâm lý học VLU</Link></li>
          <li><a href="#benefits" onClick={closeMenu}>Lợi ích</a></li>
          <li><a href="#how-it-works" onClick={closeMenu}>Lộ trình 3 bước</a></li>
          <li><a href="#faq" onClick={closeMenu}>Câu hỏi thường gặp</a></li>
          <li>
            <a
              href="https://amdg-ad-majorem-dei-gloriam.notion.site/30501?v=a6d58564694e83b2aaf108ac39b94ef4"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Blog AMDG
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#register" className="btn-primary-lead" style={{ padding: '6px 14px', fontSize: 14 }}>
            Đăng ký sớm
          </a>
          <ThemeToggle className="theme-toggle-btn" />
          <button
            className={`hamburger-btn ${isOpen ? 'active' : ''}`}
            aria-label="Mở menu điều hướng"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      </div>
    </>
  );
}
