import logo from './logo.svg';
import './App.css';
import MainPage from './Components/Pages/Main-page';
import SearchInput from './Components/Inputs';

function App() {
  return (
    <div>
      <header>
        <SearchInput />
      </header>

      <main>
        <MainPage />
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
