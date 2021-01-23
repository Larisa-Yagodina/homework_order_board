import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useState} from "react/cjs/react.production.min";
import 'bootstrap/dist/css/bootstrap.css';
import OrderTable from "./OrderTable";


function App() {

    const [clients, setClients] = useState([
        {id: uuidv4(), name: 'Alice Smith', address: null, phone: ''},
        {id: uuidv4(), name: 'Mary Smith', address: null, phone: ''},
        {id: uuidv4(), name: 'Bill Brown', address: null, phone: ''},
        {id: uuidv4(), name: 'Bob Adams', address: null, phone: ''},
    ]);

    const [services, setServices] = useState([
        {id: uuidv4(), job: 'change oil', primeCost: 50, price: 200},
        {id: uuidv4(), job: 'repair engine', primeCost: 100, price: 400},
        {id: uuidv4(), job: 'change wheels', primeCost: 100, price: 500},
    ])



    return (
        <div>

            <h1> Hello </h1>



        </div>
    );
}

export default App;
