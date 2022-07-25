import { Box, Button } from '@mui/material';
import styled from 'styled-components';

const QuantityField = styled(Box)(() => ({
  width: '60px',
  fontSize: 22,
  color: 'black',
  background: 'white',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 5,
  border: '1px solid darkgrey',
  cursor: 'default',
}));

const ItemButton = styled(Button)<{ color: string }>(({ color }) => ({
  size: 'medium',
  color,
  '& .Mui-disabled': { cursor: 'no-drop' },
}));

export { QuantityField, ItemButton };
