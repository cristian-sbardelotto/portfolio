import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 470px;
  margin-bottom: 50px;

  border-radius: 15px;
  background: ${({ theme }) => theme.colors.altBackground};

  overflow-x: hidden;
  overflow-y: auto;

  box-shadow: #0004 0 5px 15px;

  section {
    padding: 2rem;

    h4 {
      margin-bottom: 1.5rem;

      font-size: 2.5rem;
    }

    p {
      margin-bottom: 1.5rem;

      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 375px;

    section {
      padding: 1.5rem;

      h4 {
        margin-bottom: 1.5rem;

        font-size: 2rem;
      }

      p {
        margin-bottom: 1.2rem;

        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 658px) {
    width: 300px;
  }
`;

export const TechnologiesGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-flow: row wrap;

  span {
    padding: 0.5rem 1.75rem 0.75rem 1.75rem;

    background: ${({ theme }) => theme.colors.alt};
    border-radius: 30px;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1168px) {
    font-size: 1rem;

    span {
      padding: 0.25rem 1.25rem 0.5rem 1.25rem;
    }
  }
`;

export const ImageGroup = styled.div`
  position: relative;

  &:hover {
    div {
      visibility: visible;
    }

    img {
      filter: brightness(0.5);
    }
  }

  div {
    visibility: hidden;
    position: absolute;
    bottom: 5%;
    right: 5%;

    display: flex;
    gap: 1rem;

    a {
      transition: 0.3s all;
      color: #fff;
    }

    a:hover {
      color: ${({ theme }) => theme.colors.alt};
    }

    @media screen and (max-width: 658px) {
      right: 40%;
    }
  }

  img {
    transition: 0.3s all;

    height: 220px;
    width: 100%;
  }
`;
