import profilePicture from '../assets/aldiho.png';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';

import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Renaldi Pratama</h3>
        <p>Siswa Magang | Calon Mahasiswa</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/_alldiiiii_">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com">
            <FaWhatsapp />
          </a>
          <a href="https://www.youtube.com/shorts/dHJdw-5pQ88">
            <FaGithub />
          </a>
          <a href="">
            <FaTelegram />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
