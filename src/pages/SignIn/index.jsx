import React from 'react';
import styles from './style.module.css';

const SignIn = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Войти</h1>
      
      <form className={styles.Form}>
        <label htmlFor="username">Имя пользователя:</label>
        <input type="text" id="username"/>

        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password"  />

        <button type="submit" className={styles.submitButton}>Войти</button>
      </form>
    </div>
  );
};

export default SignIn;
