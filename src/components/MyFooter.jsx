import { Nav } from 'react-bootstrap'

const MyFooter = () => (
  <footer>
    <div className="d-flex justify-content-center mt-5">
      <div className="col col-6">
        <div className="row">
          <div className="col mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Audio and Subtitles
                  </Nav.Link>
                </p>
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Media Center
                  </Nav.Link>
                </p>
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Privacy
                  </Nav.Link>
                </p>
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Contact us
                  </Nav.Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Audio Description
                  </Nav.Link>
                </p>
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Investor Relations
                  </Nav.Link>
                </p>
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Legal Notices
                  </Nav.Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Help Center
                  </Nav.Link>
                </p>
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Jobs
                  </Nav.Link>
                </p>
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Cookie Preferences
                  </Nav.Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Gift Cards
                  </Nav.Link>
                </p>
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Terms of Use
                  </Nav.Link>
                </p>
                <p>
                  <Nav.Link href="#" alt="footer link">
                    Corporate Information
                  </Nav.Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2">
            <button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
              Service Code
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</div>
        </div>
      </div>
    </div>
  </footer>
)

export default MyFooter
