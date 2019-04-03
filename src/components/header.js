import React from 'react';
import styled from 'react-emotion';
import MenuItem from './menu-item';
import { colors, unit } from '../styles';

export default function Header() {
  return (
    <Container>
      <InnerContainer>
        <MenuItem to="/">
          Articles
        </MenuItem>
      </InnerContainer>
    </Container>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('footer')({
  flexShrink: 0,
  marginTop: 'auto',
  backgroundColor: 'white',
  color: colors.textSecondary,
  position: 'sticky',
  bottom: 0,
});

const InnerContainer = styled('div')({
  display: 'flex',
  alignItems: 'left',
  maxWidth: 250,
  padding: unit * 2.5,
  margin: '0 auto',
});
