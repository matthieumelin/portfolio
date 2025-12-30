import Button from '@/components/Button'
import ProjectCard from '@/components/Cards/Project';
import Container from '@/components/Container';
import Navbar from '@/components/Navbar'
import Technologies from '@/components/Technologies';
import { ProjectType, type Project } from '@/types/project';
import { type FC } from 'react'
import { BsGithub } from 'react-icons/bs';
import { FaMapMarkerAlt } from "react-icons/fa";
import { LiaLinkedinIn } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const Home: FC = () => {
    const technologies = ["Nest.js", "JavaScript", 'React / React Native', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Redis', 'Wordpress', 'Git', 'GitHub', 'Figma'];
    const projects: Project[] = [
        {
            name: "Podblend",
            description: "Faites passer votre contenu au niveau supérieur avec le podcast vidéo.",
            image: "podblend.png",
            type: ProjectType.WebApp,
            technos: ["React.js", "Nest.js", "Stripe"],
            website: "https://podblend.fr/",
        },
        {
            name: "Takwinat",
            description: "Trouvez la formation qui vous convient en quelques clics.",
            image: "takwinat.png",
            type: ProjectType.WebApp,
            technos: ["HTML", "Tailwind CSS", "JavaScript"],
            website: "https://dazzling-pie-669f5c.netlify.app/"
        },
        {
            name: "Rinaorc",
            description: "Serveur Mini-Jeux Minecraft Français.",
            image: "rinaorc.png",
            type: ProjectType.WebApp,
            technos: ["Spigot"],
            website: "https://rinaorc.com"
        },
        {
            name: "Podcast Story",
            description: "Service de streaming podcast disponible sur internet et sur application mobile.",
            image: "podcast-story.png",
            type: ProjectType.MobileApp,
            technos: ["React Native", "Go"],
            website: "https://podcaststory.com/"
        },
        {
            name: "Hypnopsy",
            description: "La volonté est la première étape vers le changement.",
            image: "hypnopsy.png",
            type: ProjectType.WebApp,
            technos: ["React.js", "EmailJS"],
            website: "https://hypnoseardeche.com/"
        },
        {
            name: "Télécharger Vidéo",
            description: "Le meilleur service pour télécharger des vidéos depuis YouTube, Instagram, TikTok, Facebook et Twitter.",
            image: "telecharger-video.png",
            type: ProjectType.WebApp,
            technos: ["React.js", "APIs"],
            website: "https://telecharger-video.fr/"
        },
        {
            name: "Mes FRE",
            description: "Transformez vos Rapports en Tableaux de bord.",
            image: "mes-fre.png",
            type: ProjectType.WebApp,
            technos: ["React.js", "Supabase"],
            website: "https://mes-fre.fr/"
        },
        {
            name: "Move2Cloud",
            description: "Société d'experts spécialisés dans la Data, le Cloud et le DevOps.",
            image: "move2cloud.png",
            type: ProjectType.WebApp,
            technos: ["Wordpress", "React.js", "EmailJS"],
            website: "https://move2cloud.fr/"
        },
        {
            name: "FanCraft",
            description: "Serveur Mini-Jeux Minecraft Français",
            image: "fancraft.png",
            type: ProjectType.VideoGames,
            technos: ["Spigot", "PostgreSQL", "Redis", "BungeeCord", "Sys. Admin"],
            website: "http://fancraft.eu/"
        },
    ]

    return (
        <div className='min-h-screen'>
            <header>
                <Navbar />

                <div className='px-5 py-10 lg:py-32 space-y-6 max-w-4xl mx-auto relative overflow-hidden'>
                    <div className='absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_600px_400px_at_center,rgba(255,255,255,0.1),transparent_50%)]'></div>

                    <div className='relative z-10 space-y-6'>
                        <span className='text-neutral-500 font-semibold flex items-center justify-center gap-1'>
                            <FaMapMarkerAlt size={20} /> France
                        </span>
                        <h1 className='text-white text-6xl text-center font-bold'>
                            <span className='text-orange-500'>Matthieu Melin</span> <br /> Développeur Full Stack
                        </h1>
                        <p className='text-white text-center'>
                            Je suis un développeur confirmé avec une expertise solide dans le développement web. J'ai contribué à la réalisation de projets innovants pour des clients de divers secteurs. Mon objectif est de créer des solutions logicielles efficaces et de haute qualité pour résoudre des problèmes complexes.
                        </p>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <Button
                                theme='secondary'
                                onClick={() => window.open('https://calendly.com/swizen/parlons-de-votre-projet', '_blank')}>
                                Réserver un appel
                            </Button>
                            <Button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                                Voir mes projets
                            </Button>
                        </div>

                        {technologies && technologies.length > 0 && (
                            <div className='mt-16 space-y-4 pb-8'>
                                <p className='text-neutral-400 text-center'>Technologies que j'utilise</p>

                                <div className='relative overflow-hidden'>
                                    <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-black-custom to-transparent z-10"></div>
                                    <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-black-custom to-transparent z-10"></div>

                                    <div className='flex gap-3'>
                                        <Technologies data={technologies} />
                                        <Technologies data={technologies} />
                                        <Technologies data={technologies} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main>
                <Container>
                    {projects && projects.length > 0 && (
                        <section id='projects' className='scroll-mt-24 lg:scroll-mt-32'>
                            <h2 className='text-white text-3xl text-center font-bold'>Mes projets</h2>
                            <p className='mt-4 text-neutral-500 text-center'>
                                Vous trouverez ici une sélection de projets sur lesquels j'ai travaillé.
                            </p>

                            <div className='mt-8 grid lg:grid-cols-2 gap-4'>
                                {projects.map((project, index) => (
                                    <ProjectCard key={index} data={project} />
                                ))}
                            </div>
                        </section>
                    )}
                </Container>
            </main>

            <footer className='border-t border-neutral-800 mt-16'>
                <Container className='p-8'>
                    <h1 className='text-white text-xl font-bold'>Matthieu Melin</h1>
                    <p className='text-white'>&copy; Matthieu Melin. Tous droits réservés.</p>
                    <ul className='mt-4 flex items-center gap-4'>
                        <li>
                            <Link to="https://github.com/matthieumelin" target='_blank' className='text-neutral-600 hover:text-white duration-200'>
                                <BsGithub size={22} /></Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/matthieu-melin/" target='_blank' className='text-neutral-600 hover:text-white duration-200'>
                                <LiaLinkedinIn size={28} /></Link>
                        </li>
                    </ul>
                </Container>
            </footer>
        </div>
    )
}

export default Home