import meme from '../../assets/ohyeah.png';
import './About.css';

const About = () => {
    return (
        <div className="About">
            <h1>On campus tracker</h1>
            <p>
                Welcome to on campus tracker. This is a web application built as an academic activity for the subject <code>IDG2100 - Full stack Web developemnt</code>.
                The students used this as a learning platform and contributed creating new functionalities or improving the existing ones.
            </p>
            <img src={meme} alt="oh yeah meme"/>
        </div>
    );
}

export default About;