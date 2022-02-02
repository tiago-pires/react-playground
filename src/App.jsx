import { useState } from "react";
import tree from "./data.js";

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

function Item({item}) {
   const [isOpen, setIsOpen] = useState(false);
   const {label, children} = item
   return (
      <li>
         {Array.isArray(children) && (
            <button onClick={() => setIsOpen( isOpen => !isOpen )}> + </button>
         )}
         {label}
         {children && isOpen && (
            <ul>
               {children.map((child) => {
                  return <Item key={child.id} item={child} />;
               })}
            </ul>
         )}
      </li>
   );
}

export default App;
