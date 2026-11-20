import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Sprite from '../components/Sprite';
import Navbar from '../components/Navbar';
import ScrollObserver from '../components/ScrollObserver';

const font = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['500', '600', '700', '800'], display: 'swap', variable: '--font' });

export const metadata = {
  title: 'MS Digital Media – Design • Digital • Build',
  description: 'MS Digital Media is a results-driven digital marketing agency in Chennai: SEO, social media, personal branding, web development and conversion copywriting.',
  icons: { icon: '/icon.png', apple: '/icon.png' },
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <Sprite />
        <Navbar />
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
