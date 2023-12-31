import React, { useState } from 'react';
import PopupForm from './PopupForm'; // Assuming PopupForm is in a separate file

const OfferCard = ({ name, rate, max, min, service, id }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOrderClick = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (profileUrl) => {
    // Handle form submission logic here
    // console.log('Submitted profile URL:', profileUrl);
    // You can add more logic here, such as making an API request
    // or updating state based on the form submission.
  };

  return (
    <>
      {/* Design for large screens */}
      <div className="bg-white hidden md:flex flex-row justify-between items-center w-[80%] m-2 p-2 shadow-lg">
        <div>
          <span className="font-semibold text-xl">{id + 1}.</span>
          <h1 className="font-semibold text-2xl inline">{name}</h1>
          <p className="font-semibold">
            Min:{min} Max:{max}
          </p>
          <h3 className="font-semibold">Price: &#8377; {rate}</h3>
        </div>
        <button
          className="bg-green-500 px-8 py-2 cursor-pointer text-white font-bold rounded-sm"
          onClick={handleOrderClick}
        >
          Order
        </button>
      </div>

      {/* Design for small screens */}
      <div className="bg-white md:hidden flex flex-col overflow-hidden w-[80%] m-2 p-2 shadow-lg">
        <div>
          <span className="font-semibold text-md">{id + 1}.</span>
          <h1 className="font-semibold text-lg inline">{name}</h1>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <p className="font-semibold">
              Min:{min} Max:{max}
            </p>
            <h3 className="font-semibold">Price: &#8377; {rate}</h3>
          </div>
          <button
            className="bg-green-500 px-8 py-2 cursor-pointer text-white font-bold rounded-sm"
            onClick={handleOrderClick}
          >
            Order
          </button>
        </div>
      </div>

      {isFormOpen && (
        <PopupForm onClose={handleFormClose} onSubmit={handleFormSubmit} />
      )}
    </>
  );
};

export default OfferCard;
