import { skills } from '../data';
import { FaReact, FaCogs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoJavascript } from 'react-icons/bi';

const Skills = () => {
    return (
        <>
            <h1 className="my-10 text-5xl text-bold text-white underline decoration-neon-green">
                Skills
            </h1>

            <div className="grid gap-4 grid-cols-2 my-10 md:grid-cols-4 lg:grid-cols-6 border-b-2">
                {skills.map(({ id, name, yearsExperience }) => {
                    return (
                        <div key={id} className="my-10">
                            <h1 className="text-3xl text-white">
                                {name === 'React' && (
                                    <FaReact className="react-skill" />
                                )}
                                {name === 'Tailwind' && (
                                    <BiLogoTailwindCss className="tailwind-skill" />
                                )}
                                {name === 'API' && (
                                    <FaCogs className="API-skill" />
                                )}
                                {name === 'HTML' && (
                                    <FaHtml5 className="HTML-skill" />
                                )}
                                {name === 'CSS' && (
                                    <FaCss3Alt classname="CSS-skill" />
                                )}
                                {name === 'JS' && (
                                    <BiLogoJavascript classname="JS-skill" />
                                )}
                                {name}
                            </h1>
                            <p className="color-grey">
                                {yearsExperience}{' '}
                                {yearsExperience > 1
                                    ? 'years experience'
                                    : 'year of experience'}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default Skills;
