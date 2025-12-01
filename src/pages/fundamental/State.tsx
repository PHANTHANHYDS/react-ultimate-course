import React from 'react'

/*
first render
next render (re-render): after update state
*/

function State() {
  const [count, setCount] = React.useState(1);
  const [person, setPerson] = React.useState({
    firstName: 'tony',
    lastName: 'nguyen',
    address: {
      city: 'hcm',
      state: 14
    }
  }); // memory A

  function handleIncrement() {
    // setCount(count + 1)
    // setCount(prevState => {
    //   return prevState + 1
    // })

    setCount(prevState => prevState + 1); 
  }

  function updateFirstName() {
    // person.firstName = person.firstName + Date.now(); // mutate object still memory A
    // const newPerson = {
    //   ...person, // copy all properties of object,
    //   firstName:  'tony'
    // }
    // setPerson(newPerson)

    // updater function / callback function
    setPerson((prevState) => {
      return {
        ...prevState,
        firstName: prevState.firstName + Date.now()
      }
    })
  }

  function updateCity() {
    setPerson((prevState) => {
      return {
        ...prevState,
        address: {
          ...prevState.address,
          city: prevState.address.city + Date.now()
        }
      }
    })
  }

  console.log('state render: ', {
    person
  })
  return (
    <div>
      <h1>State</h1>
      Count: {count} <br />
      Person first name: {person.firstName} <br />
      Person last name: {person.lastName} <br />
      <button type="button" onClick={handleIncrement}>Increment</button>
      <button type="button" onClick={updateFirstName}>Update First Name</button>
      <button type="button" onClick={updateCity}>Update City</button>
    </div>
  )
}

export default State