import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: '404 - Không Tìm Thấy Trang | NTABLP - Nguyễn Tuấn Anh',
  description: 'Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển trên website NTABLP - Nguyễn Tuấn Anh.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '120px var(--space-300) 80px' }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          <div className="status-indicator" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span className="pulse-dot" style={{ background: '#ef4444', boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.15)' }}></span>
            <span style={{ color: '#ef4444', letterSpacing: '0.1em' }}>
              MÃ LỖI: 404 • MẤT TÍN HIỆU KẾT NỐI // SIGNAL LOST
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: '-2px',
              color: 'var(--accent)',
              marginBottom: '1rem',
            }}
          >
            404
          </h1>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              lineHeight: 1.3,
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}
          >
            Không Tìm Thấy Đường Truyền Tín Hiệu
          </h2>

          <p
            style={{
              fontSize: '16px',
              lineHeight: '28px',
              color: 'var(--text-secondary)',
              maxWidth: '620px',
              margin: '0 auto 2.5rem',
            }}
          >
            Tần số hoặc trang bạn đang tìm kiếm không tồn tại trên hệ thống máy chủ NTABLP, đã bị di chuyển hoặc đường dẫn liên kết bị ngắt quãng. Vui lòng kiểm tra lại địa chỉ hoặc chọn một trong các lộ trình nhanh dưới đây:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginBottom: '3rem',
              textAlign: 'left',
            }}
          >
            <Link
              href="/"
              className="matrix-card"
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <span className="matrix-domain">ĐIỀU HƯỚNG 01</span>
                <h3 style={{ fontSize: '18px', margin: '0.5rem 0', color: 'var(--text-primary)' }}>Trang Chủ NTABLP</h3>
                <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--text-secondary)' }}>
                  Hồ sơ kỹ sư Điện tử Viễn thông (HUSC) &amp; Cử nhân Tâm lý học (ĐH Văn Lang).
                </p>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)', marginTop: '1rem' }}>
                Về trang chủ →
              </span>
            </Link>

            <Link
              href="/course/"
              className="matrix-card"
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <span className="matrix-domain">ĐIỀU HƯỚNG 02</span>
                <h3 style={{ fontSize: '18px', margin: '0.5rem 0', color: 'var(--text-primary)' }}>Khóa Học Kỹ Thuật</h3>
                <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--text-secondary)' }}>
                  Lộ trình thực chiến 8 tuần thiết kế bo mạch Altium và làm chủ vi điều khiển STM32.
                </p>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)', marginTop: '1rem' }}>
                Khám phá khóa học →
              </span>
            </Link>

            <Link
              href="/psychology/"
              className="matrix-card"
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <span className="matrix-domain" style={{ color: 'var(--psych-teal)' }}>ĐIỀU HƯỚNG 03</span>
                <h3 style={{ fontSize: '18px', margin: '0.5rem 0', color: 'var(--text-primary)' }}>Tâm Lý Học VLU</h3>
                <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--text-secondary)' }}>
                  Giao thoa giữa khoa học tâm trí, sinh lý học thần kinh và công nghệ vị nhân sinh.
                </p>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--psych-teal)', marginTop: '1rem' }}>
                Khám phá tâm lý học →
              </span>
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn-solid">
              Quay Lại Trang Chủ
            </Link>
            <a
              href="/document/CV_Nguyen_Tuan_Anh_NTABLP.pdf"
              download="CV_Nguyen_Tuan_Anh_NTABLP.pdf"
              className="btn-wire"
              title="Tải CV Nguyễn Tuấn Anh (PDF)"
            >
              Tải CV / Hồ Sơ (PDF) ↓
            </a>
          </div>
        </div>
      </main>

      <footer className="footer-precision">
        <div className="footer-precision-content">
          <div>
            <span>NTABLP • NGUYỄN TUẤN ANH &copy; 2026 • ĐH KHOA HỌC HUẾ (HUSC) &amp; ĐH VĂN LANG (VLU)</span>
          </div>
          <ul className="footer-precision-links">
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/course/">Khóa học</Link></li>
            <li><Link href="/psychology/">Tâm lý học</Link></li>
            <li><a href="mailto:tuananhqhvl777@gmail.com">Báo lỗi đường dẫn</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
