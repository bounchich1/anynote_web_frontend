import {ButtonProps} from "../../../services/config/interfaces.ts";
import './ButtonStyles.scss'
function Button({buttonText, buttonCustomStyle = 'default-button'}: ButtonProps) {
    return (
        <>
            <button className={buttonCustomStyle}>{buttonText}</button>
        </>
    )
}

export default Button

