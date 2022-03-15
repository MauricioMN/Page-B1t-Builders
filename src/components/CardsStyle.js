import styled from 'styled-components'

export const DivCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .card {
    margin-top: 95px;
    border: none;
    .ellipse {
      display: flex;
      background: #f2b630;
      width: 275px;
      height: 275px;
      border-radius: 50%;

      .card-img-top {
        display: flex;
        margin: auto;
        width: 243.78px;
        height: 243.78px;
      }
    }

    .card-title {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 600;
      font-size: 26.17px;
      line-height: 31px;
      text-align: center;
      margin-top: 50px;
      color: #000000;
    }

    .card-text {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 26.17px;
      line-height: 31px;
      text-align: center;

      color: #000000;
    }
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    .card {
      margin-top: 40px;
      .card-body {
        .card-title {
          margin-top: 15px;
        }
      }
    }
  }
`
