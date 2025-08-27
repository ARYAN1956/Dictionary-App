import React from "react";

export default function NoResults({ query }) {
  return (
    <div className="no-results">
      <h2>No Results Found</h2>
      <p>
        Sorry, we couldn’t find any definitions for <strong>{query}</strong>.
      </p>
    </div>
  );
}
