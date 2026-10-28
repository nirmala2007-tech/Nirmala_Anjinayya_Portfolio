
import { Link } from 'react-router-dom';
import './Hero.css';

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

function Hero() {
  const greeting = getGreeting();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">{greeting}!</p>

        <h1>
          I'm <span className="highlight">Nirmala Anjinayya</span> 🌸
        </h1>

        <p className="tagline">
          Aspiring Software Developer
        </p>

        <p className="hero-description">
          I am learning programming, building my skills, and creating
          meaningful projects one step at a time.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Work
          </Link>

          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
