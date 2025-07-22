import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth};
  width: 100%;
  margin-inline: auto;
`;
