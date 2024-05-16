import React from 'react';

function TransactionHistory({ transactions }) {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type} of ${transaction.amount} {transaction.toAccountNumber ? `to ${transaction.toAccountNumber}` : ''} on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;