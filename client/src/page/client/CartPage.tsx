import React from "react";
<<<<<<< HEAD
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Breadcrumb from "../../component/Breadcrumb";
import Layout from "../../component/Layout";
import CartContent from "../../component/Cart/CartContent";
<<<<<<< HEAD
import BrandSlider from "../../component/BrandSlider";
import ProductLayout from "../../component/BestSellingProduct/ProductLayout";
=======
>>>>>>> e158872 (update Cart)

const CartPage: React.FC = () => {
  return (
    <>
      <Header />

      <Breadcrumb />

<<<<<<< HEAD
      <Layout>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#A67C00] to-[#D4AF37] text-transparent bg-clip-text">
            Your Shopping Cart
          </h1>
<<<<<<< HEAD

        <CartContent />
        <ProductLayout />
        <BrandSlider/>
      </Layout>
      
=======

        <CartContent />
=======
      {/* Layout nội dung chính */}
      <Layout>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#A67C00] to-[#D4AF37] text-transparent bg-clip-text">
=======
import { useCart } from "../../context/CartContext";
import Layout from "../../component/Layout";
import Breadcrumb from "../../component/Breadcrumb";
import CartTable from "../../component/Cart/CartTable";
import CartSummary from "../../component/Cart/CartSummary";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/*  Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* 📦 Layout nội dung chính */}
      <Layout>
        <div className="max-w-6xl mx-auto px-4 py-1">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#A67C00] to-[#D4AF37] text-transparent bg-clip-text mb-6">
>>>>>>> 180bcab (ProductCartPage)
            Your Shopping Cart
          </h1>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            <>
              <CartTable
                items={cart}
                onIncrease={(id) =>
                  updateQuantity(
                    id,
                    cart.find((i) => i.id === id)!.quantity + 1
                  )
                }
                onDecrease={(id) =>
                  updateQuantity(
                    id,
                    cart.find((i) => i.id === id)!.quantity - 1
                  )
                }
                onRemove={removeFromCart}
              />
              <CartSummary total={total} onClear={clearCart} />
            </>
          )}
<<<<<<< HEAD
>>>>>>> c15e393 (update CartPage.tsx layout)
      </Layout>

>>>>>>> e158872 (update Cart)
=======
        </div>
      </Layout>

      {/* Footer */}
>>>>>>> 180bcab (ProductCartPage)
      <Footer />
    </>
  );
};

export default CartPage;
