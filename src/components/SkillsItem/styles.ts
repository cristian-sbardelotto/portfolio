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

  border: 1px solid #fff2;
  border-radius: 15px;
  background-color: #0d0d0f;

  transition: 0.7s border;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.alt};

    p {
      visibility: visible;
    }
  }

  img {
    height: 5rem;
    width: 5rem;

    @media screen and (max-width: 768px) {
      height: 4rem;
      width: 4rem;
    }
  }
`;

export const StackTitle = styled.p`
  visibility: hidden;
  padding: 0.75rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 65%;
  z-index: 99;

  border: 1px solid #fff4;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 1.25rem;
  user-select: none;

  @media screen and (max-width: 524px) {
    left: 25%;
  }
`;
