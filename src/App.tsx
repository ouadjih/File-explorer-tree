import "./App.css";

function App() {
  const files = {
    children: [
      {
        name: "public",
        children: [
          {
            name:"logo.svg"
          }
        ],
      },
      {
        name:"package.json"
      },
      {
        name:"tsconfig.json"
      }

    ],
  };
  type TEntry = {

  }
  function Entry({name,children}:{name:string,children?: []}){
    return
      
      
  }
  return <div className="App">
    {
      files.map(entry =><Entry {..entry}/>
      
      )
    }
  </div>;
}

export default App;
