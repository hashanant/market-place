import { Grid } from '@mui/material';
import { Fragment } from 'react';
import { useAppSelector } from '../../hooks/use.redux';
import data from '../../mocks/itemData';
import { StyledCard } from '../../styles/Common.styles';
import { IItems } from '../../types/Common.types';
import CartItems from '../CartItems';
import CartItemsAction from '../CartItemsAction';
import EmptyCart from '../EmptyCart';
import ItemCard from '../ItemCard';
import { ContentField } from './Content.Styled';

function Content({ showCart }: { showCart: boolean }) {
  const { cartItems, cartTotal, quantity } = useAppSelector(
    (state) => state.cartItem
  );

  const gridItemCard = (item: IItems) => (
    <Grid
      item
      key={item.id}
      xs={12}
      md={6}
      lg={4}
      display='flex'
      justifyContent='space-between'
    >
      <ItemCard item={item} />
    </Grid>
  );

  const gridCartItem = () => (
    <>
      <StyledCard width='75em'>
        {cartItems.map((item) => (
          <Grid item key={item.id} xs={12}>
            <CartItems {...item} />
          </Grid>
        ))}
      </StyledCard>
      <CartItemsAction total={cartTotal} />
    </>
  );

  return (
    <Fragment>
      <ContentField container spacing={3}>
        {showCart && quantity > 0 && gridCartItem()}
        {showCart && quantity < 1 && <EmptyCart />}
        {!showCart && data.map((item) => gridItemCard(item))}
      </ContentField>
    </Fragment>
  );
}

export default Content;
