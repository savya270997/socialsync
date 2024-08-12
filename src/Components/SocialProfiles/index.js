import React from "react";
import {
  FaUserCircle,
  FaRocket,
  FaHeart,
  FaEllipsisH,
  FaComment,
  FaShare,
} from "react-icons/fa";

import "./SocialProfile.css";
import image from "../../images/image3.jpg";

const SocialProfile = () => {
  return (
    <>
      {" "}
      <div className="social-profile">
        <div className="profile-card instagram">
          <FaUserCircle className="profile-avatar" />
          <div className="common-back ">
            <h2>Username_Insta</h2>
            <h3>Full Name</h3>
            <p>This is a short bio for Instagram profile.</p>
          </div>

          <div className="details common-back">
            <p>
              <b>Followers:</b> 2,345
            </p>
            <p>
              <b>Following:</b> 180
            </p>
            <p>
              <b>Posts:</b> 150
            </p>
          </div>
        </div>

        <div className="profile-card twitter">
          <FaUserCircle className="profile-avatar" />
          <div className="common-back">
            <h2>Username_Twitter</h2>
            <h3>Full Name</h3>
            <p>This is a short bio for Twitter profile.</p>
          </div>

          <div className="details common-back">
            <p>
              <b>Tweets:</b> 1,234
            </p>
            <p>
              <b>Followers:</b> 3,456
            </p>
            <p>
              <b>Following:</b> 123
            </p>
          </div>
        </div>

        <div className="profile-card facebook">
          <FaUserCircle className="profile-avatar" />
          <div className="common-back">
            <h2>Username_FB</h2>
            <h3>Full Name</h3>
            <p>This is a short bio for Facebook profile.</p>
          </div>

          <div className="details common-back">
            <p>
              <b>Friends:</b> 850
            </p>
            <p>
              <b>Posts:</b> 456
            </p>
          </div>
        </div>
      </div>
      <h2 className="headtext">Your recent posts</h2>
      <div className="boost-button-container">
        <button className="boost-button">
          <FaRocket className="boost-icon" />
          Boost Post
        </button>
      </div>
      <div className="card">
        <div className="leftColumn">
          <div className="top">
            <button className=" instagram">
              <svg
                className="svgIcon"
                viewBox="0 0 448 512"
                height="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </button>
            <div className="userDetails">
              <div className="profileImg">
                <FaUserCircle className="iconProfile" />
              </div>
              <h3>
                Savya Sanchi Sharma
                <br />
                <span>Web Designer</span>
              </h3>
            </div>
            <div className="dot">
              <FaEllipsisH />
            </div>
          </div>
          <div className="imgBg">
            <img src={image} alt="" />
          </div>
          <p className="message">
            <b>Savya Sanchi Sharma</b> This is an amazing view!{" "}
            <span>#nature</span> <span>#photography</span>
          </p>
        </div>
        <div className="rightColumn">
          <div className="btns">
            <div className="left">
              <FaHeart />
              <p className="likes">1,234 likes</p>
              <FaComment />
              <p className="likes">123 comments</p>
              <FaShare />
              <p className="likes">12 shares</p>
            </div>
          </div>

          {/* Added comments section */}
          <div className="commentsSection">
            <div className="comment">
              <FaUserCircle className="commentIcon" />
              <p>
                <b>Alice</b> Awesome shot!
              </p>
            </div>
            <div className="comment">
              <FaUserCircle className="commentIcon" />
              <p>
                <b>John</b> Love the colors in this photo.
              </p>
            </div>
            <div className="comment">
              <FaUserCircle className="commentIcon" />
              <p>
                <b>John1</b> Love the colors in this photo.
              </p>
            </div>
            <div className="comment">
              <FaUserCircle className="commentIcon" />
              <p>
                <b>John2</b> Love the colors in this photo.
              </p>
            </div>
            <div className="comment">
              <FaUserCircle className="commentIcon" />
              <p>
                <b>John3</b> Love the colors in this photo.
              </p>
            </div>
          </div>

          <p className="comments">View all 123 comments</p>
          <div className="addComments">
            <div className="userImg">
              <FaUserCircle className="iconProfile" />
            </div>
            <input
              type="text"
              className="text"
              placeholder="Add a comment..."
            />
          </div>
          <p className="postTime">2 hours ago</p>
        </div>
      </div>
    </>
  );
};

export default SocialProfile;
