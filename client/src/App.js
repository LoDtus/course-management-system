import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Header/>
            <main className="flex justify-center min-h-[85vh] mb-5">
                <div className='container-main lg:flex 2xl:px-3'>

                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
