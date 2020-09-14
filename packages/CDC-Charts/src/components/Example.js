import 'react-app-polyfill/ie11';
import React, {useState} from 'react'

export default ({ backgroundColor }) => {

  /**
   * A simple piece of state that is a number we display on the page.
   * This code creates the actual state variable `number` and `setNumber` the method you call to update this piece of state.
   */
  const [ number, setNumber ] = useState(0)

  /**
   * You can set inline styles by declaring a regular object and passing it to the element in the JSX.
   * Generally you should only do this when the styles need to change on the fly and stick to regular SASS and class names.
   * 
   * Learn more: https://reactjs.org/docs/dom-elements.html#style
   */
  const styleObj = {
    color: "#000",
    padding: "2rem",
    // Including the background color prop that was passed to this component in index.js.
    // Because the name of the property is the same as the object key, we only need to type it once instead of writing `backgroundColor: backgroundColor`
    backgroundColor
  }

  /**
   * Functional components always return a JSX object, which is the templating language React uses.
   * It's a modified form of HTML usually surrounded by parenthesis. There are some differences, usually in attribute names.
   * 
   * Learn more: https://reactjs.org/docs/introducing-jsx.html
   */
  return (
      <section style={styleObj} className="container mt-5">
        <h2 className="mb-3">CDC React Starter Kit</h2>
        <p>This is an example component showing foundational React concepts like state, props and JSX. View the source code for more helpful information.</p>
        <p>Before using this starter kit it's very important that you read the <a href="https://github.com/CDCgov/react-starter-kit/blob/master/README.md">documentation</a> which contains helpful tips and guidelines to adhere to when creating your codebase that keep things easy to understand and maintainable for the entire team.</p>
        <p className="h5 mt-5"><strong>You've clicked the button: {number} times.</strong></p>
        <div className="mt-4">
          <button onClick={() => setNumber(number + 1)} className="btn btn-primary btn-lg mr-2">Click Button</button>
          <button onClick={() => setNumber(0)} className="btn btn-outline-danger btn-lg">Reset Counter</button>
        </div>
      </section>
  )
}