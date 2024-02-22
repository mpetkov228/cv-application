import './General.css';

function General() {
    return (
        <div className="general">
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

export default General;