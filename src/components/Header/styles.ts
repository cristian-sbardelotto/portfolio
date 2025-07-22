import styled from 'styled-components';
import { appearUp } from '@/styles/utils';

type NavLinksProps = {
  $ismenuopen: boolean;
};

export const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  padding: 4rem 2rem;
  z-index: 50;
`;

export const Header = styled.header`
  margin-inline: auto;
  max-width: 1000px;
  padding: 2rem 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: ${({ theme }) => theme.borders.main};
  border-radius: 1000px;
  background-color: ${({ theme }) => `${theme.colors.background}80`};
  backdrop-filter: blur(5px);
  animation: ${appearUp} 0.5s;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.main};
    transition: 0.3s filter;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 1.25px;

    &:hover {
      filter: brightness(0.8);
    }

    a {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const NavLinks = styled.nav<NavLinksProps>`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;

    list-style: none;
    font-size: 1.6rem;

    animation: ${appearUp} 0.2s;

    .active {
      color: ${({ theme }) => theme.colors.main};
      pointer-events: none;
    }

    .contact-link {
      display: none;
    }

    @media screen and (max-width: 768px) {
      padding: 2rem;
      display: ${({ $ismenuopen }) => ($ismenuopen ? 'flex' : 'none')};
      flex-direction: column;
      align-items: flex-start;

      position: absolute;
      right: 20px;
      top: 60px;
      z-index: 100;

      border: ${({ theme }) => theme.borders.main};
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.lightBackground};

      div {
        display: none;
      }

      .contact-link {
        display: inline-block;
      }
    }
  }

  li a {
    position: relative;
    color: ${({ theme }) => theme.colors.text};

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

  .list-icon {
    color: ${({ theme }) => theme.colors.lightText};
    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding: 0;
  }
`;
