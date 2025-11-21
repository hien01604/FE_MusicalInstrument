import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { useCart } from "../../context/CartContext"; 
import CheckoutSummary from "../../component/Checkout/Summary";
<<<<<<< HEAD
import DeliveryMethod from "../../component/Checkout/DeliveryMethod"; // Giữ lại phần DeliveryMethod
=======
import DeliveryMethod from "../../component/Checkout/DeliveryMethod";
>>>>>>> eae5edd (checkout page)
import PaymentMethod from "../../component/Checkout/PaymentMethod";
import BillingForm from "../../component/Checkout/BillingDetails";
import Breadcrumb from "../../component/Breadcrumb";
import Layout from "../../component/Layout";
<<<<<<< HEAD
import useCheckout from "../../hooks/useCheckout"; // Import custom hook
=======
import useCheckout from "../../hooks/useCheckout"; 
>>>>>>> eae5edd (checkout page)

export default function CheckoutPage() {
  const { cart } = useCart();
  
  // Use custom hook to handle checkout logic
  const {
<<<<<<< HEAD
    deliveryMethod,        // Phương thức giao hàng mặc định là "Standard Shipping"
    setDeliveryMethod,     // Set delivery method
=======
    deliveryMethod,
    setDeliveryMethod,
>>>>>>> eae5edd (checkout page)
    paymentMethod,
    setPaymentMethod,
    billingInfo,
    setBillingInfo,
    subTotal,
<<<<<<< HEAD
    totalAmount,  // Không tính phí giao hàng nữa
=======
    deliveryCost,
    totalAmount,
>>>>>>> eae5edd (checkout page)
    handlePlaceOrder
  } = useCheckout(cart);

  return (
    <>
      <Header />
      <Breadcrumb />
      <Layout>
        <div className="min-h-screen bg-gray-50 font-sans pb-20">
          {/* Main Layout Grid */}
<<<<<<< HEAD
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
=======
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
>>>>>>> eae5edd (checkout page)
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-1 space-y-6">
              <CheckoutSummary 
<<<<<<< HEAD
                              cart={cart}
                              subTotal={subTotal}
                              totalAmount={totalAmount} // Tổng số tiền không tính phí giao hàng
                              deliveryCost={0}              />
              
              <DeliveryMethod 
                  method={deliveryMethod}  // Phương thức giao hàng mặc định là "Standard Shipping"
=======
                  cart={cart} 
                  subTotal={subTotal} 
                  deliveryCost={deliveryCost} 
                  totalAmount={totalAmount} 
              />
              
              <DeliveryMethod 
                  method={deliveryMethod} 
>>>>>>> eae5edd (checkout page)
                  setMethod={setDeliveryMethod} 
              />
              
              <PaymentMethod 
                  method={paymentMethod} 
                  setMethod={setPaymentMethod} 
              />
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-2">
              <BillingForm 
                  billingInfo={billingInfo} 
                  setBillingInfo={setBillingInfo}
                  onPlaceOrder={handlePlaceOrder}
              />
            </div>

          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
