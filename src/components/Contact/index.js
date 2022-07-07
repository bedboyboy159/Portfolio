import './index.scss'
import {Loader} from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_ix4ng9a', 'template_ktjkdyr', form.current, 'CoLBunJikIcPN5l0R')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact me!
                    </h1>
                    <p>
                        For any other inqueries about myself or related topics. Please send me an email or give me a call.
                    </p>
                    <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="user_name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="user_email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
                    </div>
                </div>
            </div>
            <div className='other-contacts'>
                <div className='text-zone'>
                    <h1>Other contacts</h1>
                    <ul>
                        <li>Phone Number: (703) 232-9788</li>
                        <li>School Email: longh220@vt.edu</li>
                        <li>Personal Email: Long.L.Huynh @gmail.com</li>
                    </ul>               
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact