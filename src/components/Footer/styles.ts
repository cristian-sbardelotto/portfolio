import { appearDown } from '@/styles/utils';
import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 3rem 4rem;
  width: 100%;

  border-top: ${({ theme }) => theme.borders.main};
  background: ${({ theme }) => theme.colors.background};
  animation: ${appearDown} 0.5s;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth};
  margin-inline: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;

    .social-links {
      align-self: flex-end;
    }
  }
`;

export const FooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.8rem;
    font-weight: 500;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text};
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1.6rem;
    }
    span {
      font-size: 1.2rem;
    }
  }
`;
