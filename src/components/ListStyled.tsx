import styled from "styled-components";

const ListStyled = styled.div`
  ul {
    padding-inline-start: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  li {
    list-style: none;
    text-align: center;
    background-color: #eff4fb;
    height: 60px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    max-width: 500px;
    width: 100%;
  }

  .list__button {
    margin-left: 1%;
    height: 60px;
    padding: 0 0;
    background-color: #4987fa;
    width: 50px;
    color: #fff;
    width: 100%;
    border: none;
    max-width: 60px;
  }

  .list__button:hover {
    background-color: #4b58db;
    cursor: pointer;
  }

  .list__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .list-container {
    display: flex;
    max-width: 500px;
    width: 100%;
    padding-bottom: 10px;
  }

  @media (max-width: 645px) {
    ul {
      align-items: center;
      margin-right: 10%;
      margin-left: 10%;
    }
    li {
      font-size: 15px;
    }
  }
`;

export default ListStyled;
