

const Profile = () => {
    return (
        <>
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Seelam kalyan kumar reddy</h5>
                                    <p className="card-text">Aspiring to become Full Stack developer</p>
                                    <a href="#" className="btn btn-info text-white">Logout</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                    <div className="card p-3 bg-body-tertiary">
                                <div className="card-body">
                                    <p className="card-title fw-bold text-info">FullName:<span className="text-dark">Seelam kalyan kumar reddy</span></p>
                                    <p className="card-text fw-bold text-info">Email:<span className="text-dark">Kalyan9751@gmail.com</span></p>
                                    <p className="card-text fw-bold text-info">Phone:<span className="text-dark">9908560510</span></p>
                                    <p className="card-text fw-bold text-info">Adress:<span className="text-dark">Markapur,Praksam,Andhra Pradesh</span></p>
                                </div>
                        </div>
                        <div className="card p-3 mt-3 bg-body-tertiary">
                                <div className="card-body">
                                    <h5 className="card-title text-info fw-bold">Course Status</h5>
                                    <p><span className="fw-bold">Aws<meter value="7" min="0" max="10">2 out of 10</meter></span></p>
                                    <p><span className="fw-bold">Cloud computing<meter value="7" min="0" max="10">2 out of 10</meter></span></p>
                                    <p><span className="fw-bold">Javascript<meter value="7" min="0" max="10">2 out of 10</meter></span></p>                              
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;