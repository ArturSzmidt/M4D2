import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../src/Components/MyNavbar';
import ReactFooter from '../src/Components/ReactFooter';
import MyJumbotron from '../src/Components/MyJumbotron';
import MyCard from '../src/Components/MyCard';
import books from '../src/data/fantasy.json';

function App() {
  return (
    <div>
      <MyNavbar />
      <MyJumbotron />
      <MyCard />
      <ReactFooter />
    </div>
  );
}

export default App;
