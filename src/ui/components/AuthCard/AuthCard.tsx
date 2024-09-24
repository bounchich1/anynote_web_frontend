import {AuthCardProps} from "../../../services/config/interfaces.ts";
import './AuthCardStyles.scss'
function AuthCard({children, cardDescription, cardSize}: AuthCardProps) {
    return (
        <>
            <div className='card-container'>
                <h2 className={'text-1'}>{cardDescription}</h2>
                <div className={cardSize}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default AuthCard