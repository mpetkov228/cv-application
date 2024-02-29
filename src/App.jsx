import { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import './App.css'
import './components/cv.css'
import { Education, Experience } from './components/Info'
import { personalInfo, education, experience } from './components/initialState/initialState';
import Input from './components/Input';

function App() {

  const [userInfo, setUserInfo] = useState(personalInfo);
  const [educationInfo, setEducationInfo] = useState(education);
  const [experienceInfo, setExperienceInfo] = useState(experience);
  const [educationArray, setEducationArray] = useState([]);
  const [experienceArray, setExperienceArray] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    e.target.reset();
    console.log(e.target);

    if (e.target.id == 'edu') {
      setEducationInfo(Object.fromEntries(formData));
    } else if (e.target.id == 'exp') {
      setExperienceInfo(Object.fromEntries(formData));
    }
  }

  return (
    <>
      <section className="forms">
        <div className="info">
          <h3>Personal Information</h3>
          <Input label="Full Name" type="text" onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })} />
          <Input label="Career" type="text" onChange={(e) => setUserInfo({ ...userInfo, career: e.target.value })} />
          <Input label="E-mail" type="email" onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
          <Input label="Phone Number" type="tel" onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })} />
          <Input label="Address" type="text" onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })} />
        </div>
        <Education formSubmit={handleSubmit} />
        <Experience formSubmit={handleSubmit}/>
      </section>

      <section className="cv">
        <div className="cv-header">
          <h1>{userInfo.fullName}</h1>
          <h3>{userInfo.career}</h3>
          <div className="contact-details">
            <div className="email">
              <MdEmail />
              <div className="header-text">{userInfo.email}</div>
            </div>
            <div className="phone-number">
              <FaPhoneAlt />
              <div className="header-text">{userInfo.phoneNumber}</div>
            </div>
            <div className="address">
              <FaLocationDot />
              <div className="header-text">{userInfo.address}</div>
            </div>
          </div>
        </div>

        <div className="cv-education">
          <h3>Education</h3>
          <div className="education">
            <p><strong>School / University:</strong> {educationInfo.school}</p>
            <p><strong>Degree / Field of Study:</strong> {educationInfo.degree}</p>
            <p><strong>From:</strong> {educationInfo.startDate}</p>
            <p><strong>To:</strong> {educationInfo.endDate}</p>
          </div>
          <hr />
        </div>
        
        <div className="cv-experience">
          <h3>Experience</h3>
          <div className="experience">
            <p><strong>Company:</strong> {experienceInfo.company}</p>
            <p><strong>Position / Title:</strong> {experienceInfo.positionTitle}</p>
            <p><strong>From:</strong> {experienceInfo.startDate}</p>
            <p><strong>To:</strong> {experienceInfo.endDate}</p>
            <p><strong>Description:</strong> {experienceInfo.description}</p>
          </div>
          <hr />
        </div>
      </section>
    </>
  )
}

export default App
