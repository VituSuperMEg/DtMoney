import React from 'react';
import ReactDOM from 'react-dom/client';
import { App }from './App';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs';


createServer({

  models : {
    transaction : Model,
  },
   
  seeds(server){

      server.db.loadData({
        transactions : [
          {
            id  : 1,
            title : 'Freelance de website',
            type : 'deposit',
            category : 'Dev',
            amount : 6800,
            createdAt : new Date('2022-01-12 21:44:10')
          },
          {
            id  : 2,
            title : 'Casa',
            type : 'withdraw',
            category : 'aluguel',
            amount : 800,
            createdAt : new Date('2022-01-12 21:00:10')
          }
        ],
      })
  },
  routes() {

      this.namespace = 'api';

      this.get('/transactions', () => {

        return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => {

        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)

      })
  }
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);

