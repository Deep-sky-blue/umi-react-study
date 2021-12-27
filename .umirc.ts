import { defineConfig } from 'umi';

export default defineConfig({
  layout:{
    name: 'Ant Design Pro',
    // logo: 'https://preview.pro.ant.design/static/logo.f0355d39.svg',
    navTheme: 'dark',
    primaryColor: '#1890ff',
    layout: 'sidemenu',
    contentWidth: 'Fluid',
    fixedHeader: false,
    title: 'Ant Design Pro',
    pwa: false,
   
    // iconfontUrl: '',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', 
    component: '@/pages/index',
    name:"aaaa"
   },
  ],
  fastRefresh: {},
});
