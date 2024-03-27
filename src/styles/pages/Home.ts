import Styled from 'styled-components'

export const Wrapper = Styled.main`
  width: max-content;
  height: max-content;
  margin: auto auto;
  padding: 2rem;

  .top {
    width: max-content;
    height: max-content;
    display: flex;
    align-items: flex-end;

    .top__leftSide {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin-right: 30rem;

      .leftSide__title {
        font-size: 3rem;
      }

      .leftSide__description {
        width: 20rem;
        font-size: 1rem;
        margin-top: 0.2rem;
      }
    }

    .top__rightSide {
      width: max-content;
      height: max-content;

      .rightSide__select {
        width: 8rem;
        height: 3rem;
        font-size: 1rem;
        border: 2px solid ${({ theme }) => theme.colors.gray[900]};
        border-radius: 0;
        padding: 0.5rem;
        box-shadow: 0.3rem 0.3rem 0 ${({ theme }) => theme.colors.gray[900]};
        color: ${({ theme }) => theme.colors.gray[900]};
        background-color: ${({ theme }) => theme.colors.gray[50]};
        cursor: pointer;
      }
    }
  }
`

export const Container = Styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 4rem;
  gap: 1rem;
`
export const Loading = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .sk-cube-grid {
    width: 4rem;
    height: 4rem;
  }

  .sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: ${({ theme }) => theme.colors.gray[700]};
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  }

  .sk-cube-grid .sk-cube1 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube2 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube3 {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
  .sk-cube-grid .sk-cube4 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube5 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube6 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube7 {
    -webkit-animation-delay: 0s;
            animation-delay: 0s; }
  .sk-cube-grid .sk-cube8 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube9 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }

  @-webkit-keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    }
  }

  @keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    }
  }
`
