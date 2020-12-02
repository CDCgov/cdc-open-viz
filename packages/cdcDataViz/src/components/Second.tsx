import React, { useState } from 'react';

export default function SecondExample() {
  // Example of hook based state where we define the type as a boolean.
  const [showing, setShowing] = useState < boolean >(true);

  return (
    <section className="mt-5">
      {showing && <p>Second component using TypeScript</p>}
      <button type="button" onClick={() => setShowing(!showing)}>{showing ? 'Hide' : 'Show' }</button>
    </section>
  );
}
