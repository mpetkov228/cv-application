import { useState } from 'react';

import './Info.css';
import Input from './Input';
import { education, experience } from './initialState/initialState';

function Education({ formSubmit }) {
    const [educationInfo, setEducationInfo] = useState(education);

    return (
        <form onSubmit={formSubmit} id="edu" className="info education">
            <h3>Education</h3>
            <Input 
                id="school" 
                label="School / Univesity" 
                type="text" 
                value={educationInfo.school} 
                onChange={(e) => setEducationInfo({ ...educationInfo, school: e.target.value })} 
            />
            <Input 
                id="degree" 
                label="Degree / Field of Study" 
                type="text" 
                value={educationInfo.degree} 
                onChange={(e) => setEducationInfo({ ...educationInfo, degree: e.target.value })}
            />
            <Input 
                id="startDate" 
                label="Start Date" 
                type="text" 
                value={educationInfo.startDate} 
                onChange={(e) => setEducationInfo({ ...educationInfo, startDate: e.target.value })}
            />
            <Input 
                id="endDate" 
                label="End Date" 
                type="text" 
                value={educationInfo.endDate} 
                onChange={(e) => setEducationInfo({ ...educationInfo, endDate: e.target.value })}
            />      
            <div className="buttons">
                <button>Add</button>
                <button type="button">Edit</button>
            </div>
        </form>
    )
}

function Experience({ formSubmit }) {
    const [experienceInfo, setExperienceInfo] = useState(experience);

    return (
        <form onSubmit={formSubmit} id="exp" className="info experience">
            <h3>Experience</h3>
            <Input 
                id="company"
                label="Company"
                type="text"
                value={experienceInfo.company}
                onChange={(e) => setExperienceInfo({ ...experienceInfo, company: e.target.value })}
            />
            <Input 
                id="positionTitle"
                label="Position / Title"
                type="text"
                value={experienceInfo.positionTitle}
                onChange={(e) => setExperienceInfo({ ...experienceInfo, positionTitle: e.target.value })}
            />
            <Input 
                id="startDate"
                label="Start Date"
                type="text"
                value={experienceInfo.startDate}
                onChange={(e) => setExperienceInfo({ ...experienceInfo, startDate: e.target.value })}
            />
            <Input 
                id="endDate"
                label="End Date"
                type="text"
                value={experienceInfo.endDate}
                onChange={(e) => setExperienceInfo({ ...experienceInfo, endDate: e.target.value })}
            />
            <label>
                Description
                <textarea name="description"></textarea>
            </label>
            <div className="buttons">
                <button>Add</button>
                <button type="button">Edit</button>
            </div>

        </form>
    );
}

export {
    Education,
    Experience
}