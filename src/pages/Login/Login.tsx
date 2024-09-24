import "./login.scss"
import {useState} from "react";
import TextInputField from '../../ui/components/TextField/TextInputField.tsx'
import Button from "../../ui/components/AuthButton/Button.tsx";
import AuthHeader from "../../ui/components/AuthHeader/AuthHeader.tsx";
import AuthCard from "../../ui/components/AuthCard/AuthCard.tsx";

function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <div className='layout'>
            <AuthHeader />
            <AuthCard cardDescription={'Sing in to Anynote'} cardSize={'card login'}>
                <TextInputField setValue={setEmail} topDescription={'Username or email address'}/>
                <TextInputField setValue={setPassword} topDescription={'Password'} type='password'/>
                <Button buttonText={'Sign in'} />
            </AuthCard>
        </div>
    )
}

export default Login
