import { CardContent, Divider, Grid, Typography } from '@mui/material';
import { StyledCard } from '../../styles/Common.styles';
import { priceFormatter } from '../../util/helper';

function CartItemsAction(props: { total: number }) {
  return (
    <StyledCard width='75em'>
      <CardContent>
        <Grid display='flex' justifyContent='flex-end'>
          <Typography variant='h5' fontWeight={600}>
            {`Total ${priceFormatter(props.total)}`}
          </Typography>
        </Grid>
        <Divider variant='middle' sx={{ marginTop: 3 }} />
      </CardContent>
    </StyledCard>
  );
}

export default CartItemsAction;
