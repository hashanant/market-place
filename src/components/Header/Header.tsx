import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks/use.redux';
import { QuantityField } from '../../styles/Common.styles';
import { HeaderField } from './Header.Styled';

type TProps = { showCartEvent: (page: 'home' | 'cart') => void };

const Header: React.FC<TProps> = ({ showCartEvent }) => {
  const { quantity } = useAppSelector((state) => state.cartItem);

  return (
    <HeaderField
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Grid item>
        <Typography
          variant='h4'
          onClick={() => showCartEvent('home')}
          sx={{ cursor: 'pointer' }}
        >
          Sneakers Market Place
        </Typography>
      </Grid>
      <Grid item>
        <Grid container onClick={() => showCartEvent('cart')}>
          <ShoppingCartOutlinedIcon
            fontSize='large'
            style={{ cursor: 'pointer' }}
          />
          <QuantityField>{quantity}</QuantityField>
        </Grid>
      </Grid>
    </HeaderField>
  );
};

export default Header;
