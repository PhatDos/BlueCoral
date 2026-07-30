import EverythingYouNeed from '@/features/everything-you-need/EverythingYouNeed';
import Hero from '@/features/hero/Hero';
import Navbar from '@/features/navbar/Navbar';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans antialiased">
      <Navbar />
      <main className="mx-2 md:mx-[86px]">
        <Hero />
        <EverythingYouNeed />
      </main>
    </div>
  );
}
