import React from 'react';

interface FooterProps {
    container: string;
    title: string;
}

const Footer: React.FC<FooterProps> = ({ container, title }) => {
    return (
        <div className="footer-top-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="footer-about-us">
                <h2>
                  <span>Pokémon</span>
                </h2>
                <p>
                 {container}
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="footer-menu">
                <h2 className="footer-wid-title">{title}</h2>
                <ul>
                  <li>
                    <a href="#">{title}</a>
                  </li>
                  <li>
                    <a href="#">{title}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;
