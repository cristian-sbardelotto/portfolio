import { Title } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 5vw 0 5vw;

  main {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-flow: row wrap;

    @media screen and (max-width: 768px) {
      gap: 5rem;
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
      color: ${({ theme }) => theme.colors.alt};
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
