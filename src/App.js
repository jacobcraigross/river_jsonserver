import Header from './components/Header';

function App() {
  const river = "brazos";
  const creek = false

  // video @ 27:55 

  return (
    // will only return one parent element. (the div)
    <div className="container">
      <h1>hello from react</h1>
      <p>{river}</p>
      <p>{creek ? 'the creek is true' : 'no creek listed'}</p>
      <Header title="Brazos and Trinity River" />
      <p>some more text</p>
      <button>click</button>
    </div>

    // cannot put an H1 or p tag here, must go in the parent element above (the div in this case)
  );
}

export default App;
