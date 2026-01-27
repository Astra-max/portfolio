import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../src/styles/section2.css';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export default function AboutMe()
{
    return (
        <div className="about-me-main">
            <div className="second-container">
                <div className="with-image">
                    <img src="my-photo.jpg" alt="me" className="image-direction" />
                    <div className='about-text'>
                        <p className='me'>About me</p>
                        <p className='text'>
                            <FontAwesomeIcon icon={faQuoteLeft} size='2x' style={{
                                color: 'rgb(250, 23, 61)', paddingRight: '0.6rem'
                            }}/>
                            I'm Waore Maxwel, a full-stack web developer specializing in front-end development.
                            With expertise in React, HTML5, CSS, and REST API, I craft visually appealing and
                            user-friendly websites and web applications. My background in backend technologies
                            like MongoDB, MySQL, Express, and Node.js enables me to create seamless, end-to-end
                            solutions that meet your needs and exceed your expectation. Hire me to bring your 
                            digital projects to life with creativity, precision, and professionalism.
                            <FontAwesomeIcon icon={faQuoteRight} size='2x' style={{
                                color: 'rgb(250, 23, 61)', paddingLeft: '0.5rem',
                                paddingTop: '0.2rem',
                                position: 'absolute'
                            }}/>
                        </p>
                        <button className='fmore'>For more</button>
                    </div>
                </div>
            </div>    
        </div>
    );
}