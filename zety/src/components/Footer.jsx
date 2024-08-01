import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container-fluid">
        <div className="footer-disclaimer">
          <p className="text-center">
            <sup>*</sup>The names and logos of the companies referred to above are all trademarks of their respective holders. Unless specifically stated otherwise, such references are not intended to imply any affiliation or association with Zety.
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-md-7 col-lg-4 col-xl-3 mb-2">
            <p className="footer-linksList-title">Logo</p>
          </div>
          <div className="col-12 col-md-5 col-lg-4 col-xl-2 mb-2">
            <p className="footer-linksList-title">Resume</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-2 mb-2">
            <p className="footer-linksList-title">CV</p>
            <ul className="footer-linksList-items list-unstyled">
              <li><a href="#">CV Builder</a></li>
              <li><a href="#">CV Templates</a></li>
              <li><a href="#">CV Examples</a></li>
              <li><a href="#">CV Format</a></li>
              <li><a href="#">How to Write a CV</a></li>
              <li><a href="#">CV Help</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-2 mb-2">
            <p className="footer-linksList-title">Cover Letter</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-2">
            <p className="footer-linksList-title">Support</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-bottom">
              <div>© 2024 Works Limited. All Rights Reserved.</div>
              <div className="footer-bottomImages">
                <img className="footer-bottomImages-item" src="https://cdn-images.zety.com/images/common/landings/all/ncda-logo_23-24@3x.png" alt="National Career Development Association" width="68" height="30" />
                <img className="footer-bottomImages-item" src="https://cdn-images.zety.com/images/common/landings/all/parwcc-logo2020@3x.png" alt="Certified Professional Resume Writer Program" width="37" height="30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
