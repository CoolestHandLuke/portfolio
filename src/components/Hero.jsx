import Selfie from '../assets/Selfie.jpg';

const Hero = () => {
    return (
        <div className="hero min-h-screen text-white border-b-2 border-grey">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={Selfie}
                    alt="Selfie"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="">
                    <h1 className="text-5xl font-bold">Nice to meet you!</h1>
                    <h1 className="text-5xl font-bold">
                        I'm{' '}
                        <span className="underline decoration-neon-green">
                            Luke Shea
                        </span>
                        .
                    </h1>
                    <p className="py-6 whitespace-normal">
                        I'm currently a CS student at Oregon State University
                        learning how to build React apps on the side.
                    </p>
                    <button className="border-b-4 border-neon-green tracking-wider uppercase hover:text-neon-green">
                        <div className="py-2">Contact me</div>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Hero;
