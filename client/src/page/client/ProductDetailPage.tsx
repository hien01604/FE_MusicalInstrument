import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Breadcrumb from "../../component/Breadcrumb";
import ProductDetailLayout from "../../component/ProductDetail/ProductDetailLayout";
import productData from "../../sample/sample";
import ProductLayout from "../../component/BestSellingProduct/ProductLayout";
import Layout from "../../component/Layout";
<<<<<<< HEAD

=======
>>>>>>> 7016103 (update ProductDetailPage layout)

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = productData.sampleProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Header />
        <div className="text-center py-20 text-gray-600">
          Product not found 😢
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
<<<<<<< HEAD
      {/* 🧭 Header */}
      <Header />

      {/* 📍 Breadcrumb */}
      <Breadcrumb />

      {/* 📦 Nội dung chính (Layout chỉ là wrapper cho nội dung) */}
      <Layout>
        {/* Thông tin chi tiết sản phẩm */}
        <ProductDetailLayout product={product} />

        {/* Sản phẩm liên quan */}
        <ProductLayout />
      </Layout>

      {/* 🦶 Footer */}
=======
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
        <Breadcrumb />

      {/* Main Content (Layout Wrapper) */}
      <Layout>
        {/* Product Detail */}
        <ProductDetailLayout product={product} />

        {/* Best Selling / Related Products */}
          <ProductLayout />
      </Layout>

      {/* Footer */}
>>>>>>> 7016103 (update ProductDetailPage layout)
      <Footer />
    </>
  );
};

export default ProductDetailPage;
