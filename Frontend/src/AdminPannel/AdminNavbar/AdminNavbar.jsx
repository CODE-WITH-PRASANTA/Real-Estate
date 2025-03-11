import React from 'react';
import { extendTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import CreateIcon from '@mui/icons-material/Create';
import EditIcon from '@mui/icons-material/Edit';
import ListIcon from '@mui/icons-material/List';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PostAddIcon from '@mui/icons-material/PostAdd'; // Icon for Post Property
import EditLocationIcon from '@mui/icons-material/EditLocation'; // Icon for Edit Property
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import CreateBlog from '../../Components/CreateBlog/CreateBlog';
import EditBlog from '../../Components/EditBlog/EditBlog';
import BlogList from '../../Components/BlogList/BlogList';
import ViewRequest from '../../Components/ViewRequest/ViewRequest';
import ViewProperties from '../../Components/ViewPorperties/ViewProperties';
import PostProperty from '../../Components/PostProperty/PostProperty'; // Import PostProperty Component
import EditProperty from '../../Components/EditProperty/EditProperty'; // Import EditProperty Component
import AgentApproval from '../../Components/AgentApproval/AgentApproval';
import SubAgentApproval from '../../Components/SubAgentApproval/SubAgentApproval';
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
    icon: <DashboardIcon style={{ color: '#1976d2' }} />,
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
    icon: <ArticleIcon style={{ color: '#ff5722' }} />,
    children: [
      {
        segment: 'create',
        title: 'Create Blog',
        icon: <CreateIcon style={{ color: '#4caf50' }} />,
      },
      {
        segment: 'edit',
        title: 'Edit Blog',
        icon: <EditIcon style={{ color: '#ff9800' }} />,
      },
      {
        segment: 'list',
        title: 'Blog List',
        icon: <ListIcon style={{ color: '#3f51b5' }} />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: "Requested Admin's Section",
  },
  {
    segment: 'admin-requests',
    title: 'Admin Requests',
    icon: <PersonAddIcon style={{ color: '#673ab7' }} />,
    children: [
      {
        segment: 'view',
        title: 'View Requests',
        icon: <HowToRegIcon style={{ color: '#8bc34a' }} />,
      },
      {
        segment: 'approve',
        title: 'Approve Request',
        icon: <HowToRegIcon style={{ color: '#ff9800' }} />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Property Management',
  },
  {
    segment: 'property-management',
    title: 'Manage Properties',
    icon: <HomeWorkIcon style={{ color: '#009688' }} />,
    children: [
      {
        segment: 'view',
        title: 'View Properties',
        icon: <HomeWorkIcon style={{ color: '#3f51b5' }} />,
      },
      {
        segment: 'post',
        title: 'Post Property',
        icon: <PostAddIcon style={{ color: '#4caf50' }} />,
      },
      {
        segment: 'edit',
        title: 'Edit Property',
        icon: <EditLocationIcon style={{ color: '#ff5722' }} />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Approval Section',
  },
  {
    segment: 'approval-section',
    title: 'Approvals',
    icon: <SupervisorAccountIcon style={{ color: '#3f51b5' }} />,
    children: [
      {
        segment: 'agent-approval',
        title: 'Agent Approval',
        icon: <SupervisorAccountIcon style={{ color: '#4caf50' }} />,
      },
      {
        segment: 'subagent-approval',
        title: 'SubAgent Approval',
        icon: <GroupAddIcon style={{ color: '#ff5722' }} />,
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
          maxWidth: '100% !important',
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
    <div className="dashboard-wrapper">
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
            {router.pathname === '/admin-requests/view' && <ViewRequest />}
            {router.pathname === '/property-management/view' && <ViewProperties />}
            {router.pathname === '/property-management/post' && <PostProperty />}
            {router.pathname === '/property-management/edit' && <EditProperty />}
            {router.pathname === '/approval-section/agent-approval' && <AgentApproval />}
            {router.pathname === '/approval-section/subagent-approval' && <SubAgentApproval />}
          </PageContainer>
        </DashboardLayout>
      </AppProvider>
    </div>
  );
}
