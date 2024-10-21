import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import { Auth0Provider } from '@auth0/auth0-react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-hl0ycqgbwvishjfx.us.auth0.com"
    clientId="cxrsvoq1vRyDVjDfCv5NfwB3pITBvLUk"
    authorizationParams={{
      redirect_uri: window.location.origin}}> 
      
      <BrowserRouter>
         <App />
     </BrowserRouter>


    <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition: Bounce/>
    </Auth0Provider>,

)
