import { type ReactNode } from 'react';
import { Header } from '../components/Navigation/Header';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Header />
      <main className="max-w-[1680px] mx-auto">
        {children}
      </main>
    </div>
  );
};
