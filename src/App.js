import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {//<NavigationBar />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Home />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
