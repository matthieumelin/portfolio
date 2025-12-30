import type { Project } from '@/types/project'
import { type FC } from 'react'
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    data: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ data }) => {
    return (
        <Link
            to={data.website || '#'}
            target='_blank'
            className='group bg-cover bg-center border border-neutral-900 hover:border-neutral-800 rounded-lg duration-200 overflow-hidden'
            style={{ backgroundImage: `url(./assets/projects/${data.image})` }}
        >
            <div className='relative h-full min-h-75 opacity-0 group-hover:opacity-100 duration-200 bg-linear-to-b from-transparent to-black/90'>
                <div className='absolute left-0 bottom-0 p-5'>
                    <h3 className='text-white text-xl font-bold mb-2'>{data.name}</h3>
                    <p className='text-neutral-300 text-sm mb-3'>{data.description}</p>
                    {data.technos && data.technos.length > 0 && (
                        <ul className='flex flex-wrap gap-2'>
                            {data.technos.map((techno, index) => (
                                <li
                                    key={index}
                                    className='px-2 py-1 bg-neutral-800/50 border border-neutral-700 rounded text-xs text-neutral-300'
                                >
                                    {techno}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard