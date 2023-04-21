export const MENUITEMS = [
  {
    menutitle: 'bqltoolshop',
    menucontent: 'Hosts,Sends,Leads,Accounts,Others',
    Items: [
      {
        title: 'Hosts',
        icon: 'learning',
        type: 'sub',
        badge: 'badge badge-light-primary',
        // badgetxt: '5',
        active: false,
        children: [
          { path: '/product/rdps', title: 'RDPS', type: 'link', icon: 'fa fa-laptop', badge: 'badge badge-light-primary', badgetxt: 'RdpsCnt' },
          { path: `product/root-sshwhmvps`, title: 'Root SSh/WHM/VPS', type: 'link', icon: 'fa fa-cogs', badge: 'badge badge-light-primary', badgetxt: 'VpsCnt' },
          { path: `product/cpanels`, title: 'cPanels', type: 'link', icon: 'icofont icofont-drwaing-tablet', badge: 'badge badge-light-primary', badgetxt: 'CpanelCnt' },
          { path: `product/shells`, title: 'Shells', type: 'link', icon: 'fa fa-code', badge: 'badge badge-light-primary', badgetxt: 'ShellCnt' },
        ],
      },
      {
        title: 'Sends',
        icon: 'button',
        type: 'sub',
        active: false,
        children: [
          { path: `product/smtpswebmail`, title: 'SMTPs/Webmail', type: 'link', icon: 'fa fa-envelope-o', badge: 'badge badge-light-primary', badgetxt: 'SmtpCnt' },
          { path: `product/phpmailers`, title: 'PHPMailers', type: 'link', icon: 'fa fa-paper-plane-o', badge: 'badge badge-light-primary', badgetxt: 'PhpMailerCnt' },
        ],
      },
      {
        title: 'Leads',
        icon: 'board',
        type: 'link',
        path: `product/leads`,
        badge: 'badge badge-light-primary',
        badgetxt: 'LeadCnt',
        active: false,
      },
      {
        title: 'Accounts',
        icon: 'user',
        type: 'sub',
        active: false,
        children: [
          { path: `product/premium_shop_dating`, title: 'Premium/Shop/Dating', type: 'link', icon: 'icofont icofont-basket', badge: 'badge badge-light-primary', badgetxt: 'PremiumShopCnt' },
        ],
      },
      {
        title: 'Others',
        icon: 'others',
        type: 'sub',
        active: false,
        children: [
          { path: `product/programsscripts`, title: 'Programs/Scripts', type: 'link', icon: 'fa fa-file-code-o', badge: 'badge badge-light-primary', badgetxt: 'ProgramScriptCnt' },
          { path: `product/bank`, title: 'Methods & Others', type: 'link', icon: 'icofont icofont-tools-bag', badge: 'badge badge-light-primary', badgetxt: 'MethodCnt' },
        ],
      },
      {
        title: 'Tickets',
        icon: 'landing-page',
        type: 'sub',
        active: false,
        children: [
          { path: `user/tickets`, title: 'Tickets', type: 'link', icon: 'fa fa-ticket', badge: 'badge badge-light-primary', badgetxt: '5' },
          { path: `user/reports`, title: 'Reports', type: 'link', icon: 'fa fa-bug', badge: 'badge badge-light-danger', badgetxt: '5' },
        ],
      },
    ],
  },
  // {
  //   menutitle: 'General',
  //   menucontent: 'Dashboards,Widgets',
  //   Items: [
  //     {
  //       title: 'Dashboard',
  //       icon: 'home',
  //       type: 'sub',
  //       badge: 'badge badge-light-primary',
  //       badgetxt: '5',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/dashboard/e-commerce`, title: 'E-commerce', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/dashboard/online-course`, title: 'Online Course', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/dashboard/crypto`, title: 'Crypto', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/dashboard/social`, title: 'Social', type: 'link' },
  //       ],
  //     },

  //     {
  //       title: 'Widgets',
  //       icon: 'widget',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/widgets/general`, title: 'General', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Chart', type: 'link' },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   menutitle: 'Applications',
  //   menucontent: 'Ready to use Apps',
  //   Items: [
  //     {
  //       title: 'Project',
  //       icon: 'project',
  //       type: 'sub',
  //       badge: 'badge badge-light-secondary',
  //       badgetxt: 'New',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/app/project/project-list`, type: 'link', title: 'Project-List' },
  //         { path: `${process.env.PUBLIC_URL}/app/project/new-project`, type: 'link', title: 'Create New' },
  //       ],
  //     },
  //     { path: `${process.env.PUBLIC_URL}/app/file-manager`, icon: 'file', title: 'File-Manager', type: 'link' },
  //     { path: `${process.env.PUBLIC_URL}/app/kanban-board`, icon: 'board', badge: 'badge badge-light-secondary', badgetxt: 'latest', title: 'Kanban-Board', type: 'link' },
  //     {
  //       title: 'Ecommerce',
  //       icon: 'ecommerce',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/app/ecommerce/product`, title: 'Products', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/ecommerce/product-page/1`, title: 'Product-Page', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/ecommerce/product-list`, title: 'Product-List', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/ecommerce/payment-details`, title: 'Payment-Detail', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/ecommerce/orderhistory`, title: 'OrderHistory', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/ecommerce/invoice`, title: 'Invoice', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/ecommerce/cart`, title: 'Cart', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/ecommerce/wishlist`, title: 'Wishlist', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/ecommerce/checkout`, title: 'checkout', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/ecommerce/pricing`, title: 'Pricing', type: 'link' },
  //       ],
  //     },
  //     { path: `${process.env.PUBLIC_URL}/app/email-app`, icon: 'email', title: 'Email', type: 'link' },
  //     {
  //       title: 'Chat',
  //       icon: 'chat',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/app/chat-app/chats`, type: 'link', title: 'Chats' },
  //         { path: `${process.env.PUBLIC_URL}/app/chat-app/chat-video-app`, type: 'link', title: 'Video-app' },
  //       ],
  //     },
  //     {
  //       title: 'Users',
  //       icon: 'user',
  //       path: `${process.env.PUBLIC_URL}/app/users/userProfile`,
  //       type: 'sub',
  //       bookmark: true,
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/app/users/profile`, type: 'link', title: 'User Profile' },
  //         { path: `${process.env.PUBLIC_URL}/app/users/edit`, type: 'link', title: 'User Edit' },
  //         { path: `${process.env.PUBLIC_URL}/app/users/cards`, type: 'link', title: 'User Cards' },
  //       ],
  //     },
  //     { path: `${process.env.PUBLIC_URL}/app/bookmark`, icon: 'bookmark', type: 'link', title: 'Bookmark' },
  //     {
  //       title: 'Contact',
  //       icon: 'contact',
  //       type: 'link',
  //       active: false,
  //       path: `${process.env.PUBLIC_URL}/app/contact-app/contacts`,
  //     },
  //     { path: `${process.env.PUBLIC_URL}/app/task`, icon: 'task', type: 'link', title: 'Task' },
  //     { path: `${process.env.PUBLIC_URL}/app/calendar/draggable-calendar`, icon: 'calendar', type: 'link', title: 'Calendar' },

  //     { path: `${process.env.PUBLIC_URL}/app/social-app`, icon: 'social', type: 'link', title: 'Social-App', bookmark: true },
  //     { path: `${process.env.PUBLIC_URL}/app/todo-app/todo`, icon: 'to-do', type: 'link', title: 'Todo' },
  //     { path: `${process.env.PUBLIC_URL}/app/search`, icon: 'search', type: 'link', title: 'Search Result' },
  //   ],
  // },

  // {
  //   menutitle: 'Forms & Table',
  //   menucontent: 'Ready to use froms & tables',
  //   Items: [
  //     {
  //       title: 'Forms',
  //       icon: 'form',
  //       type: 'sub',
  //       menutitle: 'Forms & Table',
  //       menucontent: 'Ready to use froms & tables',
  //       active: false,
  //       children: [
  //         {
  //           title: 'Controls',
  //           type: 'sub',
  //           children: [
  //             { title: 'Validation', type: 'link', path: `${process.env.PUBLIC_URL}/forms/controls/validation` },
  //             { title: 'Input', type: 'link', path: `${process.env.PUBLIC_URL}/forms/controls/input` },
  //             { title: 'Radio-Checkbox', type: 'link', path: `${process.env.PUBLIC_URL}/forms/controls/radio-checkbox` },
  //             { title: 'Group', type: 'link', path: `${process.env.PUBLIC_URL}/forms/controls/group` },
  //             { title: 'MegaOption', type: 'link', path: `${process.env.PUBLIC_URL}/forms/controls/megaoption` },
  //           ],
  //         },
  //         {
  //           title: 'Widget',
  //           type: 'sub',
  //           children: [
  //             { title: 'Datepicker', type: 'link', path: `${process.env.PUBLIC_URL}/forms/widget/datepicker` },
  //             { title: 'Timepicker', type: 'link', path: `${process.env.PUBLIC_URL}/forms/widget/timepicker` },
  //             { title: 'Datetimepicker', type: 'link', path: `${process.env.PUBLIC_URL}/forms/widget/datetimepicker` },
  //             { title: 'Touchspin', type: 'link', path: `${process.env.PUBLIC_URL}/forms/widget/touchspin` },
  //             { title: 'Select2', type: 'link', path: `${process.env.PUBLIC_URL}/forms/widget/select2` },
  //             { title: 'Switch', type: 'link', path: `${process.env.PUBLIC_URL}/forms/widget/switch` },
  //             { title: 'Typeahead', type: 'link', path: `${process.env.PUBLIC_URL}/forms/widget/typeahead` },
  //             { title: 'Clipboard', type: 'link', path: `${process.env.PUBLIC_URL}/forms/widget/clipboard` },
  //           ],
  //         },
  //         {
  //           title: 'Layout',
  //           type: 'sub',
  //           children: [
  //             { path: `${process.env.PUBLIC_URL}/forms/layout/formdefault`, title: 'FormDefault', type: 'link' },
  //             { path: `${process.env.PUBLIC_URL}/forms/layout/formwizard`, title: 'FormWizard', type: 'link' },
  //           ],
  //         },
  //       ],
  //     },

  //     {
  //       title: 'Table',
  //       icon: 'table',
  //       type: 'sub',
  //       children: [
  //         {
  //           title: 'ReactstrapTable',
  //           type: 'link',
  //           path: `${process.env.PUBLIC_URL}/table/reactstraptable/basictable`,
  //         },
  //         {
  //           title: 'DataTable',
  //           path: `${process.env.PUBLIC_URL}/table/datatable`,
  //           type: 'link',
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   menutitle: 'Components',
  //   menucontent: 'UI Components & Elements',
  //   Items: [
  //     {
  //       title: 'Ui-Kits',
  //       icon: 'ui-kits',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/typography`, title: 'Typography', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/avatar`, title: 'Avatar', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/helper-class`, title: 'Helper-Class', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/grids`, title: 'Grids', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/tag-pills`, title: 'Tag-Pills', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/progress`, title: 'Progress', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/modal`, title: 'Modal', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/alert`, title: 'Alert', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/popover`, title: 'Popover', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/tooltips`, title: 'Tooltips', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/spinner`, title: 'Spinner', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/dropdown`, title: 'Dropdown', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/accordion`, title: 'Accordion', type: 'link' },
  //         {
  //           title: 'Tabs',
  //           type: 'sub',
  //           children: [
  //             { title: 'Bootstrap', type: 'link', path: `${process.env.PUBLIC_URL}/ui-kits/tabs/bootstrap` },
  //             { title: 'Line', type: 'link', path: `${process.env.PUBLIC_URL}/ui-kits/tabs/line` },
  //           ],
  //         },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/shadow`, title: 'Shadow', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/ui-kits/list`, title: 'List', type: 'link' },
  //       ],
  //     },

  //     {
  //       title: 'Bonus-Ui',
  //       icon: 'bonus-kit',
  //       type: 'sub',
  //       badge1: true,
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`, title: 'Scrollable', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/bootstrap-notify`, title: 'Bootstrap-Notify', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/tree-view`, title: 'Tree View', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/rating`, title: 'Rating', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`, title: 'Dropzone', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/tour`, title: 'Tour ', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/sweet-alert`, title: 'Sweet-Alert', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/carousel`, title: 'Carousel', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`, title: 'Ribbons', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/pagination`, title: 'Pagination', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`, title: 'Breadcrumb', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/rangeslider`, title: 'RangeSlider', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/imagecropper`, title: 'ImageCropper', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/stickynotes`, title: 'StickyNotes', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/drag_and_drop`, title: 'Drag_and_Drop', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/image-upload`, title: 'Image-Upload', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/card/basiccards`, title: 'BasicCards', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/card/creativecards`, title: 'CreativeCards', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/card/tabcard`, title: 'TabCard', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/card/draggingcards`, title: 'DraggingCards', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/bonus-ui/timelines/timeline1`, title: 'Timeline1', type: 'link' },
  //       ],
  //     },

  //     {
  //       title: 'Icons',
  //       icon: 'icons',
  //       path: `${process.env.PUBLIC_URL}/icons/flagIcons`,
  //       type: 'sub',
  //       active: false,
  //       bookmark: true,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/icons/flag_icons`, title: 'Flag_Icon', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/icons/fontawesome_icon`, title: 'Fontawesome_Icon', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/icons/ico_icon`, title: 'Ico_Icon', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/icons/themify_icons`, title: 'Themify_Icon', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/icons/feather_icons`, title: 'Feather_Icon', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/icons/weather_icons`, title: 'Weather_Icons', type: 'link' },
  //       ],
  //     },

  //     {
  //       title: 'Buttons',
  //       icon: 'button',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/buttons/simplebutton`, title: 'SimpleButton', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/buttons/flat`, title: 'Flat', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/buttons/edge`, title: 'Edge', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/buttons/raised`, title: 'Raised', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/buttons/group`, title: 'Group', type: 'link' },
  //       ],
  //     },

  //     {
  //       title: 'Charts',
  //       icon: 'charts',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/charts/apex`, type: 'link', title: 'Apex' },
  //         { path: `${process.env.PUBLIC_URL}/charts/google`, type: 'link', title: 'Google' },
  //         { path: `${process.env.PUBLIC_URL}/charts/chartjs`, type: 'link', title: 'Chartjs' },
  //         { path: `${process.env.PUBLIC_URL}/charts/chartist`, type: 'link', title: 'Chartist' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   menutitle: 'Pages',
  //   menucontent: 'All neccesory pages added',
  //   Items: [
  //     {
  //       icon: 'sample-page',
  //       badge2: true,
  //       active: false,
  //       path: `${process.env.PUBLIC_URL}/pages/sample-page`,
  //       title: 'Sample-Page',
  //       type: 'link',
  //     },
  //     {
  //       title: 'Others',
  //       icon: 'others',
  //       type: 'sub',
  //       children: [
  //         {
  //           title: 'Error Pages',
  //           type: 'sub',
  //           children: [
  //             { title: 'Error Page 1', type: 'link', path: `${process.env.PUBLIC_URL}/pages/errors/error400` },
  //             { title: 'Error Page 2', type: 'link', path: `${process.env.PUBLIC_URL}/pages/errors/error401` },
  //             { title: 'Error Page 3', type: 'link', path: `${process.env.PUBLIC_URL}/pages/errors/error403` },
  //             { title: 'Error Page 4', type: 'link', path: `${process.env.PUBLIC_URL}/pages/errors/error404` },
  //             { title: 'Error Page 5', type: 'link', path: `${process.env.PUBLIC_URL}/pages/errors/error500` },
  //             { title: 'Error Page 6', type: 'link', path: `${process.env.PUBLIC_URL}/pages/errors/error503` },
  //           ],
  //         },
  //         {
  //           title: 'Authentication',
  //           type: 'sub',
  //           children: [
  //             { title: 'Login Simple', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-simple` },
  //             { title: 'Login with bg image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-bg-img` },
  //             { title: 'Login with image two', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-img` },
  //             { title: 'Login with validation', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-validation` },
  //             { title: 'Login with tooltip', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-tooltip` },
  //             { title: 'Login with sweetalert', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/login-sweetalert` },
  //             { title: 'Register Simple', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/register-simple` },
  //             { title: 'Register with Bg Image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/register-bg-img` },
  //             { title: 'Register with Bg Two', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/sign-up-two` },
  //             { title: 'Unloack User', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/unlock-user` },
  //             { title: 'Forget Password', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/forget-pwd` },
  //             { title: 'Reset Password', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/create-pwd` },
  //             { title: 'Maintenance', type: 'link', path: `${process.env.PUBLIC_URL}/pages/authentication/maintenance` },
  //           ],
  //         },
  //         {
  //           title: 'Coming Soon',
  //           type: 'sub',
  //           children: [
  //             { title: 'Coming Simple', type: 'link', path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoon` },
  //             { title: 'Coming with Bg Video', type: 'link', path: `${process.env.PUBLIC_URL}/pages/comingsoon/coming-bg-video` },
  //             { title: 'Coming with bg Image', type: 'link', path: `${process.env.PUBLIC_URL}/pages/comingsoon/coming-bg-img` },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   menutitle: 'Miscellaneous',
  //   menucontent: 'Bouns Pages & Apps',
  //   Items: [
  //     {
  //       title: 'Gallery',
  //       icon: 'gallery',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/app/gallery/grids`, title: 'Grids', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/gallery/griddesc`, title: 'GridDesc', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/gallery/masonrys`, title: 'Masonrys', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/gallery/masonrydesc`, title: 'MasonryDesc', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/gallery/hover_effect`, title: 'Hover_Effect', type: 'link' },
  //       ],
  //     },

  //     {
  //       title: 'Blog',
  //       icon: 'blog',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/app/blog/blogdetails`, title: 'BlogDetails', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/blog/blogsingle`, title: 'BlogSingle', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/blog/blogpost`, title: 'BlogPost', type: 'link' },
  //       ],
  //     },
  //     { path: `${process.env.PUBLIC_URL}/app/faq`, icon: 'faq', type: 'link', active: false, title: 'FAQ' },
  //     {
  //       title: 'JobSearch',
  //       icon: 'job-search',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/app/jobsearch/cardview`, title: 'CardView', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/jobsearch/joblist`, title: 'JobList', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/jobsearch/jobdetail`, title: 'JobDetail', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/jobsearch/jobapply`, title: 'JobApply', type: 'link' },
  //       ],
  //     },
  //     {
  //       title: 'Learning',
  //       icon: 'learning',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/app/learning/learninglist`, title: 'LearningList', type: 'link' },
  //         { path: `${process.env.PUBLIC_URL}/app/learning/learningdetail`, title: 'LearningDetail', type: 'link' },
  //       ],
  //     },
  //     {
  //       title: 'Map',
  //       icon: 'maps',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/app/map/googlemap`, type: 'link', title: 'GoogleMap' },
  //         { path: `${process.env.PUBLIC_URL}/app/map/pigeonmap`, type: 'link', title: 'PigeonMap' },
  //       ],
  //     },
  //     {
  //       title: 'Editor',
  //       icon: 'editors',
  //       type: 'sub',
  //       active: false,
  //       children: [
  //         { path: `${process.env.PUBLIC_URL}/editor/ckeditor`, type: 'link', title: 'CKEditor' },
  //         { path: `${process.env.PUBLIC_URL}/editor/mdeeditor`, type: 'link', title: 'MDEEditor' },
  //         { path: `${process.env.PUBLIC_URL}/editor/aceeditor`, type: 'link', title: 'ACEEditor' },
  //       ],
  //     },

  //     { path: `${process.env.PUBLIC_URL}/app/knowledgebase`, icon: 'knowledgebase', type: 'link', active: false, title: 'Knowledgebase' },
  //     { path: `${process.env.PUBLIC_URL}/app/supportticket`, icon: 'support-tickets', type: 'link', active: false, title: 'SupportTicket' },
  //   ],
  // },
];

export const AdminSide = {
  menutitle: "AdminSide",
  menucontent: "admin",
  Items: [
    {
      title: "admin",
      icon: 'user',
      type: 'sub',
      active: false,
      children: [
        { path: '/admin/user-manager', title: "User Manager", icon: 'fa fa-user-o', type: 'link'},
        { path: '/admin/manage', title: "Manage", icon: 'fa fa-cog', type: 'link'},
        { path: '/admin/smtps', title: "Smtps", icon: 'fa fa-envelope-o', type: 'link'},
        { path: '/admin/phpMailers', title: "PhpMailers", icon: 'fa fa-paper-plane-o', type: 'link'},
        { path: '/admin/shells', title: "Shells", icon: 'fa fa-code', type: 'link'},
        { path: '/admin/leads', title: "Leads", icon: 'fa fa-desktop', type: 'link'},
        { path: '/admin/cpanels', title: "CPanels", icon: 'icofont icofont-drwaing-tablet', type: 'link'},
        { path: '/admin/rdps', title: "Rdps", icon: 'fa fa-laptop', type: 'link'},
      ]
    }
  ]
};
