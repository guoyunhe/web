import { useLogout } from '@guoyunhe/react-auth';
import {
  ArrowBack as ArrowBackIcon,
  Dashboard as DashboardIcon,
  Logout as LogoutIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import config from './config';

export interface LeftNavProps {
  drawerOpen: boolean;
  onDrawerClose: () => void;
}

export default function LeftNav({ drawerOpen, onDrawerClose }: LeftNavProps) {
  const { t } = useTranslation('admin');
  const logout = useLogout();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Drawer
      variant={isDesktop ? 'permanent' : 'temporary'}
      open={drawerOpen}
      onClose={onDrawerClose}
      sx={{ width: config.drawerWidth }}
    >
      <List sx={{ width: config.drawerWidth }} onClick={onDrawerClose}>
        <ListItemButton component={Link} to="/app">
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText primary={t('Back')} />
        </ListItemButton>
        <Divider />
        <ListItemButton component={Link} to="/admin">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={t('Dashboard')} />
        </ListItemButton>
        <ListItemButton component={Link} to="/admin/users">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={t('User Management')} />
        </ListItemButton>
        <ListItemButton component={Link} to="/admin/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={t('Admin Settings')} />
        </ListItemButton>
        <ListItemButton onClick={logout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={t('Logout')} />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
