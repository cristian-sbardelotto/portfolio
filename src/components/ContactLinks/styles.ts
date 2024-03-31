import styled from 'styled-components';
import { appearUp } from '@/styles/utils';

export const Container = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  li {
    opacity: 0;

    animation: ${appearUp} 0.75s;
    animation-fill-mode: forwards;
  }

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

    .dark-blue {
      -webkit-filter: brightness(0.5);
      filter: brightness(0.5);
    }
  }

  @media screen and (max-width: 768px) {
    button {
      padding-block: 1rem;
      font-size: 1.3rem;

      svg,
      img {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`;
