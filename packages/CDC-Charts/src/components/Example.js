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
        <p>This is an example component showing basic React features like state, props and JSX.</p>
        <p>You've clicked the button: {number} times.</p>
        <button onClick={() => setNumber(number + 1)} className="mt-5 btn btn-primary btn-lg">Click Button</button>
      </section>
  )
}