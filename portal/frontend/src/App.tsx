import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import Services from './components/Services';
import Blueprint from './components/Blueprint';
import Arsenal from './components/Arsenal';
import Supplies from './components/Supplies';
import TrackRecord from './components/TrackRecord';
import Safety from './components/Safety';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Canvas3D from './components/Canvas3D';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import BlueprintLines from './components/BlueprintLines';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-safety-red selection:text-white cursor-none overflow-x-hidden">
      <LoadingScreen />
      <SmoothScroll />
      <CustomCursor />
      <Canvas3D />
      <BlueprintLines />
      <Navbar />
      <main className="relative w-full bg-transparent z-10">
        <div className="grid-bg-overlay absolute inset-0 opacity-5 pointer-events-none"></div>
        <Hero />
        <TrustMarquee />
        <Services />
        <Blueprint />
        <Arsenal />
        <Supplies />
        <TrackRecord />
        <Safety />
        <Contact />
      </main>
      <Footer />
      
      <style>{`
        .grid-bg-overlay {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 100px 100px;
        }
        ::selection {
          background: #ff0000;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default App;
