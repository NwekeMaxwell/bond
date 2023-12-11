import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Nav from '../components/Nav';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Bond',
  description: 'A social media app tailored for you',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
