import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
// import { debounce } from "lodash";
import "../css/users.css";

const Users = () => {
  const [user, setUser] = useState();
  const [firstN, setFirstN] = useState("");

  //   const Time = debounce((value) => {
  //     setFirstN(value);
  //     console.log("debounce");
  //   }, 500);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      setUser(response.data);
    });
  }, []);

  const GetData = () => {
    axios
      .get(`https://dummyjson.com/users/search?q=${firstN}`)
      .then((response) => {
        setUser(response.data);
      });
  };
  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    GetData();
  }, [firstN]);

  if (!user) return null;

  const { users } = user;

  return (
    <>
      <Navbar />
      <div className="background bottom">
        <div className="search container">
          <form>
            <p>Search:</p>
            <input
              type="text"
              id="fname"
              name="fname"
              value={firstN}
              onChange={(e) => {
                setFirstN(e.target.value);
                //   Time(e.target.value);
              }}
            />
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </form>
        </div>
      </div>

      {users.map((data) => {
        const { id, firstName, lastName, email, image } = data;
        return (
          <div className=" background1">
            <div className="row container2">
              <Link to={`/inuser/${data.id}`}>
                <div key={id} className="user ">
                  <img src={image} alt="profile" />
                  <div className="data">
                    <div className="name">
                      <span>{firstName}</span>
                      <span>{lastName}</span>
                    </div>
                  </div>
                  <div className="mail">
                    <span>{email}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Users;
