import 'react-app-polyfill/ie11';
import React, { useState, useContext, useEffect } from 'react';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import testImage from '../assets/test-image.png';
import Context from '../context';

export default function Example({ backgroundColor }) {
  /**
   * A simple piece of state that is a number we display on the page.
   * This code creates the actual state variable `number` and `setNumber`
   * The method you call to update this piece of state.
   */
  const [state, setState] = useState({ data: undefined, number: 0 });

  /**
   * Here, we're pulling a bit of state from the global context instead
   * of passing it down. To see how this is passed down, check App.js.
   */
  const { pageContext, setPageContext } = useContext(Context);

  /**
   * You can set inline styles by declaring a regular
   * object and passing it to the element in the JSX.
   * Generally you should only do this when the styles
   * need to change on the fly and stick to regular SASS
   * and class names.
   * Learn more: https://reactjs.org/docs/dom-elements.html#style
   */
  const styleObj = {
    color: '#000',
    padding: '2rem',
    /**
     * Including the background color prop that was passed to
     * this component in index.js. Because the name of the property
     * is the same as the object key, we only need to type it once
     * instead of writing `backgroundColor: backgroundColor`
     */
    backgroundColor,
  };

  let xScale;
  let yScale;
  let compose;
  let xPoint;
  let yPoint;

  // Define the graph dimensions and margins
  const width = 500;
  const height = 500;
  const margin = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  };

  // Then we'll create some bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // We'll make some helpers to get at the data we want
  const x = (d) => d.letter;
  const y = (d) => +d.frequency * 100;

  useEffect(() => {
    if (!state.data) {
      fetch(pageContext.configUrl)
        .then((response) => response.json())
        .then(
          (response) => {
            if (!state.data && response.dataUrl) {
              fetch(response.dataUrl)
                .then((dataResponse) => dataResponse.json())
                .then((dataResponse) => {
                  setState({ data: dataResponse, number: state.number });
                });
            }
          },
          () => {
            // TODO add error handling
          }
        );
    }
  });

  if (state.data) {
    xScale = scaleBand({
      range: [0, xMax],
      round: true,
      domain: state.data.map(x),
      padding: 0.4,
    });
    yScale = scaleLinear({
      range: [yMax, 0],
      round: true,
      domain: [0, Math.max(...state.data.map(y))],
    });

    compose = (scale, accessor) => (data) => scale(accessor(data));
    xPoint = compose(xScale, x);
    yPoint = compose(yScale, y);
  }

  /**
   * Functional components always return a JSX object, which is
   * the templating language React uses. It's a modified form of HTML
   * usually surrounded by parenthesis. There are some differences,
   * usually in attribute names.
   * Learn more: https://reactjs.org/docs/introducing-jsx.html
   */
  return (
    <section style={styleObj} className="container mt-5">
      <img src={testImage} alt="Test" />
      <h2 className="mb-3">{pageContext.title}</h2>
      <p>
        This is an example component showing foundational React concepts like
        state, props and JSX. View the source code for more helpful information.
      </p>
      <p>
        Before using this starter kit it&apos;s very important that you read the{' '}
        <a href="https://github.com/CDCgov/react-starter-kit/blob/master/README.md">
          documentation
        </a>{' '}
        which contains helpful tips and guidelines to adhere to when creating
        your codebase that keep things easy to understand and maintainable for
        the entire team.
      </p>
      <h4 className="mt-4 mb-2">Example 1 - Local State</h4>
      <p>
        This example is simple. There&apos;s a piece of state held in the{' '}
        <code>Example.js</code> component that is a number. Clicking the first
        button increments by one. Clicking the reset button simply sets the
        state to 0.
      </p>
      <p className="h5 mt-3">
        <strong>You&apos;ve clicked the button: {state.number} times.</strong>
      </p>
      <div className="mt-3 mb-5">
        <button
          onClick={() => setState({ data: state.data, number: state.number + 1 })}
          type="button"
          className="btn btn-primary btn-lg mr-2"
        >
          Add One
        </button>
        <button
          onClick={() => setState({ data: state.data, number: 0 })}
          type="button"
          className="btn btn-outline-danger btn-lg"
        >
          Reset Counter
        </button>
      </div>
      <h4 className="mt-6 mb-2">Example 2 - Context API</h4>
      <p className="pb-3">
        Here&apos;s an example on how to hook up a text field that also uses
        React&apos;s{' '}
        <a href="https://reactjs.org/docs/context.html">Context API</a>. The
        text based piece of state that is the title is stored in the parent
        component, <code>App.js</code> but you can access it and change it here.
        Refer to the README for more information.
      </p>
      <form>
        <label htmlFor="changeTitle">
          <strong>Change Title</strong>
          <input
            type="text"
            name="changeTitle"
            id="changeTitle"
            value={pageContext.title}
            onChange={(e) => setPageContext({
              configUrl: pageContext.configUrl,
              title: e.target.value,
            })}
          />
        </label>
      </form>

      {state.data ? (
        <svg width={width} height={height}>
          {state.data.map((d) => {
            const barHeight = yMax - yPoint(d);
            return (
              <Group key={`bar-${d.letter}`}>
                <AxisLeft
                  scale={yScale}
                  top={0}
                  left={30}
                  label="Frequency"
                  stroke="#1b1a1e"
                  tickTextFill="#1b1a1e"
                />

                <AxisBottom
                  scale={xScale}
                  top={yMax}
                  left={30}
                  label="Letter"
                  numTicks={26}
                  stroke="#1b1a1e"
                  tickTextFill="#1b1a1e"
                />

                <Bar
                  x={xPoint(d) + 30}
                  y={yMax - barHeight}
                  height={barHeight}
                  width={xScale.bandwidth()}
                  fill="#fc2e1c"
                />
              </Group>
            );
          })}
        </svg>
      ) : (
        ''
      )}
    </section>
  );
}
