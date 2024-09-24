import React, {ReactNode, SetStateAction} from "react";

export interface TextInputProps {
    setValue: React.Dispatch<SetStateAction<string>>;
    topDescription?: string;
    placeholder?: string;
    type?: string;
    style?: string;
}

export interface ButtonProps {
    buttonText: string;
    buttonCustomStyle?: string;
}

export interface AuthCardProps {
    cardDescription: string;
    children: ReactNode;
    cardSize: 'card register' | 'card login';
}