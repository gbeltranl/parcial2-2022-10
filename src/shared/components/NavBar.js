import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './NavBar.scss';
import { LOCALES } from '../../i18n/locales';
import { LocalContext } from '../../contexts/LocalContext';
import { useContext } from 'react';

export const NavBar = () => {
  const { locale, changeLocal } = useContext(LocalContext);
    return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#main'>
          <FormattedMessage id='test' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                <FormattedMessage id='pokemons' />
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/report'>
                <FormattedMessage id='Report' />
              </Link>
            </li>
            <li className='nav-item'>
              <button className='btn btn=primary' onClick = {changeLocal} ><FormattedMessage id='changeLanguage'/></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
