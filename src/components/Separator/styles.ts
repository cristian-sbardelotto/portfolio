import styled from 'styled-components';

export const Separator = styled.div<{ $variant: 'dot' | 'line' }>`
  width: 2px;
  height: 2px;
  border-radius: 100%;

  background-color: ${({ theme }) => theme.colors.text};
`;
