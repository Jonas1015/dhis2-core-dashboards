import './App.css';
import DashboardsPage from './components/DashboardsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='row mt-4 mb-4'>
          <DashboardsPage />
        </div>
      </div>
    </div>
  );
}

export default App;