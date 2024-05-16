import React, { useState } from 'react';
import DepositButton from './DepositButton.js';

function DepositActivity({ onDeposit, onCancel }) {
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    if (amount && Number(amount) > 0) {
      onDeposit({ accountNumber: '008549632785', amount: Number(amount) });
      setAmount('');
    } else {
      alert('Please fill all the fields with a valid values');
    }
  };

  return (
    <div>
      <h2>Deposit</h2>
      <form>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <DepositButton onClick={handleDeposit} />
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default DepositActivity;