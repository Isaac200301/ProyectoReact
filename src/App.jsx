
import React from 'react';
import Footer from './components/footer';
import Header from './components/Header';
import Categorias from './components/Categorias';
import './styles/index.css'; 


function App() {
    return (
        <div className="app">
            <Header />
            <Categorias />
            <main>
            </main>
            <Footer />
        </div>
    );
}

export default App;


