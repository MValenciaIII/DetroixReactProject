import React from 'react'
import HeroImage from '../images/300x300.png'
import smart from '../images/200x100.png'
function Body() {

    return(
        <div className="container">
            <Heroimage />
            <Carousel />
            <BlogsRow />
            <Services />
        </div>
    )
}

function Heroimage() {
    return(
        <div className="row heroImage">
            <div className="col-sm-12 text-center">
                <img src={HeroImage} className="img-fluid rounded" alt="" />
            </div>
        </div>
    )
}

function Carousel() {

    return(
        <div className="row justify-content-center carouselGroup ">
            <div className="col-sm-4">
                <ul className='list-group list-group-horizontal d-flex justify-content-center'>
                    <li>
                        <input className='list-group-item carouselButton rounded-circle' type="button" value="" />
                    </li>
                    <li>
                        <input className='list-group-item carouselButton rounded-circle' type="button" value="" />
                    </li>
                    <li>
                        <input className='list-group-item carouselButton rounded-circle' type="button" value="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

function BlogsRow() {
    return(
        <div className="row">
            <div className="col-sm-4 blogBorder">
                <div className="container">
                    <div className="row blogTitle">
                        <div className="col-sm-12">
                            <h1>SMART</h1>
                        </div>
                    </div>
                    <div className="row blogImg">
                        <div className="col-sm-12">
                            <img src={smart} alt="" />
                        </div>
                    </div>
                    <div className="row blogDescription">
                        <div className="col-sm-12">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas delectus doloremque illo quae tempora illum sed, iste sapiente totam inventore debitis eaque et vel architecto facere incidunt nisi voluptatum.</p>
                        </div>
                    </div>
                    <div className="row blogButton">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>
                </div>
            </div>  
            <div className="col-sm-4 blogBorder">
                <div className="container">
                    <div className="row blogTitle">
                        <div className="col-sm-12">
                            <h1>STRONG</h1>
                        </div>
                    </div>
                    <div className="row blogImg">
                        <div className="col-sm-12">
                            <img src={smart} alt="" />
                        </div>
                    </div>
                    <div className="row blogDescription">
                        <div className="col-sm-12">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas delectus doloremque illo quae tempora illum sed, iste sapiente totam inventore debitis eaque et vel architecto facere incidunt nisi voluptatum.</p>
                        </div>
                    </div>
                    <div className="row blogButton">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 blogBorderTop">
                <div className="container">
                    <div className="row blogTitle">
                        <div className="col-sm-12">
                            <h1>STABLE</h1>
                        </div>
                    </div>
                    <div className="row blogImg">
                        <div className="col-sm-12">
                            <img src={smart} alt="" />
                        </div>
                    </div>
                    <div className="row blogDescription">
                        <div className="col-sm-12">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas delectus doloremque illo quae tempora illum sed, iste sapiente totam inventore debitis eaque et vel architecto facere incidunt nisi voluptatum.</p>
                        </div>
                    </div>
                    <div className="row blogButton">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Services() {
    
    return(
        <div className="row serviceBackgroundColor">
            <div className="col-sm-4 position-relative">
                <div className="container">
                    <div className="row serviceTitle">
                        <div className="col-sm-12">
                            <h1>SERVICES</h1>
                        </div>
                    </div>
                    <div className="row serviceBulletlist">
                        <div className="col-sm-12">
                            <ul>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row serviceButon position-absolute bottom-0 start-0">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="container">
                    <div className="row oppTitle">
                        <div className="col-sm-12">
                            <h1>OPPORTUNITIES</h1>
                        </div>
                    </div>
                    <div className="row oppBulletlist">
                        <div className="col-sm-12">
                            <ul>
                                <li>
                                    <h3>Lorem ipsum dolor sit.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident dolor magnam voluptatum quos itaque praesentium dignissimos veritatis, nesciunt nihil ullam id? Dolorum, hic! Molestias veniam necessitatibus aliquid illo pariatur.</p>
                                </li>
                                <li>
                                    <h3>Lorem ipsum dolor sit.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident dolor magnam voluptatum quos itaque praesentium dignissimos veritatis, nesciunt nihil ullam id? Dolorum, hic! Molestias veniam necessitatibus aliquid illo pariatur.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row oppButton">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="container">
                    <div className="row newssTitle">
                        <div className="col-sm-12">
                            <h1>NEWS</h1>
                        </div>
                    </div>
                    <div className="row newsLinkOne">
                        <div className="col-sm-3 newImage">
                            <img src="https://placehold.jp/150x150.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-sm-9 newsDescrip">
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus dicta quisquam! Beatae ratione quo, minus fuga repellendus culpa, ab iure maiores quam cumque dolorem ea, incidunt velit voluptatem recusandae!</p>
                        </div>
                    </div>
                    <div className="row newsLinkTwo">
                        <div className="col-sm-3 newImage">
                            <img src="https://placehold.jp/150x150.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-sm-9 newsDescrip">
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus dicta quisquam! Beatae ratione quo, minus fuga repellendus culpa, ab iure maiores quam cumque dolorem ea, incidunt velit voluptatem recusandae!</p>
                        </div>
                    </div>
                    <div className="row newsLinkThree">
                        <div className="col-sm-3 newImage">
                            <img src="https://placehold.jp/150x150.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-sm-9 newsDescrip">
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus dicta quisquam! Beatae ratione quo, minus fuga repellendus culpa, ab iure maiores quam cumque dolorem ea, incidunt velit voluptatem recusandae!</p>
                        </div>
                    </div>
                    <div className="row newsButton">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Body;