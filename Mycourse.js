import { Link } from "react-router-dom";

const Mycourse=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-4 ps-5">
                    <Link to='/html'>
                        <div className="card">
                            <img src="https://www.investopedia.com/thmb/33J47lYaGMBV4nx8vdJNtHBv3cY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/html.asp-final-86da30eff12f46f3a1394efb0b137103.png" className="img-fluid" alt="html image"/>
                            </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Mycourse;