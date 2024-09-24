import "./login.scss"
import {useState} from "react";
import TextInputField from "../../ui/components/TextField/TextInputField.tsx"
import Button from "../../ui/components/AuthButton/Button.tsx";
import AuthHeader from "../../ui/components/AuthHeader/AuthHeader.tsx";
import AuthCard from "../../ui/components/AuthCard/AuthCard.tsx";

function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <div className="layout">
            <AuthHeader />
            <AuthCard description="Sign in to Anynote" size="login">
                <TextInputField setValue={setEmail} description="Username or email address"/>
                <TextInputField setValue={setPassword} description="Password" type="password"/>
                <Button buttonText="Sign in" />
            </AuthCard>
        </div>
    )
}

export default Login
