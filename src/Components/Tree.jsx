
const Tree = (props) => {
   return (
      {if(props.tree.children) && props.tree.map(item => {
         if(item.children) return <Tree tree={item} />
         return <div>{item.label}</div>
      })
      }
   )
}

export default Tree
