import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const RudeButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: #eee;
  display: block;
  border: none;
  font-size: 70px;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1))
    drop-shadow(-5px -5px 5px rgba(255, 255, 255, 0.8));
  border-radius: 30px;
  transition: 0.2s;
  color: #222;
  &:hover {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1))
      drop-shadow(-1px -1px 1px rgba(255, 255, 255, 0.8));
    font-size: 67px;
    transition: 0.1s;
    color: #000;
  }
  &:active {
    filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.1))
      drop-shadow(-0 -0 0 rgba(255, 255, 255, 0.8));
    font-size: 67px;
    color: #000;
  }
`;

export const RudenessTitle = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0;
  height: 30px;
  color: #000;
`;
export const Rudeness = styled.p`
  font-size: 28px;
  height: 50px;
  padding: 0;
  margin: 0;
  color: #000;
`;
