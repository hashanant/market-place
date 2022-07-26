import { CardContent, Divider, Grid, Typography } from '@mui/material';
import { QuantityField } from '../../styles/Common.styles';
import { ICartItem } from '../../types/Common.types';
import { priceFormatter } from '../../util/helper';

const CartItems: React.FC<ICartItem> = (props) => {
  const { name, price, qty } = props;

  return (
    <CardContent>
      <Typography gutterBottom variant='h6'>
        {name}
      </Typography>
      <Grid container display='flex' justifyContent='space-between'>
        <Typography variant='h5'>{`${priceFormatter(price)} x`}</Typography>
        <QuantityField>{qty}</QuantityField>
        <Typography variant='h5' fontWeight={600}>
          {priceFormatter(price * qty)}
        </Typography>
      </Grid>
      <Divider variant='middle' sx={{ marginTop: 3 }} />
    </CardContent>
  );
};

export default CartItems;
