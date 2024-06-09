import React, { useState } from 'react';

interface Photo {
    src: string;
    alt?: string;
}

const PhotoGallery = (props: {photos: Photo[]}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const showPrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : props.photos.length - 1
    );
  };

  const showNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex < props.photos.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div id="gallery" className="relative w-full bg-gray-100 rounded" data-carousel="slide">
        <div className="relative overflow-hidden rounded-lg h-[600px]">
            {props.photos.map((photo, index) => ( 
                <div className={"w-full h-full duration-700 ease-in-out " + (currentPhotoIndex!==index?" hidden " : "")} data-carousel-item={currentPhotoIndex == index ? "active" : ""}>
                    <img src={photo.src} className="w-full h-full object-cover" alt={photo.alt}/>
                </div>
            ))}
        </div>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-3'>
          {props.photos.map((photo, index) => (
            <button
              type="button"
              className={"bg-white w-[35px] h-[10px] rounded " + (index === currentPhotoIndex ? "opacity-100" : "opacity-30")}
              onClick={() => setCurrentPhotoIndex(index)}
            />
          ))}
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={showPrevPhoto}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={showNextPhoto}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
  );
};

export default PhotoGallery;
