import { useState } from 'react';
import FileUploadComponent from './Assignment';
import { Htmlconnection, Htmlpdf, Htmltags, Htmlwebpage } from './Htmlwebpage';
import Quiz from './Quiz';

const Datascience = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isAssignmentVisible,setIsAssignmentVisible]=useState(false);
    const[isFrontendVisible,setIsFrontendVisible]=useState(false);
    const[webpage,setWebpage]=useState(false);
    const[tags,setTags]=useState(false);
    const[css,setCss]=useState(false);
    const[Test,setTest]=useState(false);
    const[Assignment,setAssignment]=useState(false);
    const[pdf,setPdf]=useState(false);
    const[QuizVisible,setQuiz]=useState(false);
    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);    
      };
      const Slider=()=>{
        setIsAssignmentVisible(!isAssignmentVisible);
      };
      const Frontend=()=>{
        setIsFrontendVisible(!isFrontendVisible);
      }
      const Testing=()=>{
        setQuiz(!QuizVisible);
      }
    return(

        <>
            <div className="container-fluid bg-body-tertiary">
                <div className="row mt-3">
                    <div className="col-3">
                        <div className="card">
                            <img src="https://dme2wmiz2suov.cloudfront.net/Institution(149)/Logo/573326-innomatics_research_labs_logo.png" className="card-img-top p-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontFamily: "Verdana", fontSize: "15px" }}>HTML(Hyper text Markup Language)-classroom</h5>
                                <p className="card-text text-secondary" style={{ fontFamily: "Verdana", fontSize: "10px" }}>HTML(Hyper text Markup Language)-classroom</p>
                            </div>
                            {/* <meter id="disk_c" value="6" min="0" max="10" className="text-primary form-control-md">6 out of 10</meter> */}
                        </div>
                        <div className="card mt-3">
                            <p className="text-info fw-bold text-center" style={{ fontFamily: "Verdana" }}>CONTENTS</p>
                            <div className="slider-button" style={{ fontFamily: "verdana" }}>
                                <button onClick={Frontend} className='btn fw-bold' style={{ fontFamily: "verdana" }}>
                                    {isFrontendVisible ? 'Html' : 'Html'}
                                </button>
                                {isFrontendVisible && (
                                    <div className="content">
                                        {/* Content to be displayed */}
                                        {/* <p>This is the content that appears when the button is clicked.</p> */}
                                        <button className='btn' onClick={()=>{
                                            setWebpage(true);
                                            setTags(false);
                                            setCss(false);
                                            setTest(false);
                                            setAssignment(false);
                                            setPdf(false);
                                        }}>Video1</button><br/>
                                        <button className='btn' onClick={()=>{
                                            setTags(true);
                                            setWebpage(false);
                                            setCss(false);
                                            setTest(false);
                                            setAssignment(false);
                                            setPdf(false);
                                        }}>Video2</button><br/>
                                        <button className='btn' onClick={()=>{
                                            setCss(true);
                                            setTags(false);
                                            setWebpage(false);
                                            setTest(false);
                                            setAssignment(false);
                                            setPdf(false);
                                        }}>Video3</button>
                                    </div>
                                )}
                            <div className="slider-button" style={{ fontFamily: "verdana" }}>
                                <button onClick={Slider} className='btn fw-bold' style={{ fontFamily: "verdana" }}>
                                    {isAssignmentVisible ? 'Assignment' : 'Assignment'}
                                </button>
                                {isAssignmentVisible && (
                                    <div className="content">
                                        {/* Content to be displayed */}
                                        <button className='btn' onClick={()=>{
                                            setWebpage(false);
                                            setTags(false);
                                            setCss(false);
                                            setTest(false);
                                            setAssignment(true);
                                            setPdf(false);
                                        }}>Assignment 1</button>
                                    </div>
                                )}
                            </div>
                            <div className="slider-button" style={{ fontFamily: "verdana" }}>
                                <button onClick={toggleContent} className='btn fw-bold'>
                                    {isContentVisible ? 'Notes' : 'Notes'}
                                </button>
                                {isContentVisible && (
                                    <div className="content">
                                        {/* Content to be displayed */}
                                        <button className='btn' onClick={()=>{
                                            setWebpage(false);
                                            setTags(false);
                                            setCss(false);
                                            setTest(false);
                                            setAssignment(false);
                                            setPdf(true);
                                        }}>Pdf</button>
                                    </div>
                                )}
                            </div>
                            <div className="slider-button" style={{ fontFamily: "verdana" }}>
                                <button onClick={Testing} className='btn fw-bold'>
                                    {QuizVisible ? 'Test' : 'Test'}
                                </button>
                                {QuizVisible && (
                                    <div className="content">
                                        {/* Content to be displayed */}
                                        <button className='btn' onClick={()=>{
                                            setWebpage(false);
                                            setTags(false);
                                            setCss(false);
                                            setTest(true);
                                            setAssignment(false);
                                            setPdf(false);
                                        }}>Take Test</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-8 text-center'>
                    {webpage && <Htmlwebpage/>}
                    {tags && <Htmltags/>}
                    {css && <Htmlconnection/>}
                    {Test && <Quiz/>}
                    {Assignment && <FileUploadComponent/> }
                    {pdf && <Htmlpdf/>}
                </div>
            </div>
            </div>
        </>
    )
}
export default Datascience;