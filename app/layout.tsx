import type { Metadata, Viewport } from 'next';
import { Manrope, Geist_Mono } from 'next/font/google';
import './globals.css';
import BackToTop from '@/components/BackToTop';
import ScrollReveal from '@/components/ScrollReveal';

const manrope = Manrope({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
  weight: ['400', '500', '600'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0e17' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ta.tuananhhusc.id.vn'),
  title: {
    default: 'NTABLP | Nguyễn Tuấn Anh - Kỹ Sư ĐTVT (HUSC) & Tâm Lý Học (VLU)',
    template: '%s | NTABLP',
  },
  description:
    'Hồ sơ kỹ thuật và nghiên cứu của Nguyễn Tuấn Anh (NTABLP) - Kỹ sư Điện tử Viễn thông (Đại học Khoa học Huế - HUSC) & Sinh viên Tâm lý học (Đại học Văn Lang - VLU). Thiết kế bo mạch PCB, hệ thống nhúng, viễn thông IoT, Psychophysiology và tinh thần AMDG.',
  keywords: [
    'NTABLP',
    'Nguyễn Tuấn Anh',
    'Đại học Khoa học Huế',
    'HUSC',
    'Đại học Văn Lang',
    'VLU',
    'Điện tử viễn thông',
    'Tâm lý học',
    'Psychophysiology',
    'Thiết kế mạch PCB',
    'Altium Designer',
    'STM32',
    'ESP32',
    'LoRaWAN',
    'AMDG',
  ],
  authors: [{ name: 'Nguyễn Tuấn Anh', url: 'https://ta.tuananhhusc.id.vn' }],
  creator: 'Nguyễn Tuấn Anh (NTABLP)',
  publisher: 'Nguyễn Tuấn Anh',
  alternates: {
    canonical: 'https://ta.tuananhhusc.id.vn/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/image/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: '/image/favicon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'NTABLP',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://ta.tuananhhusc.id.vn/',
    siteName: 'NTABLP • Nguyễn Tuấn Anh',
    title: 'NTABLP | Nguyễn Tuấn Anh - Kỹ Sư ĐTVT (HUSC) & Tâm Lý Học (VLU)',
    description:
      'Hồ sơ kỹ thuật và nghiên cứu của Nguyễn Tuấn Anh (NTABLP) - Kỹ sư Điện tử Viễn thông (HUSC) & Sinh viên Tâm lý học (VLU). Thiết kế bo mạch PCB, hệ thống nhúng, viễn thông IoT, Psychophysiology và tinh thần AMDG.',
    images: [
      {
        url: '/image/hero-image.jpg',
        width: 1200,
        height: 803,
        alt: 'Nguyễn Tuấn Anh - Kỹ sư Điện tử Viễn thông (HUSC) & Tâm lý học (VLU)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NTABLP | Nguyễn Tuấn Anh - Kỹ Sư ĐTVT (HUSC) & Tâm Lý Học (VLU)',
    description:
      'Kỹ sư Điện tử Viễn thông (HUSC) & Sinh viên Tâm lý học (VLU). Nghiên cứu phần cứng nhúng và công nghệ vị nhân sinh.',
    images: ['/image/hero-image.jpg'],
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://ta.tuananhhusc.id.vn/#person',
      name: 'Nguyễn Tuấn Anh',
      alternateName: 'NTABLP',
      url: 'https://ta.tuananhhusc.id.vn',
      image: 'https://ta.tuananhhusc.id.vn/image/profile.jpg',
      jobTitle: 'Hardware & Embedded Systems Engineer',
      description:
        'Kỹ sư Điện tử Viễn thông (Đại học Khoa học Huế - HUSC) và Sinh viên Cử nhân Tâm lý học (Trường Đại học Văn Lang - VLU).',
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
        'Electronics and Telecommunications',
        'Embedded Systems',
        'IoT Sensors',
        'PCB Design',
        'STM32 ARM Cortex-M',
        'ESP32',
        'Altium Designer',
        'Cognitive Psychology',
        'Psychophysiology',
        'Human-Computer Interaction',
        'Biofeedback',
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
    {
      '@type': 'WebSite',
      '@id': 'https://ta.tuananhhusc.id.vn/#website',
      url: 'https://ta.tuananhhusc.id.vn/',
      name: 'NTABLP - Nguyễn Tuấn Anh',
      description:
        'Website cá nhân và hồ sơ kỹ thuật & nghiên cứu tâm lý học của Nguyễn Tuấn Anh (NTABLP)',
      publisher: {
        '@id': 'https://ta.tuananhhusc.id.vn/#person',
      },
      inLanguage: 'vi',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${manrope.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ntablp-landing-theme');
                  if (saved === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.removeAttribute('data-theme');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
        <BackToTop />
        <ScrollReveal />
      </body>
    </html>
  );
}
