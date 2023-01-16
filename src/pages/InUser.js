import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import ApiClient from "../../services/ApiCall";
import { useNavigate } from "react-router-dom";
import "../css/inusers.css";
import Navbar from "../shared/Navbar";

const InUser = () => {
  let { id } = useParams();
  const [user1, setUser1] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${id}`).then((response) => {
      setUser1(response.data);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${id}/posts`).then((response) => {
      setPost(response.data.posts);
      console.log(response.data.posts);
    });
  }, [id]);

  if (!user1) return null;
  const { firstName, lastName, age, email, image, address, phone, university } =
    user1;
  console.log(post);
  return (
    <>
      <Navbar />
      <div className="background">
        <div key={id} className="usersBox container3">
          <div className="one">
            <div className="info">
              <img src={image} />
              <h1>
                {firstName} {lastName}
              </h1>
              <div className="holder">
                <div className="infoUser">
                  <h3>
                    Name:<span>{firstName}</span>
                  </h3>
                  <h3>
                    Last Name:<span>{lastName}</span>
                  </h3>
                  <h3>
                    Age:<span>{age}</span>
                  </h3>
                  <h3>
                    University:<span>{university}</span>
                  </h3>
                </div>

                <div className="infoUser">
                  <h3>
                    Email:<span>{email}</span>
                  </h3>
                  <h3>
                    Address:<span>{address.address}</span>
                  </h3>
                  <h3>
                    City:<span>{address.city}</span>
                  </h3>
                  <h3>
                    Phone:<span>{phone}</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="userPost">
              <h1>Posts:</h1>
              {post?.map((data) => {
                return (
                  <>
                    <div key={data.id} className="newPost">
                      <h3>{data.title}</h3>
                      <p>{data.body}</p>
                      <div className="add">
                        <div className="like">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="grey"
                            class="bi bi-hand-thumbs-up"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                          </svg>
                          <h6>Like</h6>
                        </div>
                        <div className="like">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="grey"
                            class="bi bi-chat-left"
                            viewBox="0 0 16 16"
                          >
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                          </svg>
                          <h6>Comment</h6>
                        </div>
                        <div className="like">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="grey"
                            class="bi bi-reply"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
                          </svg>
                          <h6>Share</h6>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InUser;
