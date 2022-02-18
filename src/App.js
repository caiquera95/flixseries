import './App.css';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';


export default function App() {
  return (
    <div className="app">
      <ToastContainer autoclose={3000}/>
      <Toaster position='top-right'/>
      <Routes />
    </div>
  );
}