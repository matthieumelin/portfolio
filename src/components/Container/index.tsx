import { type FC } from 'react'

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={`max-w-360 mx-auto px-5 ${className}`}>{children}</div>
    )
}

export default Container