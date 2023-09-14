import { skills } from '../data';

const Skills = () => {
    return (
        <>
            <h1 className="my-10 text-5xl text-bold text-white">Skills</h1>

            <div className="grid gap-4 grid-cols-2 my-10 md:grid-cols-4 lg:grid-cols-6 border-b-2">
                {skills.map(({ id, name, yearsExperience }) => {
                    return (
                        <div key={id} className="my-10">
                            <h1 className="text-3xl text-white">{name}</h1>
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
