import React, {SetStateAction} from "react";
import "./text-input.scss"

export interface TextInputProps {
    setValue: React.Dispatch<SetStateAction<string>>;
    description?: string;
    placeholder?: string;
    type?: string;
    style?: string;
}
function TextInputField({setValue, description, placeholder, style = "default-input", type = "text"}: TextInputProps) {
    const handleInput = (event) => {
        setValue(event.target.value)
    }

    return (
        <>
            <div className="input-field-flex">
                <h2 className="top-description">{description}</h2>
                <input placeholder={placeholder} onChange={handleInput} className={style} type={type}></input>
            </div>
        </>
    )
}

export default TextInputField