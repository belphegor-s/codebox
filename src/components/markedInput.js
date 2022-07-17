import React, { useContext } from "react";
import styled from "styled-components";
import editorContext from "../editorContext";
import { AiFillFileText } from "react-icons/ai";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  font-family: "Open Sans", sans-serif;
`;

const Title = styled.div`
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid #4aee88;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  background: transparent;
  font-size: 17px;
  color: #fff;
`;

function MarkedInput(props) {
  const { setMarkdownText } = useContext(editorContext);

  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <Container>
      <Title>
        <AiFillFileText style={{ transform: "translateY(2.5px)" }} />
        &nbsp; Markdown Text
      </Title>
      <TextArea onChange={onInputChange} placeholder="Type here..." />
    </Container>
  );
}

export default MarkedInput;
