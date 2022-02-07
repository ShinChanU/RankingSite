// import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchList from './components/SearchList';



function App() {
//   (async() => {
//     console.log("Test");
// })();
  return (
    <div className="App">
      <SearchForm />
      <SearchList />
    </div>
  );
}

export default App;
