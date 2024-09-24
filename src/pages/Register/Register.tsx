import "./register.scss"
import {useState} from "react";
import TextInputField from '../../ui/components/TextField/TextInputField.tsx'
import Button from "../../ui/components/AuthButton/Button.tsx";
import AuthHeader from "../../ui/components/AuthHeader/AuthHeader.tsx";
import AuthCard from "../../ui/components/AuthCard/AuthCard.tsx";

function Register() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    return (
        <>
            <div className='layout'>
                <AuthHeader />
                <AuthCard description="Create an account in Anynote" size="register">
                    <TextInputField setValue={setEmail} description="Email address"/>
                    <TextInputField setValue={setUserName} description="Username"/>
                    <TextInputField setValue={setPassword} description="Password" type="password"/>
                    <Button buttonText="Create an account" />
                </AuthCard>
            </div>

        </>

    )
}
export default Register
