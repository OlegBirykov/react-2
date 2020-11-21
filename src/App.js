import './App.css';
import Portfolio from './task1/Portfolio';
import { proects, filters } from './task1/data';

function App() {
  return (
    <div>
      <Portfolio proects={proects} filters={filters} />
      <Portfolio proects={proects} filters={filters} />
      <Portfolio proects={proects} filters={filters} />
    </div>
  );
}

export default App;
