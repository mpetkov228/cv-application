import './General.css';

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

export default Education;