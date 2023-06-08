import styled from 'styled-components';

export const Header = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.5rem;

    span {
      color: ${({ theme }) => theme.colors.alt};
    }
  }

  nav ul {
    margin-right: 4rem;
    display: flex;
    gap: 2rem;

    list-style: none;
    font-size: 1.6rem;

    li a {
      position: relative;

      transition: 0.2s all;

      &::before {
        content: '';
        position: absolute;
        width: 90%;
        height: 1.5px;
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
  }

  > div {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    button {
      padding: 1rem 1.5rem;

      border: 2px solid ${({ theme }) => theme.colors.text};
      border-radius: 8px;
      background: transparent;
      font-family: '__Plus_Jakarta_Sans_fd0c7c',
        '__Plus_Jakarta_Sans_Fallback_fd0c7c';
      font-weight: 600;

      transition: all 0.2s;

      &:hover {
        background: ${({ theme }) => theme.colors.text};
        cursor: pointer;

        a {
          color: ${({ theme }) => theme.colors.background};
        }
      }
    }
  }
`;
