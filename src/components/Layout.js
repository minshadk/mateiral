import { useNavigate, useLocation } from "react-router-dom";

import makeStyles from "@mui/styles/makeStyles";
import { Typography, Drawer, AppBar, Toolbar } from "@mui/material";
// Material List
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";

const drawerWidth = 240;

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: "/create",
  },
];

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#333",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100%-${drawerWidth}px)`,
    },
    toolbar:theme.mixins.toolbar
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={classes.root}>
      {/* app bar*/}
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography>Welcome to the ninja notes website</Typography>
        </Toolbar>
      </AppBar>
      {/* side drawer*/}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              key={item.text}
              className={
                location.pathname === item.path ? classes.active : null
              }
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
