import { FaChevronRight, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TfiSignal } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="profile-btn" onClick={handleShow}>
        <FaUser />
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="side-navbar"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link to="/" style={{ color: '#2caeba' }} onClick={handleClose}>
              Dashboard
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <article className="nav-link">
            <div>
              <h4>MasterNode 1</h4>
              <p>
                Connected{' '}
                <span>
                  <TfiSignal size={20} fill="green" />
                </span>
              </p>
            </div>

            <Link to="/master-nodes" onClick={handleClose}>
              <FaChevronRight fill="#2caeba" />
            </Link>
          </article>

          <article className="nav-link">
            <div>
              <h4>Check Credit</h4>
            </div>

            <Link to="/credit-score" onClick={handleClose}>
              <FaChevronRight fill="#2caeba" />
            </Link>
          </article>

          <article className="nav-link">
            <div>
              <h4>Preferences</h4>
            </div>

            <Link to="/preferences" onClick={handleClose}>
              <FaChevronRight fill="#2caeba" />
            </Link>
          </article>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Profile;
