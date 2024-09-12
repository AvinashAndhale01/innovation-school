import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const CustomSpinner = () => {
  return (
    <div className="spinner-overlay">
      <ClipLoader color="#005b83" size={40} />
      <style jsx>{`
        .spinner-overlay {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-width:"4px";
        }
      `}</style>
    </div>
  );
}

export default CustomSpinner;
