import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/pfp.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to ='/'>
            <img src={LogoS} alt ="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a href="https://github.com/bobangajicsm" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            {/* <li>
                <a href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>
            </li> */}
      </ul>
    </div>
)

export default Sidebar