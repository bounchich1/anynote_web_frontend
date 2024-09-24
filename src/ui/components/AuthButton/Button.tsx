import "./button.scss"
export interface ButtonProps {
    buttonText: string;
    buttonCustomStyle?: string;
}
function Button({buttonText, buttonCustomStyle = "default-button"}: ButtonProps) {
    return (
        <>
            <button className={buttonCustomStyle}>{buttonText}</button>
        </>
    )
}

export default Button

