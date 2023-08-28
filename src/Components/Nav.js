import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function Nav({ libraryStatus, setLibraryStatus }) {
  return (
    <>
      <nav className="nav-container">
        <h1>Waves</h1>
        {/* onclick set it opposite to what it is */}
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </nav>
    </>
  );
}
