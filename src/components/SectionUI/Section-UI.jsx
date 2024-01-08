import React from 'react'

const SectionUI = ({children, customPadding}) => {
  return (
    <section className={`${customPadding ? customPadding : 'py-10' }`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default SectionUI