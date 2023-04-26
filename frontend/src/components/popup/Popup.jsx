import React, { useEffect, useState } from 'react'

function Popup({ errors, visible }) {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    setShowDiv(visible);
  }, [visible]);

  return (
    <>
      <div className="w-full -z-10 h-3/4 fixed flex items-center justify-end">
        <div className={`flex flex-col justify-center items-center w-3/4 md:w-1/3 p-6 rounded-l-3xl bg-ruby-red text-white text-center transition-all duration-500 transform ${showDiv ? 'translate-x-0' : 'translate-x-full'}`}>
          {errors.map(error => {
            return <span>{error}</span>
          })}
        </div>
      </div >
    </>
  )
}

export default Popup;
