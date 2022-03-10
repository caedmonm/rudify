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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 100px;
  height: 100px;
  background-color: #eee;
  display: block;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 0;
  cursor: pointer;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.1))
    drop-shadow(-5px -5px 5px rgba(255, 255, 255, 0.8));
  border-radius: 30px;
  transition: 0.2s;
  color: #222;
  &:hover {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1))
      drop-shadow(-1px -1px 1px rgba(255, 255, 255, 0.8));
    transition: 0.1s;
    color: #000;
    svg {
      width: 33px;
      height: 33px;
    }
  }

  svg {
    width: 34px;
    height: 34px;
    transition: 0.1s;
  }
`;

export const Branding = styled.span`
  font-size: 24px;
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: bold;
  color: #bbb;
  opacity: 0.3;
`;

export const Credit = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-weight: bold;
  color: #444;
  opacity: 0.3;
`;

export const RudenessTitle = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0;
  height: 30px;
  color: #000;
  margin-top: -100px;
`;

export const Rudeness = styled.p`
  font-size: 28px;
  height: 70px;
  padding: 0;
  margin: 0;
  color: #000;
`;

export const ShareContainer = styled.div`
  position: absolute;
  text-align: center;
  margin-top: 300px;
`;

export const CopiedMessage = styled.div`
  font-size: 12px;
  font-weight: bold;
  opacity: 0;
  transition: 1s;
  height: 75px;
  &:empty {
    transition: 0s;
    opacity: 1;
  }
`;
