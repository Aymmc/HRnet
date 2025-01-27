import logo from './logo.svg';
import Home from './pages/home/home'
import './App.css';
import Router from './Router';
import FormProvider from './FormContext';
function App() {
  return (
    <>
    <FormProvider>
    <Router />
    </FormProvider>
    </>
  );
}

export default App;
