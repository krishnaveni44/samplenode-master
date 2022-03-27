import { useState } from "react";
import "./App.css";

import Button from '@mui/material/Button';

import MailIcon from '@mui/icons-material/Mail';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Switch, Redirect, Route, Link } from "react-router-dom";
import { Msg } from "./Msg";

import { NotificationsOffRounded } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import Stack from "@mui/material/Stack";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { UserDetailsss } from "./UserDetailsss";
import { UserdetailList } from "./UserdetailList";
import { TicTacToe } from "./TicTacToe";
import { EditUserDetail } from "./EditUserDetail";
import { NotFound } from "./NotFound";
import { AddColor } from "./AddColor";
import { AddUserDetail } from "./AddUserDetail";



export default function App() { 

const INITIAL_USERDETAIL_LIST = [
  { 
    "id": "100",
"Image": "https://image3.mouthshut.com/images/imagesp/925004670s.jpg",     
 "FirstName": "Sachin",
 "LastName": "Tendulkar",       
 "Email": "sachintendulkar@gmail.com",
 "Password": "123456",
 "TypeOfuser": "Admin" 
 },    
  { 
    "id": "101",
"Image": "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=281",     
 "FirstName": "Shiva",
 "LastName": "Sakthi",       
 "Email": "shivasakthi@gmail.com",
 "Password": "123456",
 "TypeOfuser": "Admin" 
 }, 
 { 
      "id": "102",
"Image":"https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80",
    "FirstName": "Kaaviya",
    "LastName": "Sakthi",       
    "Email": "kaaviyasakthi@gmail.com",
    "Password": "1234567",
    "TypeOfuser": "Employee" 
    },
    { 
        "id": "103",
"Image": "https://i0.wp.com/www.ritzmagazine.in/wp-content/uploads/2022/01/Sania_Mirza-770x433-1.jpg?resize=696%2C390&ssl=1",
      "FirstName": "Shri",
      "LastName": "Sakthi",       
      "Email": "shrisakthi@gmail.com",
      "Password": "345678", 
      "TypeOfuser": "Employee" 
     }
  ];
const [userdetailList, setuserdetailList] = useState(INITIAL_USERDETAIL_LIST);

const [Image, setImage] = useState("");
const [FirstName, setName] = useState("");
const [LastName, setLastName] = useState("");
const [Email, setEmail] = useState("");
const [Password, setPassword] = useState("");
const [TypeOfuser, setTypeOfuser] = useState("");

const history = useHistory();
const [mode,setMode] = useState("dark");
const theme = createTheme({
  palette: {
    mode: mode,
  },
});

return(
<ThemeProvider theme={theme}>
  <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4} >
  <div className = "App"> 
   
    <AppBar position="static">
        <Toolbar>
         <Button color="inherit" onClick = {() => history.push("/")}>Home</Button>
         <Button color="inherit" onClick = {() => history.push("/userdetails")}>User Details</Button>
         <Button color="inherit" onClick = {() => history.push("/color-game")}>Color Game</Button>
         <Button color="inherit" onClick = {() => history.push("/tic-tac-toe")}>Tic Tac Toe</Button>
         <Button color="inherit" onClick = {() => history.push("/userdetails/add")}>
           Add User Detail</Button>
           <Button 
           color="inherit"
           style = {{ marginLeft: "auto" }}
            startIcon = {
              mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
            }
            onClick = {() =>setMode(mode == "light" ? "dark": "light")}
            >
           {mode == "light" ? "dark": "light"} mode
           </Button>
        </Toolbar>
      </AppBar>

        {/* A <Switch> looks through all its child elements and renders the first one 
            which matches the current URL. Use a <Switch> you have multiple routers, but you want ...of them to render at a time. */}
<div className = "route-container">
<Switch>
      <Route exact path="/">
        <Msg />
      </Route>

    <Route path="/details">
        <Redirect to = "/userdetails" />
    </Route>
    
    <Route path="/userdetails/add">
    <AddUserDetail />
   </Route>
     
     <Route path = "/userdetails/edit/:id"> 
          <EditUserDetail userdetailList = {userdetailList} setuserdetailList={setuserdetailList} />
     </Route>
    
     <Route path = "/userdetails/:id">
        <UserDetailsss />
    </Route>
    <Route path="/userdetails">
       <UserdetailList />     
     </Route>
    <Route path="/color-game">
      <AddColor />
    </Route>
    <Route path="/tic-tac-toe">
      <TicTacToe />
    </Route>
     <Route path="**"> 
        <NotFound /> 
    </Route>

  </Switch>
  </div>

</div>
</Paper>
</ThemeProvider>
);
}


