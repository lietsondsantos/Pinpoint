import { styled } from 'styled-components'

export const Wrapper = styled.main`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: auto auto;
  padding: 2rem;

  .top {
    .top__title {
      font-size: 3rem;
    }

    .top__description {
      width: 20rem;
      font-size: 1rem;
      margin-top: 0.2rem;
    }
  }
`

export const Container = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 4rem;
  gap: 1rem;
`
