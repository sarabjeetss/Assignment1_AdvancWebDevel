import React, { useState } from 'react';
import DepositActivity from './components/DepositActivity';
import WithdrawActivity from './components/WithdrawActivity';
import TransactionHistory from './components/TransactionHistory';
import Login from './components/Login'; // Corrected import path
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [balance, setBalance] = useState(4500);
  const [transactions, setTransactions] = useState([]);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showCareer, setShowCareer] = useState(false);

  const handleDeposit = ({ accountNumber, amount }) => {
    setBalance(balance + amount);
    setTransactions([...transactions, { type: 'Deposit', amount, date: new Date().toLocaleString(), toAccountNumber: accountNumber }]);
    setShowDeposit(false);
  };

  const handleWithdraw = ({ accountNumber, amount }) => {
    if (amount <= balance) {
      setBalance(balance - amount);
      setTransactions([...transactions, { type: 'Withdraw', amount, date: new Date().toLocaleString(), toAccountNumber: accountNumber }]);
      setShowWithdraw(false);
    } else {
      alert('Insufficient balance');
    }
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <nav className="App-nav">
        <img src="/bank-logo.png" className="App-logo" alt="logo" />
        <h1>State Bank of India</h1>
        <div className="App-search">
          <input type="text" placeholder="Search" />
        </div>
      </nav>
      <div className="App-welcome">
        <h2>Welcome to SBI - SINGH_SARABJEET</h2>
        <h2>ਸਰਬਜੀਤ ਸਿੰਘ, ਐਸ.ਬੀ.ਆਈ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ</h2>
      </div>
      <div className="App-content-box">
        <div className="App-content">
          <div className="App-account-info">
            <h3>Account Number: 008549632785</h3>
            <h3>Balance: ${balance}</h3>
          </div>
          <div className="App-buttons">
            <button onClick={() => { setShowDeposit(true); setShowWithdraw(false); }}>Deposit</button>
            <button onClick={() => { setShowDeposit(false); setShowWithdraw(true); }}>Withdraw</button>
          </div>
          {showDeposit && <DepositActivity onDeposit={handleDeposit} onCancel={() => setShowDeposit(false)} />}
          {showWithdraw && <WithdrawActivity onWithdraw={handleWithdraw} onCancel={() => setShowWithdraw(false)} />}
          <TransactionHistory transactions={transactions} />
        </div>
      </div>
      <footer className="App-footer">
        <div className="App-footer-links">
          <div className="About-us">
            <h3 style={{ fontWeight: 'bold', marginTop: '0' }}>About Us</h3>
            <ul className="horizontal-list">
              <li><a href="#" onClick={() => setShowCareer(true)}>Career</a></li>
              <li><a href="#" onClick={() => setShowContact(true)}>Contact Us</a></li>
              <li><a href="#" onClick={() => setShowDisclaimer(true)}>Disclaimer</a></li>
            </ul>
          </div>
        </div>
      </footer>
      {showDisclaimer && (
        <div className="modal">
          <div className="modal-content" style={{ backgroundColor: '#f3f3f3', color: '#333' }}>
            <span className="close" onClick={() => setShowDisclaimer(false)}>&times;</span>
            <p>The information, material, advice, suggestions, illustrations, notifications, circulars, etc. are collectively stated as "the content" on this website. If the said content contains any mistakes, omissions, inaccuracies, and typographical errors, etc., SBI assumes no responsibility thereof.</p>
          </div>
        </div>
      )}
      {showContact && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowContact(false)}>&times;</span>
            <p>Please call SBI's 24X7 Toll-free telephone number 1800110009 dedicated for pensioners or Toll-free telephone number 18004253800 & 1800112211.</p>
          </div>
        </div>
      )}
      {showCareer && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowCareer(false)}>&times;</span>
            <p>State Bank of India, with a glorious history of more than 200 years, stands as the proxy for the Indian Economy. The Bank's strength over the decades has stemmed from its strong employee-centric approach and its ability to attract and retain the best banking talent in the country.</p>
          </div>
        </div>
      )}
      <div className="Important-message" style={{ backgroundColor: '#292075', color: '#fff' }}>
        <p>
          <u><b>IMPORTANT:</b></u> State Bank of India never asks for your user id / password / pin no. through phone call / SMSes / e-mails. Any such phone call / SMSes / e-mails asking you to reveal credential or One Time Password through SMS could be an attempt to withdraw money from your account. NEVER share these details with anyone. State Bank of India wants you to be secure. If you come across any such instances, please inform us through e-mail to the following address - <b>sbi@gmailcom.</b>
        </p>
      </div>
    </div>
  );
}

export default App;
