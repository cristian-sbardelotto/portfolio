import styled from 'styled-components';

export const Container = styled.span`
  padding-left: 3rem;

  p {
    font-size: 1.7rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.text};

    margin-bottom: 2rem;
    max-width: 80ch;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
