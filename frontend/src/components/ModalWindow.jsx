import React, { useState } from 'react';
import ReactModal from 'react-modal';

const ModalWindow = ({ title, content, isOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={`flex flex-col bg-white border-2 border-black w-5/6 gap-6 rounded-3xl justify-center items-center shadow-2xl shadow-black transition-all duration-500 transform${isModalOpen ? 'translate-y-0' : '-translate-y-full'}`}
      overlayClassName='flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-blur backdrop-blur-sm'
    >
      <div className='flex justify-center items-center p-4 w-full'>
        <p className='text-5xl font-amatic'>
          {title}
        </p>
      </div>
      <div className='flex justify-center items-center w-full'>
        {content}
      </div>
    </ReactModal>
  );
};

export default ModalWindow;
