import React, { useState } from 'react';
import styles from './index.module.scss';
import axios from 'axios';

const apiUrl = 'http://localhost:8000'

const Index = () => {

  const [items, setItems] = useState([])

  axios.get(apiUrl + '/items')
  .then(data => {
    console.log(data.data)
    setItems(data.data)
  })
  .catch(error => console.error(error))

  const buy = (id) => {
    axios.post(apiUrl + '/purchase', {itemId: id, quantity: 1})
    axios.get(apiUrl + '/items')
    .then(data => {
      console.log(data.data)
      setItems(data.data)
    })
    .catch(error => console.error(error))
  };

  return (
    <main className={styles.main}>
      <h1>Create, Inc. Store</h1>
      <div>
        {items.map(item => (
          <div>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.inventory}</p>
            <button onClick={() => buy(item.id)}>Buy</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Index;
