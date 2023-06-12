import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 3rem;

  h3 {
    display: inline-block;
    margin-left: 3rem;

    font-size: 3rem;
  }

  img {
    border-radius: 50%;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding-left: 3rem;

  span {
    font-size: 1.5rem;

    a {
      color: ${({ theme }) => theme.colors.alt};

      &:hover {
        text-decoration: underline;
        filter: ${({ theme }) =>
          theme.title === 'light' ? 'brightness(0.7);' : 'brightness(1.4);'};
      }
    }
  }

  p {
    font-size: 1.7rem;

    margin-bottom: 2rem;
    max-width: 80ch;
  }
`;
