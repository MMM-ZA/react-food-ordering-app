import { Fragment } from 'react';
import classes from './Header.module.css';
import FoodImage from '../../assets/FoodImage.png';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
  <Fragment>
  <header className={classes.header}>
    <h1>Organic Kitchen</h1>
    <HeaderCartButton onClick={props.onShowCart}/>
  </header>
  <div className={classes['main-image']}>
    <img src={FoodImage} alt='organic pasta and a fork'/>
  </div>
  </Fragment>
  )

};

export default Header;
