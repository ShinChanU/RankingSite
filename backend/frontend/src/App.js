import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchList from './components/SearchList';
import PuppeTest from './components/PuppeTest';
// import { Puppeteer } from 'puppeteer';



function App() {
//   (async() => {
//     console.log("Test");
// })();
  return (
    <div className="App">
      <PuppeTest />
      <SearchForm />
      <SearchList />
    </div>
  );
}

export default App;
