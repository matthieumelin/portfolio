import { type FC } from 'react'

interface TechnologiesProps {
    data: string[];
}

const Technologies: FC<TechnologiesProps> = ({ data }) => {

    return (
        <div className='flex gap-3 animate-scroll'>
            {data.map((value, index) => (
                <div
                    key={`${index}`}
                    className='py-2 px-4 bg-neutral-900 rounded text-white whitespace-nowrap shrink-0'>
                    {value}
                </div>
            ))}
        </div>
    )
}

export default Technologies