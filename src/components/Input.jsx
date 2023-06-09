

const Input = ({ classList, type, value, color, placeholder, handleClick, handleChange }) => {
    const variants = {
        gray: 'text-gray border-gray placeholder:text-gray',
        blue: 'text-white font-bold bg-blue-100 border-transparent',
    }
    return <input className={`w-full h-4 px-1 text-sm cursor-pointer outline-none rounded-sm border ${variants[color]} ${classList}`} type={type} value={value} placeholder={placeholder} onClick={handleClick} onChange={handleChange} />
}

Input.defaultProps = {
    handleClick: () => {},
    handleChange: () => {}
}

export { Input }