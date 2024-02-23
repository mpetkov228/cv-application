import { useState } from 'react'

import './App.css'
import { Education, Experience } from './components/Info'
import { personalInfo, education, experience } from './components/initialState/initialState';
import Input from './components/Input';

function App() {

  const [userInfo, setUserInfo] = useState(personalInfo);
  const [educationInfo, setEducationInfo] = useState(education);
  const [experienceInfo, setExperienceInfo] = useState(experience);

  console.log(userInfo);

  return (
    <>
      <section className="forms">
        <div className="info">
          <h3>Personal Information</h3>
          <Input label="Full Name" type="text" onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })} />
          <Input label="Career" type="text" onChange={(e) => setUserInfo({ ...userInfo, career: e.target.value })} />
          <Input label="E-mail" type="email" onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
          <Input label="Phone Number" type="tel" onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })} />
        </div>
        <Education />
        <Experience />
      </section>
      <section className="cv">
        <h1>{userInfo.fullName}</h1>
        <h3>{userInfo.career}</h3>
        <div className="contact-details">
          <p>{userInfo.email}</p>
          <p>{userInfo.phoneNumber}</p>
          <p>my address</p>
        </div>
      </section>
    </>
  )
}

export default App
