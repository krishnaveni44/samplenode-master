import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
import { Counter } from "./Counter";

// > 8.5 green
// <= 8.5 red
// Task
// 1.New Movie - AddMovie
// 2. Warning: Each child in a list should have a unique "key" prop - why?
// Task

export function Userdetail({ Image, FirstName, LastName, Email, Password, TypeOfuser, deleteButton, id, editButton }) {
  // Normal JS
  // Conditional styling
  // const styles = {
  //   // backgroundColor: "green",
  //   color: TypeOfuser = Manager ? "green" : "red",
  // };
  // Inside return only jsx
  // none -> block (conditional styling)
  const [show, setShow] = useState(true);
  const history = useHistory();
  // const summaryStyles = {
  //  display: show ? "block" : "none",
  // };
  return (
    <Card className="userdetail-container">
     {Image &&  <div class="user-cover"><img src={Image} alt={FirstName} className="userdetail-poster" /></div>}
      <CardContent>
        <div className="userdetail-specs">
          <h2 className="userdetail-name">{FirstName}

            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle summary">
              {/* conditional rendering */}
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>

            <IconButton
              color="primary"
              onClick={() => history.push(`/userdetail/${id}`)}
              aria-label="Toggle summary"
            >
              <InfoIcon />
            </IconButton>
          </h2>
          {/* <h2 className="userdetail-name">{LastName}</h2> */}
        </div>
        {/* <button onClick = {() => setShow(!show)}>Toggle Description</button> */}
        {/* <p style = {summaryStyles} className = "movie-summary">
              {summary}</p>     */}
<p className="userdetail-email">Email: {Email}</p>
          
          <p className="userdetail-rating">User Type: ⭐{TypeOfuser}</p>
        {/* conditional rendering */}
        {/* {show ? <p className="movie-summary">{summary}</p> : ""} */}
      </CardContent>
      <CardActions>
        <Counter />  {deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}
