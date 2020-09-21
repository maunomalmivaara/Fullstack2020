import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const persons = [
  {
    name: 'Arto Hellas',
    number: '0405154499',
    id: 1
  },
  {
    name: 'Mauno Malmivaara',
    number: '0409654365',
    id: 2
  },
  {
    name: 'Jaska Jokunen',
    number: '0445952233',
    id: 3
  },
  {
    name: 'Maija Mehiläinen',
    number: '0455952235',
    id: 4
  },
]

ReactDOM.render(
    <App persons={persons}/>,
  document.getElementById('root')
);
