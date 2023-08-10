import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import  ChatProvider from "./Context/ChatProvider";

createRoot(document.getElementById('root')).render(

  
    <BrowserRouter>
    <ChatProvider>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </ChatProvider>
    </BrowserRouter>
 
  
);



