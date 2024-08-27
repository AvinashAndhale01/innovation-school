import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const CustomSpinner = () => {
  return (
    <div className="spinner-overlay">
      <ClipLoader color="#007bff" size={50} />
      <style jsx>{`
        .spinner-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.3); /* Optional: background overlay */
          z-index: 9999; /* Ensure it’s above other content */
        }
      `}</style>
    </div>
  );
}

export default CustomSpinner;
