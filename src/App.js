import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import { CourseContextProvider } from './context/CourseContext';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <CourseContextProvider>
            <Router />
          </CourseContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
