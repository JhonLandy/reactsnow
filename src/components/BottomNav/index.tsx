import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import style from '@/layouts/BaseLayout.less';
interface Props {}

/**
 * @author
 * @function BottomNav
 **/
const meun = [
  {
    title: '首页',
  },
  {
    title: '购物车',
  },
  {
    title: '订单列表',
  },
  {
    title: '我的',
  },
];
const BottomNav: FC<Props> = props => {
  return (
    <div>
      <TabBar>
        {meun.map(item => (
          <TabBar.Item title={item.title} key={item.title}></TabBar.Item>
        ))}
      </TabBar>
    </div>
  );
};

BottomNav.propTypes = {
  // your expected props
};

BottomNav.defaultProps = {
  // your default props
};
export default BottomNav;
