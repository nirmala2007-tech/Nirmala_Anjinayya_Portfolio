
import './AboutSection.css';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper container">
        <div className="about-image">
          <img
            src="/Nirmala.jpg"
            alt="Nirmala Anjinayya"
            style={{
              width: '220px',
              height: '220px',
              maxWidth: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }}
          />
        </div>

        <div className="about-copy">
          <h1>About Me</h1>
          <p>
            I'm Nirmala Anjinayya, an aspiring software developer
            passionate about technology.
            <br />
            I'm focused on building my coding skills and becoming
            a skilled developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
