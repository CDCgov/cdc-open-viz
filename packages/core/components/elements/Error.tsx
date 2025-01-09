import React from 'react'
const Error = ({ errorMessage }) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    background: 'white',
    zIndex: '999',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'content'
  }
  return (
    <section className='waiting' style={styles}>
      <section className='waiting-container'>
        <h3>Error With Configuration</h3>
        <p>{errorMessage}</p>
      </section>
    </section>
  )
}

export default Error
