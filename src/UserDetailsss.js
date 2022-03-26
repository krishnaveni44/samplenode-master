import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { API } from "./global";

export function UserDetailsss() {
  const { id } = useParams(); // extracting parameter from the URL
  const [userdetail, setuserdetail] = useState({});

  useEffect(() => {
    fetch(`${API}/userdetail/${id}`,
     {
      method: "GET",
    }) //returns always a promise

      // .then((data) => console.log(data)); // Response object
      .then((data) => data.json())
      // .then((mvs) => console.log(mvs));
      .then((mv) => setuserdetail(mv))
      .catch((err) => console.log(err));
  }, []);

  const history = useHistory();
  return (
    <div>
      {/* right click the youtube vedio and give copy embed code  */}
      <iframe
        width="100%"
        height="650"
        src={userdetail.Image}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="userdetail-detail-container">
        <div className="userdetail-specs">
          <h3 className="userdetail-name">{userdetail.FirstName}</h3>
          <p className="userdetail-TypeOfuser">⭐{userdetail.TypeOfuser} </p>
        </div>
        <h3 className="userdetail-name">{userdetail.Email}</h3>
        <Button
          variant="contained"
          onClick={() => history.goBack()}
          // onClick = {() => history.push("/movies")}
          // onClick = {() => history.goForward()}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
