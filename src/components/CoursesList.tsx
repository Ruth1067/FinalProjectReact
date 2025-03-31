// // import {  useEffect, useState } from "react";
// // import ChosenCourse from "./ChosenCourse";
// // import CourseStore, { courseType } from "../stores/CourseStore";
// // import { observer } from "mobx-react-lite";
// // // import { useNavigate } from "react-router-dom";


// // const style: React.CSSProperties  = { 
// //     width: '50vw',
// //     // height: '50vh',
// //     backgroundColor: 'lightblue',
// //     border: '1px solid black',
// //     overflowY: 'auto'
// // }

// // const CourseStyle: React.CSSProperties  = { 
// //     width: '30vw',
// //     height: '30vh',
// //     backgroundColor: 'blue',
// //     border: '1px solid black',
// //     overflowY: 'auto',
// //     fontSize:'20px'
// // }

// // const TitleStyle: React.CSSProperties  = { 
// //     fontSize:'25px',
// //     color:'white',
// // }

// // const CourseList = observer(() => {
// //     // const navigate = useNavigate(); 
// //     const [selectedCourse, setSelectedCourse] = useState<courseType | null>(null);

// //     useEffect(() => {
// //         CourseStore.fetchCourses().catch(error => console.error('Error fetching courses:', error.message));
// //     }, []);
    

// //     function handleCourseClick(course: courseType) {
// //         setSelectedCourse(course);
// //         // navigate(`/chosencourse`);
// //     }
// //     return (
// //     <>
// //         <div style={style}>
// //             {selectedCourse && <ChosenCourse course={selectedCourse} />}
// //         </div>

// //         <div style={style}>
// //             <div>Courses List</div>
// //             <ul style={{ listStyleType: 'none' }}>
// //                 {CourseStore.list
// //                     .filter(course => course.teacherId == null)
// //                     .map((c, i) => (
// //                         <li key={i}>
// //                             <button onClick={() => handleCourseClick(c)}>
// //                                 <div style={CourseStyle}>
// //                                     <div style={TitleStyle}>{c.title}</div>
// //                                 </div>
// //                             </button>
// //                         </li>
// //                     ))}
// //             </ul>
// //         </div>
// //     </>
// // );
// // });

// // export default CourseList;
// // CourseList.tsx
// import { useEffect, useState } from "react";
// import ChosenCourse from "./ChosenCourse";
// import CourseStore, { courseType } from "../stores/CourseStore";
// import { observer } from "mobx-react-lite";

// const style: React.CSSProperties = {
//     width: '60vw',
//     margin: '20px auto',
//     backgroundColor: 'lightblue',
//     border: '1px solid black',
//     borderRadius: '8px',
//     padding: '20px',
//     overflowY: 'auto',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
// };

// const CourseStyle: React.CSSProperties = {
//     width: '85%',
//     backgroundColor: 'blue',
//     border: '1px solid black',
//     borderRadius: '8px',
//     color: 'white',
//     padding: '10px',
//     margin: '25px 0'

// };

// const CourseList = observer(() => {
//     const [selectedCourse, setSelectedCourse] = useState<courseType | null>(null);

//     useEffect(() => {
//         CourseStore.fetchCourses().catch(error => console.error('Error fetching courses:', error.message));
//     }, []);

//     function handleCourseClick(course: courseType) {
//         setSelectedCourse(course);
//     }

//     return (
//         <div style={style}>
//             <h2>Courses List</h2>
//             <div>
//                 {CourseStore.list
//                     .filter(course => course.teacherId == null)
//                     .map((c, i) => (
//                         <div key={i} onClick={() => handleCourseClick(c)} style={CourseStyle}>
//                             {c.title}
//                         </div>
//                     ))}
//             </div>
//             {selectedCourse && <ChosenCourse course={selectedCourse} />}
//         </div>
//     );
// });

// export default CourseList;
// import { useEffect, useState } from "react";
// import ChosenCourse from "./ChosenCourse";
// import CourseStore, { courseType } from "../stores/CourseStore";
// import { observer } from "mobx-react-lite";

// const style: React.CSSProperties = {
//     width: '60vw',
//     margin: '20px auto',
//     backgroundColor: 'lightblue',
//     border: '1px solid black',
//     borderRadius: '8px',
//     padding: '20px',
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     flexDirection: 'column',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
// };

// const CourseStyle: React.CSSProperties = {
//     width: '85%',
//     backgroundColor: 'blue',
//     border: '1px solid black',
//     borderRadius: '8px',
//     color: 'white',
//     padding: '10px',
//     margin: '25px 0'
// };

// const CourseList = observer(() => {
//     const [selectedCourse, setSelectedCourse] = useState<courseType | null>(null);
//     const [searchTerm, setSearchTerm] = useState<string>("");
//     const [searchType, setSearchType] = useState<string>("");

//     useEffect(() => {
//         CourseStore.fetchCourses().catch(error => console.error('Error fetching courses:', error.message));
//     }, []);

//     function handleCourseClick(course: courseType) {
//         setSelectedCourse(course);
//     }

//     // פונקציה לסינון הקורסים על פי סוג החיפוש
//     const filteredCourses = CourseStore.list.filter(course => {
//         if (!searchType) {
//             return true; // כאשר אין סוג חיפוש, מציגים את כל הקורסים
//         }
//         switch (searchType) {
//             case "courseName":
//                 return course.title.toLowerCase().startsWith(searchTerm.toLowerCase());
//             case "teacherName":
//                 return course.teacher?.toLowerCase().startsWith(searchTerm.toLowerCase());
//             case "courseNumber":
//                 return course.number?.toString().startsWith(searchTerm);
//             default:
//                 return false;
//         }
//     });

//     return (
//         <div style={style}>
//             <h2>Courses List</h2>
//             <select value={searchType} onChange={(e) => setSearchType(e.target.value)} style={{ marginBottom: '20px', padding: '10px', width: '20%' }}>
//                 <option value="">הצג את כל הקורסים</option>
//                 <option value="courseName">חפש לפי שם קורס</option>
//                 <option value="teacherName">חפש לפי שם מורה</option>
//                 <option value="courseNumber">חפש לפי מספר קורס</option>
//             </select>
//             <input 
//                 type="text" 
//                 placeholder="הקלד את המילה לחיפוש" 
//                 value={searchTerm} 
//                 onChange={(e) => setSearchTerm(e.target.value)} 
//                 style={{ marginBottom: '20px', padding: '10px', width: '17%' }}
//             />
//             <div>
//                 {filteredCourses
//                     .filter(course => course.teacherId == null)
//                     .map((c, i) => (
//                         <div key={i} onClick={() => handleCourseClick(c)} style={CourseStyle}>
//                             {c.title}
//                         </div>
//                     ))}
//             </div>
//             {selectedCourse && <ChosenCourse course={selectedCourse} />}
//         </div>
//     );
// });

// export default CourseList;
import { useEffect, useState } from "react";
import ChosenCourse from "./ChosenCourse";
import CourseStore, { courseType } from "../stores/CourseStore";
import { observer } from "mobx-react-lite";

const style: React.CSSProperties = {
    width: '50vw', // צמצמנו את הרוחב של הדיב
    margin: '20px auto',
    backgroundColor: '#e0f7fa', // צבע חדש ומעניין
    border: '1px solid #00796b', // צבע גבול חדש
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

const CourseStyle: React.CSSProperties = {
    width: '85%',
    backgroundColor: '#00796b', // צבע חדש לשמות הקורסים
    border: '1px solid black',
    borderRadius: '8px',
    color: 'white',
    padding: '10px',
    margin: '5px 0',
};

const searchContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px',
};

const CourseList = observer(() => {
    const [selectedCourse, setSelectedCourse] = useState<courseType | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchType, setSearchType] = useState<string>("");

    useEffect(() => {
        CourseStore.fetchCourses().catch(error => console.error('Error fetching courses:', error.message));
    }, []);

    function handleCourseClick(course: courseType) {
        setSelectedCourse(course);
    }

    // פונקציה לסינון הקורסים על פי סוג החיפוש
    const filteredCourses = CourseStore.list.filter(course => {
        if (!searchType) {
            return true; // כאשר אין סוג חיפוש, מציגים את כל הקורסים
        }
        switch (searchType) {
            case "courseName":
                return course.title.toLowerCase().startsWith(searchTerm.toLowerCase());
            case "teacherName":
                return course.teacher?.toLowerCase().startsWith(searchTerm.toLowerCase());
            case "courseNumber":
                return course.number?.toString().startsWith(searchTerm);
            default:
                return false;
        }
    });

    return (
        <div style={style}>
            <h2>Courses List</h2>
            <div style={searchContainerStyle}>
                <select 
                    value={searchType} 
                    onChange={(e) => setSearchType(e.target.value)} 
                    style={{ width: '25px', marginRight: '10px', padding: '5px', height: '40px' }} // רוחב קטן יותר
                >
                    <option value="">הצג את כל הקורסים</option>
                    <option value="courseName">חפש לפי שם קורס</option>
                    <option value="teacherName">חפש לפי שם מורה</option>
                    <option value="courseNumber">חפש לפי מספר קורס</option>
                </select>
                <input 
                    type="text" 
                    placeholder="הקלד את המילה לחיפוש" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    style={{ padding: '10px', flex: 1, height: '17px' ,fontFamily:'Arial'}} 
                />
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {filteredCourses
                    .filter(course => course.teacherId == null)
                    .map((c, i) => (
                        <div key={i} onClick={() => handleCourseClick(c)} style={CourseStyle}>
                            {c.title}
                        </div>
                    ))}
            </div>
            {selectedCourse && <ChosenCourse course={selectedCourse} />}
            </div>
    );
});

export default CourseList;
