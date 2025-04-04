import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function MyFooter() {
  return (
    <footer className="bg-dark text-white"> {/* Aggiunto bg-dark e text-white */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">
          <FaFacebook size={24} className="me-2" />
          <FaInstagram size={24} className="me-2" />
          <FaTwitter size={24} className="me-2" />
          <FaYoutube size={24} />
        </h2>

        <Row>
          <Col xs={12} lg={3} className="mb-3"> {/* Modificato lg={3} */}
            <div className="text-center">
              <p><a href="#" className="text-white text-decoration-none">Audio and subtitles</a></p>
              <p><a href="#" className="text-white text-decoration-none">Media center</a></p>
              <p><a href="#" className="text-white text-decoration-none">Privacy</a></p>
              <p><a href="#" className="text-white text-decoration-none">Contact us</a></p>
            </div>
          </Col>

          <Col xs={12} lg={3} className="mb-3"> {/* Modificato lg={3} */}
            <div className="text-center">
              <p><a href="#" className="text-white text-decoration-none">Audio description</a></p>
              <p><a href="#" className="text-white text-decoration-none">Investors relations</a></p>
              <p><a href="#" className="text-white text-decoration-none">Legal notation</a></p>
            </div>
          </Col>

          <Col xs={12} lg={3} className="mb-3"> {/* Modificato lg={3} */}
            <div className="text-center">
              <p><a href="#" className="text-white text-decoration-none">Help center</a></p>
              <p><a href="#" className="text-white text-decoration-none">Jobs</a></p>
              <p><a href="#" className="text-white text-decoration-none">Cookies preferences</a></p>
            </div>
          </Col>

          <Col xs={12} lg={3} className="mb-3"> {/* Modificato lg={3} */}
            <div className="text-center">
              <p><a href="#" className="text-white text-decoration-none">Gift cards</a></p>
              <p><a href="#" className="text-white text-decoration-none">Terms of use</a></p>
              <p><a href="#" className="text-white text-decoration-none">Corporate information</a></p>
            </div>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button variant="dark" className="border border-white">Service code</Button>
          <p className="mt-3">1997-2019 Netflix, inc.{'{i-OdOOfcda2fdf9cOde}'}</p>
        </div>
      </Container>
    </footer>
  );
}

export default MyFooter;