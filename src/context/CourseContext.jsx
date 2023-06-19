import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const data = [];

export const CourseContext = createContext();

export function CourseContextProvider(props) {
  const [courses, setCourses] = useState([]);

  function createCourse(course) {
    const newCourse = {
      id: uuidv4(),
      name: course.courseName,
      description: course.description,
      state: course.stateCourse,
    };
    setCourses((previousCourses) => [...previousCourses, newCourse]);
  }

  function deleteCourse(courseId) {
    setCourses(courses.filter((course) => course.id !== courseId));
  }

  useEffect(() => {
    setCourses(data);
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        createCourse,
        deleteCourse,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
}
