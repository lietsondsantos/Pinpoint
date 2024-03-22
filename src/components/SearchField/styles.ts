import Styled from 'styled-components'

export const Wrapper = Styled.div`
  width: max-content;
  height: max-content;

  form {
    width: 30rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.gray[900]};
    border: 2px solid ${({ theme }) => theme.colors.gray[900]};
    box-shadow: 0.5rem 0.5rem 0 ${({ theme }) => theme.colors.gray[900]};

    .searchField {
      width: 85%;
      height: 100%;
      font-size: 1rem;
      padding: 1rem;
      border: none;
    }

    .btn {
      width: 15%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      border-left: 2px solid ${({ theme }) => theme.colors.gray[900]};
      background-color: transparent;

      .btn__icon { }
    }
  }
`
export const Warning = Styled.div`
  width: 30rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.gray[900]};
  border: 2px solid ${({ theme }) => theme.colors.gray[900]};
  box-shadow: 0.5rem 0.5rem 0 ${({ theme }) => theme.colors.gray[900]};
`
