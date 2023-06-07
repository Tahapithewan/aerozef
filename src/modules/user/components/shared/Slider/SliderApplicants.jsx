import React,{useState, useEffect} from 'react'
import URL from '../../../../../config/URL'
import image from "../../../../../img/1.jpg"
import axios from 'axios'
 const Slider = () => {
  let [data , setData] = useState([])
  let fetchData = async()=>{
    let response = await axios.get(`${URL}/applicants`)
    console.log(response.data)
    setData(response.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="container" style={{minHeight : "700px"}}> 
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {
              data.map((item ,index )=>{
                // console.log(index)
                return(
                  <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={(index)} className="active" aria-current="true" aria-label={index+1}></button>
                )
              })
            }

            {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
          </div>
          <div className="carousel-inner">
            {/* <div className="carousel-item active">
              <img src={image} className="d-block w-100" alt=""/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div> */}
            {
              data.map((item ,index)=>{
                return(
                <div key={index} className="carousel-item active">
                <img width="50px" height="700px" src={item.image} className="d-block w-100" alt=""/>
                <div className="carousel-caption d-none d-md-block">
                  <div className="bg-light" >
                    <h1 className='text-dark'>{item.heading}</h1>
                    <p className='text-dark'>{item.description}</p>
                  </div>
                </div>
              </div>)
              })
            }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Slider