import MainLayout from './Components/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient();

function App() {
 return (
  <QueryClientProvider client={queryClient}>
   <GlobalTheme>
    <BrowserRouter>
     <Routes>
      <Route element={<MainLayout />}>
       <Route path="/" element={<Home />} />
       <Route path="/Starred" element={<Starred />} />
      </Route>
      <Route path="/show/:showId" element={<Show />} />
      <Route path="*" element={<div>No Match Found</div>} />
     </Routes>
    </BrowserRouter>
   </GlobalTheme>
  </QueryClientProvider>
 );
}

export default App;
