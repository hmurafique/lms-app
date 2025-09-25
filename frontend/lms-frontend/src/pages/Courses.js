import React, { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4002/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course.title} - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
