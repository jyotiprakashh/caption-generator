import React from 'react'

const PageHeader = ({h1T='Hello', h2T='Subheader'}) => {
  return (
    <section className="text-center mt-24 mb-10">
        <h1 className="text-3xl style={{textShadow: '1px 1px 0 rgba(0,0,0,0.4)'}}"> {h1T}
          </h1>
        <h2  className="text-white/75"> {h2T} </h2>
      </section>
  )
}

export default PageHeader