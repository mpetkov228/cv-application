function Input({ id, label, type, onChange, value}) {
    return (
        <label>
            {label}
            <input id={id} name={id} type={type} onChange={onChange} value={value} />
        </label>
    );
}

export default Input;