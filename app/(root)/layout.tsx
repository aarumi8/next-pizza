import { Header } from '@/components/shared/header';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Next Pizza | Main',
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen p-3 xl:p-0">
      <Suspense>
        <Header />
      </Suspense>
      {children}
      {modal}
    </main>
  );
}