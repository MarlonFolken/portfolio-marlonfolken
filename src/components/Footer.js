import '../App.css'
import github from '../assets/github-circle.svg';
import phone from '../assets/phone.svg';
import sendmail from '../assets/send-mail.svg';
import telegram from '../assets/telegram-circle.svg';

import './footer.css'

export default function Footer(){
  return (
    <footer>
      <div className="contactMedia">
        <ul>
          <li
            title='Github profile'
          >
            <a href='https://github.com/marlonfolken'
              target='_blank' rel='noreferrer'
            >
              <img
                className="logo"
                src={github}
                alt="github logo"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li
            title='Telegram message'
          >
            <a href='https://t.me/marlonvc'>
              <img 
                className="logo"
                src={telegram}
                alt="telegram logo"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li
            title='Phone call'
          >
            <a href="tel:+527224114502">
              <img 
                className="logo"
                src={phone}
                alt="phone logo"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li
            title='Send e-mail'
          >
            <a href='mailto:marlonvargasmx@gmail.com'>
              <img
                className="logo"
                src={sendmail}
                alt="email logo"
                width={50}
                height={50}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export {Footer}