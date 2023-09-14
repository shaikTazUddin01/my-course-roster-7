import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handaleTitle}) => {
    const[courses,setcourses]=useState([]);

    useEffect(()=>{
        fetch("../../../public/course.json")
        .then((res)=>res.json())
        .then((data ) => setcourses(data))
    },[])
  
    return (
        <div className="grid grid-cols-3 gap-4 mt-10">
            {
                courses.map(course=><Course course={course} handaleTitle={handaleTitle}></Course>)
            }
        </div>
    );
};

export default Courses;