import react from "react";

class Gallery extends react.Component {
  render() {
    let imgGallery = [
      { src: "./images/b1.jpg", title: "images one" },
      { src: "./images/b2.jpg", title: "images two" },
      { src: "./images/b3.jpg", title: "images three" },
      { src: "./images/b4.jpg", title: "images four" },
      { src: "./images/b5.jpg", title: "images five" },
      { src: "./images/b1.jpg", title: "images one" },
      { src: "./images/b2.jpg", title: "images two" },
      { src: "./images/b3.jpg", title: "images three" },
      { src: "./images/b4.jpg", title: "images four" },
      { src: "./images/b5.jpg", title: "images five" },
    ];
    return (
      <div>
        <center>
          <h1>Web3Bridge Image Gallery</h1>
        </center>
        <div>
          {imgGallery.map((index) => (
            <img
                  src={index.src}
                  title={index.title}
                  alt="img"
                  height="250"
                  width="250"
                  style={{ border: 'solid', backgroundColor: 'gray', marginLeft:'15px', marginBottom:'10px'}}
            />
          ))}
          ;
        </div>
      </div>
    );
  }
}

export default Gallery;
