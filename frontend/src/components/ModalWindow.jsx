import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

const ModalWindow = ({ title, content, isOpen, onRequestClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);

    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      className={`flex flex-col bg-white border-2 border-black h-3/4 w-5/6 gap-6 rounded-3xl justify-start items-center shadow-2xl overflow-hidden shadow-black transition-all duration-500 transform${isModalOpen ? 'translate-y-0' : '-translate-y-full'}`}
      overlayClassName='flex items-center flex-wrap justify-center fixed top-0 left-0 right-0 bottom-0 bg-blur backdrop-blur-sm'
    >
      <div className='flex flex-col items-center m-4 gap-6 w-full overflow-y-scroll'>
        <div className='flex justify-center items-start w-full'>
          <p className='text-4xl font-amatic text-center'>
            {title}
          </p>
        </div>
        <div className='flex flex-wrap justify-center items-center w-full'>
          {content}
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalWindow;
