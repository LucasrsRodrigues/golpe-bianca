import  Head from 'next/head';
import styles from '../styles/pages/Login.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GrBank | Login</title>
      </Head>
      <main>
        <div className={styles.wrapperForm}>
          <div className={styles.logo}>

            <img src='/assets/512x512bb.jpg' alt="GrBank" />

            <h2>
              <span>Gr</span>
              Bank
            </h2>
          </div>
          <form action="">
            <div className="wrapper-input">
              <input type="text" placeholder="CPF" />
              <input type="password" placeholder="Senha" />
              <a href="#">Esqueci minha senha</a>
            </div>

            <button>
              Login
            </button>
          </form>
        </div>

        <footer>
          ©GR Bank - o golpe tá ai
        </footer>
      </main>
    </div>
  )
}
