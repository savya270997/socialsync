import React from "react";
import {
  FaHeart,
  FaComment,
  FaShare,
  FaEllipsisH,
  FaUserCircle,
  FaRetweet,
} from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import "./Card.css"; // Import the CSS file for styling
import facebook from "../../images/facebook-logo.png";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image3.jpg";

const Card = () => {
  return (
    <div>
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
            <img src={image1} alt="" />
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
      <div className="card">
        <div className="leftColumn">
          <div className="top">
            <button className=" twitter">
              <svg
                className="svgIcon"
                viewBox="0 0 512 512"
                height="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 97.248c-18.84 8.36-39.082 14.008-60.277 16.54 21.62-12.92 38.212-33.216 46.042-57.45-20.242 12-42.71 20.67-66.61 25.41-19.128-20.412-46.344-33.21-76.51-33.21-58 0-105 47-105 105 0 8.22.926 16.188 2.714 23.914-87.18-4.376-164.66-46.2-216.45-109.97-9.066 15.508-14.254 33.586-14.254 52.836 0 36.37 18.54 68.542 46.844 87.428-17.272-.554-33.52-5.286-47.754-13.158v1.32c0 50.828 36.13 93.15 84.198 102.79-8.826 2.396-18.14 3.686-27.734 3.686-6.78 0-13.34-.664-19.676-1.902 13.36 41.77 52.164 72.198 98.116 73.052-35.96 28.17-81.38 44.99-130.76 44.99-8.54 0-16.94-.5-25.14-1.476 46.684 29.922 101.99 47.31 161.18 47.31 193.32 0 298.924-160.078 298.924-298.926 0-4.554-.106-9.086-.306-13.594 20.546-14.824 38.364-33.298 52.456-54.422z"></path>
              </svg>
              <span className="text">Twitter</span>
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
          <p className="message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            luctus urna sed urna ultricies ac tempor dui sagittis. In
            condimentum facilisis porta.
          </p>
        </div>
        <div className="rightColumn">
          <div className="btns">
            <div className="actionIcon">
              <FaComment /> <span>12</span>
            </div>
            <div className="actionIcon">
              <FaRetweet /> <span>24</span>
            </div>
            <div className="actionIcon">
              <FaHeart /> <span>98</span>
            </div>
            <div className="actionIcon">
              <FaShare />
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
          </div>

          <p className="comments">View all 12 replies</p>
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
      <div className="card">
        <div className="leftColumn">
          <div className="top">
            <button className=" facebook">
              <img src={facebook} alt="Facebook logo" />
              <span className="text">Facebook</span>
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
            <img src={image2} alt="" />
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
            <img src={image1} alt="" />
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
      <div className="card">
        <div className="leftColumn">
          <div className="top">
            <button className=" twitter">
              <svg
                className="svgIcon"
                viewBox="0 0 512 512"
                height="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 97.248c-18.84 8.36-39.082 14.008-60.277 16.54 21.62-12.92 38.212-33.216 46.042-57.45-20.242 12-42.71 20.67-66.61 25.41-19.128-20.412-46.344-33.21-76.51-33.21-58 0-105 47-105 105 0 8.22.926 16.188 2.714 23.914-87.18-4.376-164.66-46.2-216.45-109.97-9.066 15.508-14.254 33.586-14.254 52.836 0 36.37 18.54 68.542 46.844 87.428-17.272-.554-33.52-5.286-47.754-13.158v1.32c0 50.828 36.13 93.15 84.198 102.79-8.826 2.396-18.14 3.686-27.734 3.686-6.78 0-13.34-.664-19.676-1.902 13.36 41.77 52.164 72.198 98.116 73.052-35.96 28.17-81.38 44.99-130.76 44.99-8.54 0-16.94-.5-25.14-1.476 46.684 29.922 101.99 47.31 161.18 47.31 193.32 0 298.924-160.078 298.924-298.926 0-4.554-.106-9.086-.306-13.594 20.546-14.824 38.364-33.298 52.456-54.422z"></path>
              </svg>
              <span className="text">Twitter</span>
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
          <p className="message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            luctus urna sed urna ultricies ac tempor dui sagittis. In
            condimentum facilisis porta.
          </p>
        </div>
        <div className="rightColumn">
          <div className="btns">
            <div className="actionIcon">
              <FaComment /> <span>12</span>
            </div>
            <div className="actionIcon">
              <FaRetweet /> <span>24</span>
            </div>
            <div className="actionIcon">
              <FaHeart /> <span>98</span>
            </div>
            <div className="actionIcon">
              <FaShare />
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
          </div>

          <p className="comments">View all 12 replies</p>
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
      <div className="card">
        <div className="leftColumn">
          <div className="top">
            <button className=" twitter">
              <svg
                className="svgIcon"
                viewBox="0 0 512 512"
                height="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 97.248c-18.84 8.36-39.082 14.008-60.277 16.54 21.62-12.92 38.212-33.216 46.042-57.45-20.242 12-42.71 20.67-66.61 25.41-19.128-20.412-46.344-33.21-76.51-33.21-58 0-105 47-105 105 0 8.22.926 16.188 2.714 23.914-87.18-4.376-164.66-46.2-216.45-109.97-9.066 15.508-14.254 33.586-14.254 52.836 0 36.37 18.54 68.542 46.844 87.428-17.272-.554-33.52-5.286-47.754-13.158v1.32c0 50.828 36.13 93.15 84.198 102.79-8.826 2.396-18.14 3.686-27.734 3.686-6.78 0-13.34-.664-19.676-1.902 13.36 41.77 52.164 72.198 98.116 73.052-35.96 28.17-81.38 44.99-130.76 44.99-8.54 0-16.94-.5-25.14-1.476 46.684 29.922 101.99 47.31 161.18 47.31 193.32 0 298.924-160.078 298.924-298.926 0-4.554-.106-9.086-.306-13.594 20.546-14.824 38.364-33.298 52.456-54.422z"></path>
              </svg>
              <span className="text">Twitter</span>
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
          <p className="message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            luctus urna sed urna ultricies ac tempor dui sagittis. In
            condimentum facilisis porta.
          </p>
        </div>
        <div className="rightColumn">
          <div className="btns">
            <div className="actionIcon">
              <FaComment /> <span>12</span>
            </div>
            <div className="actionIcon">
              <FaRetweet /> <span>24</span>
            </div>
            <div className="actionIcon">
              <FaHeart /> <span>98</span>
            </div>
            <div className="actionIcon">
              <FaShare />
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
          </div>

          <p className="comments">View all 12 replies</p>
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
    </div>
  );
};

export default Card;
