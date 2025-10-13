import React, { useState } from "react";

interface Props {
  images: string[];
}

const ProductGallery: React.FC<Props> = ({ images }) => {
  const [selected, setSelected] = useState(images[0]);

  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center w-full">
      {/* Main Image */}
      <div className="relative w-full flex justify-center border border-gray-200 rounded-xl shadow-sm bg-white p-4">
        <img
          src={selected}
          alt="Product"
          className="object-contain max-h-[420px] w-auto transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* Thumbnail List */}
=======
    <div className="flex flex-col items-center">
      <img
        src={selected}
        alt="Product"
        className="object-contain max-h-[500px] p-6 rounded-lg border border-gray-200 shadow-sm object-contain"
      />
>>>>>>> 970108f (ProductDetailPage)
      <div className="flex mt-4 gap-2 justify-center flex-wrap">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
<<<<<<< HEAD
            alt={`Thumbnail ${i + 1}`}
            className={`w-16 h-16 border rounded-md cursor-pointer object-contain transition-transform duration-200 ${
              img === selected
                ? "border-gray-800 scale-105"
                : "border-gray-300 hover:scale-105"
=======
            alt=""
            className={`w-16 h-16 border rounded-md cursor-pointer object-contain ${
              img === selected ? "border-gray-800" : "border-gray-300"
>>>>>>> 970108f (ProductDetailPage)
            }`}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
<<<<<<< HEAD

      {/* Caption */}
      <p className="text-xs text-gray-400 mt-3">
        Hover over image to zoom in
      </p>
=======
      <p className="text-xs text-gray-400 mt-2">Hover over image to zoom in</p>
>>>>>>> 970108f (ProductDetailPage)
    </div>
  );
};

export default ProductGallery;
