import React, {useState} from "react";
import {useForm} from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setformData, handleformData] = useForm(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleformData}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleformData}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={formData.address}
            onChange={handleformData}
          />
        </label>
        <label>
          City:
          <input name="city" value={formData.city} onChange={handleformData} />
        </label>
        <label>
          State:
          <input
            name="state"
            value={formData.state}
            onChange={handleformData}
          />
        </label>
        <label>
          Zip:
          <input name="zip" value={formData.zip} onChange={handleformData} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {formData.firstName} {formData.lastName}
          </p>
          <p>{formData.address}</p>
          <p>
            {formData.city}, {formData.state} {formData.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
