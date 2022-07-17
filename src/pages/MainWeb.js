import React, { useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import useLocalStorage from "../useLocalStorage";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

function MainWeb() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Link
          to={`/`}
          style={{
            textDecoration: "none",
            fontSize: "2em",
            paddingTop: "0.2em",
            paddingLeft: "0.2em",
            color: "white",
            justifyContent: "center",
          }}
        >
          <IoArrowBackCircle />
        </Link>
        <CodeEditor
          language="xml"
          icon={<SiHtml5 />}
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />

        <CodeEditor
          language="css"
          icon={<SiCss3 />}
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <CodeEditor
          language="javascript"
          icon={<SiJavascript />}
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ backgroundColor: "#fff" }}
        />
      </div>
    </>
  );
}

export default MainWeb;
