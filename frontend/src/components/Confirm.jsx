import React from 'react';

const logoutButtonStyles = 'flex w-full justify-center text-center bg-ruby-red text-white rounded-3xl p-3 font-xs shadow-lg shadow-gray-600 focus:outline-none focus:shadow-black hover:cursor-pointer hover:bg-white hover:text-black border-4 border-ruby-red transition-all duration-700 ease-out font-mono';
const editProfileButtonStyles = 'flex w-full justify-center text-center bg-black text-white rounded-3xl p-3 font-xs shadow-lg shadow-gray-600 focus:outline-none focus:shadow-black hover:cursor-pointer hover:bg-white hover:text-black border-4 border-black transition-all duration-700 ease-out font-mono';

function Confirm({ onYes, onNo, onClose }) {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className="flex md:w-full xs:w-3/4 flex-col justify-center item-center text-center gap-5">
                <p className="font-amatic text-6xl">Do you want to logout?</p>
                <p className="font-balsamiq text-3xl">
                    You will have to login again to keep on using PagInk
                </p>
                <div className="flex justify-center gap-10 items-center w-full">
                    <div className={`flex items-center justify-center w-1/2`}>
                        <button
                            className={editProfileButtonStyles}
                            onClick={() => {
                                onNo();
                                onClose();
                            }}
                        >
                            Return to PagInk
                        </button>
                    </div>
                    <div className="flex items-center justify-center w-1/2">
                        <button
                            className={logoutButtonStyles}
                            onClick={() => {
                                onYes();
                                onClose();
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Confirm;
