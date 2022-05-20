import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singPostWrapper">
        <img
          src="https://coolhdwall.com/storage/202102/sasuke-sharingan-rinnegan-eyes-lightning-5k-wallpaper-5120x2880.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum, dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sasuke</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singPostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          numquam cum illo facere, enim molestiae nostrum nihil, hic dolorum
          veniam omnis voluptate sunt magni impedit corrupti totam commodi
          laudantium exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          numquam cum illo facere, enim molestiae nostrum nihil, hic dolorum
          veniam omnis voluptate sunt magni impedit corrupti totam commodi
          laudantium exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          numquam cum illo facere, enim molestiae nostrum nihil, hic dolorum
          veniam omnis voluptate sunt magni impedit corrupti totam commodi
          laudantium exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          numquam cum illo facere, enim molestiae nostrum nihil, hic dolorum
          veniam omnis voluptate sunt magni impedit corrupti totam commodi
          laudantium exercitationem.
        </p>
      </div>
    </div>
  );
}
