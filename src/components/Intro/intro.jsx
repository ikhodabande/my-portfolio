import React from 'react';
import './intro.css';
import hireImg from '../../assets/hireme.png';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="left-intro">
        <span className="hello">Hello ,</span>
        <span className='introName'>I'm <span className='introNameColor'>AmirMohammad</span><br />Website Designer</span>
        <p className='introParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        eleniti eos facere est incidunt beatae. Saepe sit architecto dolores magnam suscipit!</p>
        <Link to='#'><button className="introHireMe"><img src={hireImg} alt="hire" className="introBtnImg" />Hire Me</button></Link>
      </div>
      <img src={bg} alt="bachground" className="bg" />
    </section>
  )
}

export default Intro;