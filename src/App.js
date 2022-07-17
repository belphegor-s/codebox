import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";
import MarkedInput from "./components/markedInput";
import Result from "./components/result";
import EditorContext from "./editorContext";
import Main from "./pages/Main";
import MainWeb from "./pages/MainWeb";
import { IoArrowBackCircle } from "react-icons/io5";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 1em;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function App() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/code-collab" element={<Home />}></Route>
          <Route
            path="/code-collab/editor/:roomId"
            element={<EditorPage />}
          ></Route>
          <Route
            path="/markdown-editor"
            element={
              <EditorContext.Provider value={contextValue}>
                <AppContainer>
                  <Title
                    className="markdown-title"
                    style={{
                      display: "flex",
                      marginTop: "1em",
                    }}
                  >
                    <Link
                      to={`/`}
                      style={{
                        textDecoration: "none",
                        fontSize: "1em",
                        color: "white",
                        paddingRight: "0.5em",
                        transform: "translateY(4px)",
                      }}
                    >
                      <IoArrowBackCircle />
                    </Link>
                    Markdown Editor
                  </Title>
                  <EditorContainer>
                    <MarkedInput />
                    <Result />
                  </EditorContainer>
                </AppContainer>
              </EditorContext.Provider>
            }
          ></Route>
          <Route path="/web-renderer" element={<MainWeb />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
