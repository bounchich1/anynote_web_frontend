import "./auth-card.scss"
import {ReactNode} from "react";

export interface AuthCardProps {
    description: string;
    children: ReactNode;
    size: "register" | "login";
}
function AuthCard({children, description, size}: AuthCardProps) {
    return (
        <>
            <div className="card-container">
                <h2 className="text-1">{description}</h2>
                <div className={size}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default AuthCard