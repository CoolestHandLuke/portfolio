import { projects } from '../data';

const Projects = () => {
    return (
        <div className="container">
            <h1 className="text-5xl text-bold text-white">Projects</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {projects.map(({ id, name, projectImg, url }) => {
                    return (
                        <div
                            key={id}
                            className="card w-96 bg-base-100 shadow-xl justify-self-center"
                        >
                            <figure>
                                <img src={projectImg} alt="project img" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {name}
                                    <div className="badge badge-secondary">
                                        NEW
                                    </div>
                                </h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">
                                        Fashion
                                    </div>
                                    <div className="badge badge-outline">
                                        Products
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Projects;
