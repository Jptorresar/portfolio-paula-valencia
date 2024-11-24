import "../styles/Welcome.css";

function welcome() {
  return (
    <div className="portfolio-welcome-container">
      <img
        src={require("../resources/photo-paula.png")}
        alt="Profile"
        className="portfolio-profile-image"
      />
      <h1 className="portfolio-main-title">Paula A. Valencia</h1>
      <p className="portfolio-subtitle">
        Hola! I am Paula Valencia, I am here to transform classrooms into
        innovative digital learning spaces, I combine my expertise in education
        and instructional design to craft engaging, learner-centered solutions
        that inspire and empower.
      </p>
    </div>
  );
}

export default welcome;
