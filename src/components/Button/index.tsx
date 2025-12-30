import { type FC } from 'react'

interface ButtonProps {
    children: React.ReactNode;
    type?: 'submit' | 'button';
    theme?: 'primary' | 'secondary' | 'transparent';
    className?: string;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, theme = 'primary', type = 'button', className, onClick }) => {
    const themes = {
        primary: 'text-white bg-orange-600 hover:bg-orange-700 duration-200 border border-neutral-800 rounded py-2 px-5',
        secondary: 'text-black-custom bg-white rounded py-2 px-5',
        transparent: 'bg-transparent',
    }

    return (
        <button
            className={`${themes[theme]} ${className || ''}`}
            type={type}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button