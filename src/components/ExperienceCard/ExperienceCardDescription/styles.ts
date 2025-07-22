import styled from 'styled-components';

export const Container = styled.p`
  font-size: 1.7rem;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 2rem;
  max-width: 80ch;
`;
