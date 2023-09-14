import { db } from '../../firebase.config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        // Check for a valid message

        if (name.length < 2) {
            toast.warn('Please enter your name');
            return;
        } else if (email.length < 2) {
            toast.warn('Please enter your email address');
            return;
        } else if (message.length < 10) {
            toast.warn('Please enter a longer message');
            return;
        }
        const newMessage = {
            name,
            email,
            message,
            timestamp: serverTimestamp(),
        };
        try {
            const docRef = await addDoc(collection(db, 'messages'), newMessage);
            e.target.reset();
            toast.success('Message sent! Thank you for your interest :)');
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

    const onChange = (e) => {
        if (e.target.id === 'name') {
            setName(e.target.value);
        } else if (e.target.id === 'email') {
            setEmail(e.target.value);
        } else {
            setMessage(e.target.value);
        }
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
