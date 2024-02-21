
import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
