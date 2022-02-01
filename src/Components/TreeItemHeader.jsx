const TreeItemHeader = (props) => {
   const { label, Icon, to, children } = props.item;
   return (
      <li key={label}>
         {label} + 
         <ul>
            {children.map((item, index) => {
               <li label={item.label}>{item.label}</li>;
            })}
         </ul>
      </li>
   );
};

export default TreeItemHeader;
