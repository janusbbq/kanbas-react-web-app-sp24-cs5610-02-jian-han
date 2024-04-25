import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Courses from "./Courses";
import * as client from "./Courses/client";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [_courses, setCourses] = useState<any[]>([]);
  const findAllCourses = async () => {
    const response = await client.fetchAllCourses();
    setCourses(response);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/Account/*" element={<Account />} />
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route
              path="/Courses/:courseId/*"
              element={<Courses courses={_courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
