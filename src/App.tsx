import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EverythingYouNeed from '@/components/EverythingYouNeed';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <EverythingYouNeed />
      </main>
    </div>
  );
}
