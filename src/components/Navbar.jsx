import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar mb-6 px-0">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-2xl text-white font-sans">
                    lukeshea
                </a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-square btn-ghost">
                    <a href="https://github.com/CoolestHandLuke">
                        <FaGithub className="text-2xl text-white" />
                    </a>
                </button>
                <button className="btn btn-square btn-ghost">
                    <a href="https://www.linkedin.com/in/luke-shea/">
                        <FaLinkedin className="text-2xl text-white" />
                    </a>
                </button>
            </div>
        </div>
    );
};
export default Navbar;
