import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-left: 3rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Span = styled.span`
  font-size: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.main};

    &:hover {
      text-decoration: underline;
      filter: brightness(1.4);
    }
  }
`;
