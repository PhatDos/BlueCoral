import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EverythingYouNeed from '@/components/EverythingYouNeed';

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
