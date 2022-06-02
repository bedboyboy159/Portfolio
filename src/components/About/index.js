import './index.scss'
import {Loader} from 'react-loaders'

const About = () => {
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        About me
                    </h1>
                    <p>
                        I'm currently a senior at Virginia Tech seeking for a job opportunity or an internship/co-op experience in full-stack developer. I'm hoping that I would be able to have more experience being a developer. By working in a professional environment, I will strive to become a strong asset for the team and the company.
                    </p>
                    <p>
                        I have experience with front-end frameworks such as Bootstrap, React, Vue, and JavaScript. Also, I'm in the process of learning about back-end through MySQL, Java, Python. 
                    </p>
                    <p>
                        I'm proficient in Java, C, HTML, CSS and Javascript. At the same time, I'm trying to improve my other familar coding languages and software such as: Git, Node js, React Js, SpringBoot and MongoDB.
                    </p>
                    <h1>
                        Skills
                    </h1>
                    <ul>
                        <li>Data Structures and Algorithms</li>
                        <li>Software Design and Data Structures</li>
                        <li>Data and Algorithm Analysis</li>
                        <li>Computer System</li>
                        <li>Computer Organization</li>
                    </ul>
                </div>
                {/* <div className='experience-zone'>
                    <h1>
                        Experiences
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div> */}
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About