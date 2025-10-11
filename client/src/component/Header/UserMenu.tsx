<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import { useCart } from "../../context/CartContext"; // ✅ Lấy dữ liệu giỏ hàng
=======

>>>>>>> 180bcab (ProductCartPage)

const UserMenu: React.FC = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // ✅ Thêm state để kích hoạt animation khi cart thay đổi
  const [animateCart, setAnimateCart] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setAnimateCart(true);
      const timer = setTimeout(() => setAnimateCart(false), 600); // reset sau 0.6s
      return () => clearTimeout(timer);
    }
  }, [totalItems]);
=======
import { useCart } from "../../context/CartContext"; // ✅ Thêm dòng này

const UserMenu: React.FC = () => {
  const { cart } = useCart(); // ✅ Lấy cart từ context
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // ✅ Tổng quantity
>>>>>>> e158872 (update Cart)

  return (
    <div className="flex items-center text-sm text-black gap-3 mr-6">
<<<<<<< HEAD
      {/* ❤️ Wishlist */}
      <Heart className="cursor-pointer hover:text-[#A97132] transition" size={18} />

      {/* 🛒 Giỏ hàng */}
      <div className="relative">
        <Link
          to="/cart"
<<<<<<< HEAD
          className={`cursor-pointer transition-all ${
            animateCart ? "text-[#A97132] scale-110 rotate-3" : "hover:text-[#A97132]"
          }`}
=======
          className="cursor-pointer hover:text-[#A97132] transition"
>>>>>>> e158872 (update Cart)
        >
          <ShoppingCart size={20} />
        </Link>

        {/* 🟡 Badge hiển thị số lượng */}
        {totalItems > 0 && (
          <span
<<<<<<< HEAD
            className={`absolute -top-2 -right-2 bg-[#A97132] text-white text-[10px] font-semibold
                        w-4 h-4 flex items-center justify-center rounded-full shadow-sm
                        transition-all duration-300 ${
                          animateCart ? "scale-125 animate-bounce" : "scale-100"
                        }`}
=======
            className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-semibold
                       w-4 h-4 flex items-center justify-center rounded-full shadow-sm
                       transition-all duration-200 ease-in-out animate-bounce"
>>>>>>> e158872 (update Cart)
          >
            {totalItems}
          </span>
        )}
      </div>

      {/* 👤 User info */}
=======
      <Heart className="cursor-pointer hover:text-orange-600 transition" size={18} />
      <Link
  to="/cart"
  className="cursor-pointer hover:text-orange-600 transition"
>
  <ShoppingCart size={20} />
</Link>
>>>>>>> 180bcab (ProductCartPage)
      <div className="flex items-center gap-1">
        <User className="cursor-pointer hover:text-[#A97132] transition" size={18} />
=======
import React from "react";
import { Heart, ShoppingCart, User } from "lucide-react";

const UserMenu: React.FC = () => {
  return (
    <div className="flex items-center text-sm text-black gap-3 mr-6">
      <Heart className="cursor-pointer hover:text-orange-600 transition" size={18} />
      <ShoppingCart className="cursor-pointer hover:text-orange-600 transition" size={18} />

      <div className="flex items-center gap-1">
        <User className="cursor-pointer hover:text-orange-600 transition" size={18} />
>>>>>>> 566624e (header)
        <span className="font-medium">Hello, Phuc</span>
      </div>
    </div>
  );
};

export default UserMenu;
