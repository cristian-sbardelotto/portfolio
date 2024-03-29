import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  li,
  a,
  button {
    width: 100%;
  }

  button {
    padding-block: 2rem;
    font-size: 1.5rem;
  }

  a:hover {
    .gray {
      color: #adb3b9;
    }

    .light-blue {
      color: #71b7fb;
    }

    .red {
      color: #ce3c30;
    }

    .green {
      color: #25d366;
    }

    .dark-blue {
      -webkit-filter: brightness(0.5);
      filter: brightness(0.5);
    }
  }
`;
