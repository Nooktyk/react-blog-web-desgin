import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://c4.wallpaperflare.com/wallpaper/287/244/1005/uzumaki-naruto-konoha-village-hokage-anime-wallpaper-preview.jpg"
          alt=""
        />
        <p className="sidebarDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          exercitationem doloribus doloremque optio repellat ipsa perferendis
          fugiat esse impedit ipsam sequi.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-twitter"></i>
          <i className=" sidebarIcon fa-brands fa-instagram"></i>
          <i className=" sidebarIcon fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
