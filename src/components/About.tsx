// import { Outlet } from "react-router-dom"

// const About=()=>{
//     return(<>
//     <div>
//         about component
//     </div>
//     <Outlet/>
//     </>)
// }

// export default About
// About.tsx
import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>About Component</h1>
            <Outlet />
        </div>
    );
}

export default About;
