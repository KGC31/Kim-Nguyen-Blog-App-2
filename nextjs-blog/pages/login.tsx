import { FormEvent } from 'react'
import styles from "../styles/login.module.css"

export default function Login() {
    // Get user login input form
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        console.log(formData)
        // const response = await fetch('/api/auth/login', {
        //   method: 'POST',
        //   body: formData,
        // })
     
        // Handle response if necessary
        // const data = await response.json()
        // ...
    }
    return (
        <div className={styles.container}>
            <section className="flex flex-wrap content-center justify-center h-screen w-screen">
                <div className={styles.ring}>
                    <i style={{ "--clr": "#00ff0a" }}></i>
                    <i style={{ "--clr": "#ff0057" }}></i>
                    <i style={{ "--clr": "#fffd44" }}></i>
                    <form onSubmit={onSubmit} className={styles.login}>
                        <h2>Login</h2>
                        <div className={styles.inputBx}>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className={styles.inputBx}>
                            <input type="password" name="password" placeholder="Password" />
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
};
