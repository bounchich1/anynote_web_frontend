import "./auth-header.scss"
import logo from "../../assets/icons/logo.svg";

function AuthHeader() {
    return (
        <>
            <div className="header-gap">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="divider"></div>
            </div>

        </>
    )
}
export default AuthHeader