import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import { FormsContextProvider } from './context/formsContext';

const Router = () => (
  <BrowserRouter>
    {/* context provided to home component */}
    <Routes>
      <Route
        path="/"
        element={
          <FormsContextProvider>
            <Home />
          </FormsContextProvider>
        }
      />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  </BrowserRouter>
);

export default Router;