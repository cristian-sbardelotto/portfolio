import { Title } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 5vw 0 5vw;

  main {
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;

    @media screen and (max-width: 1680px) {
      max-width: 1250px;
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      justify-items: start;
    }
  }
`;

export const TitleGroup = styled.div`
  margin-bottom: 3rem;

  display: flex;
  justify-content: space-between;

  p {
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 2rem;

    a {
      color: ${({ theme }) => theme.colors.main};
      display: flex;

      &:hover {
        text-decoration: underline;

        svg {
          transform: translateX(1rem);
        }
      }

      svg {
        align-self: flex-end;
        transition: 0.2s transform;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    margin-bottom: 7rem;
  }
`;

export const StyledTitle = styled.h2`
  ${Title};
`;
