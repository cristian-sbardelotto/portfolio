import styled from 'styled-components';

export const Container = styled.li`
  position: relative;
  width: 87px;
  height: 87px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  justify-self: end;

  border: transparent;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.main}08;

  transition: 0.7s border;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.main};

    p {
      visibility: visible;
    }
  }

  img {
    height: 4rem;
    width: 4rem;

    @media screen and (max-width: 768px) {
      height: 3.5rem;
      width: 3.5rem;
    }
  }
`;

export const StackTitle = styled.p`
  visibility: hidden;
  padding: 0.75rem 1rem;
  position: absolute;
  left: 0;
  bottom: 90%;
  z-index: 99;

  border: ${({ theme }) => theme.borders.main};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 1.25rem;
  user-select: none;
  white-space: nowrap;

  @media screen and (max-width: 524px) {
    left: 25%;
  }
`;
