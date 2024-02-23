import './Info.css';

function Education() {
    return (
        <form className="info education">
            <h3>Education</h3>
            <label>
                School / University
                <input type="text" />
            </label>
            <label>
                Degree
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
            <div>
                <button>Add</button>
                <button type="button">Edit</button>
            </div>
        </form>
    )
}

function Experience() {
    return (
        <form className="info experience">
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