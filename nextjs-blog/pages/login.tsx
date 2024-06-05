import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { userLogin } from '../utils/login';
import styles from '../styles/login.module.css';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    const formData = {
      email: email,
      password: password,
    };

    try {
      await userLogin(formData);
      
      // Redirect to the homepage
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
