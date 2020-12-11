import Main from '../../pages/Main';
import useApp from './hook';

function App() {
  useApp();

  return (
    <div className="App">
      App
      <Main />
    </div>
  );
}

export default App;
