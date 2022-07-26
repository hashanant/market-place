import { Fragment, useState } from 'react';
import Content from '../Content';
import Header from '../Header';

const Home = () => {
  const [isCartOpen, setCartOpen] = useState<boolean>(false);

  const showCartHandler = (page: 'home' | 'cart') => {
    if (page === 'home') {
      setCartOpen(false);
    } else {
      setCartOpen(true);
    }
  };

  return (
    <Fragment>
      <Header showCartEvent={showCartHandler} />
      <Content showCart={isCartOpen} />
    </Fragment>
  );
};

export default Home;
