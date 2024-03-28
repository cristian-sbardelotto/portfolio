import styled from 'styled-components';

export const Container = styled.main`
  height: 70vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  > div {
    padding-inline: 1rem;
    text-align: center;

    display: flex;
    align-items: center;
    gap: 2rem;

    h2 {
      font-size: 4rem;
    }

    .separator {
      width: 1.5px;
      height: 30px;
      background: #262525;
    }

    p {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.text};
      font-weight: 400;
    }
  }

  @media screen and (max-width: 768px) {
    > div {
      flex-direction: column;

      .separator {
        display: none;
      }
    }
  }
`;
