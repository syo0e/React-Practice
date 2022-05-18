import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, b] = useState("남자 코트 추천");
  let posts = "강남 우동 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
