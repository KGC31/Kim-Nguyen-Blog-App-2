import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';
import { getCsrfToken } from '../utils/csrf';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    const csrfToken = await getCsrfToken();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('http://localhost:8000/api/auth/login/', {
        method: 'POST',
        body: formData,
        credentials: 'include',  // Ensure cookies are included in the request
        headers: {
          'X-CSRFToken': csrfToken,
        },
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      sessionStorage.setItem('token', data.token);
      router.push('/');
    } catch (error) {
      setError('Invalid email or password');
    }
  }

  return (
    <div className={styles.container}>
      <section className="flex flex-wrap content-center justify-center h-screen w-screen">
        <div className={styles.ring}>
          <i style={{ '--clr': '#8c38ff' }}></i>
          <i style={{ '--clr': '#3e2fff' }}></i>
          <i style={{ '--clr': 'rgb(56 189 248)' }}></i>
          <form onSubmit={onSubmit} className={styles.login}>
            <h2>Login</h2>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.inputBx}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputBx}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputBx}>
              <input type="submit" value="Sign in" />
            </div>
            <div className={styles.link}>
              <a href="/">Forget Password</a>
              <a href="/register">Signup</a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
