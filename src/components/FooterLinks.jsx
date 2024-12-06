import footerLinks from '../helper/footerLinks';
import './FooterLinks.scss';

const FooterLinks = () => {
  return (
    <div className='links'>
      {footerLinks.map((section) => (
        <div key={section.title} className='links__container'>
          <h4 className='links__title'>{section.title}</h4>
          <ul className='links__list'>
            {section.links.map((link) => (
              <li key={link.name} className='links__item'>
                <a href='/' className='links__item-list'>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
