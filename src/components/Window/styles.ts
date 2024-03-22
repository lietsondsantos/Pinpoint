import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colors.text};
  box-shadow: 0.5rem 0.5rem 0 ${({ theme }) => theme.colors.text};

  .head {
    width: 30rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.text};

    .head__title {
    }

    .head__list {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      gap: 0.5rem;

      .list__circle {
        width: 1rem;
        height: 1rem;
        border-radius: 50rem;
        border: 2px solid ${({ theme }) => theme.colors.text};
      }

      .list__circle--active {
        background-color: ${({ theme }) => theme.colors.text};
      }
    }
  }

  .context {
    width: 30rem;
    height: 20rem;
  }
`
