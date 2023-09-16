import { skills } from '../data';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoJavascript } from 'react-icons/bi';
import { FcLinux } from 'react-icons/fc';
import pythonLogo from '../assets/python-logo.svg';

const Skills = () => {
    return (
        <>
            <h1 className="my-10 text-5xl text-bold text-white underline decoration-neon-green">
                Skills
            </h1>

            <div className="grid gap-4 grid-cols-2 my-10 md:grid-cols-4 lg:grid-cols-6 border-b-2">
                {skills.map(({ id, name }) => {
                    return (
                        <div key={id} className="my-10">
                            <h1 className="flex space-around text-3xl text-white relative">
                                {name === 'React' && (
                                    <span style={{ color: '#61dbfb' }}>
                                        <FaReact />
                                    </span>
                                )}
                                {name === 'Tailwind' && (
                                    <span style={{ color: '#3490dc' }}>
                                        <BiLogoTailwindCss />
                                    </span>
                                )}

                                {name === 'HTML' && (
                                    <span style={{ color: '#e44d26' }}>
                                        <FaHtml5 />
                                    </span>
                                )}
                                {name === 'CSS' && (
                                    // Some CSS shenanigans
                                    <span
                                        className="css-is-fun"
                                        style={{
                                            color: '#264de4',
                                        }}
                                    >
                                        <FaCss3Alt />
                                    </span>
                                )}
                                {name === 'JS' && (
                                    <span
                                        style={{
                                            color: '#f7df1e',
                                        }}
                                    >
                                        <BiLogoJavascript />
                                    </span>
                                )}
                                {name === 'Linux' && <FcLinux />}
                                {name === 'Python' && (
                                    <img
                                        src={pythonLogo}
                                        height={'22.5px'}
                                        width={'22.5px'}
                                    />
                                )}

                                {name}
                            </h1>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default Skills;
