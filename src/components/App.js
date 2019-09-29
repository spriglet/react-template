// src/js/components/App.jsx
import React from "react";
import {Table} from "./Table"
const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
    <h2>Articles</h2>
      <Table/>
    </div>
  </div>
);
export default App;