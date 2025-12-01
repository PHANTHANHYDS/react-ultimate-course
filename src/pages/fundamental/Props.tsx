
/* get properties in object
1. notion -> object.firstName
2. name key -> object['first-name']

*/

import Button from "../../components/Button"

function LikeButton() {
  return (
    <button type="button">Like button</button>
  )
}

/*
const object = {
  firstName: 'tony',
  lastName: 'nguyen',
  age: 18
};
const firstName = object.firstName;
const lastName = object.lastName;
const age = object.age;

destructuring object
const { firstName, lastName, age } = object;

speard operator
// const objectB = {
//   firstName: object.firstName
//   lastName: object.lastName
//   age: object.age
// }
const objectB = {...object};

rest operator: get remains properties in object
const { firstName, ...rest } = object; // rest = { lastName, age }
*/

/*
render an component in jsx
1. </>
2. PascalCase
*/

function Snake({ 
  name = 'Default Name', // default value
  isLoading, 
  component1, 
  component2: Component2,
  email,
  age,
  ...restProps
}: any) {
  console.log('snake props: ', {
    restProps,
    likeBird: restProps['like-bird']
  })
  return (
    <div>
      Name: {name} <br />
      Show Loading: {isLoading ? 'true' : 'false'} <br />
      React Node: {component1} <br />
      Element Type: {<Component2 />} <br />
      Email: {email} <br />
      Age: {age}
    </div>
  )
}

function Props() {
  const person = {
    email: 'tony@gmail.com',
    age: 18
  }
  return (
    <div>
      <h1>Props</h1>

      <Snake 
        name="Tony"
        isLoading={true} // boolean
        colors={['red', 'green', 'yellow']} // array
        onClick={() => {}} // function
        like-bird={true}
        component1={<LikeButton />}
        component2={LikeButton}
        {...person}
      />
      <br />
      <Button 
        buttonText="Demo Rest & Destructuring"
        type="button"
        className="button-upload"
        onClick={() => {}}
        id="button-upload"
      >
        this is children
      </Button>
    </div>
  )
}

export default Props