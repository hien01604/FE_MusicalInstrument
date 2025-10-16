import React from "react";
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
      </Layout>

>>>>>>> e158872 (update Cart)
      <Footer />
    </>
  );
};

export default CartPage;
