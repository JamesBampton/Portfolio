// GitHubPage.js
import React, { useState, useEffect } from "react"; // import react library and two 'hooks', useState and useEffect

/* const GitHubPage = () => {
  return (
    <div>
      <h2>Welcome to the Git Page</h2>
      <p>This is the main content of the home page.</p>
    </div>


  );
};

export default GitHubPage; */

const GitHubPage = () => {
  const [items, setItems] = useState([]); // create empty array
  const username = "JamesBampton";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await response.json();
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="ianda1">
        <div className="w3-padding floating-box-test" id="myHeader">
          <br />
          <br />
          <br />
          <br />
          <div
            className="centered myfontL"
            style={{ backgroundImage: "url(${myImage})" }}
          >
            GITHUB
            <br />
            <p className="myfontS">Repositories</p>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
      </div>

      <div>
        <h2></h2>
        <p>Go visit my repos</p>

        <ul>
          {items.map((item) => (
            // <li  key={item.id}>{item.url}</li>
            <li key={item.id}>
              <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GitHubPage;
