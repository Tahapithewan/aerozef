import React from 'react'

const Slider = () => {
  return (
    <>
    <div id="myCarousel"className="carousel slide"data-ride="carousel" >
      <ol className="carousel-indicators">
        <li data-target="#myCarousel"data-slide-to="0"className="active"></li>
        <li data-target="#myCarousel"data-slide-to="1"className="active"></li>
        <li data-target="#myCarousel"data-slide-to="2"className="active"></li>
      </ol>
       <div className="carousel-inner">
           <div className="carousel-item active" style={{height:"32rem",color:"white",position:"relative",backgroundColor:"grey"}}>
      <div className="container" style={{position:"absolute",bottom:"0",left:"0",right:"0",padding:"50px"}}>
        <h1>Example Headlines</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla rerum sed cumque
           mollitia expedita ratione repellendus voluptatem suscipit voluptates, cupiditate aut libero
           modi debitis rem nobis fuga deleniti aspernatur?</p>
           <a href="#" className="btn btn-lg btn-primary">Dabao</a>
      </div>
           </div>
           <div className="carousel-item active" style={{height:"32rem",color:"white",position:"relative",backgroundColor:"grey"}}>
      <div className="container" style={{position:"absolute",bottom:"0",left:"0",right:"0",padding:"50px"}}>
        <h1>Example Headlines</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla rerum sed cumque
           mollitia expedita ratione repellendus voluptatem suscipit voluptates, cupiditate aut libero
           modi debitis rem nobis fuga deleniti aspernatur?</p>
           <a href="#" className="btn btn-lg btn-primary">Dabao</a>
      </div>
           </div>
           <div className="carousel-item active" style={{height:"32rem",color:"white",position:"relative",backgroundColor:"grey"}}>
      <div className="container" style={{position:"absolute",bottom:"0",left:"0",right:"0",padding:"50px"}}>
        <h1>Example Headlines</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla rerum sed cumque
           mollitia expedita ratione repellendus voluptatem suscipit voluptates, cupiditate aut libero
           modi debitis rem nobis fuga deleniti aspernatur?</p>
           <a href="#" className="btn btn-lg btn-primary">Dabao</a>
      </div>
           </div>
       </div>
       <a href="#myCarousel"className="carousel-control-prev" role="button"data-slide="prev">
        <span className="sr-only">Previous</span>
        <span className="carousel-control-prev-icon"aria-hidden="true"></span>
       </a>
       <a href="#myCarousel"className="carousel-control-next" role="button"data-slide="next">
        <span className="sr-only">Next</span>
        <span className="carousel-control-next-icon"aria-hidden="true"></span>
       </a>
    </div>
    </>
  )
}

export default Slider