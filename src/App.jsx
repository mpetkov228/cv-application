import { useState } from 'react'

import './App.css'
import { Education, Experience } from './components/Info'
import { personalInfo, education, experience } from './components/initialState/initialState';
import Input from './components/Input';

function App() {

  const [userInfo, setUserInfo] = useState(personalInfo);
  const [educationInfo, setEducationInfo] = useState(education);
  const [experienceInfo, setExperienceInfo] = useState(experience);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    if (e.target.id == 'edu') {
      setEducationInfo(Object.fromEntries(formData));
    } else if (e.target.id == 'exp') {
      setExperienceInfo(Object.fromEntries(formData));
    }
    console.log(educationInfo);
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
        <h1>{userInfo.fullName}</h1>
        <h3>{userInfo.career}</h3>
        <div className="contact-details">
          <p>{userInfo.email}</p>
          <p>{userInfo.phoneNumber}</p>
          <p>{userInfo.address}</p>
        </div>
        <h3>Education</h3>
        <div className="education">
          <p>{educationInfo.school}</p>
          <p>{educationInfo.degree}</p>
          <p>{educationInfo.startDate}</p>
          <p>{educationInfo.endDate}</p>
        </div>
      </section>
    </>
  )
}

export default App
