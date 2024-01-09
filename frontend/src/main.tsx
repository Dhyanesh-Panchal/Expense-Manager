import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { registerSW } from 'virtual:pwa-register';
import { ExpenseProvider } from './contexts/ExpenseContext.tsx';

registerSW({
  onNeedRefresh() { },
  onOfflineReady() { },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </React.StrictMode>,
)
