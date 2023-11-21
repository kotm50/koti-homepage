import React, { useRef, useEffect, useState } from "react";

function ImgLoader(props) {
  const imgRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (imgRef.current) {
      setWidth(imgRef.current.offsetWidth);
    }
  }, []);
  return (
    <div
      ref={imgRef}
      className="w-full overflow-hidden relative"
      style={{ height: `${width}px` }}
    >
      {isLoaded ? (
        <div
          style={{
            backgroundImage: `url(${props.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />
      ) : (
        <div className="w-full h-full animate-pulse bg-slate-200">
          <img
            src={props.img}
            className="w-0 h-0 opacity-0"
            alt=""
            onLoad={handleImageLoaded}
          />
        </div>
      )}
    </div>
  );
}

export default ImgLoader;
