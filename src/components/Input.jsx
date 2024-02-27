function Input({ id, label, type, onChange, value, isRequired }) {
    return (
        <label>
            {label}
            <input id={id} name={id} type={type} onChange={onChange} value={value} required={isRequired} />
        </label>
    );
}

export default Input;