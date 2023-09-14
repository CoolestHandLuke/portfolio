import { db } from '../../firebase.config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [payload, setPayload] = useState({
        name: '',
        email: '',
        message: '',
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        // Check for a valid message

        if (payload.name.length < 2) {
            toast.warn('Please enter your name');
            return;
        } else if (payload.email.length < 2) {
            toast.warn('Please enter your email address');
            return;
        } else if (payload.message.length < 10) {
            toast.warn('Please enter a longer message');
            return;
        }

        try {
            const body = `${payload.name} just sent you a new message:\n${payload.message}`;
            const newMessage = {
                to: import.meta.env.VITE_REACT_APP_TO_NUMBER,
                body,
                payload,
            };
            await addDoc(collection(db, 'messages'), newMessage);
            e.target.reset();
            toast.success('Message sent! Thank you for your interest :)');
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

    const onChange = (e) => {
        setPayload((prevState) => {
            return {
                ...prevState,
                [e.target.id]: e.target.value,
            };
        });
    };
    return (
        <div className="container flex py-8 gap-8">
            <div className="flex-1">
                <h1 className="mb-10 text-5xl text-white underline decoration-neon-green">
                    Contact
                </h1>
                <p>
                    I would love to hear about your project and how I could
                    help. Please fill in the form, and I will get back to you as
                    soon as I can.
                </p>
            </div>
            <form onSubmit={onSubmit} className="flex-1 flex flex-col ">
                <input
                    type="text"
                    id="name"
                    placeholder="NAME"
                    onChange={onChange}
                    className="input w-full max-w-xs border-light-black rounded-none border-b-grey border-b-2"
                />
                <input
                    type="email"
                    id="email"
                    placeholder="EMAIL"
                    onChange={onChange}
                    className="input w-full max-w-xs border-light-black rounded-none border-b-grey border-b-2"
                />
                <textarea
                    id="message"
                    className="textarea  border-light-black rounded-none border-b-grey border-b-2"
                    placeholder="MESSAGE"
                    onChange={onChange}
                ></textarea>
                <div className="w-full flex justify-end">
                    <button
                        type="submit"
                        className=" w-36 border-b-4 border-neon-green tracking-wider uppercase hover:text-neon-green"
                    >
                        <div className="py-2 uppercase">Send message</div>
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Contact;
