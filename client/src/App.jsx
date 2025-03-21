import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Home from './LinkPages/Home';
import Initiative from './LinkPages/Initiative';
import AboutDrishti from './LinkPages/AboutDrishti';
import Form from './LinkPages/Form';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f4f4f4',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-initiative" element={<Initiative />} />
          <Route path="/about-drishti" element={<AboutDrishti />} />
          <Route path="/donate" element={<Form />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;