import {
  faBoxOpen,
  faCamera,
  faChartBar,
  faCog,
  faFile,
  faHome,
  faTags,
} from '@fortawesome/free-solid-svg-icons';

export const navbarData = [
  {
    routeLink: 'dashboard',
    icon: faHome,
    label: 'Dashboard',
  },
  {
    routeLink: 'products',
    icon: faBoxOpen,
    label: 'Products',
  },
  {
    routeLink: 'statistics',
    icon: faChartBar,
    label: 'Statistics',
  },
  {
    routeLink: 'coupens',
    icon: faTags,
    label: 'Coupens',
  },
  {
    routeLink: 'pages',
    icon: faFile,
    label: 'Pages',
  },
  {
    routeLink: 'media',
    icon: faCamera,
    label: 'Media',
  },
  {
    routeLink: 'settings',
    icon: faCog,
    label: 'Settings',
  },
];
