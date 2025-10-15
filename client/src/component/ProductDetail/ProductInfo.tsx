import React from "react";
<<<<<<< HEAD
import ProductGallery from "./ProductGallery";
import ProductTabs from "./ProductSpec";
import FAQSection from "./FAQSection";
import { ShoppingCart, Heart } from "lucide-react";
<<<<<<< HEAD
import { useCart } from "../../context/CartContext";
=======
import { useCart } from "../../context/CartContext"; 
>>>>>>> 180bcab (ProductCartPage)
=======
import { ShoppingCart, Heart } from "lucide-react";
>>>>>>> 7016103 (update ProductDetailPage layout)
import type { SimpleProduct } from "../../sample/sample";

interface Props {
  product: SimpleProduct;
}

<<<<<<< HEAD
const ProductDetailMain: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart(); // ✅ lấy context

  // ✅ Lấy ảnh đầu tiên (nếu có)
=======
const ProductInfo: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart(); 

  // Lấy ảnh đầu tiên (nếu có)
>>>>>>> 180bcab (ProductCartPage)
  const firstImage =
    typeof product.image === "string"
      ? product.image
      : product.image?.[0] || "/default-image.png";

<<<<<<< HEAD
  // ✅ Parse giá sang number
=======
  // Parse giá sang number nếu đang là string
>>>>>>> 180bcab (ProductCartPage)
  const parsedPrice =
    typeof product.price === "string"
      ? parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0
      : product.price;

  return (
<<<<<<< HEAD
    <section className="w-full py-8">
      {/* Grid: Gallery + Info */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-10 items-start">
        {/* Left: Gallery */}
        <ProductGallery images={product.image} />

        {/* Right: Info + Tabs */}
        <div className="flex flex-col gap-6">
          {/* Product Info */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold leading-snug">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-gray-900">{product.price}</p>

<<<<<<< HEAD
            <p className="text-sm text-gray-500">
              {product.status === "Có hàng" ? "Còn hàng" : "Hết hàng"}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3 mt-3">
              {/* 🛒 Add to Cart */}
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: firstImage,
                    quantity: 1,
                  })
                }
                disabled={product.status === "Hết hàng"}
                className={`flex items-center gap-2 py-2 px-5 rounded-lg transition ${
                  product.status === "Hết hàng"
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                <ShoppingCart size={18} />
                {product.status === "Hết hàng" ? "Hết hàng" : "Add to cart"}
              </button>

              {/* ❤️ Wishlist */}
              <button className="flex items-center gap-2 border border-gray-300 py-2 px-5 rounded-lg hover:bg-gray-100 transition">
                <Heart size={18} />
                Wishlist
              </button>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="-mt-2">
            <ProductTabs description={product.description} />
          </div>
        </div>
=======
      {/* Buttons */}
      <div className="flex items-center gap-3 mt-3">
        {/* 🛒 Nút Add to Cart */}
        <button
  onClick={() =>
    addToCart({
      id: product.id,
      name: product.name,
      price: typeof product.price === "string"
        ? parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0
        : product.price,
      image:
        typeof product.image === "string"
          ? product.image
          : product.image?.[0] || "/default-image.png",
      quantity: 1,
    })
  }
  className="flex items-center gap-2 bg-black text-white py-2 px-5 rounded-lg hover:bg-gray-800 transition"
>
  <ShoppingCart size={18} />
  Add to Cart
</button>


        {/* ❤️ Wishlist */}
=======
    <div className="flex flex-col gap-4">
      {/* Product Title */}
      <h1 className="text-2xl font-semibold leading-snug text-gray-900">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-3xl font-bold text-gray-900">{product.price}</p>

      {/* Availability */}
      <p className="text-sm text-gray-500">
        {product.status === "Có hàng" ? "Còn hàng" : "Hết hàng"}
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-3">
        <button className="flex items-center gap-2 bg-black text-white py-2 px-5 rounded-lg hover:bg-gray-800 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

>>>>>>> 7016103 (update ProductDetailPage layout)
        <button className="flex items-center gap-2 border border-gray-300 py-2 px-5 rounded-lg hover:bg-gray-100 transition">
          <Heart size={18} />
          Wishlist
        </button>
<<<<<<< HEAD
>>>>>>> 180bcab (ProductCartPage)
      </div>

      {/* FAQ Section */}
      <div className="mt-8">
        <FAQSection />
      </div>
    </section>
=======
      </div>
    </div>
>>>>>>> 7016103 (update ProductDetailPage layout)
  );
};

export default ProductDetailMain;
