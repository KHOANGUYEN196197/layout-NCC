import './App.css';
import Header from './views/header/header';
import Layout from './views/layout/layout';
import Nav from './views/nav/nav';

function App() {
  return (
    <>
    <div className="App">
      <Nav />
      <div className="wrap">
        <Header />
        <Layout />
      </div>
    </div>
      </>
  );
}

export default App;
