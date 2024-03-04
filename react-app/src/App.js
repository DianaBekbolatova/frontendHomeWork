import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import EvenElements from './components/EvenElements';
import Footer from './components/Footer';

const products = [
  {
    id: 1,
    name: 'Apple'
  },
  {
    id: 2,
    name: 'Банан'
  },
  {
    id: 3,
    name: 'Вишня'
  },
  {
    id: 4,
    name: 'Морковь'
  }
]

function App() {
  return (
    //один корневой див!
    //все компоненты должны иметь закрывающий тег
    <div className="App">
      {/* хидер */}
      <Header></Header>
      {/* основная страница */}
      <Main products = {products}></Main>
      <EvenElements products = {products}></EvenElements>
      {/* футер */}
      <Footer></Footer>
    </div>
  );
}

export default App;
