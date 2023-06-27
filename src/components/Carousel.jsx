import React from "react";

function Carousel(){
  return(
    <div className="carousel relative shadow-2xl bg-white">
      <div className="carousel-inner relative overflow-hidden w-full">
        {/*Slide 1*/}
        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" defaultChecked="checked"/>
        <div className="carousel-item absolute opacity-0" style={{height: "50vh"}}>
          <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Slide 1</div>
          </div>
          <label htmlFor="carousel-3" className="carousel-control absolute bottom-0 left-0 cursor-pointer w-16 h-16 bg-white text-black text-3xl flex items-center justify-center">‹</label>
          <label htmlFor="carousel-2" className="carousel-control absolute bottom-0 right-0 cursor-pointer w-16 h-16 bg-white text-black text-3xl flex items-center justify-center">›</label>
          
        </div>
      </div>
  )
}
export default Carousel;  