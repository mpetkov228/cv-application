import './Forms.css';

function General() {
    return (
        <div className="info general">
            <h3>Personal Information</h3>
            <label>
                Full Name
                <input type="text"/>
            </label>
            <label>
                E-mail
                <input type="email" />
            </label>
            <label>
                Phone Number
                <input type="tel" />
            </label>
            <div>
                <button>Add</button>
                <button>Edit</button>
            </div>
        </div>
    )
}

function Education() {
    return (
        <div className="info education">
            <h3>Education</h3>
            <label>
                School / University
                <input type="text" />
            </label>
            <label>
                Degree
                <input type="text" />
            </label>
            <div className="date-of-study">
                <label>
                    Start Date
                    <input type="text" />
                </label>
                <label>
                    End Date
                    <input type="text" />
                </label>
            </div>
            <div>
                <button>Add</button>
                <button>Edit</button>
            </div>
        </div>
    )
}

function Experience() {
    return (
        <div className="info experience">
            <h3>Experience</h3>
            <label>
                Company
                <input type="text" />
            </label>
            <label>
                Position Title
                <input type="text" />
            </label>
            <div>
                <label>
                    Start Date
                    <input type="text" />
                </label>
                <label>
                    End Date
                    <input type="text" />
                </label>
            </div>
            
        </div>
    );
}

function Forms() {
    return (
        <section className="cv-builder">
            <General />
            <Education />
            <Experience />
        </section>
    )
}

export default Forms;