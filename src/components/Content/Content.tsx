import { Grid } from '@mui/material';
import { Fragment } from 'react';
import data from '../../mocks/itemData';
import { IItems } from '../../types/itemType';
import ItemCard from '../ItemCard';

const Content = () => {
  const gridItemCard = (item: IItems) => (
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
  );

  return (
    <Fragment>
      <Grid
        container
        spacing={2}
        style={{ padding: '60px 150px', background: 'moccasin' }}
      >
        {data.map((item) => gridItemCard(item))}
      </Grid>
    </Fragment>
  );
};

export default Content;
