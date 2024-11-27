import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import Skill from '../assets/img/skill.png';
import './skill.css';

const SkillsComponent = () => {
  return (
    <div className="skills-container flex flex-col md:flex-row items-center py-16 bg-gray-50">
      <div className="skills-text animate-slideInLeft md:w-1/2 space-y-4 px-6">
        <h3 className="text-lg text-blue-800 font-semibold">OUR EXPERTISE</h3>
        <h2 className="text-4xl font-bold text-gray-900">What We Bring to the Table</h2>
        <div className="w-24 h-1 bg-purple-500 mb-6"></div>
        <p className="text-gray-700 leading-relaxed">
          Our team excels in cutting-edge technologies, offering tailored solutions that drive innovation and deliver measurable results across industries.
        </p>

        <div className="skill">
          <span className="font-semibold text-gray-800">Full-Stack Web Development</span>
          <ProgressBar completed={95} bgColor="#6A0DAD" className="mt-1" />
        </div>

        <div className="skill">
          <span className="font-semibold text-gray-800">Mobile Application Development</span>
          <ProgressBar completed={90} bgColor="#6A0DAD" className="mt-1" />
        </div>

        <div className="skill">
          <span className="font-semibold text-gray-800">Cloud Computing & DevOps</span>
          <ProgressBar completed={85} bgColor="#6A0DAD" className="mt-1" />
        </div>

        <div className="skill">
          <span className="font-semibold text-gray-800">Artificial Intelligence & ML</span>
          <ProgressBar completed={93} bgColor="#6A0DAD" className="mt-1" />
        </div>

        <div className="skill">
          <span className="font-semibold text-gray-800">E-Commerce Solutions</span>
          <ProgressBar completed={88} bgColor="#6A0DAD" className="mt-1" />
        </div>
      </div>

      <div className="skills-image animate-slideInRight md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src={Skill} alt="Skills Illustration" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default SkillsComponent;
