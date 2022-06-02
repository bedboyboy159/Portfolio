import './index.scss'
import {Loader} from 'react-loaders'

const Contact = () => {
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact me!
                    </h1>
                    <p>
                        For any other inqueries about myself or related topics. Please send me an email or give me a call. I would love to answer all your questions to the best of my knowledge.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type ="text" name="name" placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type ="email" name="email" placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact