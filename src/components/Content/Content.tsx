import { Grid } from '@mui/material';
import { Fragment } from 'react';
import data from '../../mocks/itemData';
import ItemCard from '../ItemCard';

const Content = () => {
  return (
    <Fragment>
      <Grid
        container
        spacing={2}
        style={{ padding: '60px 150px', background: 'moccasin' }}
      >
        {data.map((item) => (
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
        ))}
      </Grid>
    </Fragment>
  );
};

export default Content;
