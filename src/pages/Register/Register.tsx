import "./register.scss"
import logo from '../../ui/assets/icons/logo.svg'
function Card() {
    return (
        <>
            <div className='card-container'>
                <h2 className={'text-1'}>Create an account in Anynote</h2>
                <div className="card">
                    <h1 className="test">Anynote</h1>
                    <h2>sddf</h2>
                </div>
            </div>
        </>
    )
}

function Register() {

    return (
        <>
            <div className='layout'>
                <div className='logo'>
                    <img src={logo} alt={'Logo'}/>
                </div>
                <div className='divider'></div>
                <Card />
            </div>

        </>

    )
}
export default Register
