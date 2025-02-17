import React from 'react';
import { extendTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import CreateIcon from '@mui/icons-material/Create';
import EditIcon from '@mui/icons-material/Edit';
import ListIcon from '@mui/icons-material/List';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import CreateBlog from '../../Components/CreateBlog/CreateBlog';
import EditBlog from '../../Components/EditBlog/EditBlog';
import BlogList from '../../Components/BlogList/BlogList';
import './AdminNavbar.css';

// Define navigation data with colorful icons
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon style={{ color: '#1976d2' }} />, // Blue Icon for Dashboard
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Blog Section',
  },
  {
    segment: 'blog',
    title: 'Blog',
    icon: <ArticleIcon style={{ color: '#ff5722' }} />, // Orange Icon for Blog
    children: [
      {
        segment: 'create',
        title: 'Create Blog',
        icon: <CreateIcon style={{ color: '#4caf50' }} />, // Green Icon for Create Blog
      },
      {
        segment: 'edit',
        title: 'Edit Blog',
        icon: <EditIcon style={{ color: '#ff9800' }} />, // Amber Icon for Edit Blog
      },
      {
        segment: 'list',
        title: 'Blog List',
        icon: <ListIcon style={{ color: '#3f51b5' }} />, // Indigo Icon for Blog List
      },
    ],
  },
];

// Custom theme configuration
const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '100% !important', // Ensuring full width for containers globally
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        .css-t3xolk {
          width: auto !important;
        }
      `,
    },
  },
});

// Router hook for navigation
function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
      matches: (path) => pathname.startsWith(path),
    }),
    [pathname]
  );

  return router;
}

// Dashboard Layout Component
export default function DashboardLayoutBasic({ window }) {
  const router = useDemoRouter('/dashboard');
  const demoWindow = window ? window() : undefined;

  return (
    <div className="dashboard-wrapper"> {/* Added custom class for scoping styles */}
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout>
          <PageContainer>
            {router.pathname === '/dashboard' && <AdminDashboard />}
            {router.pathname === '/blog/create' && <CreateBlog />}
            {router.pathname === '/blog/edit' && <EditBlog />}
            {router.pathname === '/blog/list' && <BlogList />}
          </PageContainer>
        </DashboardLayout>
      </AppProvider>
    </div>
  );
}
