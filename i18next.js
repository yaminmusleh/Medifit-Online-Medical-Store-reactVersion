import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Home: "Home",
        Shop: "Shop",
        About: "About",
        Contact: "Contact",
        Login: "Login",
        Register: "Register",
        checkout: {
          title: "Ready to Make It Official?",
          product: "Product",
          qty: "Qty",
          totalPrice: "Total Price $",
          totalItemsPrice: "Total Items Price:",
          payment: "Payment",
          cash: "Cash",
          visa: "Visa",
          payNow: "Pay Now!",
        },
        cart: {
          myCart: "My Cart",
          product: "Product",
          qty: "Qty",
          totalPrice: "Total Price $",
          changedMind: "Changed your mind?",
          itemsUpdated: "Items updated, refresh :)",
          itemRemoved: "Items Removed Successfully",
          remove: "Remove",
          totalItemsPrice: "Total Items Price:",
          cashMeOut: "Cash Me Out",
          backToShop: "Back to Treasure Hunting",
          startFresh: "Start Fresh",
        },
      },
    },
    ar: {
      translation: {
        Home: "الرئيسية",
        Shop: "المتجر",
        About: "من نحن",
        Contact: "اتصل بنا",
        Login: "تسجيل الدخول",
        Logout: "تسجيل الخروج",
        Register: "إنشاء حساب",
        checkout: {
          title: "جاهز لإتمام الطلب؟",
          product: "المنتج",
          qty: "الكمية",
          totalPrice: "السعر الإجمالي",
          totalItemsPrice: "إجمالي سعر المنتجات:",
          payment: "طريقة الدفع",
          cash: "نقداً",
          visa: "فيزا",
          payNow: "ادفع الآن",
        },
        cart: {
          myCart: "سلة مشترياتي",
          product: "المنتج",
          qty: "الكمية",
          totalPrice: "السعر الإجمالي",
          changedMind: "غيرت رأيك؟",
          itemsUpdated: "تم تحديث الكميات، قم بالتحديث :)",
          itemRemoved: "تم إزالة المنتج بنجاح",
          remove: "إزالة",
          totalItemsPrice: "إجمالي سعر المنتجات:",
          cashMeOut: "ادفع الآن",
          backToShop: "العودة للتسوق",
          startFresh: "ابدأ من جديد",
        },
      },
    },
  },
  lng: "ar",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
