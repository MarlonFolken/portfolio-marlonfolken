//import Image from 'next/image';
import styles from '../App.css';
//import footstyles from './components/footer.css';

export default function Footer(){
  return (
    <footer>
      <div className="contactMedia">
        <ul>
          <li
            title='Github profile'
          >
            <a href='https://github.com/marlonfolken'
              target='_blank'
            >
              <img
                className={styles.logo}
                src={`../public/github-circle.svg`}
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
                className={styles.logo}
                src={`../public/telegram-circle.svg`}
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
                className={styles.logo}
                src={`../public/phone.svg`}
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
                className={styles.logo}
                src={`../public/send-mail.svg`}
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