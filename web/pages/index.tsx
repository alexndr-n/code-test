import React from 'react';
import styles from './index.module.scss';

const Index = () => {
  const buy = () => {
    throw new Error('Not implemented');
    // fetch('http://localhost:8000/buy', {
    // }).then((response) => response.json());
  };

  return (
    <main className={styles.main}>
      <h1>Create, Inc. Store</h1>
      {/** @TODO: Not implemented */}
    </main>
  );
};

export default Index;
