import {TextInputProps} from "../../../services/config/interfaces.ts";
import React from "react";
import './TextInputFieldStyles.scss'
function TextInputField({setValue, topDescription, placeholder, style = 'default-input', type = 'text'}: TextInputProps) {
    const handleInput = (event: {target: {value: React.SetStateAction<string>}}) => {
        setValue(event.target.value)
    }

    return (
        <>
            <div className='input-field-flex'>
                <h2 className='top-description'>{topDescription}</h2>
                <input placeholder={placeholder} onChange={handleInput} className={style} type={type}></input>
            </div>
        </>
    )
}

export default TextInputField