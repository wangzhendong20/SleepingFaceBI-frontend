export default [
  {path: '/user/edit',name: '我的信息', icon: 'user',component: './User/UserEdit'},
  {path: '/my_result', name: '我的分析结果', icon: 'barChart',
    hideChildrenInMenu: false,
    routes: [
      {path: '/my_result/my_chart',name: '我的图表', component: './My/MyChart'},
      {path: '/my_result/my_md',name: '我的文本', component: './My/MyText'},
    ]},
  {path: '/chart', name: '智能图表分析', icon: 'pieChart',
    hideChildrenInMenu: false,
    routes: [
      {path: '/chart/add_mq', name: '图表分析', component: './Chart/AddChartMQ'},
      {path: '/chart/info/:id',component: './Chart/MyChartInfo'},
    ]},
  {path: '/text', name: '智能文本分析', icon: 'read',
    hideChildrenInMenu: false,
    routes: [
      {path: '/text/add', name: '文本分析', component: './Text/AddTextMQ'},
      {path: '/text/info/:id',component: './Text/MyTextInfo'},
    ]},
  {path: '/chatAI', name: 'SleepingFace小助手', icon: 'read',
    hideChildrenInMenu: false,
    // routes: [
    //   {path: '/chatAI/chat', name: 'chat', component: './ChatAI/chat'}
    // ]
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {name: '登录', path: '/user/login', component: './User/Login'},
      {name: '注册', path: '/user/register', component: './User/Register'},
    ],
  },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理人员页面',
    routes: [
    ],
  },
  {path: '/', redirect: '/user/edit'},
  {path: '*', layout: false, component: './404'},
];
