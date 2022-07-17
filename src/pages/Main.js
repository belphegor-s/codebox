import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="main-title">Code Box</div>
        <br />
        <Link to={`/code-collab`} style={{ textDecoration: "none" }}>
          <div className="links">Code Collab</div>
        </Link>
        <Link to={`/markdown-editor`} style={{ textDecoration: "none" }}>
          <div className="links">Markdown Editor</div>
        </Link>
        <Link to={`/web-renderer`} style={{ textDecoration: "none" }}>
          <div className="links">Web Renderer</div>
        </Link>
        <footer>
          <p>
            Created with 💚 by{" "}
            <a href="https://github.com/belphegor-s" target="_blank">
              Ayush
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default Main;
