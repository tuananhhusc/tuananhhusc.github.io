import { Metadata } from 'next';
import Link from 'next/link';
import PsychologyNavbar from '@/components/PsychologyNavbar';

export const metadata: Metadata = {
  title: 'Tâm Lý Học & Giao Thoa Kỹ Thuật | Nguyễn Tuấn Anh (NTABLP) - HUSC & VLU',
  description:
    'Hành trình nghiên cứu ngành Tâm lý học tại Trường Đại học Văn Lang (VLU) kết hợp nền tảng Kỹ sư Điện tử Viễn thông từ Trường Đại học Khoa học - Đại học Huế (HUSC) của Nguyễn Tuấn Anh (NTABLP).',
  keywords: [
    'Tâm lý học Văn Lang',
    'Đại học Khoa học Huế',
    'HUSC',
    'Tâm lý học nhận thức',
    'Nguyễn Tuấn Anh',
    'NTABLP',
    'Điện tử viễn thông',
    'Psychophysiology',
    'HCI',
    'Sức khỏe tinh thần',
    'Đại học Văn Lang VLU',
  ],
  alternates: {
    canonical: 'https://ta.tuananhhusc.id.vn/psychology/',
  },
  openGraph: {
    title: 'Tâm Lý Học & Giao Thoa Kỹ Thuật | Nguyễn Tuấn Anh (NTABLP) - HUSC & VLU',
    description:
      'Hành trình nghiên cứu ngành Tâm lý học tại Trường Đại học Văn Lang (VLU) kết hợp nền tảng Điện tử Viễn thông từ Đại học Khoa học Huế (HUSC) — Hướng đến công nghệ vị nhân sinh.',
    url: 'https://ta.tuananhhusc.id.vn/psychology/',
    siteName: 'NTABLP • Nguyễn Tuấn Anh',
    locale: 'vi_VN',
    type: 'article',
    images: [
      {
        url: '/image/hero-image.jpg',
        width: 1200,
        height: 803,
        alt: 'Tâm lý học & Giao thoa kỹ thuật NTABLP - HUSC & VLU',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tâm Lý Học & Giao Thoa Kỹ Thuật | Nguyễn Tuấn Anh (NTABLP)',
    description:
      'Hành trình nghiên cứu ngành Tâm lý học tại ĐH Văn Lang kết hợp nền tảng Điện tử Viễn thông từ ĐH Khoa học Huế (HUSC).',
    images: ['/image/hero-image.jpg'],
  },
};

const psychologyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Nguyễn Tuấn Anh',
    alternateName: 'NTABLP',
    url: 'https://ta.tuananhhusc.id.vn',
    image: 'https://ta.tuananhhusc.id.vn/image/profile.jpg',
    jobTitle: 'Kỹ sư Điện tử Viễn thông (HUSC) & Sinh viên Cử nhân Tâm lý học (VLU)',
    description:
      'Nghiên cứu điểm giao thoa giữa khoa học tâm lý nhận thức và kỹ thuật phần cứng vị nhân sinh (Psychophysiology & HCI).',
    alumnusOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Trường Đại học Khoa học, Đại học Huế',
        sameAs: 'https://husc.hueuni.edu.vn/',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Trường Đại học Văn Lang',
        sameAs: 'https://www.vlu.edu.vn/',
      },
    ],
    knowsAbout: [
      'Cognitive Psychology',
      'Neuropsychology',
      'Psychophysiology',
      'Biofeedback',
      'Human-Computer Interaction (HCI)',
      'Digital Well-being',
      'Electronics and Telecommunications',
    ],
    sameAs: [
      'https://www.facebook.com/ntablp/',
      'https://www.tiktok.com/@ntablp',
      'https://shopee.vn/ntablp',
      'https://youtube.com/@ntablp',
      'https://open.spotify.com/show/1CJ734ibjh3QUkYg8kS63b',
      'https://amdg-ad-majorem-dei-gloriam.notion.site/30501?v=a6d58564694e83b2aaf108ac39b94ef4',
      'https://ta.tuananhhusc.id.vn/ntashop/',
    ],
  },
};

export default function PsychologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(psychologyJsonLd) }}
      />
      <PsychologyNavbar />

      <main>
        {/* Hero Section */}
        <section className="hero-dossier" style={{ background: 'var(--bg-base)' }}>
          <div className="container" style={{ maxWidth: '1220px', margin: '0 auto' }}>
            <div className="hero-grid">
              <div className="hero-primary">
                <div className="status-indicator" style={{ color: 'var(--psych-teal)' }}>
                  <span className="pulse-dot" style={{ background: 'var(--psych-teal)', boxShadow: '0 0 0 3px var(--psych-teal-subtle)' }}></span>
                  <span>HỌC THUẬT LIÊN NGÀNH • HUSC &amp; VLU</span>
                </div>

                <h1 className="hero-name" style={{ letterSpacing: '-1px' }}>
                  TÂM LÝ HỌC &amp;
                  <span className="hero-title-role" style={{ color: 'var(--psych-teal)' }}>
                    Hành Trình Công Nghệ Vị Nhân Sinh
                  </span>
                </h1>

                <p className="hero-credo">
                  Khởi nguồn từ những năm tháng tôi luyện tư duy toán lý, bán dẫn và xử lý tín hiệu tại Trường Đại học Khoa học - Đại học Huế (HUSC), tôi tiếp tục hành trình học thuật với ngành Tâm lý học tại Trường Đại học Văn Lang (VLU). Tôi nhận ra: Một thiết bị công nghệ dù tinh xảo đến đâu cũng sẽ trở nên vô nghĩa nếu không phục vụ sự an lành, thấu cảm và nâng đỡ tâm hồn con người.
                </p>

                <div className="hero-actions">
                  <a href="#vlu-study" className="btn-solid" style={{ background: 'var(--psych-teal)' }}>
                    Chương Trình Đào Tạo VLU
                  </a>
                  <a href="#interdisciplinary" className="btn-wire">
                    Điểm Giao Thoa Kỹ Thuật
                  </a>
                  <a
                    href="/document/CV_Nguyen_Tuan_Anh_NTABLP.pdf"
                    download="CV_Nguyen_Tuan_Anh_NTABLP.pdf"
                    className="btn-wire"
                    title="Tải CV Nguyễn Tuấn Anh (PDF)"
                  >
                    Tải CV (PDF) ↓
                  </a>
                  <Link href="/" className="btn-wire">
                    Về Trang Chủ NTABLP
                  </Link>
                </div>
              </div>

              {/* Bảng Thông Tin Học Thuật */}
              <div className="hero-spec-card">
                <div className="spec-header">
                  <span className="spec-label" style={{ color: 'var(--psych-teal)' }}>
                    HỒ SƠ HỌC THUẬT SONG NGÀNH
                  </span>
                  <span className="spec-chip" style={{ background: 'var(--psych-teal-subtle)', color: 'var(--psych-teal)' }}>
                    LIÊN NGÀNH
                  </span>
                </div>

                <div className="spec-table">
                  <div className="spec-row">
                    <span className="spec-key">KỸ THUẬT GỐC:</span>
                    <span className="spec-val">ĐH Khoa Học Huế (HUSC) • ĐTVT</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">NGÀNH ĐANG HỌC:</span>
                    <span className="spec-val">ĐH Văn Lang (VLU) • Tâm Lý Học</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">KHOA CHUYÊN MÔN:</span>
                    <span className="spec-val">Khoa Khoa Học Xã Hội &amp; Nhân Văn</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">GIÁ TRỊ CỐT LÕI:</span>
                    <span className="spec-val">Khoa Học Thực Nghiệm &amp; Đạo Đức Nhân Bản</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">HƯỚNG NGHIÊN CỨU:</span>
                    <span className="spec-val">Psychophysiology, Bio-Sensing, HCI</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">TÔN CHỈ:</span>
                    <span className="spec-val">A.M.D.G (Ad Majorem Dei Gloriam)</span>
                  </div>
                </div>

                <div className="spec-footer-profile">
                  <img
                    src="/image/profile.webp"
                    alt="Nguyễn Tuấn Anh (NTABLP) - Nghiên cứu Tâm lý học VLU &amp; Kỹ sư ĐTVT HUSC"
                    className="mini-avatar"
                    width="60"
                    height="60"
                    loading="lazy"
                    style={{ borderColor: 'var(--psych-teal)' }}
                  />
                  <div className="profile-meta">
                    <h4>Nguyễn Tuấn Anh (NTABLP)</h4>
                    <p>Kỹ sư ĐTVT (ĐH Khoa học Huế) • Sinh viên Tâm lý học (ĐH Văn Lang)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 01: VLU Study & Academic Curriculum */}
        <section className="about-section" id="vlu-study">
          <div className="editorial-layout">
            <div className="section-label-col">
              <span className="section-num" style={{ color: 'var(--psych-teal)' }}>01 / ĐÀO TẠO VLU</span>
              <h2 className="section-heading-editorial">Ngành Học Tại ĐH Văn Lang</h2>
            </div>

            <div className="editorial-content">
              <h3>Nền tảng khoa học hành vi và tinh thần nhân văn Văn Lang</h3>

              <p className="editorial-lead" style={{ color: 'var(--psych-teal)' }}>
                Chương trình cử nhân Tâm lý học tại Trường Đại học Văn Lang trang bị kiến thức hệ thống từ nền tảng sinh học thần kinh, các trường phái tâm lý kinh điển đến phương pháp đo lường và thực hành tham vấn.
              </p>

              <p className="editorial-text">
                Tại Văn Lang, triết lý <strong>&quot;Đạo đức - Ý chí - Sáng tạo&quot;</strong> thấm nhuần trong từng bài giảng. Việc học không chỉ dừng lại ở sách vở lý thuyết, mà là sự rèn luyện cái tâm trong sáng để tôn trọng từng câu chuyện đời sống, rèn luyện ý chí vượt qua các nghiên cứu định lượng phức tạp và sáng tạo các giải pháp hỗ trợ tâm lý phù hợp với người Việt trong thời đại số.
              </p>

              <div className="principles-grid">
                <div className="principle-item">
                  <span className="principle-tag" style={{ color: 'var(--psych-teal)' }}>KHỐI NỀN TẢNG</span>
                  <h4>Tâm Lý Học Đại Cương &amp; Lịch Sử</h4>
                  <p>
                    Nghiên cứu sự hình thành và phát triển của các trường phái tâm lý lớn: Phân tâm học, Hành vi học, Tâm lý học Nhân văn và Tâm lý học Nhận thức.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-tag" style={{ color: 'var(--psych-teal)' }}>CƠ SỞ SINH HỌC</span>
                  <h4>Tâm Lý Học Thần Kinh &amp; Sinh Lý</h4>
                  <p>
                    Giải phẫu chức năng não bộ, hệ thần kinh trung ương và ngoại biên, cơ chế dẫn truyền xung thần kinh và vai trò của các chất nội tiết đối với tâm trạng và cảm xúc.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-tag" style={{ color: 'var(--psych-teal)' }}>CHU KỲ ĐỜI NGƯỜI</span>
                  <h4>Tâm Lý Học Phát Triển &amp; Xã Hội</h4>
                  <p>
                    Đặc điểm tâm lý và khủng hoảng phát triển từ ấu thơ, vị thành niên đến tuổi trưởng thành. Tương tác xã hội, động lực nhóm và tâm lý đám đông.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-tag" style={{ color: 'var(--psych-teal)' }}>ĐO LƯỜNG &amp; THỰC HÀNH</span>
                  <h4>Nghiên Cứu Định Lượng &amp; Tham Vấn</h4>
                  <p>
                    Thiết kế khảo sát thực nghiệm, thống kê xử lý dữ liệu tâm lý học (SPSS/Python), các bộ trắc nghiệm chuẩn hóa và rèn luyện kỹ năng tham vấn cá nhân.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Interdisciplinary Convergence */}
        <section className="matrix-section" id="interdisciplinary">
          <div className="container">
            <div className="editorial-layout" style={{ marginBottom: '2rem' }}>
              <div className="section-label-col">
                <span className="section-num" style={{ color: 'var(--psych-teal)' }}>02 / GIAO THOA LIÊN NGÀNH</span>
                <h2 className="section-heading-editorial">Điểm Giao Thoa Liên Ngành</h2>
              </div>
              <div>
                <p className="editorial-lead" style={{ color: 'var(--psych-teal)', marginBottom: 0 }}>
                  Tại sao một kỹ sư phần cứng lại chọn học tâm lý học? Đây là nơi toán học, vật lý mạch điện kết hợp cùng khoa học tâm trí con người.
                </p>
              </div>
            </div>

            <div className="matrix-grid">
              {/* Convergence 01 */}
              <div className="matrix-card">
                <div className="matrix-card-header">
                  <span className="matrix-domain" style={{ color: 'var(--psych-teal)' }}>GIAO THOA 01</span>
                  <span className="matrix-domain">PSYCHOPHYSIOLOGY</span>
                </div>
                <h3 className="matrix-title">Sinh Lý Học Thần Kinh &amp; Cảm Biến Nhúng</h3>
                <p className="matrix-desc">
                  Trạng thái tâm lý không trừu tượng hoàn toàn mà luôn để lại dấu vết sinh học: Biến thiên nhịp tim (HRV), điện trở dẫn truyền da (GSR) do hoạt động tuyến mồ hôi, và sóng não (EEG). Kỹ thuật vi mạch giúp bắt lấy những tín hiệu cực nhỏ này để phản ánh trung thực mức độ căng thẳng của cơ thể.
                </p>
                <div className="spec-chips-row">
                  <span className="spec-chip-item">HRV Time-domain</span>
                  <span className="spec-chip-item">GSR Galvanic Skin</span>
                  <span className="spec-chip-item">PPG Pulse Sensor</span>
                  <span className="spec-chip-item">Biofeedback System</span>
                </div>
              </div>

              {/* Convergence 02 */}
              <div className="matrix-card">
                <div className="matrix-card-header">
                  <span className="matrix-domain" style={{ color: 'var(--psych-teal)' }}>GIAO THOA 02</span>
                  <span className="matrix-domain">HUMAN FACTORS</span>
                </div>
                <h3 className="matrix-title">Công Thái Học Nhận Thức (Cognitive Ergonomics)</h3>
                <p className="matrix-desc">
                  Trong thế giới kỹ thuật, thiết kế thường quá chú trọng vào tính năng mà bỏ quên giới hạn xử lý của não bộ con người. Tâm lý học nhận thức giúp xây dựng các hệ thống điều khiển, phần mềm và bảng chỉ dẫn hạn chế sai sót do quá tải thông tin (Cognitive Load Theory).
                </p>
                <div className="spec-chips-row">
                  <span className="spec-chip-item">Cognitive Load</span>
                  <span className="spec-chip-item">Mental Model</span>
                  <span className="spec-chip-item">Attention Control</span>
                  <span className="spec-chip-item">Error Prevention</span>
                </div>
              </div>

              {/* Convergence 03 */}
              <div className="matrix-card">
                <div className="matrix-card-header">
                  <span className="matrix-domain" style={{ color: 'var(--psych-teal)' }}>GIAO THOA 03</span>
                  <span className="matrix-domain">DIGITAL WELL-BEING</span>
                </div>
                <h3 className="matrix-title">Công Nghệ Hỗ Trợ Tinh Thần Số (Digital Well-being)</h3>
                <p className="matrix-desc">
                  Các nền tảng số hiện đại khai thác vòng lặp Dopamine để giữ chân người dùng, gây kiệt sức và mất ngủ. Mục tiêu của tôi là tạo ra các thiết bị công nghệ tĩnh lặng (Calm Technology) — nhắc nhở người dùng quay về với hiện tại, nhịp thở và sự tĩnh lặng tự nhiên.
                </p>
                <div className="spec-chips-row">
                  <span className="spec-chip-item">Calm Technology</span>
                  <span className="spec-chip-item">Dopamine Detox</span>
                  <span className="spec-chip-item">Sleep Hygiene</span>
                  <span className="spec-chip-item">Mindfulness Tech</span>
                </div>
              </div>

              {/* Convergence 04 */}
              <div className="matrix-card">
                <div className="matrix-card-header">
                  <span className="matrix-domain" style={{ color: 'var(--psych-teal)' }}>GIAO THOA 04</span>
                  <span className="matrix-domain">FAITH &amp; SERVICE</span>
                </div>
                <h3 className="matrix-title">Tinh Thần AMDG &amp; Lắng Nghe Trái Tim</h3>
                <p className="matrix-desc">
                  Kỹ thuật có thể sửa chữa một bo mạch hỏng, nhưng chỉ có sự thấu cảm chân thành mới nâng đỡ được một tâm hồn thương tổn. Tinh thần AMDG hướng dẫn tôi dùng tri thức tâm lý học để phụng sự, biết im lặng lắng nghe và đồng hành với những người đang cần một điểm tựa bình an.
                </p>
                <div className="spec-chips-row">
                  <span className="spec-chip-item">Active Listening</span>
                  <span className="spec-chip-item">Empathy</span>
                  <span className="spec-chip-item">AMDG Spirit</span>
                  <span className="spec-chip-item">Compassion</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Recommended Bookshelf */}
        <section className="dossiers-section" id="bookshelf">
          <div className="container">
            <div className="editorial-layout" style={{ marginBottom: '2rem' }}>
              <div className="section-label-col">
                <span className="section-num" style={{ color: 'var(--psych-teal)' }}>03 / TỦ SÁCH GỐI ĐẦU GIƯỜNG</span>
                <h2 className="section-heading-editorial">Tủ Sách Gối Đầu Giường</h2>
              </div>
              <div>
                <p className="editorial-lead" style={{ color: 'var(--psych-teal)', marginBottom: 0 }}>
                  Những tác phẩm kinh điển định hình tư duy tâm lý học, sinh học thần kinh và cách nhìn nhận con người của tôi.
                </p>
              </div>
            </div>

            <div className="dossier-list">
              {/* Book 01 */}
              <div className="dossier-card">
                <div className="dossier-sidebar">
                  <div>
                    <span className="dossier-id" style={{ color: 'var(--psych-teal)' }}>TÁC PHẨM 01 • Ý NGHĨA CUỘC SỐNG</span>
                    <h4 className="dossier-cat">Viktor E. Frankl</h4>
                  </div>
                  <div className="dossier-tech-stack">
                    <span>• Lĩnh vực: Liệu Pháp Ý Nghĩa</span>
                    <span>• Chủ đề: Logotherapy</span>
                    <span>• Năm xuất bản: 1946</span>
                    <span>• Trọng tâm: Tìm Lẽ Sống Giữa Khổ Đau</span>
                  </div>
                </div>
                <div className="dossier-main">
                  <h3>Đi Tìm Lẽ Sống (Man&apos;s Search for Meaning)</h3>
                  <p>
                    Tác phẩm kinh điển được viết bởi nhà thần kinh học và bác sĩ tâm thần Viktor Frankl sau những năm tháng sống sót qua trại tập trung Đức quốc xã. Cuốn sách khẳng định: Động lực tối hậu của con người không phải là khoái lạc hay quyền lực, mà là hành trình đi tìm ý nghĩa cuộc sống ngay cả giữa muôn vàn thử thách.
                  </p>
                  <ul className="dossier-points">
                    <li>&quot;Người có một lý do để sống có thể chịu đựng được hầu hết mọi nghịch cảnh.&quot;</li>
                    <li>Nền tảng củng cố tinh thần phó thác và niềm tin vào giá trị thiêng liêng của sự sống con người.</li>
                  </ul>
                </div>
              </div>

              {/* Book 02 */}
              <div className="dossier-card">
                <div className="dossier-sidebar">
                  <div>
                    <span className="dossier-id" style={{ color: 'var(--psych-teal)' }}>TÁC PHẨM 02 • TƯ DUY HÀNH VI</span>
                    <h4 className="dossier-cat">Daniel Kahneman</h4>
                  </div>
                  <div className="dossier-tech-stack">
                    <span>• Lĩnh vực: Tâm Lý Học Hành Vi</span>
                    <span>• Chủ đề: Kinh Tế Học Hành Vi</span>
                    <span>• Giải Nobel: 2002</span>
                    <span>• Trọng tâm: Hệ Thống 1 &amp; Hệ Thống 2</span>
                  </div>
                </div>
                <div className="dossier-main">
                  <h3>Tư Duy Nhanh Và Chậm (Thinking, Fast and Slow)</h3>
                  <p>
                    Giải mã hai hệ thống vận hành trong não bộ: Hệ thống 1 (trực giác, phản xạ nhanh, ít tốn năng lượng) và Hệ thống 2 (suy luận logic, tính toán chậm, tốn nhiều tài nguyên nhận thức). Cuốn sách chỉ ra hàng loạt thiên kiến nhận thức (Cognitive Biases) mà mỗi kỹ sư và người thiết kế sản phẩm cần thấu hiểu để tránh sai lầm.
                  </p>
                  <ul className="dossier-points">
                    <li>Ứng dụng sâu sắc vào việc thiết kế giao diện chống thao túng nhận thức của người dùng.</li>
                    <li>Giúp kỹ sư nhận thức được các bẫy tâm lý khi ra quyết định kỹ thuật và đánh giá rủi ro.</li>
                  </ul>
                </div>
              </div>

              {/* Book 03 */}
              <div className="dossier-card">
                <div className="dossier-sidebar">
                  <div>
                    <span className="dossier-id" style={{ color: 'var(--psych-teal)' }}>TÁC PHẨM 03 • SANG CHẤN &amp; THÂN THỂ</span>
                    <h4 className="dossier-cat">Bessel van der Kolk</h4>
                  </div>
                  <div className="dossier-tech-stack">
                    <span>• Lĩnh vực: Sang Chấn Tâm Lý</span>
                    <span>• Chủ đề: Neurobiology &amp; Trauma</span>
                    <span>• Trọng tâm: Kết Nối Não Bộ &amp; Thân Thể</span>
                    <span>• Điểm nhấn: The Body Keeps the Score</span>
                  </div>
                </div>
                <div className="dossier-main">
                  <h3>Sang Chấn Tâm Lý (The Body Keeps the Score)</h3>
                  <p>
                    Công trình nghiên cứu chấn động về cơ chế sang chấn tâm lý tác động lên cấu trúc não bộ và hệ thần kinh tự chủ. Tiến sĩ Bessel van der Kolk chỉ ra rằng những đau buồn, lo âu trong quá khứ không chỉ lưu lại trong ký ức mà còn in hằn lên nhịp thở, độ co cơ và trương lực mạch máu.
                  </p>
                  <ul className="dossier-points">
                    <li>Chứng minh tính cấp thiết của các liệu pháp phản hồi sinh học (Biofeedback) và tập thở.</li>
                    <li>Là nguồn cảm hứng trực tiếp cho dự án phần cứng đo đạc HRV và điều hòa căng thẳng của tôi.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Academic Invitation & Contact */}
        <section className="contact-terminal-section" id="contact">
          <div className="container">
            <div className="terminal-contact-box">
              <div className="contact-left">
                <span className="section-num" style={{ color: 'var(--psych-teal)' }}>04 / ĐỐI THOẠI &amp; KẾT NỐI</span>
                <h3>Trao Đổi Học Thuật &amp; Kết Nối Tâm Lý</h3>
                <p>
                  Bạn là sinh viên, giảng viên ngành Tâm lý học tại Đại học Văn Lang, cựu sinh viên Đại học Khoa học Huế (HUSC), hoặc là một kỹ sư quan tâm đến sức khỏe tinh thần và công nghệ vị nhân sinh? Tôi luôn trân trọng mọi cơ hội đối thoại, chia sẻ góc nhìn và hợp tác nghiên cứu.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                  <a href="mailto:tuananhqhvl777@gmail.com" className="btn-solid" style={{ background: 'var(--psych-teal)' }}>
                    Gửi Email Trao Đổi
                  </a>
                  <Link href="/" className="btn-wire">
                    Về Trang Chủ NTABLP
                  </Link>
                </div>
              </div>

              <div className="social-rack">
                <span className="social-rack-label">MẠNG LƯỚI KẾT NỐI HỌC THUẬT</span>
                <a
                  href="https://amdg-ad-majorem-dei-gloriam.notion.site/30501?v=a6d58564694e83b2aaf108ac39b94ef4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                >
                  <span>Blog Triết Lý AMDG</span>
                </a>
                <a
                  href="https://open.spotify.com/show/1CJ734ibjh3QUkYg8kS63b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                >
                  <span>Spotify Podcast Lắng Nghe</span>
                </a>
                <a
                  href="https://www.facebook.com/ntablp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                >
                  <span>Facebook NTABLP</span>
                </a>
                <a
                  href="https://youtube.com/@ntablp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                >
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-precision">
        <div className="footer-precision-content">
          <div>
            <span>NTABLP // NGUYỄN TUẤN ANH &copy; 2026 • ĐH KHOA HỌC HUẾ (HUSC) &amp; ĐH VĂN LANG (VLU)</span>
          </div>
          <ul className="footer-precision-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#vlu-study">VLU Curriculum</a>
            </li>
            <li>
              <a href="#interdisciplinary">Convergence</a>
            </li>
            <li>
              <a href="#bookshelf">Bookshelf</a>
            </li>
            <li>
              <Link href="/course/">Technical Course</Link>
            </li>
            <li>
              <a
                href="/document/CV_Nguyen_Tuan_Anh_NTABLP.pdf"
                download="CV_Nguyen_Tuan_Anh_NTABLP.pdf"
                style={{ color: 'var(--psych-teal)', fontWeight: 600 }}
                title="Tải CV Nguyễn Tuấn Anh (PDF)"
              >
                Tải CV (PDF)
              </a>
            </li>
            <li>
              <a
                href="https://amdg-ad-majorem-dei-gloriam.notion.site/30501?v=a6d58564694e83b2aaf108ac39b94ef4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog AMDG
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
