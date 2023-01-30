import { Fragment } from 'react';
import classes from './Header.module.css';
import OKmainimage from '../../assets/OKmainimage.png';

const Header = props => {
  return (
  <Fragment>
  <header className={classes.header}>
    <h1>Organic Kitchen</h1>
    <button>Cart</button>
  </header>
  <div className={classes['main-image']}>
    <img src={OKmainimage} alt='organic cake and a drink'/>
  </div>
  </Fragment>
  )

};

export default Header;
