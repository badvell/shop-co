import Logo from '../components/Logo';
import Button from '../components/Button';
import FooterLinks from './FooterLinks';

import socialIcon from '../helper/socialIcon';
import footerImagesPayment from '../helper/footerImagesPayment';

import mail from '../assets/mail.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='newsletter'>
        <h3 className='newsletter__text'>
          Stay upto date about our latest offers
        </h3>
        <div className='newsletter__container'>
          <img src={mail} alt='mail icon' className='newsletter__img' />
          <input
            type='email'
            placeholder='Enter your email address'
            className='newsletter__input'
          />
          <Button
            color='#fff'
            colorText='#000'
            maxWidth='100%'
            width='100%'
            marginBottom='0'
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>

      <div className='footer__content'>
        <div className='footer__info'>
          <Logo />
          <p className='footer__text'>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <ul className='footer__list'>
            {socialIcon.map((icon) => (
              <li key={icon.id} className='footer__item'>
                <a href={icon.to} className='footer__item-list'>
                  <img src={icon.image} alt={icon.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <FooterLinks />
      </div>
      <div className='footer__copyright'>
        <p className='footer__copyright-text'>
          Shop.co &copy; {`2000-${new Date().getFullYear()}`}, All Rights
          Reserved
        </p>
        <div className='footer__copyright-wrapper'>
          {footerImagesPayment.map((image) => (
            <img
              src={image.image}
              alt={image.alt}
              key={image.alt}
              className='footer__copyright-img'
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
