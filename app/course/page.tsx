import type { Metadata } from 'next';
import Link from 'next/link';
import CourseNavbar from '@/components/CourseNavbar';
import TaglineReveal from '@/components/TaglineReveal';
import FaqAccordion from '@/components/FaqAccordion';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata: Metadata = {
  title: 'Khóa Học Điện Tử Viễn Thông Thực Chiến | Thiết Kế Mạch & Lập Trình Nhúng NTABLP',
  description:
    'Khóa học thực chiến đào tạo thiết kế mạch in PCB trên Altium Designer, lập trình vi điều khiển ARM STM32 và truyền thông IoT do kỹ sư Nguyễn Tuấn Anh (ĐH Khoa học Huế - HUSC) trực tiếp hướng dẫn.',
  keywords: [
    'Khóa học điện tử viễn thông',
    'thiết kế mạch PCB',
    'học Altium Designer',
    'lập trình STM32',
    'ESP32 IoT',
    'NTABLP',
    'Nguyễn Tuấn Anh',
    'HUSC',
  ],
  alternates: {
    canonical: 'https://ta.tuananhhusc.id.vn/course/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ta.tuananhhusc.id.vn/course/',
    siteName: 'NTABLP • Nguyễn Tuấn Anh',
    title: 'Khóa Học Điện Tử Viễn Thông Thực Chiến | NTABLP',
    description: 'Tự tay thiết kế bo mạch in và làm chủ vi điều khiển sau 8 tuần học thực chiến.',
    images: [
      {
        url: '/image/video-poster.jpg',
        width: 1920,
        height: 1080,
        alt: 'Khóa học Thiết kế mạch in Altium & Vi điều khiển STM32 NTABLP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khóa Học Điện Tử Viễn Thông Thực Chiến | NTABLP',
    description: 'Tự tay thiết kế bo mạch in và làm chủ vi điều khiển sau 8 tuần học thực chiến.',
    images: ['/image/video-poster.jpg'],
  },
};

const faqItems = [
  {
    question: 'Khóa học này phù hợp với đối tượng nào?',
    answer:
      'Khóa học được thiết kế đặc biệt cho sinh viên ngành Điện tử Viễn thông, Công nghệ Thông tin, Kỹ thuật Máy tính, Cơ điện tử và những người làm phần mềm muốn lấn sân sang thiết kế phần cứng và làm chủ thiết bị IoT thực tế.',
  },
  {
    question: 'Chưa từng biết hàn mạch hoặc lập trình có theo học được không?',
    answer:
      'Hoàn toàn được. Chương trình bắt đầu từ nguyên lý cơ bản nhất của từng linh kiện điện tử, cách đọc thông số và hướng dẫn từng dòng code cơ bản trước khi đi vào các bài tập nâng cao.',
  },
  {
    question: 'Tôi cần chuẩn bị máy tính cấu hình ra sao?',
    answer:
      'Bạn chỉ cần một máy tính chạy hệ điều hành Windows với RAM từ 8GB trở lên để mở mượt phần mềm thiết kế mạch Altium Designer và các công cụ nạp mã nguồn vi điều khiển.',
  },
  {
    question: 'Chi phí mua linh kiện thực hành có đắt không?',
    answer:
      'Bộ kit thực hành được tối ưu với chi phí tiết kiệm dưới 400.000 VNĐ. Khóa học có sẵn danh sách linh kiện chi tiết kèm địa chỉ mua uy tín và mã giảm giá tại Việt Nam.',
  },
  {
    question: 'Khóa học diễn ra dưới hình thức nào?',
    answer:
      'Bạn sẽ học qua các video bài giảng chất lượng cao quay cận cảnh từng thao tác màn hình và mỏ hàn, đi kèm toàn bộ tập tin mẫu thiết kế và nhóm hỏi đáp trực tiếp cùng tác giả.',
  },
  {
    question: 'Nếu gặp lỗi mạch không chạy thì được hỗ trợ thế nào?',
    answer:
      'Bạn có thể gửi tập tin thiết kế mạch hoặc quay video hiện tượng lỗi để được giảng viên hướng dẫn đo đạc từng điểm điện áp và sửa lỗi cho đến khi thiết bị hoạt động hoàn hảo.',
  },
];

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course',
      name: 'Khóa Học Thiết Kế Bo Mạch In Altium & Lập Trình Vi Điều Khiển Thực Chiến',
      description:
        'Lộ trình đào tạo thực hành 8 tuần từ nguyên lý linh kiện đến vẽ mạch in nhiều lớp trên Altium Designer, lập trình ARM Cortex-M STM32 và kết nối mạng cảm biến không dây.',
      provider: {
        '@type': 'Person',
        name: 'Nguyễn Tuấn Anh',
        jobTitle: 'Kỹ sư Điện tử Viễn thông (ĐH Khoa học Huế - HUSC)',
        url: 'https://ta.tuananhhusc.id.vn/',
      },
      inLanguage: 'vi',
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        inLanguage: 'vi',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

export default function CoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <CourseNavbar />

      <main>
        {/* Above the Fold: Hero Section (A2 / B5) */}
        <section className="hero-landing">
          <div className="container">
            <div className="hero-content-wrap">
              <div className="hero-kicker-tag">
                <span>ĐÀO TẠO THỰC CHIẾN • 8 TUẦN TẬP TRUNG</span>
              </div>

              <h1 className="hero-headline-gradient">
                Tự tay thiết kế bo mạch in và làm chủ vi điều khiển sau 8 tuần
              </h1>

              <p className="hero-subhead">
                Lộ trình học thực hành từ nguyên lý linh kiện đến lập trình chip ARM và kết nối mạng cảm biến không dây. Không lý thuyết suông, học đến đâu cầm sản phẩm trên tay đến đó.
              </p>

              <div className="hero-cta-group">
                <a href="#register" className="btn-primary-lead">
                  Nhận ưu đãi đăng ký sớm 30%
                </a>
                <a href="#preview" className="btn-secondary-lead">
                  Xem video bài giảng mẫu
                </a>
              </div>

              <div className="hero-proof-bar">
                <span>Được đúc kết từ nền tảng Điện tử Viễn thông Đại học Khoa học Huế (HUSC) và hơn 20 dự án phần cứng thực chiến của kỹ sư Nguyễn Tuấn Anh.</span>
              </div>
            </div>

            {/* Workbench Video Proof */}
            <div className="video-frame-container" id="preview">
              <video controls preload="metadata" poster="/image/video-poster.webp">
                <source src="/video/coming%20soon.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ phát video này.
              </video>
            </div>
          </div>
        </section>

        {/* B11. Mandatory Tagline Reveal Section */}
        <TaglineReveal
          kicker="TRIẾT LÝ ĐÀO TẠO • KỸ THUẬT THỰC HÀNH"
          text="Thiết kế phần cứng không chỉ là vẽ vài đường mạch điện trên màn hình máy tính. Đó là sự chuẩn xác đến từng milimét để sản phẩm hoạt động bền bỉ ngoài đời thực."
        />

        {/* Problem to Solution Section (A2) */}
        <section className="contrast-section">
          <div className="container">
            <div className="section-head-wrap">
              <h2 className="section-title-large">Tại sao đa số người tự học điện tử thường bỏ cuộc?</h2>
              <p className="section-desc-lead">Sự khác biệt rõ ràng giữa việc học lý thuyết sách vở và quy trình chế tạo bo mạch thực tế.</p>
            </div>

            <div className="contrast-grid">
              {/* Problem Card */}
              <div className="contrast-card-problem">
                <h4>Khó khăn khi tự học rời rạc</h4>
                <ul className="contrast-list">
                  <li><span>Quá nhiều công thức toán lý trừu tượng nhưng không biết ứng dụng vào mạch thực tế ra sao.</span></li>
                  <li><span>Tự vẽ mạch trên phần mềm nhưng khi đặt xưởng gia công về thì bị chạm chập và cháy linh kiện.</span></li>
                  <li><span>Viết code cho vi điều khiển hay bị treo ngắt, không biết cách sử dụng máy đo xung để bắt lỗi.</span></li>
                  <li><span>Không có người hướng dẫn kinh nghiệm trực tiếp để chỉ ra các lỗi sai trong thiết kế.</span></li>
                </ul>
              </div>

              {/* Solution Card */}
              <div className="contrast-card-solution">
                <h4>Giải pháp đào tạo thực chiến NTABLP</h4>
                <ul className="contrast-list">
                  <li><span>Học trực quan trên từng sơ đồ mạch thực tế đã được kiểm chứng hoạt động ổn định.</span></li>
                  <li><span>Nắm vững quy tắc kiểm tra lỗi tự động DRC trước khi gửi file đặt mạch gia công tại xưởng.</span></li>
                  <li><span>Lập trình vi điều khiển theo cấu trúc chuẩn công nghiệp, làm chủ thanh ghi và FreeRTOS.</span></li>
                  <li><span>Được giảng viên trực tiếp sửa file thiết kế và hướng dẫn đo kiểm linh kiện từng bước.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome-Driven Benefits (A2 / A4 / B1) */}
        <section className="benefits-section" id="benefits">
          <div className="container">
            <div className="section-head-wrap">
              <h2 className="section-title-large">Bốn năng lực cốt lõi bạn sẽ làm chủ</h2>
              <p className="section-desc-lead">Những kết quả thực tế bạn hoàn toàn tự tin đảm nhiệm sau khi hoàn thành khóa học.</p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-mono-step">NĂNG LỰC 01 • THIẾT KẾ CAD</span>
                <h4>Thiết kế bo mạch in Altium Designer</h4>
                <p>Tự vẽ sơ đồ nguyên lý mạch lạc, phân bổ linh kiện hợp lý và đi dây mạch 2 đến 4 lớp đúng tiêu chuẩn công nghiệp chống can nhiễu.</p>
              </div>

              <div className="benefit-card">
                <span className="benefit-mono-step">NĂNG LỰC 02 • LẬP TRÌNH NHÚNG</span>
                <h4>Lập trình vi điều khiển ARM Cortex-M</h4>
                <p>Làm chủ dòng chip STM32, điều khiển chính xác các khối ngoại vi phần cứng DMA, ngắt Timer và triển khai hệ điều hành thời gian thực FreeRTOS.</p>
              </div>

              <div className="benefit-card">
                <span className="benefit-mono-step">NĂNG LỰC 03 • KẾT NỐI IOT</span>
                <h4>Kết nối mạng cảm biến không dây IoT</h4>
                <p>Tự cấu hình truyền dữ liệu tầm xa bằng công nghệ sóng LoRa, đóng gói bản tin JSON và đẩy dữ liệu lên bảng điều khiển máy chủ qua MQTT.</p>
              </div>

              <div className="benefit-card">
                <span className="benefit-mono-step">NĂNG LỰC 04 • THỰC NGHIỆM PHẦN CỨNG</span>
                <h4>Hàn linh kiện SMD và đo kiểm dao động ký</h4>
                <p>Tự tay hàn các linh kiện dán chân nhỏ bằng mỏ hàn nhiệt, bắt xung tín hiệu và sửa lỗi phần cứng như một kỹ sư chuyên nghiệp.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works (Three Steps) */}
        <section className="how-it-works-section" id="how-it-works">
          <div className="container">
            <div className="section-head-wrap">
              <h2 className="section-title-large">Lộ trình 3 bước từ bản vẽ đến thiết bị chạy thật</h2>
              <p className="section-desc-lead">Phương pháp học tuần tự, rõ ràng giúp bạn làm chủ toàn bộ quy trình chế tạo.</p>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number-circle">1</div>
                <h4>Tính toán chọn linh kiện</h4>
                <p>Đọc hiểu datasheet nhà sản xuất, tính toán dòng áp và công suất tỏa nhiệt an toàn cho mạch nguồn và linh kiện bán dẫn.</p>
              </div>

              <div className="step-card">
                <div className="step-number-circle">2</div>
                <h4>Vẽ mạch in và gửi gia công</h4>
                <p>Thiết kế layout trên Altium Designer, chạy bộ kiểm tra lỗi tự động và xuất tập tin Gerber gửi đặt sản xuất tại xưởng.</p>
              </div>

              <div className="step-card">
                <div className="step-number-circle">3</div>
                <h4>Hàn mạch và nạp code chạy thử</h4>
                <p>Hàn linh kiện thực tế lên bo mạch, viết chương trình điều khiển vi điều khiển và đo kiểm hoạt động ổn định.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section (A2 / B9) */}
        <section className="faq-section-landing" id="faq">
          <div className="container">
            <div className="section-head-wrap">
              <h2 className="section-title-large">Câu hỏi thường gặp</h2>
              <p className="section-desc-lead">Giải đáp đầy đủ những thắc mắc trước khi bạn tham gia khóa học.</p>
            </div>

            <FaqAccordion items={faqItems} />
          </div>
        </section>

        {/* Final Conversion CTA (A2 / A4 / B5) */}
        <section className="final-cta-section" id="register">
          <div className="container">
            <div className="final-cta-box">
              <span className="hero-kicker-tag">ĐĂNG KÝ SỚM • SỐ LƯỢNG GIỚI HẠN</span>
              <h3>Nhận ưu đãi 30% và bộ tài liệu Altium độc quyền</h3>
              <p>
                Để lại địa chỉ email của bạn để nhận thông báo ngày mở cổng đăng ký sớm nhất, cùng bộ thư viện linh kiện 3D Altium do chính kỹ sư Nguyễn Tuấn Anh (ĐTVT - ĐH Khoa học Huế) biên soạn.
              </p>

              <WaitlistForm />

              <div className="risk-reversal-row">
                <span>Cam kết bảo mật thông tin</span>
                <span>•</span>
                <span>Không gửi thư rác</span>
                <span>•</span>
                <span>Nhận tài liệu ngay khi khai giảng</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Standard Footer (B10) */}
      <footer className="footer-standard">
        <div className="container">
          <div className="footer-inner-content">
            <div>
              <span>NTABLP • NGUYỄN TUẤN ANH &copy; 2026 • ĐH KHOA HỌC HUẾ (HUSC) &amp; ĐH VĂN LANG (VLU)</span>
            </div>
            <ul className="footer-nav-list">
              <li><Link href="/">Về trang chủ</Link></li>
              <li>
                <a
                  href="https://amdg-ad-majorem-dei-gloriam.notion.site/30501?v=a6d58564694e83b2aaf108ac39b94ef4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog AMDG
                </a>
              </li>
              <li><a href="mailto:tuananhqhvl777@gmail.com">Liên hệ hỗ trợ</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
