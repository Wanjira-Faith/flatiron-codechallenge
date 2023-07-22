import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';


function App() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((res) => res.json())
    .then((transactions) => setTransactions(transactions))
  },[]);
  return (
    <>
      
    </>
  )
}

export default App

