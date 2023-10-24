import React, { useState } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('项目1', 'page1', <PieChartOutlined />),
  getItem('项目2', 'page2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigateTo = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

    const menuClick = (e: {key:string}) => {
        console.log("clicked",e.key);
        navigateTo(e.key)
        // 点击跳转到对应的路由 编程式导航 利用到一个hook: useNavigate

     };

  return (
      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick}/>
      </Sider>
          
      {/* 右边内容 */}
      <Layout>
        {/* 右边头部 */}
        <Header style={{ padding: 0, background: colorBgContainer,paddingLeft:'16px' }} >
            {/* 右边面包屑 */}
            <Breadcrumb style={{ lineHeight: '32px',margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
        
        {/* 右边内容-白色底盒子 */}
        <Content style={{ margin: '16px 12px 0' }}>
                  
          {/* 窗口部分 */}
        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
          <Outlet />
        </div>
                  
           
        </Content>
                
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center',padding:'0',lineHeight:'48px' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default View;