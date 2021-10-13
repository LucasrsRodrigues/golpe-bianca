import styles from '../styles/pages/Menu.module.scss';

const options = [
  {
    id: 0,
    image: '',
    title: 'Portal'
  },
  {
    id: 1,
    image: '',
    title: 'GR Xperience'
  },
  {
    id: 2,
    image: '',
    title: 'Podcasts'
  },
  {
    id: 3,
    image: '',
    title: 'Atendimento'
  },
  {
    id: 4,
    image: '',
    title: 'GR Together'
  },
  {
    id: 5,
    image: '',
    title: 'GR Discovery'
  },
  {
    id: 6,
    image: '',
    title: 'Compartilhar com amigos'
  },
  {
    id: 7,
    image: '',
    title: 'GR pelo Mundo!'
  },
  {
    id: 8,
    image: '',
    title: 'Conheça seu gestor'
  },
  {
    id: 9,
    image: '',
    title: 'Artigos'
  },
];

export default function Menu(){
  return(
    <div className="container">
      <main>
        <h1>O que deseja?</h1>

        <div className={styles.wrapperOptions}>
          <div className={styles.options}>

          </div>

          <div className={styles.options}>
            
          </div>

          <div className={styles.options}>
            
          </div>

          <div className={styles.options}>
            
          </div>

          <div className={styles.options}>
            
          </div>

          <div className={styles.options}>
            
          </div>

          <div className={styles.options}>
            
          </div>

          <div className={styles.options}>
            
          </div>

          <div className={styles.options}>
            
          </div>

          <div className={styles.options}>
            
          </div>
        </div>
      </main>
    </div>
  );
}