import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import HistoryPage from './pages/HistoryPage.tsx';
import Layout from './components/Layout.tsx';

function App() {
  return (
    <BrowserRouter basename="/ait-fs-front-final">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
