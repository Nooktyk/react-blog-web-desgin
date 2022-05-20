import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headersubTitle">Shinobi</span>
        <span className="headerTitle">STORY</span>
      </div>
      <img
        src="https://staticg.sportskeeda.com/editor/2022/03/c468f-16482907265601-1920.jpg"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
