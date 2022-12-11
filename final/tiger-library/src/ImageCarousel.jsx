import imagesgalleryData from "./imagesgallery.js";
import './ImageCarousel.css';
import { useState } from "react";
import { useEffect } from "react";

function ImageCarousel(){
    const [image] = useState(imagesgalleryData);
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const lastIndex = image.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, image]);



    return(
        <div>
            <h2 className="gallery-title">WHY TIGER MATTER</h2>
            <div className="gallery">
                {image.map((item, indexImage) => {
                    const { id, title, path, label} = item;
                let position = "nextSlide";
                if (indexImage === index) {
                    position = "activeSlide";
                }
                if (
                    indexImage === index - 1 ||
                    (index === 0 && indexImage === image.length - 1)
                ) {
                    position = "lastSlide";
                }
                return (
                    <article className={`tigerslide ${position}`} key={id}>
                        <img className="tiger-img" src={path} alt={title}/>
                        <p className="tiger-text">{label}</p>
                    </article>
                );
                })}
                <button 
                    className="tiger-arrow__prev"  
                    aria-label="get previous tiger image"  
                    onClick={() => setIndex(index - 1)}>
                    <i className="gg-arrow-left" alt="button to previous tiger image"/>
                </button>
                <button 
                    className="tiger-arrow__next" 
                    aria-label="get next tiger image" 
                    onClick={() => setIndex(index + 1)}>
                    <i className="gg-arrow-right" alt="button to next tiger image"/>
                </button>
            </div>
        </div>
    );

}

export default ImageCarousel;