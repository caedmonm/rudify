import React, { useEffect, useState } from "react";
import {
  Container,
  CopiedMessage,
  RudeButton,
  Rudeness,
  RudenessTitle,
  ShareContainer,
} from "./App.styled";
import { wordLists } from "./wordLists";
import { useLocation, useNavigate } from "react-router-dom";
import { Share, Zap } from "react-feather";

const yourea = new Audio(require("./assets/voice1/yourea.mp3"));
const sounds = wordLists.map((group) =>
  group.map((word) => ({
    word,
    sound: new Audio(require(`./assets/voice1/${word.replace(" ", "")}.mp3`)),
  }))
);

function App() {
  const [selected, setSelected] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const [urlCopied, setUrlCopied] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (selected === null) {
      return false;
    }

    yourea.play();

    yourea.onended = () => {
      sounds[0][selected[0]].sound.play();
    };
    sounds[0][selected[0]].sound.onended = () => {
      sounds[1][selected[1]].sound.play();
    };
    sounds[1][selected[1]].sound.onended = () => {
      sounds[2][selected[2]].sound.play();
    };

    navigate("/" + selected.join("/"));

    setUrlCopied(false);
  }, [selected]);

  const pick = () => {
    // this is to init on ios
    if (firstLoad) {
      yourea.play();
      setTimeout(() => {
        yourea.pause();
      }, 1);
    }
		
    const urlPreset = location.pathname
      .split("/")
      .filter((i) => i !== "")
      .map((i) => Number(i));

    const newSelection =
      urlPreset.length === 3 && firstLoad
        ? urlPreset
        : [
            Math.floor(Math.random() * wordLists[0].length),
            Math.floor(Math.random() * wordLists[1].length),
            Math.floor(Math.random() * wordLists[2].length),
          ];

    setTimeout(() => {
      setSelected(newSelection);
    }, 2);

    if (firstLoad) {
      setFirstLoad(false);
    }
  };

  const copyURL = () => {
    setUrlCopied(false);
    setTimeout(() => {
      const dummy = document.createElement("input");
      const text = window.location.href;
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      setUrlCopied(true);
    }, 10);
  };

  return (
    <Container>
      {/* <Branding>Rudify!</Branding> */}
      {/* <Credit>By Caedmon &amp; Ivo Mullin</Credit> */}
      {selected !== null ? (
        <>
          <RudenessTitle>You're a</RudenessTitle>
          <Rudeness>
            {wordLists[0][selected[0]]} {wordLists[1][selected[1]]}{" "}
            {wordLists[2][selected[2]]}
          </Rudeness>
        </>
      ) : (
        <>
          <RudenessTitle></RudenessTitle>
          <Rudeness></Rudeness>
        </>
      )}
      <RudeButton onClick={pick}>
        <Zap color="#222" />
      </RudeButton>
      {selected && (
        <ShareContainer>
          <Share
            color={"#222"}
            size={30}
            onClick={copyURL}
            style={{ cursor: "pointer" }}
          />
          <CopiedMessage>{urlCopied && <>Link Copied</>}</CopiedMessage>
        </ShareContainer>
      )}
    </Container>
  );
}

export default App;
