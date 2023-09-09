const Contact = () => {
    return (
        <div className="container flex py-8 border-b-2 gap-8">
            <div className="flex-1">
                <h1 className="text-5xl text-white">Contact</h1>
                <p>
                    I would love to hear about your project and how I could
                    help. Please fill in the form, and I will get back to you as
                    soon as I can.
                </p>
            </div>
            <div className="flex-1 flex flex-col ">
                <input
                    type="text"
                    placeholder="NAME"
                    className="input w-full max-w-xs border-light-black rounded-none border-b-grey border-b-2"
                />
                <input
                    type="text"
                    placeholder="EMAIL"
                    className="input w-full max-w-xs border-light-black rounded-none border-b-grey border-b-2"
                />
                <textarea
                    className="textarea  border-light-black rounded-none border-b-grey border-b-2"
                    placeholder="MESSAGE"
                ></textarea>
                <div className="w-full flex justify-end">
                    <button className=" w-36 border-b-4 border-neon-green tracking-wider uppercase hover:text-neon-green">
                        <div className="py-2 uppercase">Send message</div>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Contact;
