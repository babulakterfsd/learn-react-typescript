import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import AuthProvider from './context/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
