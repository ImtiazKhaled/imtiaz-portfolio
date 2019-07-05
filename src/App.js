import React from 'react';
import './App.css';
import  WorkPageResponsive  from './components/mainPageResponsive';
import Breakpoint, { BreakpointProvider } from 'react-socks';

function App() {
  return (
    <BreakpointProvider>
      <WorkPageResponsive />  
    </BreakpointProvider>
  );
}
export default App;
