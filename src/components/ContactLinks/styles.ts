import styled from 'styled-components';
import { appearUp } from '@/styles/utils';

export const Container = styled.ul`
  list-style: none;
  max-width: 700px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;

  li {
    opacity: 0;

    animation: ${appearUp} 0.75s;
    animation-fill-mode: forwards;
  }

  button {
    width: 190px;
    height: 170px;
    font-size: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  a:hover {
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
