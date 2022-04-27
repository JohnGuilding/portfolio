import ContactDetails from './components/ContactDetails';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import './styles/App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Dashboard />
      <ContactDetails />
    </div>
  );
}

export default App;
