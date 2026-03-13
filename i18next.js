import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          Home: "Home",
          Shop: "Shop",
          About: "About",
          Contact: "Contact",
          Login: "Login",
          Register: "Register",
          Logout: "Logout",
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
          login: {
            title: "Welcome back!",
            subtitle: "Enter your Credentials to access your account",
            email: "Email",
            password: "Password",
            button: "Log in!",
            serverError: "Something went wrong. Please try again later.",
            success: "Logged in successfully",
          },
          register: {
            title: "Welcome to Medifit — Your Partner in Smarter Health",
            email: "Email",
            password: "Password",
            userName: "User Name",
            fullName: "Full Name",
            phoneNumber: "Phone Number",
            button: "Sign Up!",
            serverError: "Something went wrong. Please try again later.",
            success: "Account created successfully",
          },
          ourHappyClients: {
            title: "Our happy clients",
            subtitle: "Click on them to see their opinions!",
            reviewers: [
              {
                person: "James Wilson",
                occupation: "Manager",
                review:
                  "I’m so impressed with this online medical store. The product selection is extensive and the prices are great. I found everything i needed in one place. The ordering process was easy, delivery was prompt, and the items arrived in perfect condition. Plus, the customer service team was incredibly helpful.",
              },
              {
                person: "Henry Adams",
                occupation: "CEO",
                review:
                  "This online medical store exceeded my expectations. The website is user-friendly, the product range is outstanding, and the delivery was extremely fast. I appreciated the attention to detail in packaging, and the support team answered all my queries promptly. I’ll definitely be returning for future purchases.",
              },
              {
                person: "Ethan Harris",
                occupation: "Business Manager",
                review:
                  "I’ve tried several online medical stores, and this one stands out. The selection of products is impressive, prices are fair, and checkout was simple. My order arrived quickly and in perfect condition, and the customer service team went above and beyond to ensure everything was right. Highly recommend!",
              },
              {
                person: "Lily Baker",
                occupation: "Product Manager",
                review:
                  "I had a fantastic experience shopping here. The product variety is extensive, the website is easy to navigate, and my order arrived sooner than expected. Every item was well-packaged, and the support team was friendly and knowledgeable. I’m extremely satisfied and will shop here again.",
              },
            ],
          },
          followUs: {
            title: "Follow us @medifit",
          },
          profileMenu: {
            profile: "Profile",
            darkMode: "Dark mode",
          },
          profileMenu: {
            profile: "Profile",
            darkMode: "Dark mode",
            overview: "Overview",
            info: "Profile Info",
            settings: "Settings",
            backHome: "Back Home",
          },
          profile: {
            personalInfo: "Your Personal Information",
            fullName: "Full Name",
            email: "Email",
            phoneNumber: "Phone Number",
          },
          profileSettings: {
            title: "Profile Settings",
            mode: "Mode",
            light: "Light",
            dark: "Dark",
            language: "Language",
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
          login: {
            title: "مرحباً بعودتك!",
            subtitle: "أدخل بياناتك للوصول إلى حسابك",
            email: "البريد الإلكتروني",
            password: "كلمة المرور",
            button: "تسجيل الدخول",
            serverError: "حدث خطأ ما، حاول مرة أخرى لاحقاً",
            success: "تم تسجيل الدخول بنجاح",
          },
          register: {
            title: "مرحباً بك في ميديفيت — شريكك لصحة أذكى",
            email: "البريد الإلكتروني",
            password: "كلمة المرور",
            userName: "اسم المستخدم",
            fullName: "الاسم الكامل",
            phoneNumber: "رقم الهاتف",
            button: "إنشاء حساب",
            serverError: "حدث خطأ ما، حاول مرة أخرى لاحقاً",
            success: "تم إنشاء الحساب بنجاح",
          },
          ourHappyClients: {
            title: "عملائنا السعداء",
            subtitle: "اضغط عليهم لرؤية آرائهم!",
            reviewers: [
              {
                person: "جيمس ويلسون",
                occupation: "مدير",
                review:
                  "أنا معجب جدًا بهذا المتجر الطبي الإلكتروني. مجموعة المنتجات واسعة والأسعار رائعة. وجدت كل ما أحتاجه في مكان واحد. كانت عملية الطلب سهلة، وكان التوصيل سريعًا، ووصلت المنتجات بحالة ممتازة. بالإضافة إلى ذلك، كان فريق خدمة العملاء مفيدًا جدًا.",
              },
              {
                person: "هنري آدامز",
                occupation: "الرئيس التنفيذي",
                review:
                  "هذا المتجر الطبي الإلكتروني تجاوز توقعاتي. الموقع سهل الاستخدام، ونطاق المنتجات رائع، وكان التوصيل سريع جدًا. وقدرت اهتمامهم بالتغليف، وأجاب فريق الدعم على جميع استفساراتي بسرعة. سأعود بالتأكيد للشراء مستقبلاً.",
              },
              {
                person: "إيثان هاريس",
                occupation: "مدير الأعمال",
                review:
                  "جربت عدة متاجر طبية إلكترونية، وهذا المتجر مميز. اختيار المنتجات ممتاز، والأسعار عادلة، وعملية الدفع بسيطة. وصلت طلبي بسرعة وفي حالة ممتازة، وذهب فريق خدمة العملاء إلى أبعد حد لضمان كل شيء. أنصح به بشدة!",
              },
              {
                person: "ليلي بيكر",
                occupation: "مديرة المنتج",
                review:
                  "كانت تجربة التسوق هنا رائعة. تنوع المنتجات كبير، والموقع سهل التصفح، ووصل طلبي أسرع من المتوقع. كل عنصر كان مغلفًا جيدًا، وفريق الدعم ودود ومطلع. أنا راضية جدًا وسأتسوق هنا مرة أخرى.",
              },
            ],
          },
          followUs: {
            title: "تابعنا على medifit@",
          },
          profileMenu: {
            profile: "الملف الشخصي",
            darkMode: "الوضع الداكن",
          },
          profileMenu: {
            profile: "الملف الشخصي",
            darkMode: "الوضع الداكن",
            overview: "نظرة عامة",
            info: "معلومات الملف الشخصي",
            settings: "الإعدادات",
            backHome: "العودة للرئيسية",
          },
          profile: {
            personalInfo: "معلوماتك الشخصية",
            fullName: "الاسم الكامل",
            email: "البريد الإلكتروني",
            phoneNumber: "رقم الهاتف",
          },
          profileSettings: {
            title: "إعدادات الملف الشخصي",
            mode: "الوضع",
            light: "فاتح",
            dark: "داكن",
            language: "اللغة",
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
