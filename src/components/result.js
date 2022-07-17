import React, { useContext } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import editorContext from "../editorContext";
import { BsFillMarkdownFill } from "react-icons/bs";

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

const ResultArea = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;

function Result(props) {
  const { markdownText } = useContext(editorContext);

  return (
    <Container>
      <Title>
        <BsFillMarkdownFill style={{ transform: "translateY(2.5px)" }} />
        &nbsp; Converted Text
      </Title>
      <ResultArea>
        <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
      </ResultArea>
    </Container>
  );
}

export default Result;
