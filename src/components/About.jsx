import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiPhp } from 'react-icons/si';
import { FaJs } from 'react-icons/fa';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import '../styles/About.css';

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>Saya Renaldi Pratama, Siswa dari SMK Negeri 6 Pekanbaru dengan jurusan Rekayasa Perangkat Lunak(RPL), Saya siswa tamatan 2024/2025</p>
        <p>
          Saya seorang siswa SMK yang sedang belajar memahami bahasa pemrograman. Saya tertarik dengan dunia pemrograman karena saya tertarik dengan teknologi
          dan ingin membuat sesuatu yang bermanfaat bagi orang lain
        </p>
        <h4>Programming Language & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <IoLogoCss3 />
          <SiPhp />
          <FaJs />
          <FaFreeCodeCamp />
          <FaGithub />
        </div>
      </div>
    </section>
  );
}

export default About;
