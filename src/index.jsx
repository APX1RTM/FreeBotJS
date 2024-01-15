import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App'
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
        <App />
        </AuthProvider>
    </React.StrictMode>
  
);