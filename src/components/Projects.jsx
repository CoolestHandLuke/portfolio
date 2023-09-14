import { projects } from '../data';
import { FaReact, FaCogs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoJavascript } from 'react-icons/bi';

const Projects = () => {
    return (
        <div className="container border-b-2">
            <h1 className="mb-10 text-5xl text-bold text-white underline decoration-neon-green">
                Projects
            </h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {projects.map(
                    ({ id, name, description, projectImg, tags, url }) => {
                        return (
                            <div
                                key={id}
                                className="card w-96 bg-base-100 shadow-xl justify-self-center"
                            >
                                <figure>
                                    <a href={url}>
                                        <img
                                            src={projectImg}
                                            alt="project img"
                                        />
                                    </a>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <p>{description}</p>
                                    <div className="card-actions justify-end">
                                        {tags.map((tag, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={`badge badge-${tag} tracking-wide`}
                                                >
                                                    {tag === 'React' && (
                                                        <FaReact />
                                                    )}
                                                    {tag === 'Tailwind' && (
                                                        <BiLogoTailwindCss />
                                                    )}
                                                    {tag === 'API' && (
                                                        <FaCogs />
                                                    )}
                                                    {tag === 'HTML' && (
                                                        <FaHtml5 />
                                                    )}
                                                    {tag === 'CSS' && (
                                                        <FaCss3Alt />
                                                    )}
                                                    {tag === 'JS' && (
                                                        <BiLogoJavascript />
                                                    )}

                                                    {tag}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};
export default Projects;
