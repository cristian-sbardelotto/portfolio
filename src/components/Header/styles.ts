import styled from 'styled-components';
import { Title } from '@/styles/utils';

type NavLinksProps = {
  ismenuopen: string;
};

export const Header = styled.header`
  @keyframes appear {
    0% {
      transform: translateY(2rem);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: ${({ theme }) => theme.borders.mainLight};
  border-radius: 7px;
  animation: appear 0.5s;

  h1 {
    ${Title}
    font-size: 2.5rem;
  }
`;

export const NavLinks = styled.nav<NavLinksProps>`
  ul {
    display: flex;
    gap: 2rem;

    list-style: none;
    font-size: 1.6rem;

    animation: appear 0.2s;

    .contact-link {
      display: none;
    }

    @media screen and (max-width: 768px) {
      padding: 2rem;
      display: ${({ ismenuopen }) => (ismenuopen === 'true' ? 'flex' : 'none')};
      flex-direction: column;

      position: absolute;
      right: 7vw;
      top: 11vh;

      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.altBackground};

      .contact-link {
        display: inline-block;
      }
    }
  }

  li a {
    position: relative;

    transition: 0.2s all;

    &::before {
      content: '';
      width: 90%;
      height: 1.5px;
      position: absolute;
      top: 100%;
      left: 5%;

      background-color: ${({ theme }) => theme.colors.text};
      visibility: hidden;

      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover::before {
      visibility: visible;

      transform: scaleX(1);
    }
  }
`;

export const NavMenuGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .contact-button {
      display: none;
    }
  }
`;

export const NavButton = styled.button`
  padding: 1.5rem;
  display: none;

  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  .list-icon {
    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
