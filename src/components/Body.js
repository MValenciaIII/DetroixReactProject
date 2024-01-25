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
            <div className="col-sm-4">
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
                            <input type="button" value="" />
                        </div>
                    </div>
                </div>
            </div>  
            <div className="col-sm-4">
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
                            <input type="button" value="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
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
                            <input type="button" value="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Services() {
    return(
        <div className="row">

        </div>
    )
}


export default Body;