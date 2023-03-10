import "./App.css";
import {useState} from 'react'


const files = {
  children: [
    {
      name: "Public",
      children: [
        {
          name:"logo.svg",
        },
        {
          name:"Images",
          children: [
            {
              name:"profile.jpeg",
            },
            {
              name:"hero.png",
            }
          ]
        }
      ],
    },
    {
      name:"package.json"
    },
    {
      name:"tsconfig.json"
    },
   
  ],
};
type TEntry = {
  name:string;
  children?: TEntry[];
}
function Entry({entry ,depth}:{entry:TEntry;depth:number}){
  const [open,setOpen]=useState(true);
  return (
  <div className="folder">
    <div onClick={()=>setOpen(!open)}>
    {entry.children && (open?'- ':'+ ')}
    {' '+entry.name}
    </div>
    <div style={{paddingLeft:`${depth*10}px`}}>
     {open && entry.children?.map((entry) =>
        <Entry entry={entry} depth={depth+1}/> )
        }
    </div>
  </div>
  ); 
}
function App() {
  
  return (
  <div className="App">
    <p>File Explorer</p>
  {files.children.map((entry) =>(
       <Entry entry={entry} depth={1}/> 
      ))}
</div>);
}

export default App;
