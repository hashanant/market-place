import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks/use.redux';
import { ItemButton, QuantityField } from '../../styles/Common.styled';

type IProps = {
  itemPrice: number;
  value: number;
  callbackAction: (action: string) => void;
};

const ItemCardActions: React.FC<IProps> = (props) => {
  const { itemPrice = 0, value, callbackAction } = props;
  const { MIN, MAX } = useAppSelector((state: any) => state.cartItem);
  const nf = new Intl.NumberFormat();

  return (
    <Grid container display='flex' justifyContent='space-between'>
      <Grid item>
        <Typography variant='h6' fontWeight={600}>
          {'\u20B9 ' + nf.format(itemPrice)}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container>
          <ItemButton
            color='error'
            variant='outlined'
            disabled={value === MIN}
            onClick={() => {
              callbackAction('remove');
            }}
          >
            <RemoveIcon />
          </ItemButton>
          <QuantityField color='grey'>{value}</QuantityField>
          <ItemButton
            color='success'
            variant='outlined'
            disabled={value === MAX}
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
