import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saipan Wedding Travel',
  description: 'Destination weddings and travel experiences in beautiful Saipan',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
