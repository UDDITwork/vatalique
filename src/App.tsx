import SplitText from './components/SplitText';
import Hyperspeed from './components/Hyperspeed';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

const hyperspeedOptions = {
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5] as [number, number],
  lightStickHeight: [1.3, 1.7] as [number, number],
  movingAwaySpeed: [60, 80] as [number, number],
  movingCloserSpeed: [-120, -160] as [number, number],
  carLightsLength: [400 * 0.03, 400 * 0.2] as [number, number],
  carLightsRadius: [0.05, 0.14] as [number, number],
  carWidthPercentage: [0.3, 0.5] as [number, number],
  carShiftX: [-0.8, 0.8] as [number, number],
  carFloorSeparation: [0, 5] as [number, number],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0x131318,
    brokenLines: 0x131318,
    leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
    rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
    sticks: 0x03B3C3,
  }
};

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="logo-icon">
          <circle cx="50" cy="50" r="45" stroke="#8B5CF6" strokeWidth="4" />
          <path d="M30 35 L50 65 L70 35" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="50" r="8" fill="#8B5CF6" />
        </svg>
        <span className="logo-text">Vatalique</span>
      </a>
      <div className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <a href="#contact" className="cta-button nav-cta">
        Get Started
      </a>
    </nav>
  );
}

function HomePage() {
  return (
    <div id="home" className="app">
      {/* Background */}
      <div className="background-container">
        <Hyperspeed effectOptions={hyperspeedOptions} />
        <div className="gradient-overlay" />
      </div>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-icon">✨</span>
            <span>Enterprise Solutions</span>
            <span className="badge-arrow">→</span>
          </div>

          <div className="hero-title">
            <SplitText
              text="Enterprise Solutions"
              className="title-line"
              delay={50}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              textAlign="center"
              tag="h1"
            />
            <SplitText
              text="That Drive Growth"
              className="title-line title-gradient"
              delay={50}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 0 }}
              to={{ opacity: 1, y: 0 }} /* Correction: previous had y: 40 -> 0, this logic is fine but split text sometimes needs care. Keeping defaults mostly. */
              threshold={0.1}
              rootMargin="-50px"
              textAlign="center"
              tag="h1"
            />
          </div>

          <p className="hero-description">
            We provide solutions for enterprises that increase revenue,
            optimize workflows and reduce manual effort!
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="cta-button primary">
              Get Started
            </a>
            <a href="#about" className="cta-button secondary">
              Learn More
            </a>
          </div>
        </div>
      </main>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <div className="video-header">
            <span className="video-badge">Featured</span>
            <h2 className="video-title">See Our Solutions in Action</h2>
            <p className="video-description">
              Watch how we help enterprises transform their operations with cutting-edge technology
            </p>
          </div>
          <div className="video-wrapper">
            <video
              className="featured-video"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster=""
            >
              <source src="https://www.agi.app/videos/gleb-birthday-plan.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Contact />
    </>
  );
}

export default App;
