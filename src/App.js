import React from 'react';
import './App.css';
import  WorkPageResponsive  from './components/MainPageResponsive';
// import Index from './components/layoutComponents/index';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import { styles } from './styles/whoPageStyles';

function App() {
  return (
    <BreakpointProvider>
      {/* <Index /> */}
      <WorkPageResponsive />  
    </BreakpointProvider>
  );
}
export default App;
