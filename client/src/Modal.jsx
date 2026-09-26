import React, { useState } from "react";

export const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <div>
      <>
        <button
          onClick={() => setShouldShow(true)}
          className="bg-blue-600 text-white py-2 px-3 ml-2 my-3 rounded-md  font-bold hover:bg-blue-800 transition-all duration-300"
        >
          Show Modal
        </button>
        {shouldShow && (
          <div
            onClick={() => setShouldShow(false)}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          >
            <div
              className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="bg-blue-600 text-white py-2 px-3 ml-2 my-3 rounded-md  font-bold hover:bg-blue-800 transition-all duration-300"
                onClick={() => setShouldShow(false)}
              >
                Hide Modal
              </button>
              {
                children
              }
            </div>
          </div>
        )}
      </>
    </div>
  );
};
