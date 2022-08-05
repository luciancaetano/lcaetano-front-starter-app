import { Layout } from 'lens-ui';
import { Outlet } from 'react-router';
import styles from './EmptyLayout.module.scss';

function EmptyLayout() {
  return (
    <Layout className={styles.emptyLayout}>
      <Outlet />
    </Layout>
  );
}
export default EmptyLayout;
