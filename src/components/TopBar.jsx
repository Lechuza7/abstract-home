import "./TopBar.css";
import logo from "../assets/img/abstract-logo.png"

export function TopBar() {
  return (
    <div className="topbar">
        
        <div className="topbar-info">
          <img src={logo} style={{ maxWidth: "25px"}} alt="Corp Logo"></img>
          <a className="abstract-info go-to" href="https://www.goabstract.com/">
            Abstract &nbsp;
          </a>
          <a
            className="abstract-info help"
            href="https://help.abstract.com/hc/en-us"
          >
            |&nbsp;&nbsp;Help Center
          </a>
        </div>

        <div className="topbar-btns">
          <button className="topbar-btn submit-btn">Submit a request</button>
          <button className="topbar-btn sign-btn">Sign in</button>
        </div>

    </div>
  );
}
