'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setDropdownOpen(false);
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

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

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
            <span className="brand-tag">HUSC • VLU</span>
          </Link>
        </div>

        <div className="nav-right">
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={closeMenu}>GIỚI THIỆU</a></li>
            <li><a href="#skills" onClick={closeMenu}>NĂNG LỰC</a></li>
            <li><a href="#projects" onClick={closeMenu}>DỰ ÁN</a></li>
            <li><a href="#psychology" onClick={closeMenu} style={{ color: 'var(--psych-teal)' }}>TÂM LÝ HỌC</a></li>
            <li><Link href="/course/" onClick={closeMenu}>KHÓA HỌC</Link></li>
            <li><a href="https://amdg-ad-majorem-dei-gloriam.notion.site/30501?v=a6d58564694e83b2aaf108ac39b94ef4" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>BLOG AMDG</a></li>
            <li><a href="https://phanmem123.com/category/phan-mem/phan-mem-ky-thuat/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>PHẦN MỀM</a></li>
            <li className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
              <a
                href="#shop"
                onClick={(e) => {
                  if (typeof window !== 'undefined' && window.innerWidth <= 860) {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
                  }
                }}
              >
                SHOP <span style={{ fontSize: 12, marginLeft: 4 }}>▼</span>
              </a>
              <div className="dropdown-content">
                <a href="https://ta.tuananhhusc.id.vn/ntashop/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  Cửa hàng chính
                </a>
                <a href="https://www.tiktok.com/@ntablp" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  Kênh TikTok
                </a>
                <a href="https://shopee.vn/ntablp" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  Gian hàng Shopee
                </a>
              </div>
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
