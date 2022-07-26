import { CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use.redux';
import { addItem, removeItem } from '../../store/cart.slice';
import { StyledCard } from '../../styles/Common.styles';
import { IItems } from '../../types/Common.types';
import ItemCardActions from '../ItemCardActions';

type TProps = { item: IItems };

const ItemCard: React.FC<TProps> = ({ item }) => {
  const { id, name, description, image, price } = item;

  const dispatch = useAppDispatch();
  const { MIN, MAX } = useAppSelector((state) => state.cartItem);
  const [qty, setQty] = useState<number>(MIN);

  const actionHandler = (action: 'add' | 'remove') => {
    if (action === 'add' && qty < MAX) {
      setQty((prevVal) => prevVal + 1);
      dispatch(addItem({ id, name, price, qty: qty + 1 }));
    } else if (action === 'remove' && qty > MIN) {
      setQty((prevVal) => prevVal - 1);
      dispatch(removeItem({ id, price, qty: qty - 1 }));
    }
  };

  return (
    <StyledCard>
      <CardMedia component='img' height='280' image={image} alt={name} />
      <CardContent>
        <Grid
          container
          direction='column'
          display='flex'
          justifyContent='space-between'
        >
          <Grid item>
            <Typography gutterBottom variant='h5'>
              {name}
            </Typography>
            <Typography gutterBottom variant='body2'>
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <ItemCardActions
              itemPrice={price}
              quantity={qty}
              callbackAction={actionHandler}
            />
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default ItemCard;
