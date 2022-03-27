import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { API } from "./global";
import { Userdetail } from "./Userdetail";

// const API = "https://my-json-server.typicode.com/krishnaveni44/fun-data"

export function UserdetailList() {
  const history = useHistory();
  const [userdetailList, setuserdetailList] = useState([]);
  //fetch returns always a promise
  // .then((data) => console.log(data)); // Response object
  // .then((mvs) => console.log(mvs));
  const getuserdetails = () => {
    fetch(`${API}/userdetails`, {
      method: "GET",
      headers: {
        "x-auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzhiMDM4NjAwZDdjYjUyYmRiZTVkMSIsImlhdCI6MTY0ODAxOTUwMH0.Lx5PUM_ngmBTqpsw_vp5is64TC1X53vzTYH-JohPLy0"
      }
    })
      .then((data) => data.json())
      .then((mvs) => setuserdetailList(mvs)); // Auto refresh
  };
  
  useEffect(() => getuserdetails(), []);

  const deleteuserdetail = (id) => {
    fetch(`${API}/userdetails/${id}`, {
      method: "DELETE",
    }).then(() => getuserdetails());
    // console.log("Deleting...", id);
  };

  return (
    <div className="userdetail-list">
      {userdetailList.map(({ Image, FirstName, LastName, Email, Password, TypeOfuser, id, _id }, index) => (
        <Userdetail
          key={index}
          Image={Image}
          FirstName={FirstName}
          LastName={LastName}
          Email={Email}
          Password={Password}
          TypeOfuser={TypeOfuser} 
          
          deleteButton={<IconButton
            style={{ marginLeft: "auto" }}
            onClick={() => deleteuserdetail(_id)}
              
            aria-label="delete"
            color="error"
          >
            <DeleteIcon />
          </IconButton>}

          editButton={<IconButton
            onClick={() => history.push(`/userdetails/edit/${_id}`)}
            aria-label="delete"
            color="secondary"
          >
            <EditIcon />
          </IconButton>}
          id={_id} />
      ))}
    </div>
  );
}
