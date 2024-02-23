function Input({ label, type, onChange }) {
    return (
        <label>
            {label}
            <input type={type} onChange={onChange} />
        </label>
    );
}

export default Input;