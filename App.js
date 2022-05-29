import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <div>
        <NavBar />
        <LoadingBar height={2} color="#f11946" progress={progress} />
        {/* <News
                key="General"
                pageSize={5}
                country="in"
                category="General"
              /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="General"
                pageSize={5}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                key="Business"
                pageSize={5}
                country="in"
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                key="Entertainment"
                pageSize={5}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/General"
            element={
              <News
                setProgress={setProgress}
                key="General"
                pageSize={5}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                key="Health"
                pageSize={5}
                country="in"
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                key="Science"
                pageSize={5}
                country="in"
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                key="Sports"
                pageSize={5}
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                key="Technology"
                pageSize={5}
                country="in"
                category="Technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
