import { useContext } from 'react';
import { CourseContext } from '../../context/CourseContext';
import CoursesCard from './CoursesCard';

function CoursesList({ handleDeleteCourse }) {
  const { courses } = useContext(CourseContext);
  return (
    <>
      {courses.map((course) => (
        <CoursesCard key={course.id} course={course} handleDeleteCourse={handleDeleteCourse} />
      ))}
    </>
  );
}
export default CoursesList;
