import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 500px;

  border-radius: 15px;
  background: ${({ theme }) => theme.colors.altBackground};

  overflow-x: hidden;
  overflow-y: auto;

  section {
    padding: 2rem;

    h4 {
      margin-bottom: 1.5rem;

      font-size: 2.5rem;
    }

    p {
      margin-bottom: 1.5rem;

      font-size: 1.5rem;
    }

    div {
      display: flex;
      gap: 1rem;

      span {
        padding: 0.5rem 1.75rem 0.75rem 1.75rem;

        background: ${({ theme }) => theme.colors.alt};
        border-radius: 30px;
        font-size: 1.5rem;
      }
    }
  }

  img {
    height: 50%;
    width: 100%;
  }
`;
