import styles from '../styles/errorbutton.module.css';

const ErrorButton = () => (
    <button
    className={styles.button_error}
    onClick={() => {
      throw new Error('Error is catched by ErrorBoundary');
    }}
  >
    Button for error
  </button>
);

export default ErrorButton;