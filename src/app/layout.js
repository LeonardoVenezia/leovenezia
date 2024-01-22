import './globals.css';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ subsets: ['latin'], weight: ["400", "700"], })

export const metadata = {
  title: 'Leonardo Venezia',
  description: 'Leonardo Venezia is the best software engineer you have ever seen in your life.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={arimo.className}>{children}</body>
    </html>
  )
}
