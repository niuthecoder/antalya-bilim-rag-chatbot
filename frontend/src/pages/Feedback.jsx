import React, { useState } from 'react';
import '../styles/feedback.css';

const Feedback = () => {
    const [category, setCategory] = useState('Other');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        console.log({ category, name, email, subject, message });
        alert('Your feedback has been submitted!');
    };

    return (
        <div className="feedback-container">
            <div className="feedback-form">
                <h2>Your feedback is important for us</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="category"></label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-input"
                    >
                        <option value="Bug Report">Category / Bug Report</option>
                        <option value="Feature Suggestion">Category / Feature Suggestion</option>
                        <option value="Feedback">Category / Feedback</option>
                        <option value="Other">Category / Other</option>
                    </select>

                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="*Enter your name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                        required
                    />

                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                    />

                    <label htmlFor="subject"></label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="*Add a subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="form-input"
                        required
                    />

                    <label htmlFor="message"></label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="*Type your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-input"
                        required
                    />

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;
