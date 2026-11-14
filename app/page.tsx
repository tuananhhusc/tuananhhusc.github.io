import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero: Asymmetric Technical Dossier */}
        <section className="hero-dossier" id="home">
          <div className="hero-grid">
            <div className="hero-primary">
              <div className="status-indicator">
                <span className="pulse-dot"></span>
                <span>HỒ SƠ HỌC THUẬT &amp; KỸ THUẬT THỰC CHIẾN</span>
              </div>

              <h1 className="hero-name">
                NGUYỄN TUẤN ANH
                <span className="hero-title-role">
                  Kỹ sư Điện tử Viễn thông (HUSC) • Nghiên cứu sinh Tâm lý học (ĐH Văn Lang)
                </span>
              </h1>

              <p className="hero-credo">
                Khởi nguồn từ những năm tháng trui rèn tư duy toán lý và kỹ thuật phần cứng tại Trường Đại học Khoa học - Đại học Huế (HUSC), cuộc đời một kỹ sư không chỉ có đường mạch in và thuật toán, mà còn mở rộng đến chiều sâu nội tâm khi bước vào ngành Tâm lý học tại Trường Đại học Văn Lang (VLU). Tôi hướng đến công nghệ vị nhân sinh — kết nối tri thức, nâng đỡ sức khỏe tinh thần và gieo yêu thương từ trái tim biết phó thác.
              </p>

              <div className="hero-actions">
                <a href="#about" className="btn-solid">
                  Xem Hồ Sơ Kỹ Thuật
                </a>
                <a href="#psychology" className="btn-solid" style={{ background: 'var(--psych-teal)' }}>
                  Giao Thoa Tâm Lý Học
                </a>
                <Link href="/course/" className="btn-wire">
                  Khóa Học Thực Chiến
                </Link>
                <a
                  href="/document/CV_Nguyen_Tuan_Anh_NTABLP.pdf"
                  download="CV_Nguyen_Tuan_Anh_NTABLP.pdf"
                  className="btn-wire"
                  title="Tải Hồ Sơ Năng Lực / CV Nguyễn Tuấn Anh (PDF)"
                >
                  Tải CV (PDF) ↓
                </a>
                <a
                  href="https://amdg-ad-majorem-dei-gloriam.notion.site/30501?v=a6d58564694e83b2aaf108ac39b94ef4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wire"
                >
                  Blog AMDG
                </a>
              </div>
            </div>

            {/* Bảng Thông Số Kỹ Thuật Thực Tế */}
            <div className="hero-spec-card">
              <div className="spec-header">
                <span className="spec-label">HỒ SƠ CHUYÊN MÔN &amp; HỌC THUẬT</span>
                <span className="spec-chip">CHÍNH THỨC</span>
              </div>

              <div className="spec-table">
                <div className="spec-row">
                  <span className="spec-key">CHUYÊN MÔN:</span>
                  <span className="spec-val">Điện tử Viễn thông (HUSC) &amp; Tâm lý học (VLU)</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">ĐẠI HỌC 01:</span>
                  <span className="spec-val">ĐH Khoa Học - ĐH Huế (HUSC) • ĐTVT</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">ĐẠI HỌC 02:</span>
                  <span className="spec-val">ĐH Văn Lang (VLU) • Tâm Lý Học</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">VI ĐIỀU KHIỂN:</span>
                  <span className="spec-val">STM32 (ARM Cortex-M), ESP32 SoC</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">TRUYỀN THÔNG RF:</span>
                  <span className="spec-val">Sub-GHz 433/915 MHz, LoRa, BLE, WiFi</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">HƯỚNG NGHIÊN CỨU:</span>
                  <span className="spec-val">Tâm sinh lý học, Cảm biến sinh học, HCI</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">TÔN CHỈ:</span>
                  <span className="spec-val">A.M.D.G (Ad Majorem Dei Gloriam)</span>
                </div>
              </div>

              <div className="spec-footer-profile">
                <img
                  src="/image/profile.webp"
                  alt="Nguyễn Tuấn Anh (NTABLP) - Kỹ sư Điện tử Viễn thông HUSC &amp; Tâm lý học VLU"
                  className="mini-avatar"
                  width="60"
                  height="60"
                  loading="lazy"
                />
                <div className="profile-meta">
                  <h4>Nguyễn Tuấn Anh (NTABLP)</h4>
                  <p>Kỹ sư ĐTVT (ĐH Khoa học Huế) • Sinh viên Tâm lý học (ĐH Văn Lang)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Biography: About Section */}
        <section className="about-section" id="about">
          <div className="editorial-layout">
            <div className="section-label-col">
              <span className="section-num">01 / HỒ SƠ NĂNG LỰC</span>
              <h2 className="section-heading-editorial">Quan Điểm Nghề Nghiệp</h2>
            </div>

            <div className="editorial-content">
              <h3>Sự giao thoa giữa kỷ luật mạch điện và không gian tĩnh lặng nội tâm</h3>

              <p className="editorial-lead">
                Tôi là Nguyễn Tuấn Anh. Hành trình chuyên môn của tôi bắt đầu từ giảng đường <strong>Trường Đại học Khoa học - Đại học Huế (HUSC)</strong> với chuyên ngành <strong>Điện tử Viễn thông</strong>.
              </p>

              <p className="editorial-text">
                Tại HUSC, tôi được trui rèn kỷ luật tư duy logic, toán lý bán dẫn, kỹ thuật vi mạch và lý thuyết truyền sóng vô tuyến từ những người thầy giàu tâm huyết. Không gian nghiên cứu của tôi gắn liền với dao động ký, mỏ hàn thiếc, những bo mạch in nhiều lớp và các giao thức truyền dữ liệu không dây.
              </p>

              <p className="editorial-text">
                Kế thừa nền tảng kỹ thuật vững chắc từ HUSC, tôi tiếp tục mở rộng chiều sâu nhận thức với ngành <strong>Tâm lý học tại Trường Đại học Văn Lang (VLU)</strong>. Trang web <em>NTABLP</em> không phải là một tấm danh thiếp quảng cáo, mà là một không gian học thuật ghi lại hành trình kết hợp giữa độ chính xác của kỹ thuật và sự thấu cảm của khoa học hành vi con người.
              </p>

              <p className="editorial-text">
                Sau những giờ làm việc tập trung cao độ bên linh kiện SMD siêu nhỏ, tôi tìm thấy điểm tựa trong sự thinh lặng. Tinh thần <strong>AMDG</strong> (Làm mọi sự vì vinh quang Chúa lớn hơn) nhắc nhở tôi rằng mọi năng lực kỹ thuật đều mang một đích đến cao đẹp hơn: phụng sự, san sẻ tri thức và gieo yêu thương trong cuộc sống.
              </p>

              <div className="principles-grid">
                <div className="principle-item">
                  <span className="principle-tag">NỀN TẢNG KỸ THUẬT (HUSC)</span>
                  <h4>Kỷ Luật Phần Cứng</h4>
                  <p>
                    Thừa hưởng truyền thống đào tạo khoa học cơ bản từ Đại học Khoa học Huế, tuân thủ nghiêm ngặt quy tắc bố trí linh kiện, thoát nhiệt và tương thích điện từ trường (EMC/EMI).
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-tag">TƯ DUY HỆ THỐNG</span>
                  <h4>Tối Ưu Tận Gốc</h4>
                  <p>
                    Lập trình nhúng sát với thanh ghi phần cứng (Bare-metal / FreeRTOS) nhằm tối ưu hóa dòng tiêu thụ tĩnh (uA) cho các thiết bị chạy bằng pin.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-tag">GIÁ TRỊ CỘNG ĐỒNG</span>
                  <h4>Chia Sẻ Minh Bạch</h4>
                  <p>
                    Biến những lý thuyết viễn thông và thiết kế phức tạp thành những bài học thực chiến, dễ hiểu, giúp người mới học có thể tự tay làm được sản phẩm.
                  </p>
                </div>

                <div className="principle-item">
                  <span className="principle-tag">CHIỀU SÂU TÂM HỒN</span>
                  <h4>AMDG &amp; Bình An</h4>
                  <p>
                    Giữ tâm trí sáng suốt và phó thác giữa áp lực tiến độ, biến công việc chế tạo kỹ thuật thành niềm vui phục vụ tha nhân.
                  </p>
                </div>

                <div className="principle-item" style={{ borderColor: 'var(--psych-teal)' }}>
                  <span className="principle-tag" style={{ color: 'var(--psych-teal)' }}>CON NGƯỜI &amp; TÂM TRÍ (VLU)</span>
                  <h4>Tâm Lý Học Vị Nhân Sinh</h4>
                  <p>
                    Theo học ngành Tâm lý học tại Trường Đại học Văn Lang (VLU) để thấu suốt hành vi và thế giới nội tâm con người, hướng công nghệ về giá trị nhân bản, chữa lành và phục vụ cộng đồng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Spec Matrix: Skills Section */}
        <section className="matrix-section" id="skills">
          <div className="container">
            <div className="editorial-layout" style={{ marginBottom: '2rem' }}>
              <div className="section-label-col">
                <span className="section-num">02 / NĂNG LỰC KỸ THUẬT</span>
                <h2 className="section-heading-editorial">Thông Số Năng Lực</h2>
              </div>
              <div>
                <p className="editorial-lead" style={{ marginBottom: 0 }}>
                  Ma trận các lĩnh vực chuyên sâu từ thiết kế phần cứng vật lý đến tầng mạng và kiến trúc phần mềm điều khiển.
                </p>
              </div>
            </div>

            <div className="matrix-grid">
              {/* Domain 01 */}
              <div className="matrix-card">
                <div className="matrix-card-header">
                  <span className="matrix-domain">CHUYÊN MÔN 01 / PHẦN CỨNG</span>
                  <span className="matrix-domain">THIẾT KẾ MẠCH IN</span>
                </div>
                <h3 className="matrix-title">Thiết Kế Mạch In &amp; Phần Cứng (EDA)</h3>
                <p className="matrix-desc">
                  Thiết kế sơ đồ nguyên lý (Schematics) và bố trí mạch in nhiều lớp (Multi-layer PCB). Kiểm soát trở kháng đường truyền cao tần (Impedance Control), phân bổ mặt mass (Ground plane) và bố trí tụ bypass lọc nhiễu chủ động.
                </p>
                <div className="spec-chips-row">
                  <span className="spec-chip-item">Altium Designer</span>
                  <span className="spec-chip-item">KiCad EDA</span>
                  <span className="spec-chip-item">Multi-layer Stackup</span>
                  <span className="spec-chip-item">SMD Assembly</span>
                  <span className="spec-chip-item">EMC / EMI Filter</span>
                </div>
              </div>

              {/* Domain 02 */}
              <div className="matrix-card">
                <div className="matrix-card-header">
                  <span className="matrix-domain">CHUYÊN MÔN 02 / HỆ THỐNG NHÚNG</span>
                  <span className="matrix-domain">VI ĐIỀU KHIỂN &amp; RTOS</span>
                </div>
                <h3 className="matrix-title">Kiến Trúc Nhúng &amp; Vi Điều Khiển</h3>
                <p className="matrix-desc">
                  Lập trình vi điều khiển kiến trúc ARM Cortex-M và SoC hai lõi. Làm chủ các khối ngoại vi phần cứng tốc độ cao (DMA, Timer Input Capture, ADC kép), quản lý đa nhiệm đa luồng với hệ điều hành thời gian thực FreeRTOS.
                </p>
                <div className="spec-chips-row">
                  <span className="spec-chip-item">STM32 (Cortex-M0/M4)</span>
                  <span className="spec-chip-item">ESP32 SoC</span>
                  <span className="spec-chip-item">FreeRTOS</span>
                  <span className="spec-chip-item">UART / SPI / I2C / CAN</span>
                  <span className="spec-chip-item">Low-Power Modes</span>
                </div>
              </div>

              {/* Domain 03 */}
              <div className="matrix-card">
                <div className="matrix-card-header">
                  <span className="matrix-domain">CHUYÊN MÔN 03 / VIỄN THÔNG</span>
                  <span className="matrix-domain">MẠNG CẢM BIẾN IOT</span>
                </div>
                <h3 className="matrix-title">Viễn Thông &amp; Mạng Cảm Biến Không Dây</h3>
                <p className="matrix-desc">
                  Khai thác công nghệ truyền thông vô tuyến Sub-GHz tầm xa công suất thấp. Tích hợp giao thức IoT gửi nhận dữ liệu cảm biến đa điểm lên Gateway máy chủ đám mây và bảng điều khiển trực quan.
                </p>
                <div className="spec-chips-row">
                  <span className="spec-chip-item">LoRa / LoRaWAN</span>
                  <span className="spec-chip-item">MQTT Broker</span>
                  <span className="spec-chip-item">BLE / WiFi</span>
                  <span className="spec-chip-item">Ăng-ten Phối hợp Trở kháng</span>
                  <span className="spec-chip-item">Truyền dẫn số</span>
                </div>
              </div>

              {/* Domain 04 */}
              <div className="matrix-card">
                <div className="matrix-card-header">
                  <span className="matrix-domain">CHUYÊN MÔN 04 / THUẬT TOÁN</span>
                  <span className="matrix-domain">XỬ LÝ DỮ LIỆU SỐ</span>
                </div>
                <h3 className="matrix-title">Thuật Toán &amp; Công Cụ Kỹ Thuật</h3>
                <p className="matrix-desc">
                  Sử dụng ngôn ngữ C/C++ thuần cho firmware yêu cầu thời gian thực khắt khe, kết hợp Python và MATLAB để mô phỏng bộ lọc số (FIR/IIR) và xử lý dữ liệu trước khi nạp vào mạch thực tế.
                </p>
                <div className="spec-chips-row">
                  <span className="spec-chip-item">Embedded C/C++</span>
                  <span className="spec-chip-item">Python Analytics</span>
                  <span className="spec-chip-item">MATLAB / Simulink</span>
                  <span className="spec-chip-item">Git Version Control</span>
                  <span className="spec-chip-item">Keil C / STM32Cube</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Dossiers: Projects Section */}
        <section className="dossiers-section" id="projects">
          <div className="container">
            <div className="editorial-layout" style={{ marginBottom: '2rem' }}>
              <div className="section-label-col">
                <span className="section-num">03 / HỒ SƠ DỰ ÁN</span>
                <h2 className="section-heading-editorial">Hồ Sơ Dự Án</h2>
              </div>
              <div>
                <p className="editorial-lead" style={{ marginBottom: 0 }}>
                  Các sản phẩm phần cứng và hệ thống nhúng đã được thiết kế, gia công bo mạch thực tế và đo kiểm hoạt động ổn định.
                </p>
              </div>
            </div>

            <div className="dossier-list">
              {/* Dossier 01 */}
              <div className="dossier-card">
                <div className="dossier-sidebar">
                  <div>
                    <span className="dossier-id">DỰ ÁN 01 • GIÁM SÁT MÔI TRƯỜNG</span>
                    <h4 className="dossier-cat">Hệ Thống Trạm Quan Trắc Đa Điểm</h4>
                  </div>
                  <div className="dossier-tech-stack">
                    <span>• Vi điều khiển: ESP32 Dual-core</span>
                    <span>• Hệ điều hành: FreeRTOS</span>
                    <span>• Giao thức: MQTT / TLS</span>
                    <span>• Nguồn điện: Năng lượng mặt trời &amp; Li-ion</span>
                  </div>
                </div>
                <div className="dossier-main">
                  <h3>Trạm Giám Sát Môi Trường &amp; Cảnh Báo Sớm Thời Gian Thực</h3>
                  <p>
                    Hệ thống phần cứng đo đạc liên tục các chỉ số nhiệt độ, độ ẩm và nồng độ bụi mịn PM2.5 tại hiện trường. Thiết bị được tối ưu chế độ ngủ sâu (Deep-sleep) chỉ tiêu thụ dòng 12 uA khi chờ, định kỳ thức dậy lấy mẫu và truyền dữ liệu lên Dashboard thông qua mạng không dây.
                  </p>
                  <ul className="dossier-points">
                    <li>Bo mạch in 2 lớp tùy chỉnh kích thước 70x50mm chuẩn chống ẩm IP65.</li>
                    <li>Tự động kích hoạt thông báo sự cố qua Telegram Bot khi chỉ số vượt ngưỡng an toàn.</li>
                    <li>Duy trì hoạt động liên tục nhờ hệ thống sạc pin mặt trời tích hợp bộ ngắt bảo vệ pin.</li>
                  </ul>
                </div>
              </div>

              {/* Dossier 02 */}
              <div className="dossier-card">
                <div className="dossier-sidebar">
                  <div>
                    <span className="dossier-id">DỰ ÁN 02 • THU THẬP TÍN HIỆU</span>
                    <h4 className="dossier-cat">Bo Mạch Thu Thập Tín Hiệu Chuyên Dụng</h4>
                  </div>
                  <div className="dossier-tech-stack">
                    <span>• Thiết kế EDA: Altium Designer</span>
                    <span>• Vi xử lý: STM32 ARM Cortex-M4</span>
                    <span>• Mạch in: 2 lớp FR-4 tiêu chuẩn</span>
                    <span>• Tín hiệu: Khuếch đại tạp âm siêu thấp</span>
                  </div>
                </div>
                <div className="dossier-main">
                  <h3>Bo Mạch Thu Thập &amp; Xử Lý Tín Hiệu Tương Tự Độ Nhiễu Thấp</h3>
                  <p>
                    Thiết kế phần cứng hoàn chỉnh phục vụ nghiên cứu tín hiệu cảm biến sinh học và công nghiệp biên độ nhỏ (mV). Mạch tích hợp tầng lọc tích cực dải thông (Active Bandpass Filter), bộ cách ly nguồn DC-DC chống sốc điện và thuật toán trung bình trượt nạp trực tiếp vào chip.
                  </p>
                  <ul className="dossier-points">
                    <li>Thiết kế đường ground plane cách ly nghiêm ngặt giữa khối tương tự (Analog) và số (Digital).</li>
                    <li>Tỷ số triệt tín hiệu đồng pha (CMRR) cao, triệt tiêu hiệu quả can nhiễu lưới điện 50Hz.</li>
                    <li>Giao tiếp xuất dữ liệu tốc độ cao qua cổng USB CDC thời gian thực lên máy tính.</li>
                  </ul>
                </div>
              </div>

              {/* Dossier 03 */}
              <div className="dossier-card">
                <div className="dossier-sidebar">
                  <div>
                    <span className="dossier-id">DỰ ÁN 03 • TRUYỀN THÔNG LORA</span>
                    <h4 className="dossier-cat">Node Truyền Thông Không Dây Tầm Xa</h4>
                  </div>
                  <div className="dossier-tech-stack">
                    <span>• IC thu phát: Semtech SX1278</span>
                    <span>• Băng tần: 433 MHz Sub-GHz</span>
                    <span>• Cự ly: 2.5 km (Khu dân cư)</span>
                    <span>• Ăng-ten: Phối hợp chuẩn 50 Ohm</span>
                  </div>
                </div>
                <div className="dossier-main">
                  <h3>Node Thu Phát Tín Hiệu Xuyên Tường Công Suất Thấp LoRa</h3>
                  <p>
                    Giải pháp kết nối không dây cho các khu vực địa hình che chắn, cách xa hạ tầng mạng 4G/WiFi. Mô-đun sử dụng công nghệ trải phổ Chirp Spread Spectrum cho phép thu nhận tín hiệu ngay cả khi mức năng lượng sóng thấp hơn ngưỡng tạp âm môi trường (SNR âm).
                  </p>
                  <ul className="dossier-points">
                    <li>Đường mạch RF được tính toán phối hợp trở kháng chuẩn xác 50 Ohm hạn chế phản xạ sóng.</li>
                    <li>Tùy biến linh hoạt hệ số trải phổ (Spreading Factor SF7 - SF12) theo khoảng cách thực tế.</li>
                    <li>Hỗ trợ cấu trúc mạng hình sao (Star network) kết nối hàng chục node về một trạm thu trung tâm.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Psychology & Cognitive Sciences: ĐH Văn Lang & Giao Thoa Kỹ Thuật */}
        <section className="psychology-section" id="psychology">
          <div className="container">
            <div className="editorial-layout" style={{ marginBottom: '2rem' }}>
              <div className="section-label-col">
                <span className="section-num" style={{ color: 'var(--psych-teal)' }}>04 / TÂM LÝ HỌC &amp; HÀNH VI</span>
                <h2 className="section-heading-editorial">Tâm Lý Học &amp; Công Nghệ Vị Nhân Sinh</h2>
              </div>
              <div>
                <p className="editorial-lead" style={{ color: 'var(--psych-teal)', marginBottom: 0 }}>
                  Hành trình theo học ngành Tâm lý học tại Trường Đại học Văn Lang (VLU) — Kết hợp tư duy hệ thống của kỹ sư phần cứng với sự thấu cảm sâu sắc của khoa học hành vi và sức khỏe tinh thần.
                </p>
              </div>
            </div>

            {/* Dual Academic Affiliation Banner */}
            <div className="vlu-affiliation-card">
              <div className="vlu-info">
                <h4>Đại Học Khoa Học Huế (HUSC) &amp; Đại Học Văn Lang (VLU)</h4>
                <p>
                  <strong>Nền tảng kỹ thuật:</strong> Kỹ sư Điện tử Viễn thông – Trường Đại học Khoa học, Đại học Huế (HUSC)
                  <br />
                  <strong>Chuyên ngành hiện tại:</strong> Cử nhân Tâm lý học – Khoa Khoa học Xã hội &amp; Nhân văn, Trường Đại học Văn Lang (VLU)
                  <br />
                  <strong>Định hướng nghiên cứu:</strong> Sinh lý học thần kinh (Psychophysiology), Cảm biến sinh học &amp; Công nghệ hỗ trợ sức khỏe tinh thần.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                <span className="vlu-badge-tag" style={{ borderColor: 'var(--accent)', color: 'var(--accent)', background: 'var(--accent-subtle)' }}>
                  KỸ SƯ ĐTVT • HUSC
                </span>
                <span className="vlu-badge-tag">
                  CỬ NHÂN TÂM LÝ • VLU
                </span>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="psych-grid">
              {/* Pillar 01 */}
              <div className="psych-card">
                <div>
                  <span className="psych-card-tag">TRỤ CỘT 01 • NHẬN THỨC &amp; THẦN KINH</span>
                  <h3>Tâm Lý Học Nhận Thức &amp; Thần Kinh</h3>
                  <p>
                    Nghiên cứu cơ chế tiếp nhận kích thích, sự chú ý (Attention), trí nhớ và tư duy của con người. Phân tích tác động của áp lực công việc kỹ thuật cao, căng thẳng thần kinh và hội chứng kiệt sức (Burnout) đến hiệu suất nhận thức.
                  </p>
                </div>
                <div className="psych-tags-list">
                  <span className="psych-tag-pill">Nhận Thức Học</span>
                  <span className="psych-tag-pill">Cơ Chế Chú Ý</span>
                  <span className="psych-tag-pill">Xử Lý Thông Tin</span>
                  <span className="psych-tag-pill">Stress &amp; Burnout</span>
                </div>
              </div>

              {/* Pillar 02 */}
              <div className="psych-card">
                <div>
                  <span className="psych-card-tag">TRỤ CỘT 02 • SINH TRẮC HỌC &amp; CẢM BIẾN</span>
                  <h3>Sinh Trắc Học Thần Kinh &amp; Cảm Biến Sinh Học</h3>
                  <p>
                    Giao thoa trực tiếp với chuyên môn Điện tử: Khai thác cảm biến đo biến thiên nhịp tim (HRV), phản ứng dẫn truyền da (GSR) và tín hiệu sóng não (EEG) bằng mạch tương tự độ nhiễu thấp nhằm lượng hóa trạng thái cảm xúc khách quan.
                  </p>
                </div>
                <div className="psych-tags-list">
                  <span className="psych-tag-pill">HRV Biofeedback</span>
                  <span className="psych-tag-pill">GSR Resistance</span>
                  <span className="psych-tag-pill">Tín Hiệu Sinh Học</span>
                  <span className="psych-tag-pill">Đo Đạc Cảm Xúc</span>
                </div>
              </div>

              {/* Pillar 03 */}
              <div className="psych-card">
                <div>
                  <span className="psych-card-tag">TRỤ CỘT 03 • TƯƠNG TÁC NGƯỜI - MÁY</span>
                  <h3>Tương Tác Người - Máy &amp; Sức Khỏe Số</h3>
                  <p>
                    Thiết kế công nghệ và thiết bị phần cứng hướng tới con người (Human-Centered Design). Giảm thiểu áp lực nhận thức (Cognitive Overload), ngăn ngừa bẫy nghiện thuật toán (Dopamine Loop) và tạo dựng không gian công nghệ bình an.
                  </p>
                </div>
                <div className="psych-tags-list">
                  <span className="psych-tag-pill">HCI Vị Nhân Sinh</span>
                  <span className="psych-tag-pill">UX Psychology</span>
                  <span className="psych-tag-pill">Digital Well-being</span>
                  <span className="psych-tag-pill">Giảm Quá Tải Não</span>
                </div>
              </div>

              {/* Pillar 04 */}
              <div className="psych-card">
                <div>
                  <span className="psych-card-tag">TRỤ CỘT 04 • THAM VẤN &amp; TINH THẦN AMDG</span>
                  <h3>Tham Vấn Tâm Lý &amp; Tinh Thần AMDG</h3>
                  <p>
                    Rèn luyện kỹ năng lắng nghe chủ động, thấu cảm không phán xét, đồng hành cùng người trẻ và cộng đồng trước những áp lực hiện sinh. Kết hợp khoa học tâm lý với tinh thần AMDG phụng sự và lan tỏa tình yêu thương.
                  </p>
                </div>
                <div className="psych-tags-list">
                  <span className="psych-tag-pill">Lắng Nghe Chủ Động</span>
                  <span className="psych-tag-pill">Thấu Cảm</span>
                  <span className="psych-tag-pill">Sức Khỏe Tâm Thần</span>
                  <span className="psych-tag-pill">Đồng Hành AMDG</span>
                </div>
              </div>
            </div>

            {/* Synergy Cross-Disciplinary Showcase */}
            <div className="psych-synergy-banner">
              <div className="psych-synergy-content">
                <span className="spec-label" style={{ color: 'var(--psych-teal)' }}>
                  DỰ ÁN GIAO THOA KỸ THUẬT &amp; TÂM LÝ HỌC
                </span>
                <h3 style={{ marginTop: '0.5rem' }}>Thiết Bị Phản Hồi Sinh Học Biofeedback Hỗ Trợ Điều Hòa Căng Thẳng</h3>
                <p>
                  Sự kết hợp giữa vi điều khiển nhúng công suất thấp (STM32/ESP32), cảm biến quang học PPG đọc biến thiên nhịp tim (HRV) và kỹ thuật điều hòa hệ thần kinh tự chủ (Autonomic Nervous System).
                </p>
                <ul className="psych-synergy-points">
                  <li>Trích xuất dữ liệu độ lệch chuẩn nhịp đập (RMSSD) theo thời gian thực để nhận diện mức độ stress.</li>
                  <li>Hướng dẫn nhịp thở cộng hưởng (Resonance Frequency Breathing) thông qua rung xúc giác dịu êm.</li>
                  <li>Mục tiêu ứng dụng: Hỗ trợ người học tập và làm việc kỹ thuật cao duy trì sự tập trung và điềm tĩnh.</li>
                </ul>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                <div style={{ background: 'var(--surface-muted)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--surface-border)' }}>
                  <h4 style={{ fontSize: '16px', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    Học Tập Tại Đại Học Văn Lang (VLU)
                  </h4>
                  <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Môi trường đào tạo nhân văn, năng động giúp tôi xây dựng nền tảng lý thuyết tâm lý vững chắc, từ tâm lý học phát triển đến tâm lý học thần kinh và phương pháp đo nghiệm định lượng.
                  </p>
                  <Link href="/psychology/" className="btn-psych">
                    Khám Phá Chuyên Trang Tâm Lý Học →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journal & Field Notes: Blog Section */}
        <section className="journal-section" id="blog-insights">
          <div className="container">
            <div className="editorial-layout" style={{ marginBottom: '2rem' }}>
              <div className="section-label-col">
                <span className="section-num">05 / NHẬT KÝ &amp; GÓC NHÌN</span>
                <h2 className="section-heading-editorial">Nhật Ký &amp; Góc Nhìn</h2>
              </div>
              <div>
                <p className="editorial-lead" style={{ marginBottom: 0 }}>
                  Những ghi chép thực địa về kỹ thuật, bài học từ những lần nổ mạch và những phút lắng đọng tâm hồn.
                </p>
              </div>
            </div>

            <div className="journal-grid">
              {/* Entry 01 */}
              <div className="journal-card">
                <div>
                  <span className="journal-date">GÓC NHÌN • ĐỨC TIN &amp; CUỘC SỐNG</span>
                  <h3>Lắng Nghe Tiếng Chúa Giữa Những Dòng Code Và Mạch Điện</h3>
                  <p>
                    Làm sao để tìm thấy sự tĩnh tại khi đứng trước áp lực của những dự án khó nhằn và những lỗi hệ thống chưa thể giải mã.
                  </p>
                </div>
                <a
                  href="https://amdg-ad-majorem-dei-gloriam.notion.site/30501?v=a6d58564694e83b2aaf108ac39b94ef4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journal-link"
                >
                  Đọc bài viết trên Notion →
                </a>
              </div>

              {/* Entry 02 */}
              <div className="journal-card">
                <div>
                  <span className="journal-date">GÓC NHÌN • NỀN TẢNG KỸ THUẬT</span>
                  <h3>Lộ Trình Học Điện Tử Viễn Thông Cho Người Mới Bắt Đầu</h3>
                  <p>
                    Từ phân tích toán lý đến làm chủ mỏ hàn và phần mềm thiết kế mạch: hướng dẫn những bước đi đầu tiên không bị ngợp.
                  </p>
                </div>
                <a
                  href="https://amdg-ad-majorem-dei-gloriam.notion.site/30501?v=a6d58564694e83b2aaf108ac39b94ef4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journal-link"
                >
                  Đọc bài viết trên Notion →
                </a>
              </div>

              {/* Entry 03 */}
              <div className="journal-card">
                <div>
                  <span className="journal-date">GÓC NHÌN • THỰC CHIẾN PHẦN CỨNG</span>
                  <h3>Những Lỗi &quot;Xương Máu&quot; Khi Thiết Kế Bo Mạch PCB Đầu Tay</h3>
                  <p>
                    Độ dày đường mạch (Trace Width), phân bổ tụ thoát nhiễu và bài học về việc đọc kỹ Datasheet trước khi đặt gia công.
                  </p>
                </div>
                <a
                  href="https://amdg-ad-majorem-dei-gloriam.notion.site/30501?v=a6d58564694e83b2aaf108ac39b94ef4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journal-link"
                >
                  Đọc bài viết trên Notion →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Terminal & Rack */}
        <section className="contact-terminal-section" id="contact">
          <div className="container">
            <div className="terminal-contact-box">
              <div className="contact-left">
                <span className="section-num">06 / LIÊN HỆ &amp; HỢP TÁC</span>
                <h3>Kết Nối &amp; Hợp Tác Kỹ Thuật &amp; Tâm Lý</h3>
                <p>
                  Tôi luôn sẵn lòng trao đổi cùng bạn về các giải pháp thiết kế mạch, đề tài nghiên cứu tâm lý học nhận thức, giao lưu cùng cộng đồng sinh viên HUSC, VLU hoặc định hướng kết hợp liên ngành.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a href="mailto:tuananhqhvl777@gmail.com" className="btn-solid">
                    tuananhqhvl777@gmail.com
                  </a>
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

              <div className="social-rack">
                <span className="social-rack-label">MẠNG XÃ HỘI &amp; GIAN HÀNG CHÍNH THỨC</span>
                <a
                  href="/document/CV_Nguyen_Tuan_Anh_NTABLP.pdf"
                  download="CV_Nguyen_Tuan_Anh_NTABLP.pdf"
                  className="social-pill-link"
                  style={{ color: 'var(--accent)', fontWeight: 600 }}
                >
                  <span>Hồ Sơ Năng Lực / CV (PDF)</span>
                </a>
                <a href="https://ta.tuananhhusc.id.vn/ntashop/" target="_blank" rel="noopener noreferrer" className="social-pill-link">
                  <span>Website NTAShop</span>
                </a>
                <a href="https://www.tiktok.com/@ntablp" target="_blank" rel="noopener noreferrer" className="social-pill-link">
                  <span>TikTok @ntablp</span>
                </a>
                <a href="https://shopee.vn/ntablp" target="_blank" rel="noopener noreferrer" className="social-pill-link">
                  <span>Shopee ntablp</span>
                </a>
                <a href="https://www.facebook.com/ntablp/" target="_blank" rel="noopener noreferrer" className="social-pill-link">
                  <span>Facebook NTABLP</span>
                </a>
                <a href="https://youtube.com/@ntablp" target="_blank" rel="noopener noreferrer" className="social-pill-link">
                  <span>YouTube Channel</span>
                </a>
                <a href="https://open.spotify.com/show/1CJ734ibjh3QUkYg8kS63b" target="_blank" rel="noopener noreferrer" className="social-pill-link">
                  <span>Spotify Podcast</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Precision Footer */}
      <footer className="footer-precision">
        <div className="footer-precision-content">
          <div>
            <span>NTABLP • NGUYỄN TUẤN ANH &copy; 2026 • ĐH KHOA HỌC HUẾ (HUSC) &amp; ĐH VĂN LANG (VLU)</span>
          </div>
          <ul className="footer-precision-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Profile</a></li>
            <li><a href="#skills">Capabilities</a></li>
            <li><a href="#projects">Dossiers</a></li>
            <li><a href="#psychology">Psychology</a></li>
            <li><Link href="/course/">Course Lab</Link></li>
            <li>
              <a
                href="/document/CV_Nguyen_Tuan_Anh_NTABLP.pdf"
                download="CV_Nguyen_Tuan_Anh_NTABLP.pdf"
                style={{ color: 'var(--color-primary-light)', fontWeight: 600 }}
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
