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


export function Userdetail({ Image, FirstName, LastName, Email, Password, TypeOfuser, deleteButton, id, editButton }) {
 
  const [show, setShow] = useState(true);
  const history = useHistory();
  
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
              {/* <InfoIcon /> */}
            </IconButton>
          </h2>
          {/* <h2 className="userdetail-name">{LastName}</h2> */}
        </div>
       
          <p className="userdetail-email">Email: {Email}</p>
          
          <p className="userdetail-rating">User Type: ⭐{TypeOfuser}</p>
              
      </CardContent>
      <CardActions>
        <Counter />  {deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}
