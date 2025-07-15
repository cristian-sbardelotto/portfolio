import { Title, appearUp } from '@/styles/utils';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  margin-top: 8vh;
  padding-inline: 4rem;
  padding-bottom: 4rem;

  display: flex;
  justify-content: space-between;
  gap: 3rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
  }

  .article {
    opacity: 0;

    animation: ${appearUp} 0.75s;
    animation-delay: 0.75s;
    animation-fill-mode: forwards;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
  }
`;

export const AboveTitle = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.main}10;
  color: ${({ theme }) => theme.colors.main};
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 1.4rem;
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.main}30;
`;

export const StyledTitle = styled.div`
  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  width: 400px;
  direction: ltr;

  border-right: 3px solid;
  white-space: nowrap;
  animation: typing 3.5s steps(21) forwards, blink 0.8s infinite alternate;
  overflow: hidden;

  h2 {
    ${Title};

    span {
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.main},
        ${({ theme }) => theme.colors.lightMain}
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media screen and (max-width: 1440px) {
    width: 370px;

    h2 {
      font-size: 3.75rem !important;
    }
  }

  @media screen and (max-width: 768px) {
    width: 250px;

    h2 {
      font-size: 2.5rem !important;
    }
  }
`;

export const Article = styled.article`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 60ch;
  font-size: 1.8rem;
  line-height: 150%;

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.7rem;
    line-height: 1.6;
    max-width: 500px;

    a {
      display: inline-flex;
      align-items: start;

      color: ${({ theme }) => theme.colors.lightText};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    gap: 1.5rem;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;

    max-width: 448px;

    a {
      width: 100%;

      button {
        width: 100%;
      }
    }
  }
`;

export const ImageGroup = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  opacity: 0;

  animation: ${appearUp} 0.75s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;

  @media screen and (max-width: 1024px) {
    display: none !important;
  }
`;

export const StyledImage = styled(Image)`
  transition: scale 0.3s;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: #00000070 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  &:hover {
    scale: 1.02;
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
    margin-left: auto;

    /* align-self: flex-end; */
  }
`;

export const ImageBadge = styled.div`
  position: absolute;
  bottom: -5%;
  left: -15%;
  padding: 12px 25px;

  display: flex;
  align-items: center;
  gap: 10px;

  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.colors.main}20 5px 5px 2px,
    ${({ theme }) => theme.colors.main}10 10px 10px 4px;
  transition: scale 0.3s;

  &:hover {
    scale: 1.04;
  }
`;
