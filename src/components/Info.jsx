import { useState } from 'react';

import './Info.css';
import Input from './Input';
import { education } from './initialState/initialState';

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
            <div>
                <button>Add</button>
                <button type="button">Edit</button>
            </div>
        </form>
    )
}

function Experience({ formSubmit }) {
    return (
        <form onSubmit={formSubmit} id="exp" className="info experience">
            <h3>Experience</h3>
            <label>
                Company
                <input type="text" />
            </label>
            <label>
                Position Title
                <input type="text" />
            </label>
            <div className="dates">
                <label>
                    Start Date
                    <input type="text" />
                </label>
                <label>
                    End Date
                    <input type="text" />
                </label>
            </div>
            <label>
                Description
                <textarea></textarea>
            </label>
            <div>
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