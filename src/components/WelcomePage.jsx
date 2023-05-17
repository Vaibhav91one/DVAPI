import React, { useRef, useState } from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';


<style>
    @import url('https://fonts.googleapis.com/css2?family=Finlandica&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
</style>

function WelcomePage() {

    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const formRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    function handleMouseEnter() {
        setHovered(true);
    }

    function handleMouseLeave() {
        setHovered(false);
    }

    const sectionStyles = hovered ? {
        color: 'black',
        background: 'rgba(2,0,36,.2)',
        padding: '10px',
        margin: '2rem',
        borderRadius: '20px',
        marginTop: '1rem',
        // transform: 'scale(1.1)',
        transition: '.5s ease-in-out',
        border: '.5px solid rgb(92,243,208)',
        boxShadow: '4px 7px 30px 3px rgba(92,243,208,0.75)'
    } : {
        color: 'black',
        background: 'rgba(2,0,36,.2)',
        padding: '10px',
        margin: '2rem',
        borderRadius: '20px',
        marginTop: '1rem',
        transition: '.5s  ease-in-out',
        border: '.5px solid rgb(92,243,208)',

        // backgroundColor: 'rgba(153,33,193, .3)',
        // boxShadow: '4px 7px 30px 3px rgba(249,147,233,0.75) inset'
    };

    const headingStyles = {
        transition: '5s  ease-in-out',

        textAlign: 'center',
        marginBottom: '10px',
    };

    const formStyles = {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100vh',
        maxWidth: '500px',
        margin: '1rem auto',
        padding: '20px'
    };

    const labelStyles = {
        marginBottom: '0.5rem',
        width: "100%"
    };

    const inputStyles = {
        marginBottom: '1rem',
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        color: "black"
    };


    const textareaStyles = {
        marginBottom: '1rem',
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        minHeight: '200px',
        color: "black"

    };

    const buttonStyles = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };


    function scrollToSection(ref) {
        const sectionTop = ref.offsetTop;
        const scrollOptions = {
            top: sectionTop,
            behavior: 'smooth',
        };
        window.scrollTo(scrollOptions);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="my-animation">
            <div className="container" >
                <header>
                    <div className="header-element">
                        <div className="header-left">
                            {/* <button className="home-button">Home</button> */}
                        </div>
                        <div className="header-right">
                            <a className="contact-link" onClick={() => scrollToSection(aboutRef.current)}>About</a>
                            <a className="contact-link" onClick={() => scrollToSection(contactRef.current)}>Contact</a>
                            <a className="social-link"href="https://github.com/Vaibhav91one/DVAPI" target='_blank'>Github</a>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="welcome">
                        <h1>Welcome to DVAPI</h1>
                        <p>"Unlock the full potential of your APIs with peace of mind - Welcome to DVAPI, where security is our top priority."</p>
                        < Link to="/DVAPI" >
                            <button >Get Started</button>
                        </Link>
                        <button className='btn-dvapi' onClick={() => scrollToSection(aboutRef.current)}> About DVAPI </button>
                    </div>
                    <ScrollAnimation animateIn="fadeIn" delay='0'>
                        <div ref={aboutRef} className="about">
                            <h2>About DVAPI</h2>
                            <ul >
                                <li>DVAPI can be a valuable platform for developers and security professionals who are interested in exploring and addressing API vulnerabilities.</li>
                                <li>With DVAPI, users can explore various API vulnerabilities, such as authentication flaws, injection attacks, and insecure data transmission.</li>
                                <li>Moreover, DVAPI may offer a range of resources and tools to help users improve their API security practices.</li>
                                <li>By leveraging these resources, users can stay up-to-date with the latest API security trends and take proactive steps to secure their APIs against potential threats.</li>
                                <li>Using DVAPI to identify and address API vulnerabilities can help prevent data breaches, unauthorized access, and other security incidents.</li>
                                <li>Through regular testing and analysis, users can ensure that their APIs remain secure and protected against evolving threats.</li>
                            </ul>
                        </div>
                    </ScrollAnimation>
                    <div>
                        <ScrollAnimation animateIn="fadeIn" delay='.2'>
                            <section ref={contactRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={sectionStyles}>
                                <h2 style={headingStyles}>Contact Us</h2>
                                <form ref={formRef} onSubmit={handleSubmit} style={formStyles}>
                                    <label htmlFor="name" style={labelStyles}>Name:</label>
                                    <input type="text" id="name"  name="name" required style={inputStyles} />
                                    <label htmlFor="email" style={labelStyles}>Email:</label>
                                    <input type="email" id="email" name="email" required style={inputStyles} />
                                    <label htmlFor="message" style={labelStyles}>Message:</label>
                                    <textarea id="message" name="message" required style={textareaStyles}></textarea>
                                    <button type="submit" style={buttonStyles}>Send</button>
                                </form>
                            </section>
                        </ScrollAnimation>
                    </div>
                </main>
                <footer className="footer">
                    <div className="footer-text">
                        <p>&copy; 2023 DVAPI. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default WelcomePage;


