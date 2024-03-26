import styled from 'styled-components';

export const Container = styled.li`
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
  }

  img {
    height: 5rem;
    width: 5rem;

    @media screen and (max-width: 768px) {
      height: 4rem;
      width: 4rem;
    }
  }

  span {
    width: 12rem;

    text-align: center;
    font-size: 1.2rem;
  }
`;
