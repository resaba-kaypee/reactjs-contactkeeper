import React, { useState, useContext } from "react";
import GithubContext from "../../Context/Github/githubContext";
import AlertContext from "../../Context/Alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const {searchUsers, users, clearUsers} = githubContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a name", "light");
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = e => {
    const { value } = e.target;
    setText(value);
  };  

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          value={text}
          onChange={onChange}
          placeholder="Search Users..."
        />
        <button className="btn btn-dark btn-block">Search</button>
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};


export default Search;
