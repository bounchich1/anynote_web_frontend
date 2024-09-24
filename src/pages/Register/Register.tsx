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
                <AuthCard cardDescription={'Create an account in Anynote'} cardSize={'card register'}>
                    <TextInputField setValue={setEmail} topDescription={'Email address'}/>
                    <TextInputField setValue={setUserName} topDescription={'Username'}/>
                    <TextInputField setValue={setPassword} topDescription={'Password'} type='password'/>
                    <Button buttonText={'Create an account'} />
                </AuthCard>
            </div>

        </>

    )
}
export default Register
