import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext, TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {
  

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal () {

         setIsNewTransactionModalOpen(true);

  }

  function handleCloseNewTransactionModal () {

         setIsNewTransactionModalOpen(false);

  }

  return (
    
    <TransactionsProvider>
      <Header onOpneNewTransactionModal={handleOpenNewTransactionModal} />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
      </TransactionsProvider>
  );
}