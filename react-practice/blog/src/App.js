import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
        <div>{post}</div>
      </div>
    </div>
  );
}

export default App;
