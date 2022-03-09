import React, { useState } from "react";
import { Container, RudeButton, Rudeness, RudenessTitle } from './App.styled';
import { wordLists } from './wordLists';
import yourea from "./assets/voice1/yourea.mp3";
const sounds = wordLists.map(group => group.map(word => ({ word, sound: require(`./assets/voice1/${word.replace(" ", "")}.mp3`) })));
function App() {
  const [selected, setSelected] = useState(null);

  const pick = () => {
    const newSelected = [
      Math.floor(Math.random() * wordLists[0].length),
      Math.floor(Math.random() * wordLists[1].length),
      Math.floor(Math.random() * wordLists[2].length),
    ]
    setSelected(newSelected)

    const word0 = new Audio(yourea);
    const word1 = new Audio(sounds[0][newSelected[0]].sound);
    const word2 = new Audio(sounds[1][newSelected[1]].sound);
    const word3 = new Audio(sounds[2][newSelected[2]].sound);

    word0.play();
    word0.onended = () => {
      word1.play();
    }
    word1.onended = () => {
      word2.play();
    }
    word2.onended = () => {
      word3.play();
    }
  }

  return (
    <Container>
      {selected !== null ?
        <>
          <RudenessTitle>You're a</RudenessTitle>
          <Rudeness>{wordLists[0][selected[0]]} {wordLists[1][selected[1]]} {wordLists[2][selected[2]]}</Rudeness>
        </> : <>
          <RudenessTitle></RudenessTitle>
          <Rudeness></Rudeness>
        </>
      }
      <RudeButton onClick={pick}>!</RudeButton>
    </Container>
  );
}

export default App;
