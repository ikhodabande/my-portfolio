import React from 'react';
import './skill.css';
import uiImg from '../../assets/ui-design.png';
import webImg from '../../assets/website-design.png';
import appImg from '../../assets/app-design.png';


function Skill() {
  return (
    <section id="skill">
        <span className="headerSkillTitle">What I Do</span>
        <span className="headerSkillParagraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, sit quisquam nesciunt modi quo molestias laudantium corrupti. Laboriosam, eveniet voluptates.</span>  
      <div className="skillBars">
        <div className="skillBar">
          <img src={uiImg} alt="" className="skillBarImg" />
          <div className="skillBarDes">
            <h1>Ui/Ux Designer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae ratione alias ab, vero corrupti quibusdam placeat voluptates consequuntur et.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webImg} alt="" className="skillBarImg" />
          <div className="skillBarDes">
            <h1>Web Designer</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore soluta perferendis, consequuntur eius blanditiis corrupti molestias vero unde iure voluptates.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appImg} alt="" className="skillBarImg" />
          <div className="skillBarDes">
            <h1>App Designer</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt saepe optio expedita consectetur. Perferendis beatae placeat recusandae, quasi pariatur repellat.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill;
