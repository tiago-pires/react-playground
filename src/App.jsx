import tree from "./data.js";
import { useState } from "react";

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

function Item({ item }) {
   const [isOpen, setIsOpen] = useState(false);
   const { label, children, id } = item;
   if (Array.isArray(children)) {
      return (
         <li>
            <button onClick={() => setIsOpen((isOpen) => !isOpen)}>+</button>
            {label}
            <ul style={{display: isOpen ? 'block' : 'none'}}>
               {children.map((child) => {
                  return <Item key={child.id} item={child} />;
               })}
            </ul>
         </li>
      );
   } else {
      return <li> {label} </li>;
   }
}

export default App;
