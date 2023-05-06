import React, { useEffect, useState } from 'react'

function Popup({ errors, visible }) {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    setShowDiv(visible);
  }, [visible]);

  return (
    <>
      <div className="w-full absolute items-center justify-end">
        <div className={`flex flex-col justify-center items-center w-full md:w-full p-6 rounded-b-3xl bg-ruby-red text-white text-center transition-all duration-500 transform ${showDiv ? 'translate-y-0' : '-translate-y-full'}`}>
          {errors.map(error => {
            return <span key={error}>{error}</span>
          })}
        </div>
      </div >
    </>
  )
}

export default Popup;
