import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
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
  email: yup.string().required('Por favor, informe o E-mail').email(),
  name: yup.string().required('Por favor, informe o E-mail'),
  birthday: yup.string().required('Por favor, informe o E-mail'),
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

    try {

      toast.error('Não foi possivel efetuar o Login, tente novamente');

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (errors.email) {
      toast.error(errors.email.message)
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
                    name="nome"
                    type="nome"
                    className={errors.nome && 'error'}
                    placeholder=" "
                    pattern="[0-9]+"
                    {...register('nome')}
                  />
                  <p>Nome</p>
                </label>
              </div>
              <div className={styles.input}>
                <label>
                  <input
                    name="email"
                    type="email"
                    className={errors.email && 'error'}
                    placeholder=" "
                    pattern="[0-9]+"
                    {...register('email')}
                  />
                  <p>E-mail</p>
                </label>
              </div>
              <div className={styles.input}>
                <label>
                  <input
                    name="birthday"
                    type="birthday"
                    className={errors.birthday && 'error'}
                    placeholder=" "
                    pattern="[0-9]+"
                    {...register('birthday')}
                  />
                  <p>Data de nascimento</p>
                </label>
              </div>
            </div>

            <button>
              {isSubmitting ? 'loading' : 'Enviar solicitação'}
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
