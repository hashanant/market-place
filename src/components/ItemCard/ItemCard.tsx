import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { IItems } from '../../types/itemType';
import { QuantityField } from './ItemCard.Styled';

type props = { item: IItems };

const ItemCard: React.FC<props> = (props) => {
  const { id, name, description, image, price } = props.item;
  const nf = new Intl.NumberFormat();

  const MIN: number = 0;
  const MAX: number = 5;
  const [quantValue, setQuantVal] = useState<number>(MIN);

  const onClickHandler = (action: string) => {
    if (action === 'add' && quantValue < MAX) {
      setQuantVal((prevVal) => {
        return prevVal + 1;
      });
    } else if (action === 'remove' && quantValue > MIN) {
      setQuantVal((prevVal) => {
        return prevVal - 1;
      });
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
            <Typography gutterBottom variant='h5' component='div'>
              {name}
            </Typography>
            <Typography gutterBottom variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container display='flex' justifyContent='space-between'>
              <Grid item>
                <Typography variant='h6' fontWeight={600}>
                  {'\u20B9 ' + nf.format(price)}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container>
                  <Button
                    size='medium'
                    color='error'
                    variant='outlined'
                    disabled={quantValue === MIN}
                    sx={{ '&.Mui-disabled': { cursor: 'not-allowed' } }}
                    onClick={() => {
                      onClickHandler('remove');
                    }}
                  >
                    <RemoveIcon />
                  </Button>
                  <QuantityField>{quantValue}</QuantityField>
                  <Button
                    size='medium'
                    color='success'
                    variant='outlined'
                    disabled={quantValue === MAX}
                    sx={{ '&.Mui-disabled': { cursor: 'not-allowed' } }}
                    onClick={() => {
                      onClickHandler('add');
                    }}
                  >
                    <AddIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
