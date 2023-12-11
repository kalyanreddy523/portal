import { useState } from "react";
import Mycourse from "./Mycourse";
import Certificate from "./certificate";
import Profile from "./Profile";

const Myprofile=()=>{
    const[course,setCourse]=useState(false);
    const[certificate,setCertificate]=useState(false);
    const[profile,setProfile]=useState(false);
    return(
        <>
        <div className="container-fluid bg-body-tertiary">
            <div className="row mt-5">
                <div className="col-4">
                    <div className="card">
                            <img src="https://dme2wmiz2suov.cloudfront.net/Institution(149)/Logo/573326-innomatics_research_labs_logo.png" className="card-img-top p-2" alt="..." />
                            {/* <meter id="disk_c" value="6" min="0" max="10" className="text-primary form-control-md">6 out of 10</meter> */}
                        </div>
                        <div className="card mt-5 p-3">
                            <button className="btn fw-bold" onClick={()=>{
                                setCertificate(false);
                                setCourse(true);
                                setProfile(false);
                            }}>
                                MyCourses
                            </button>
                            <button className="btn fw-bold" onClick={()=>{
                                setCertificate(true);
                                setCourse(false);
                                setProfile(false);
                            }}>
                                MyCertificates
                            </button>
                            <button className="btn fw-bold" onClick={()=>{
                                setCertificate(false);
                                setCourse(false);
                                setProfile(true);
                            }}>
                                Profile
                            </button>
                        </div>
                    </div>
                    <div className="col-8">
                        {course && <Mycourse/>}
                        {certificate && <Certificate/>}
                        {profile && <Profile/>}
                    </div>
            </div>
        </div>
        </>
    )
}
export default Myprofile;