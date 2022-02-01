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
   const {label, children} = item
   return (
      <li>
         {label}
         {Array.isArray(children) && (
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
