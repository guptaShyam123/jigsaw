import React from "react";
// import Searchbar from "./Searchbar";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Logo from "../Images/logo.png";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import ListItemIcon from "@mui/material/ListItemIcon";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/system";

const StyledAppbar = styled(AppBar)(({ theme }) => ({
  height: "25vh",
  position: "sticky",
  top: "0",
  display: "flex",
 
  backgroundImage: `url(${require("../Images/logo.png")})`,
}));

const StyledInput = styled("input")(({ theme }) => ({
  width: "25vw",
  height: "3vh",
  marginTop: "8vh",
  marginLeft: "vw",
  borderRadius: "17px",
  border: "none",
  '&:focus': {
    outline: 'none',
  }
}));

const Drawernav = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) =>(
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundImage: `url(${require("../Images/img.jpg")})`,
  
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem to="/" button>
          <ListItemIcon>
            <HomeIcon sx={{ color: "#2962ff" }} />{" "}
            <span
              style={{ marginLeft: "6px", marginTop: "3px", color: "white" }}
            >
              Home
            </span>
          </ListItemIcon>
        </ListItem>
        <ListItem to="/profile" button>
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: "#2962ff" }} />{" "}
            <span
              style={{ marginLeft: "6px", marginTop: "3px", color: "white" }}
            >
              About Us
            </span>
          </ListItemIcon>
        </ListItem>
        <ListItem to="/bookmarked" button>
          <ListItemIcon>
            <FavoriteOutlinedIcon sx={{ color: "#2962ff" }} />
            <span
              style={{ marginLeft: "6px", marginTop: "3px", color: "white" }}
            >
              Our Product
            </span>
          </ListItemIcon>
        </ListItem>
        <ListItem to="/bookmarked" button>
          <ListItemIcon>
            <FavoriteOutlinedIcon sx={{ color: "#2962ff" }} />
            <span
              style={{ marginLeft: "6px", marginTop: "3px", color: "white" }}
            >
              Contact Us
            </span>
          </ListItemIcon>
        </ListItem>
        <ListItem to="/communities" button>
          <ListItemIcon>
            <AddCardOutlinedIcon sx={{ color: "#2962ff" }} />
            <span
              style={{ marginLeft: "6px", marginTop: "3px", color: "white" }}
            >
              Communities
            </span>
          </ListItemIcon>
        </ListItem>
        <ListItem to="/createcommunity" button>
          <ListItemIcon>
            <AddOutlinedIcon sx={{ color: "#2962ff" }} />
            <span
              style={{ marginLeft: "6px", marginTop: "3px", color: "white" }}
            >
              Create Community
            </span>
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppbar>
        <Toolbar sx={{
          display: "flex",
          justifyContent: "space-between",
         }}>
          <img
            src={Logo}
            style={{ height: "20vh", width: "20vw", marginRight: "2vw" }}
          />
          <StyledInput/>
          <div style={{
            marginBottom: "12vh",
          }}>
            {["right"].map((anchor)=> (
 
              <React.Fragment key={anchor}>
                <MenuIcon  onClick={toggleDrawer(anchor, true)} />
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  style={{}}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </Toolbar>
      </StyledAppbar>
    </>
  );
};

export default Drawernav;