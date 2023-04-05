import React from "react";

const Modal = ({ isOpen, handleClose, children }) => {
  const showHideClassName = isOpen ? "fixed inset-0 z-10 overflow-y-auto" : "hidden";

  return (
    <div className={showHideClassName}>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md w-full">
          <div className="bg-white px-4 py-5 sm:px-6">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-medium text-gray-900">{children.header}</h3>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                onClick={handleClose}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:p-6">
            {children.body}
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse">
            {children.footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
