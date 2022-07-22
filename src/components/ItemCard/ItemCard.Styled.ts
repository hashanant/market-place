import { Box } from '@mui/material';
import styled from 'styled-components';

const QuantityField = styled(Box)(() => ({
  width: '60px',
  fontSize: 22,
  background: 'white',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 5,
  border: '1px solid black',
  cursor: 'pointer',
}));

export { QuantityField };
