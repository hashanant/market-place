import { Button, Card } from '@mui/material';
import styled from 'styled-components';

const QuantityField = styled('div')(() => ({
  width: '60px',
  fontSize: 22,
  color: '#222831',
  background: '#EEE',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 5,
  border: '1px solid darkgrey',
  cursor: 'default',
}));

const StyledCard = styled(Card)<{ width?: string }>(({ width }) => ({
  background: '#eee !important',
  color: '#222831 !important',
  marginBottom: 20,
  width,
}));

const ItemButton = styled(Button)<{ color: string }>(({ color }) => ({
  size: 'medium',
  color,
  '& .Mui-disabled': { cursor: 'no-drop' },
}));

export { QuantityField, StyledCard, ItemButton };
