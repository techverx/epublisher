import styled from 'react-emotion';
import { lighten } from 'polished';

import { unit, colors } from '../styles';

const height = 30;
export default styled('button')({
  display: 'block',
  maxWidth: 100,
  height,
  margin: '0 auto',
  border: 'none',
  borderRadius: height / 2,
  fontFamily: 'inherit',
  fontSize: 15,
  lineHeight: `${height}px`,
  fontWeight: 600,
  color: 'white',
  backgroundColor: colors.red,
  cursor: 'pointer',
  outline: 'none',
  ':active': {
    backgroundColor: lighten(0.2, colors.red),
  },
});
