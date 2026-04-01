import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const contentEn = {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: March 14, 2026",
    sections: [
      {
        heading: "1. Introduction",
        paragraphs: [
          "Welcome to Medifit. Your privacy is important to us, and we are committed to protecting the personal information you share when using our platform. This Privacy Policy explains how we collect, use, store, and protect your information when you access or use our website, services, or applications (collectively referred to as the “Service”).",
          "By accessing or using the Service, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information in accordance with the practices described in this document."
        ]
      },
      {
        heading: "2. Information We Collect",
        subsections: [
          {
            subheading: "2.1 Personal Information",
            bullets: [
              "Full name",
              "Username",
              "Email address",
              "Phone number",
              "Account credentials (securely stored and encrypted)",
              "Any information you voluntarily provide when communicating with us"
            ]
          },
          {
            subheading: "2.2 Account Information",
            paragraphs: [
              "When you register or log in to the Service, we collect information related to your account activity, including authentication tokens and security data necessary to maintain a secure login session."
            ]
          },
          {
            subheading: "2.3 Usage Data",
            bullets: [
              "IP address",
              "Browser type and version",
              "Device type and operating system",
              "Pages visited within the Service",
              "Date and time of visits",
              "Time spent on pages",
              "Referring website addresses"
            ]
          },
          {
            subheading: "2.4 Cookies and Tracking Technologies",
            paragraphs: [
              "We may use cookies and similar technologies to enhance the user experience, maintain login sessions, remember preferences, analyze performance, and improve service functionality. You may choose to disable cookies through your browser settings, although some features may be affected."
            ]
          }
        ]
      },
      {
        heading: "3. How We Use Your Information",
        bullets: [
          "Create and manage user accounts",
          "Provide and maintain the functionality of our Service",
          "Personalize user experience and preferences",
          "Improve performance, usability, and design",
          "Monitor system security and prevent unauthorized access",
          "Communicate updates, support, or important notifications",
          "Comply with legal obligations and enforce policies"
        ]
      },
      {
        heading: "4. Data Security",
        paragraphs: [
          "We implement appropriate technical and organizational security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Measures include secure authentication systems, HTTPS encryption, access controls, secure data storage, and regular monitoring."
        ]
      },
      {
        heading: "5. Data Retention",
        paragraphs: [
          "We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, after which it is securely deleted or anonymized."
        ]
      },
      {
        heading: "6. Sharing of Information",
        paragraphs: [
          "We do not sell, trade, or rent your personal information. We may share limited information with trusted service providers, comply with legal requirements, or protect user rights."
        ]
      },
      {
        heading: "7. Third-Party Services",
        paragraphs: [
          "Our Service may contain links to third-party websites or services. We are not responsible for their content, policies, or practices. Please review their privacy policies if you access them."
        ]
      },
      {
        heading: "8. User Rights and Choices",
        paragraphs: [
          "Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your data. Contact us to exercise these rights."
        ]
      },
      {
        heading: "9. Children's Privacy",
        paragraphs: [
          "Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children."
        ]
      },
      {
        heading: "10. Changes to This Privacy Policy",
        paragraphs: [
          "We may update this Privacy Policy periodically. Changes will be posted with a revised “Last Updated” date."
        ]
      },
      {
        heading: "11. Contact Information",
        paragraphs: [
          "Email: yaminaktham3@gmail.com",
          "Company: Medifit Co.",
          "Address: Palestine-Jenin"
        ]
      }
    ]
  };

  const contentAr = {
    title: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث: 14 مارس 2026",
    sections: [
      {
        heading: "1. المقدمة",
        paragraphs: [
          "مرحبًا بكم في Medifit. خصوصيتك مهمة بالنسبة لنا، ونحن ملتزمون بحماية المعلومات الشخصية التي تشاركها عند استخدام منصتنا. توضح سياسة الخصوصية هذه كيفية جمع المعلومات واستخدامها وتخزينها وحمايتها عند الوصول إلى خدماتنا أو استخدامها.",
          "باستخدام الخدمة، فإنك تقر بأنك قرأت وفهمت سياسة الخصوصية هذه وتوافق على جمع واستخدام معلوماتك وفقًا للممارسات الموضحة."
        ]
      },
      {
        heading: "2. المعلومات التي نجمعها",
        subsections: [
          {
            subheading: "2.1 المعلومات الشخصية",
            bullets: [
              "الاسم الكامل",
              "اسم المستخدم",
              "البريد الإلكتروني",
              "رقم الهاتف",
              "بيانات الحساب (محفوظة بأمان ومشفرة)",
              "أي معلومات تقدمها طواعية عند التواصل معنا"
            ]
          },
          {
            subheading: "2.2 معلومات الحساب",
            paragraphs: [
              "عند التسجيل أو تسجيل الدخول إلى الخدمة، نجمع معلومات تتعلق بنشاط الحساب، بما في ذلك رموز المصادقة وبيانات الأمان اللازمة للحفاظ على جلسة تسجيل دخول آمنة."
            ]
          },
          {
            subheading: "2.3 بيانات الاستخدام",
            bullets: [
              "عنوان IP",
              "نوع وإصدار المتصفح",
              "نوع الجهاز ونظام التشغيل",
              "الصفحات التي تمت زيارتها داخل الخدمة",
              "تاريخ ووقت الزيارات",
              "الوقت المستغرق على الصفحات",
              "عناوين المواقع المرجعية"
            ]
          },
          {
            subheading: "2.4 الكوكيز وتقنيات التتبع",
            paragraphs: [
              "قد نستخدم الكوكيز وتقنيات مشابهة لتعزيز تجربة المستخدم، والحفاظ على جلسات تسجيل الدخول، وتذكر التفضيلات، وتحليل الأداء، وتحسين وظائف الخدمة. يمكنك تعطيل الكوكيز من إعدادات المتصفح، على الرغم من أن بعض الميزات قد تتأثر."
            ]
          }
        ]
      },
      {
        heading: "3. كيفية استخدام المعلومات",
        bullets: [
          "إنشاء وإدارة حسابات المستخدمين",
          "تقديم وصيانة وظائف الخدمة",
          "تخصيص تجربة المستخدم والتفضيلات",
          "تحسين الأداء وسهولة الاستخدام والتصميم",
          "مراقبة أمان النظام ومنع الوصول غير المصرح به",
          "التواصل بشأن التحديثات والدعم والإشعارات المهمة",
          "الامتثال للالتزامات القانونية وتطبيق السياسات"
        ]
      },
      {
        heading: "4. أمان البيانات",
        paragraphs: [
          "نطبق تدابير أمان تقنية وتنظيمية مناسبة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الكشف أو الإتلاف. تشمل التدابير أنظمة مصادقة آمنة، تشفير HTTPS، ضوابط وصول، تخزين بيانات آمن، والمراقبة المنتظمة."
        ]
      },
      {
        heading: "5. الاحتفاظ بالبيانات",
        paragraphs: [
          "نحتفظ بمعلوماتك الشخصية فقط طالما كانت ضرورية لتحقيق الأغراض المحددة في سياسة الخصوصية هذه، وبعد ذلك يتم حذفها أو إخفاء هويتها بشكل آمن."
        ]
      },
      {
        heading: "6. مشاركة المعلومات",
        paragraphs: [
          "لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية. قد نشارك معلومات محدودة مع مزودي خدمات موثوقين، أو للامتثال للمتطلبات القانونية، أو لحماية حقوق المستخدمين."
        ]
      },
      {
        heading: "7. خدمات الطرف الثالث",
        paragraphs: [
          "قد تحتوي خدمتنا على روابط لمواقع أو خدمات طرف ثالث. نحن غير مسؤولين عن محتواها أو سياساتها أو ممارساتها. يرجى مراجعة سياسات الخصوصية الخاصة بها عند الوصول إليها."
        ]
      },
      {
        heading: "8. حقوق واختيارات المستخدم",
        paragraphs: [
          "اعتمادًا على نطاقك القانوني، قد يكون لديك حقوق للوصول إلى بياناتك وتصحيحها وحذفها أو تقييد معالجتها. تواصل معنا لممارسة هذه الحقوق."
        ]
      },
      {
        heading: "9. خصوصية الأطفال",
        paragraphs: [
          "الخدمة ليست مخصصة للأشخاص دون سن 13 عامًا. نحن لا نجمع بيانات الأطفال عن قصد."
        ]
      },
      {
        heading: "10. التغييرات في سياسة الخصوصية",
        paragraphs: [
          "قد نقوم بتحديث سياسة الخصوصية هذه بشكل دوري. سيتم نشر التغييرات مع تاريخ \"آخر تحديث\" جديد."
        ]
      },
      {
        heading: "11. معلومات الاتصال",
        paragraphs: [
          "البريد الإلكتروني: yaminaktham3@gmail.com",
          "الشركة: Medifit Co.",
          "العنوان: فلسطين-جنين"
        ]
      }
    ]
  };

  const content = isRTL ? contentAr : contentEn;

  return (
    <Box sx={{ padding: 4, maxWidth: 900, mx: 'auto', direction: isRTL ? 'rtl' : 'ltr' }}>
      <Typography variant="h4" gutterBottom>{content.title}</Typography>
      <Typography variant="subtitle2" gutterBottom>{content.lastUpdated}</Typography>

      {content.sections.map((section, idx) => (
        <Box key={idx} sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>{section.heading}</Typography>

          {section.paragraphs?.map((p, i) => (
            <Typography key={i} paragraph>{p}</Typography>
          ))}

          {section.subsections?.map((sub, j) => (
            <Box key={j} sx={{ ml: isRTL ? 0 : 3, mr: isRTL ? 3 : 0, mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>{sub.subheading}</Typography>
              {sub.paragraphs?.map((p, k) => (
                <Typography key={k} paragraph>{p}</Typography>
              ))}
              {sub.bullets?.length > 0 && (
                <ul>
                  {sub.bullets.map((b, l) => (
                    <li key={l}>{b}</li>
                  ))}
                </ul>
              )}
            </Box>
          ))}

          {section.bullets?.length > 0 && (
            <ul>
              {section.bullets.map((b, k) => (
                <li key={k}>{b}</li>
              ))}
            </ul>
          )}
        </Box>
      ))}
    </Box>
  );
}
