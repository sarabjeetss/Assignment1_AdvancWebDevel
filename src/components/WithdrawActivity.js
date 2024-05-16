import React, { useState } from 'react';

function WithdrawActivity({ onWithdraw, onCancel }) {
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    if (amount && Number(amount) > 0) {
      onWithdraw({ accountNumber: '008549632785', amount: Number(amount) });
      setAmount('');
    } else {
      alert('Please fill in all fields with valid values');
    }
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <form>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="button" onClick={handleWithdraw}>Withdraw</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default WithdrawActivity;