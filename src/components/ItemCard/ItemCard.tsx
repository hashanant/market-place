import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/use.redux';
import { addItem, removeItem } from '../../store/cart.slice';
import { IItems } from '../../types/itemType';
import ItemCardActions from '../ItemCardActions';

type TProps = { item: IItems };

const ItemCard: React.FC<TProps> = ({ item }) => {
  const { id, name, description, image, price } = item;

  const dispatch = useAppDispatch();
  const MIN: number = 0;
  const MAX: number = 5;
  const [quant, setQuant] = useState<number>(MIN);

  const actionHandler = (action: string) => {
    if (action === 'add' && quant < MAX) {
      setQuant((prevVal) => {
        return prevVal + 1;
      });
      dispatch(addItem({ id, name, price, qty: quant + 1 }));
    } else if (action === 'remove' && quant > MIN) {
      setQuant((prevVal) => {
        return prevVal - 1;
      });
      dispatch(removeItem({ id, name, price, qty: quant - 1 }));
    }
  };

  return (
    <Card sx={{ maxWidth: 345, background: 'lavender' }}>
      <CardMedia component='img' height='220' image={image} alt={name} />
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
            <Typography gutterBottom variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <ItemCardActions
              itemPrice={price}
              value={quant}
              callbackAction={actionHandler}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
