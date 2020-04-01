import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EyeIcon from "@material-ui/icons/VisibilityOutlined";
import PeopleIcon from "@material-ui/icons/PeopleOutlineOutlined";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import MenuItemWrapper from "./menuItemWrapper";
import Tooltip from "@material-ui/core/Tooltip";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
const drawerWidth = 240;

const SLAvatar = styled(Avatar)`
  background-color: #2c3e50;
  height: 40px;
  width: 40px;
`;
const SLListItemIcon = styled(ListItemIcon)`
  color: #fff;
  position: absolute;
  top: 8px;
  left: 8px;
  height: 60px;
`;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "64px"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#2C3E50"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  headerTitle: {
    color: "white",
    fontWeight: "600"
  }
}));
function getIconForMenuItem(menuItem) {
  switch (menuItem.toLowerCase()) {
    case "home": {
      return <HomeIcon />;
    }
    case "about": {
      return <PeopleIcon />;
    }
    case "dashboard": {
      return <EyeIcon />;
    }

    default:
      break;
  }
}
export default function MiniDrawer() {
  const menu = [
    {
      name: "Home",
      route: "/home",
      icon: "home",
      selected: true
    },
    {
      name: "About Us",
      route: "/about",
      icon: "about",
      selected: false
    },
    {
      name: "Benefits",
      route: "/benefits",
      icon: "dashboard",
      selected: false
    }
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [menuList, setMenuList] = React.useState(menu);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const changeSelectedMenu = obj => {
    console.log(obj);
    let menu = JSON.parse(JSON.stringify(menuList));
    menu.map(rec => {
      if (obj === rec.name) {
        rec.selected = true;
      } else {
        rec.selected = false;
      }
    });
    setMenuList(menu);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon className={classes.headerTitle} />
          </IconButton>
          <Typography variant="h4" noWrap className={classes.headerTitle}>
            IntelliFinance
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuList.map((text, index) => (
            <MenuItemWrapper
              islink={true}
              to={text.route}
              style={{ textDecoration: "none" }}
              key={`link_${text.name}`}
            >
              <ListItem
                button
                key={text.name}
                selected={text.selected}
                onClick={() => changeSelectedMenu(text.name)}
              >
                <Tooltip title={text.name} key={`tooltip_${text.name}`}>
                  <SLAvatar>
                    <SLListItemIcon>
                      {getIconForMenuItem(text.icon)}
                    </SLListItemIcon>{" "}
                  </SLAvatar>
                </Tooltip>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      variant="h6"
                      style={{ color: "black", marginLeft: 20 }}
                    >
                      {text.name}
                    </Typography>
                  }
                />
              </ListItem>
            </MenuItemWrapper>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
      </main>
    </div>
  );
}
