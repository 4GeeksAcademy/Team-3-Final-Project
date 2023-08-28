import React, { useState } from 'react';
import '../../../front/styles/Age.css';

function AgeVerification() {
  const [verificationResult, setVerificationResult] = useState('');
  const [showNextButton, setShowNextButton] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const birthday = new Date(event.target.elements.birthday.value);
    const age = calculateAge(birthday);

    if (age < 18) {
      setVerificationResult('Verification Declined');
      setShowNextButton(false);
    } else {
      setVerificationResult('Verification Approved');
      setShowNextButton(true);
    }
  };

  const calculateAge = (birthday) => {
    const now = new Date();
    const diff = now.getTime() - birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className="wrapper-AV">
      <div className="container-outer-AV">
        <div className="container-inner-AV">
          <h1 className='h1AV'>Age Verification</h1>
          <form id="AV" onSubmit={handleSubmit}>
            <label id="birthday">Please enter your date of birth (must be over 18 years of age):</label>
            <input type="date" id="birthday" required />
            <button type="submit" id="submitBtn">Verify Age</button>
          </form>
        </div>
      </div>
      <p id="verificationResult">{verificationResult}</p>
      {showNextButton && <button type="submit" id="nextBtn">Next</button>}
    </div>
  );
}

export default AgeVerification;
