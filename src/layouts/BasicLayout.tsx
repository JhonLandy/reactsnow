import React, { useEffect } from 'react';
import BottomNav from '@/components/BottomNav/index';
import styles from '@/layouts/BaseLayout.less';

interface BasicLayoutProps {}

// console.log(styles.title);

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { children } = props;
  return (
    <div style={styles}>
      <article>{children}</article>
      {<BottomNav />}
    </div>
  );
};

export default BasicLayout;
