
/*
pure component/presentation component/stateless component
- just only present the props.
- don’t need a state.
- reuse component around other component. 

container component/stateful component
- Contains logic code in component.
- Dependent on state for rendering, 
- such as fetching data.
- reuse component around other component

How many way component re-render?
- state change
- props change
- parent component render, so child component re-render
- key change (force update)
*/

import React from "react";


function Chart() {
  console.log('chart renreder')
  return (
    <div>chart</div>
  )
}

function Component() {
  const [forceUpdate, setForceUpdate] = React.useState(Date.now());

  function handleUpdate() {
    setForceUpdate(Date.now());
  }

  return (
    <div>
      <h1>Component</h1>

      <Chart key={forceUpdate}/>
      <button type="button" onClick={handleUpdate}>Force Update</button>
    </div>
  )
}

export default Component