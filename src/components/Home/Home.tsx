import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Grid, Typography } from '@mui/material';
import { QuantityField } from '../../styles/Common.styled';
import { HeaderField } from './Home.Styled';

const Home = () => {
  const cartOpeningHandler = () => {
    console.log('clicked');
  };

  return (
    <HeaderField
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Grid item>
        <Typography variant='h4'>Sneakers Market Place</Typography>
      </Grid>
      <Grid item>
        <Grid container onClick={cartOpeningHandler}>
          <ShoppingCartOutlinedIcon
            fontSize='large'
            style={{ cursor: 'pointer' }}
          />
          <QuantityField>{0}</QuantityField>
        </Grid>
      </Grid>
    </HeaderField>
  );
};

export default Home;
