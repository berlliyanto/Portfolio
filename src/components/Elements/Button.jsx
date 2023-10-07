const Button = ({children, buttonClass, handleClick}) => {
    return <button className={buttonClass} onClick={handleClick}>{children}</button>
}

export default Button;