import { Link } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";

function Home() {
    return (
        <>
        <div className="conatiner-fluid p-3 bg-body-tertiary">
            <div className="row">
                <div className="col-12">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.pinimg.com/originals/61/6d/e9/616de9bee386678e9e45318a3b5eca33.jpg" className="d-block w-100" alt="..." style={{width:"1000px",height:"400px"}} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ytimg.com/vi/waUVA9K2CYg/maxresdefault.jpg" className="d-block w-100" alt="..." style={{width:"1000px",height:"400px"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://c8.alamy.com/comp/FXA3HR/data-science-typewriter-heading-FXA3HR.jpg" className="d-block w-100" alt="..." style={{width:"1000px",height:"400px"}} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            </div>
        </div>
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col-12 p-3">
                    <p className="text-center text-info fw-bold fs-3">Trending Courses</p>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card  bg-body-tertiary ">
                            <img src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901776.jpg" className="card-img-top img-fluid" alt="..." style={{height:"237px"}} />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">HTML</h5>
                                <p className="card-text text-justify">HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png" className="card-img-top img-fluid" alt="..." style={{height:"237px"}} />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">CSS</h5>
                                <p className="card-text text-justify">CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds" class="card-img-top img-fluid" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-info fw-bold">Cloud Computing</h5>
                                <p class="card-text text-justify">Simply put, cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence over the internet to offer faster innovation, flexible resources, and economies of scale.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card bg-body-tertiary">
                            <img src="https://www.analyticsinsight.net/wp-content/uploads/2021/08/7-Benefits-of-Data-Science.jpg" className="card-img-top img-fluid" alt="..." style={{height:"225px"}} />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">Data Science</h5>
                                <p className="card-text text-justify">Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data.It is a multidisciplinary approach that combines principles .</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/Python-01%20%282%29.png?itok=TEVIQBQo" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">Python</h5>
                                <p className="card-text text-justify">Python has a simple syntax similar to the English language. Python has syntax that allows developers to write programs with fewer lines than some other programming languages. Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_aws.jpg" class="card-img-top img-fluid" alt="..." style={{height:"225px"}} />
                            <div class="card-body">
                                <h5 class="card-title text-info fw-bold">Aws</h5>
                                <p class="card-text text-justify">Amazon Web Services (AWS) is a cloud computing platform that was launched by Amazon in 2006. AWS was initially designed to support the needs of Amazon's own e-commerce business but was soon made available to other businesses as a way to build, deploy, and scale applications in the cloud.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-12">
                        <p className="text-info text-center fw-bold fs-4">Trainee Details</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://www.shutterstock.com/image-photo/happy-mature-professor-lecture-hall-260nw-2345710739.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">John</h5>
                                <p className="card-text fw-bold">Data Science Trainer</p>
                                <p className="card-text fw-bold">6+ years of Work Experience</p>
                                <p className="card-text fw-bold">email:john@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://www.shutterstock.com/image-photo/young-asian-teacher-man-teaching-260nw-1932205829.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">James</h5>
                                <p className="card-text fw-bold">Cloud computing Trainer</p>
                                <p className="card-text fw-bold">8+ years of Work Experience</p>
                                <p className="card-text fw-bold">email:james@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://www.shutterstock.com/image-photo/smiling-young-indian-business-man-260nw-2187607303.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">Ram</h5>
                                <p className="card-text fw-bold">Html and Css Trainer</p>
                                <p className="card-text fw-bold">6+ years of Work Experience</p>
                                <p className="card-text fw-bold">email:ram@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://www.shutterstock.com/image-photo/portrait-happy-mature-professor-during-260nw-2064472328.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">Sai</h5>
                                <p className="card-text fw-bold">Aws Trainer</p>
                                <p className="card-text fw-bold">6+ years of Work Experience</p>
                                <p className="card-text fw-bold">email:sai@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://www.shutterstock.com/image-photo/portrait-happy-male-professor-during-260nw-2078867485.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">Santosh</h5>
                                <p className="card-text fw-bold">Javascript Trainer</p>
                                <p className="card-text fw-bold">8+ years of Work Experience</p>
                                <p className="card-text fw-bold">email:santosh@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://www.shutterstock.com/image-photo/asian-young-male-teacher-smiles-260nw-1911827194.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">Sam</h5>
                                <p className="card-text fw-bold">Python Trainer</p>
                                <p className="card-text fw-bold">6+ years of Work Experience</p>
                                <p className="card-text fw-bold">email:sam@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home