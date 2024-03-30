import { appearDown } from '@/styles/utils';
import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 2rem 5rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;
  z-index: 2;

  backdrop-filter: blur(5px);
  background-color: #09090bcc;
  border-top: ${({ theme }) => theme.borders.main};
  border-radius: 7px;

  animation: ${appearDown} 0.5s;

  > a {
    color: ${({ theme }) => theme.colors.lightText};
    font-weight: 500;
    font-size: 1.75rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;

    > a {
      font-size: 1.2rem;
    }
  }
`;
