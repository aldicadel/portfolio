import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

import { FaHtml5 } from 'react-icons/fa';

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaHtml5 />}
          >
            <h3 className="vertical-timeline-element-title">Siswa</h3>
            <h4 className="vertical-timeline-element-subtitle">SMKN 6 Pekanbaru</h4>
            <p>Menguasai dasar-dasar HTML dan CSS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaHtml5 />}
          >
            <h3 className="vertical-timeline-element-title">Siswa</h3>
            <h4 className="vertical-timeline-element-subtitle">SMKN 6 Pekanbaru</h4>
            <p>Menguasi Microsoft Word, Office, Power Point, dan Excel</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaHtml5 />}
          >
            <h3 className="vertical-timeline-element-title">Siswa</h3>
            <h4 className="vertical-timeline-element-subtitle">SMKN 6 Pekanbaru</h4>
            <p>Berhasil Menbuat sebuah Crud dengan PHP</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaHtml5 />}
          >
            <h3 className="vertical-timeline-element-title">Siswa</h3>
            <h4 className="vertical-timeline-element-subtitle">SMKN 6 Pekanbaru</h4>
            <p>Berhasil Membuat website marketplace dengan bahasa pemrograman PHP</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
