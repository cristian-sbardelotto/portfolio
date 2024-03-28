import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    display: inline-block;
    color: ${({ theme }) => theme.colors.lightText};

    font-size: 3rem;
  }

  img {
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    hr {
      display: none;
    }

    h3 {
      font-size: 2rem;
    }
  }
`;
