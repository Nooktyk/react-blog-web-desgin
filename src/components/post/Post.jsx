import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
      <Link className="link " to="/post/postId">
        <img
          className="postImg"
          src="https://coolhdwall.com/storage/202102/sasuke-sharingan-rinnegan-eyes-lightning-5k-wallpaper-5120x2880.jpg"
          alt=""
        />
      </Link>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link className="link " to="/post/postId">
            Lorem ipsum, dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
        molestias unde quibusdam, dignissimos iure voluptas aliquid quisquam
        numquam vel, nulla nobis voluptatem quidem perspiciatis asperiores vero
        sequi praesentium culpa soluta? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Expedita molestias unde quibusdam, dignissimos iure
        voluptas aliquid quisquam numquam vel, nulla nobis voluptatem quidem
        perspiciatis asperiores vero sequi praesentium culpa soluta? Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestias
        unde quibusdam, dignissimos iure voluptas aliquid quisquam numquam vel,
        nulla nobis voluptatem quidem perspiciatis asperiores vero sequi
        praesentium culpa soluta?
      </p>
    </div>
  );
}
