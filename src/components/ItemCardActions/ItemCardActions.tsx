import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks/use.redux';
import { ItemButton, QuantityField } from '../../styles/Common.styles';
import { priceFormatter } from '../../util/helper';

type IProps = {
  itemPrice: number;
  quantity: number;
  callbackAction: (action: 'add' | 'remove') => void;
};

const ItemCardActions: React.FC<IProps> = (props) => {
  const { itemPrice = 0, quantity, callbackAction } = props;
  const { MIN, MAX } = useAppSelector((state) => state.cartItem);

  return (
    <Grid container display='flex' justifyContent='space-between'>
      <Grid item>
        <Typography variant='h6' fontWeight={600}>
          {priceFormatter(itemPrice)}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container>
          <ItemButton
            color='error'
            variant='outlined'
            disabled={quantity === MIN}
            onClick={() => {
              callbackAction('remove');
            }}
          >
            <RemoveIcon />
          </ItemButton>
          <QuantityField color='grey'>{quantity}</QuantityField>
          <ItemButton
            color='success'
            variant='outlined'
            disabled={quantity === MAX}
            onClick={() => {
              callbackAction('add');
            }}
          >
            <AddIcon />
          </ItemButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemCardActions;
