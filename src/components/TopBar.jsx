import "./TopBar.css";

export function TopBar() {
  return (
    <div className="topbar">

        <div className="topbar-info">
          <a className="abstract-info" href="https://www.goabstract.com/">
            Abstract &nbsp;
          </a>
          <a
            className="abstract-info"
            href="https://help.abstract.com/hc/en-us"
          >
            |&nbsp;&nbsp;Help Center
          </a>
        </div>
        <div className="topbar-btns">
          <button className="submit-btn">Submit a request</button>
          <button className="sign-btn">Sign in</button>
        </div>

    </div>
  );
}
