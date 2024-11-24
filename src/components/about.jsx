import "../styles/about.css";
import { Mail, Phone, MapPinHouse, FileDown } from "lucide-react";

function about() {
  return (
    <div className="portfolio-about-container">
      <h2 className="portfolio-section-title">About Me</h2>
      <div className="portfolio-about-grid">
        <div className="portfolio-aboutBackground">
          <h3 className="portfolio-subsection-title">
            Professional Background
          </h3>
          <p className="portfolio-description-text">
            My name is Paula Valencia, and this is my second year in elementary
            education. As a bilingual educator fluent in Spanish and English, I
            am passionate about creating engaging and effective learning
            experiences that inspire students to succeed. Since joining the
            Greenville County School District in 2017, I’ve embraced various
            roles, from Kindergarten Assistant to Parent Coordinator, which have
            shaped my dedication to education and my ability to connect with
            diverse communities. With a Master of Science in Instructional
            Design and Learning Technology, I am excited to combine my
            instructional design expertise with my classroom experience. My
            skills in communication, collaboration, curriculum development, and
            tools like Canva, Google Classroom, and Savvas empower me to design
            dynamic and inclusive learning environments. I specialize in
            methodologies such as differentiated instruction, to ensure that
            every learner has the opportunity to thrive. What sets me apart is
            my passion for lifelong learning and my commitment to sharing
            knowledge with others. Whether working with students, colleagues, or
            within a team, I strive to foster a collaborative spirit that drives
            innovation and growth. My ultimate goal is to continue developing
            transformative educational experiences that inspire curiosity and
            empower learners for the future.
          </p>
        </div>
        <div className="portfolio-contactSection">
          <h3 className="portfolio-subsection-title">Contact Information</h3>
          <div className="portfolio-contact-list">
            <div className="portfolio-contact-item">
              <Mail className="portfolio-contact-icon" />
              <span className="portfolio-contactText">
                pvalencia@greenville.k12.sc.us
              </span>
            </div>
            <div className="portfolio-contact-item">
              <Phone className="portfolio-contact-icon" />
              <span className="portfolio-contactText">(864) 303-7925</span>
            </div>
            <div className="portfolio-contact-item">
              <MapPinHouse className="portfolio-contact-icon" />
              <span className="portfolio-contactText">
                355 Pelham Rd, Unit 4207 Greenville SC 29615
              </span>
            </div>
            <h2>Downloads</h2>
          
              <div className="portfolio-contact-item">
                <FileDown className="portfolio-contact-icon" />
                <a
                  href="/src/resources/Resume Valencia.pdf"
                  download="Resume Valencia.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Resume
                </a>
                <a
                  href="/src/resources/Cover Letter Valencia.pdf"
                  download="Cover Letter Valencia.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My cover letter
                </a>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default about;
