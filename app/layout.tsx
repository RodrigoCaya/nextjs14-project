import '@/app/ui/global.css'
import { monstserrat } from './ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monstserrat.className} antialiased`}>
        {children}
        <footer className="flex justify-center items-center h-20 bg-gray-800 text-white">
          Hecho con ❤️ por Rodrigo Cayazaya
        </footer>
      </body>
    </html>
  );
}
