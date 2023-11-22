import { Link } from "react-router-dom";

const Allcourses=()=>{
    return(
        <>
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col-12 p-3">
                    <p className="text-center text-info fw-bold fs-3">Trending Courses</p>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card  bg-body-tertiary ">
                            <img src="https://www.freecodecamp.org/news/content/images/2023/03/HTML-Blog-Cover-1.png" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">HTML</h5>
                                <p className="card-text">HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.</p>
                                <Link to="/payment" className="btn btn-info text-white">300</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">CSS</h5>
                                <p className="card-text">CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.</p>
                                <Link to="/css" className="btn btn-info text-white">Viewcourse</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds" class="card-img-top img-fluid" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-info fw-bold">Cloud Computing</h5>
                                <p class="card-text">Simply put, cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence over the internet to offer faster innovation, flexible resources, and economies of scale.</p>
                                <Link to="/cloudcomputing" className="btn btn-info text-white">Viewcourse</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card bg-body-tertiary">
                            <img src="https://www.analyticsinsight.net/wp-content/uploads/2021/08/7-Benefits-of-Data-Science.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">Data Science</h5>
                                <p className="card-text">Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data.</p>
                                <Link to="/Datascience" className="btn btn-info text-white">Viewcourse</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/Python-01%20%282%29.png?itok=TEVIQBQo" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-info fw-bold">Python</h5>
                                <p className="card-text">Python has a simple syntax similar to the English language. Python has syntax that allows developers to write programs with fewer lines than some other programming languages. Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.</p>
                                <Link to="/python" className="btn btn-info text-white">Viewcourse</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card bg-body-tertiary">
                            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_aws.jpg" class="card-img-top img-fluid" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-info fw-bold">Aws</h5>
                                <p class="card-text">Amazon Web Services (AWS) is a cloud computing platform that was launched by Amazon in 2006. AWS was initially designed to support the needs of Amazon's own e-commerce business but was soon made available to other businesses as a way to build, deploy, and scale applications in the cloud.</p>
                                <Link to="/Aws" className="btn btn-info text-white">Viewcourse</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Allcourses;