import { useState } from "react";
import tree from "./data/tree.js";

function App() {
   return (
      <div className="App">
         <ul>
            {tree.map((item) => (
               <Item key={item.id} item={item} />
            ))}
         </ul>
      </div>
   );
}

function Item(props) {
   const [isOpen, setIsOpen] = useState(false);
   const {item} = props
   return (
      <li >
         {item.label}
         {item.children && (
            <button onClick={() => setIsOpen( isOpen => !isOpen )}> + </button>
         )}
         {item.children && isOpen && (
            <ul>
               {item.children.map((child) => {
                  return <Item key={child.id} item={child} />;
               })}
            </ul>
         )}
      </li>
   );
}

export default App;
