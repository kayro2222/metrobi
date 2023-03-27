import { Extra, Footer, Header, Hero, Images, Main, Posts, Sidebar } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App'>
        <Header />
        <div className='content'>
          <div className='main-content'>
            <div className='first-column'>
              <Hero />
              <Sidebar />
            </div>
            <div className='second-column'>
              <Main />
              <Extra />
            </div>
          </div>
          <div className='related-content'>
            <Images />
            <Posts />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
