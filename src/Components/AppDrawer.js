// import React from "react";
// import LeaveForm from "./Components/LeaveForm";
// import { BrowserRouter, Routes, Route,Link,Outlet } from "react-router-dom";
// import DisplayTable from "./Components/DisplayTable";
// import {
//   CssBaseline,
//   Grid,
//   Tab,
//   Tabs,
//   Box,
//   Typography,
//   Toolbar,
//   Button,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Divider,
// } from "@mui/material";
// import MuiAppBar from "@mui/material/AppBar";
// import { IconButton, styled, useTheme, Drawer } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// import { Formik, useFormik } from "formik";
// import PropTypes from "prop-types";
// const drawerWidth = 240;
// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// function App() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar position="fixed" open={open}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerOpen}
//               edge="start"
//               sx={{ mr: 2, ...(open && { display: "none" }) }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap component="div">
//               Persistent drawer
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             "& .MuiDrawer-paper": {
//               width: drawerWidth,
//               boxSizing: "border-box",
//             },
//           }}
//           variant="persistent"
//           anchor="left"
//           open={open}
//         >
//           <DrawerHeader>
//             <IconButton onClick={handleDrawerClose}></IconButton>
//           </DrawerHeader>
//           <Divider />
//           <List>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon></ListItemIcon>
//                 <ListItemText />
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </Drawer>
//         <Main open={open}>
//           <DrawerHeader />
//           <BrowserRouter>
//           <Routes>
//             <Route path="/"></Route>
//             <Route ></Route>
//             <Route></Route>
//           </Routes>
//           </BrowserRouter>
//         </Main>
//       </Box>
//     </>
//   );
// }
// export default App;
