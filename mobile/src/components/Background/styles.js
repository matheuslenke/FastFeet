import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;

  position: relative;
  z-index: 1;
  background: #fff;
  justify-content: flex-start;
`;

export const BackgroundRoxo = styled.View`
  background: ${colors.primary};
  height: 15%;
`;

export const Content = styled.View`
  flex: 1;
  margin: -100px 0 0 0;
`;
