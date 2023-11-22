
const Contact=()=>{
    return(
        <>
        <div className="container-fluid bg-white p-5">
            <div className="container d-flex justify-content-center align-items-center pt-5 ">
            <div className="row">
                <div className="col-12 p-3">
                    <h3 className="text-primary fw-bold text-center">Contact</h3>
                </div>
                <form className="bg-body-tertiary rounded">
                <div className="col-12 p-3">
                <label for="exampleInputEmail1" className="form-label text-primary fw-bold">Email address</label>
                    <input type="text" placeholder="enter the mailid" style={{width:"300px",height:"30px"}} className="form-control"/>
                </div>
                <div className="col-12">
                <label for="exampleInputEmail1" className="form-label text-primary fw-bold">Message</label>
                   <textarea style={{width:"300px",height:"200px"}} className="form-control"></textarea>
                </div>
                <div className="col-12 p-3">
                   <button className="btn btn-primary">send</button>
                </div>
                </form>
            </div>
            </div>
            </div>
        </>
    )
}
export default Contact;