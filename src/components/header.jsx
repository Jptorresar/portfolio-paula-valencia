import "../styles/header.css";

function Header(props) {
  
  return (
    <div className="portfolio-page-wrapper">
      <header className="portfolio-header">
        <div className="portfolio-header-content">
          <div className="portfolio-header-logo">Paula Valencia</div>
          <nav className="portfolio-navigation">
          {['welcome', 'about me', 'current Work'].map((page) => (
              <button 
                key={page}
                className={`portfolio-nav-button ${
                  props.currentPage === page ? 'portfolio-nav-active' : 'portfolio-nav-inactive'
                }`}
                onClick={() => props.setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
