import { Layout } from 'lens-ui';
import { RouterLink } from '@components/elements';
import styles from './TodoPage.module.scss';

function TodoPage() {
  return (
    <Layout.Content className={styles.todoPage}>
      Todo Page
      <RouterLink to="notFound">Test</RouterLink>
    </Layout.Content>
  );
}

export default TodoPage;
