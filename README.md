# NTABLP - Website Cá Nhân & Trung Tâm Kỹ Thuật (Next.js)

Một website cá nhân và danh mục dự án kỹ thuật hiện đại của **NGUYỄN TUẤN ANH (NTABLP)** – Kỹ sư Điện tử Viễn thông (**Trường Đại học Khoa học - Đại học Huế // HUSC**) và Sinh viên ngành Tâm lý học (**Trường Đại học Văn Lang // VLU**). Được xây dựng trên kiến trúc **Next.js 16 (App Router) + TypeScript** với khả năng Static Export tối ưu 100% cho GitHub Pages.

---

## 🌟 Tính Năng & Điểm Nổi Bật

- **Next.js 16 App Router & TypeScript**: Kiến trúc module hóa, component hóa chặt chẽ, type-safe toàn bộ mã nguồn.
- **Static HTML Export (`output: 'export'`)**: Đóng gói thành các file HTML tĩnh độc lập trong thư mục `out/`, tối ưu 100% khi host trên GitHub Pages hoặc Cloudflare Pages mà không cần Node server.
- **Chuẩn Thiết Kế UI/UX Pro Max & Landing Page Design**:
  - Tỉ lệ tương phản WCAG 2.1 AA ở cả Dark và Light mode.
  - Phông chữ hệ thống tải trước tự động qua `next/font/google`: *Manrope* (chữ chính) và *Geist Mono* (code/thông số kỹ thuật).
  - Hiệu ứng mở rộng Tagline Reveal từng chữ mượt mà, tôn trọng cài đặt `prefers-reduced-motion`.
- **Hệ Thống Component Tái Sử Dụng (`components/`)**:
  - `ThemeToggle`: Chuyển đổi Dark / Light mode tức thì, lưu `localStorage` và chống giật sáng (flicker) bằng inline script trong `layout.tsx`.
  - `Navbar` & `CourseNavbar`: Thanh điều hướng mượt mà, hỗ trợ Hamburger Drawer cho di động (khóa cuộn trang khi mở, đóng khi bấm Escape hoặc backdrop).
  - `FaqAccordion`: Accordion tiêu chuẩn trợ năng (`aria-expanded`, `aria-controls`), mở đơn lẻ từng mục.
  - `WaitlistForm`: Kiểm tra hợp lệ email theo thời gian thực, thông báo trạng thái tức thì và khóa nút khi gửi.
  - `BackToTop`: Nút quay lại đầu trang với bộ điều tiết cuộn `requestAnimationFrame`.
  - `ScrollReveal`: Tự động kích hoạt hiệu ứng xuất hiện khi cuộn vào khung nhìn qua `IntersectionObserver`.
- **Chuẩn Hóa SEO & Metadata**: Khai báo Metadata API chuẩn Next.js, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml` và `CNAME` (`ta.tuananhhusc.id.vn`).

---

## 📁 Cấu Trúc Dự Án

```
tuananhhusc.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml     # Tự động hóa build & deploy lên GitHub Pages
├── app/
│   ├── layout.tsx         # Root layout, Google Fonts, theme initialization script
│   ├── globals.css        # Hệ thống CSS Design Tokens, WCAG variables & animations
│   ├── page.tsx           # Trang chủ (Engineer's Dossier & Psychology Section)
│   ├── not-found.tsx      # Trang 404 tùy biến kỹ thuật (Signal Loss Indicator)
│   ├── course/
│   │   └── page.tsx       # Trang khóa học & đăng ký sớm (Course Landing Page)
│   └── psychology/
│       └── page.tsx       # Chuyên trang Tâm lý học & Công nghệ vị nhân sinh (VLU)
├── components/            # Các Client Components tương tác
│   ├── Navbar.tsx         # Thanh điều hướng trang chủ
│   ├── CourseNavbar.tsx   # Thanh điều hướng trang khóa học
│   ├── PsychologyNavbar.tsx # Thanh điều hướng trang tâm lý học
│   ├── ThemeToggle.tsx    # Nút chuyển Dark/Light theme
│   ├── TaglineReveal.tsx  # Hiệu ứng xuất hiện tiêu đề chữ từng chữ
│   ├── FaqAccordion.tsx   # Khối Hỏi & Đáp Accordion
│   ├── WaitlistForm.tsx   # Form đăng ký danh sách chờ
│   ├── BackToTop.tsx      # Nút cuộn lên đầu trang
│   └── ScrollReveal.tsx   # Bộ quan sát hiệu ứng cuộn trang
├── public/                # Tài nguyên tĩnh phục vụ trực tiếp
│   ├── document/          # Hồ sơ CV / Resume PDF chính thức
│   │   └── CV_Nguyen_Tuan_Anh_NTABLP.pdf
│   ├── image/             # Ảnh đại diện, nền, favicon dạng WebP và SVG
│   ├── video/             # Video giới thiệu khóa học
│   ├── CNAME              # Tên miền tùy chỉnh ta.tuananhhusc.id.vn
│   ├── favicon.ico        # Icon chuẩn trình duyệt
│   ├── manifest.json      # Web App Manifest PWA
│   ├── robots.txt         # Cấu hình bot tìm kiếm
│   └── sitemap.xml        # Sơ đồ website
├── next.config.mjs        # Cấu hình Next.js (output: 'export', trailingSlash: true)
├── tsconfig.json          # Cấu hình TypeScript
├── package.json           # Danh sách thư viện và tập lệnh
└── .gitignore             # Danh sách loại trừ cho Git
```

---

## 🚀 Hướng Dẫn Chạy & Build Dự Án

### 1. Cài đặt thư viện (nếu bắt đầu từ clone mới)
```bash
npm install
```

### 2. Chạy môi trường phát triển (Development)
```bash
npm run dev
```
Trang web sẽ chạy tại: [http://localhost:3000](http://localhost:3000)
- Trang chủ: `http://localhost:3000/`
- Trang khóa học: `http://localhost:3000/course/`
- Chuyên trang tâm lý học: `http://localhost:3000/psychology/`

### 3. Build xuất bản tĩnh cho GitHub Pages (Static Export)
```bash
npm run build
```
Next.js sẽ biên dịch toàn bộ TypeScript và xuất toàn bộ mã nguồn tĩnh vào thư mục `out/`.
Các tệp trong `out/` sẵn sàng được triển khai trực tiếp lên GitHub Pages.

---

## 👤 Tác Giả

**Nguyễn Tuấn Anh (NTABLP)**
- Học vấn: Kỹ sư Điện tử Viễn thông (ĐH Khoa học - ĐH Huế // HUSC) & Sinh viên Cử nhân Tâm lý học (ĐH Văn Lang // VLU)
- Website: [ta.tuananhhusc.id.vn](https://ta.tuananhhusc.id.vn/)
- Email: tuananhqhvl777@gmail.com
- Shop: [ta.tuananhhusc.id.vn/ntashop/](https://ta.tuananhhusc.id.vn/ntashop/)
