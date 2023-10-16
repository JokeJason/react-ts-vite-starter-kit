import './App.css';
import CatCard from './components/CatCard.tsx';

function App() {
  return (
    <>
      <CatCard
        id={1}
        name={'Abyssinian'}
        image={'https://cdn2.thecatapi.com/images/itfFA4NWS.jpg'}
      />
    </>
  );
}

export default App;
