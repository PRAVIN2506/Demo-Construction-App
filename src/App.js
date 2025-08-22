import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuoteForm from './pages/QuoteForm';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route>
        <Route path="" element={<Homepage/>} /> 
      <Route path="QuoteForm" element={<QuoteForm/>} /> 
      </Route>

    </Routes>


    </BrowserRouter>
    
  );
}

export default App;
