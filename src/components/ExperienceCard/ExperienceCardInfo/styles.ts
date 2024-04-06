import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-left: 3rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Span = styled.span`
  font-size: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.main};

    &:hover {
      text-decoration: underline;
      filter: brightness(1.4);
    }
  }
`;

export const RelatedProjects = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors.lightText};
  }

  a,
  svg {
    color: ${({ theme }) => theme.colors.main};
  }

  svg {
    transition: transform 0.3s;
  }

  a:hover {
    text-decoration: underline;

    svg {
      transform: translate(2px, -2px);
    }
  }
`;
