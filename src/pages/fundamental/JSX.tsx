import React from 'react'

/* data type of javascript
primitive (nguyên thủy): boolean, null, string, undefiend, number, Symbol - so sánh tham trị
non-primitive: object, array, function  - so sánh tham chiếu (vùng nhớ)

objA = {}
objB = objA
objC = {}
*/
function JSX() {
  const jobs: any = [];

  const elementVariable = (
    <div>this is element jsx</div>
  )

  return (
    <>
      <h1>JSX</h1>
      {jobs.map((job: any) => {
        return (
          <React.Fragment key={job.id}>
            <h1>JSX</h1>
            <div 
              style={{ 
                color: 'red', 
                backgroundColor: 'black' 
              }}
            >
              this is dynamic style
            </div>
          </React.Fragment>
        )
      })}
      <br />
      <hr />
      <input />
      {elementVariable}

    </>
  )
}

export default JSX