import type { Metadata } from 'next';
import { Header } from '@/components/shared/header';

export const metadata: Metadata = {
  title: 'Next Pizza | Главная',
  description: 'Order a pizza easily in Austin!',
};

export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className='min-h-screen'>
      <Header />
      {children}
      {modal}
    </main>
  );
}