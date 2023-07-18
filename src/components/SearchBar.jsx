import "./SearchBar.css";

export function SearchBar() {
  return (
    <div className="search-section">

      <h1>
        <b>How can we help?</b>
      </h1>

      <div className="searchbar">
        <form role="search" method="get" action="">
          <input type="search" id="query" placeholder="Search"></input>
        </form>
      </div>
      
    </div>
  );
}
