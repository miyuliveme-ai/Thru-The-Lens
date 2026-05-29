import './globals.css';

export const metadata = {
  title: 'Thru The Lens | Nica Althea Llaguno',
  description: 'Personal biography and portfolio of Nica Althea Llaguno - Chief Photojournalist, Student Leader, and Creative Storyteller',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
