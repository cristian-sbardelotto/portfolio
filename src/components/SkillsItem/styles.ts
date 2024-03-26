import styled from 'styled-components';

export const Container = styled.li`
  width: fit-content;
  display: flex;
  flex-direction: column;
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
    height: 7rem;
    width: 7rem;

    @media screen and (max-width: 768px) {
      height: 6rem;
      width: 6rem;
    }
  }

  span {
    width: 12rem;

    text-align: center;
    font-size: 1.2rem;
  }
`;
