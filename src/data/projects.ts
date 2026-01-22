import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  area: string;
  duration: string;
  mainImage: string;
  images: ProjectImage[];
  description: string;
  challenge: string;
  solution: string;
  services: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: "villa-oasis",
    title: "فيلا الواحة",
    category: "سكني",
    location: "القاهرة الجديدة، مصر",
    year: "2023",
    client: "عميل خاص",
    area: "850 م²",
    duration: "18 شهر",
    mainImage: project1,
    images: [
      { src: project1, alt: "الواجهة الرئيسية", caption: "الواجهة الرئيسية للفيلا" },
      { src: project1, alt: "منطقة المسبح", caption: "منطقة المسبح والحديقة" },
      { src: project1, alt: "المدخل", caption: "المدخل الرئيسي" },
    ],
    description:
      "فيلا عصرية تجمع بين الفخامة والبساطة، مصممة لتوفير أقصى درجات الراحة والخصوصية. تتميز بتصميم مفتوح يربط المساحات الداخلية بالخارجية بسلاسة.",
    challenge:
      "التحدي الرئيسي كان دمج المتطلبات الوظيفية للعميل مع الحفاظ على هوية تصميمية عصرية تتناسب مع البيئة المحيطة وظروف المناخ المحلي.",
    solution:
      "قدمنا حلاً معماريًا يعتمد على الكتل البيضاء المتداخلة مع فتحات زجاجية واسعة، مع استخدام مواد محلية عالية الجودة ونظام تهوية طبيعية فعال.",
    services: [
      "التصميم المعماري",
      "التصميم الداخلي",
      "تصميم اللاندسكيب",
      "الإشراف على التنفيذ",
    ],
    features: [
      "واجهات بيضاء مينيماليست",
      "مسبح خاص مع منطقة استراحة",
      "حديقة ذات تصميم عضوي",
      "نظام إضاءة ذكي",
      "مواد صديقة للبيئة",
    ],
  },
  {
    id: "commercial-complex",
    title: "مجمع تجاري حديث",
    category: "تجاري",
    location: "دبي، الإمارات",
    year: "2024",
    client: "شركة تطوير عقاري",
    area: "12,000 م²",
    duration: "24 شهر",
    mainImage: project2,
    images: [
      { src: project2, alt: "الواجهة الزجاجية", caption: "الواجهة الزجاجية الرئيسية" },
      { src: project2, alt: "المدخل التجاري", caption: "المدخل الرئيسي للمجمع" },
      { src: project2, alt: "التفاصيل المعمارية", caption: "تفاصيل الواجهة" },
    ],
    description:
      "مجمع تجاري متعدد الاستخدامات يجمع بين المساحات التجارية والمكتبية، مصمم بأعلى معايير الاستدامة والكفاءة التشغيلية.",
    challenge:
      "تصميم مبنى يحقق التوازن بين الجماليات المعمارية الحديثة والمتطلبات الوظيفية المعقدة للاستخدامات المتعددة.",
    solution:
      "اعتمدنا على واجهة زجاجية مزدوجة للعزل الحراري مع نظام تظليل ذكي، وتوزيع مرن للمساحات الداخلية يتيح تعديلها حسب احتياجات المستأجرين.",
    services: [
      "التصميم المعماري",
      "الرسومات التنفيذية",
      "التنسيق مع الاستشاريين",
      "دعم مرحلة البناء",
    ],
    features: [
      "واجهة زجاجية عالية الأداء",
      "نظام تكييف مركزي ذكي",
      "شهادة LEED الذهبية",
      "مواقف سيارات متعددة الطوابق",
      "ردهة رئيسية مزدوجة الارتفاع",
    ],
  },
  {
    id: "luxury-interior",
    title: "تصميم داخلي فاخر",
    category: "داخلي",
    location: "الرياض، السعودية",
    year: "2023",
    client: "عميل خاص",
    area: "450 م²",
    duration: "8 أشهر",
    mainImage: project3,
    images: [
      { src: project3, alt: "غرفة المعيشة", caption: "غرفة المعيشة الرئيسية" },
      { src: project3, alt: "منطقة الطعام", caption: "منطقة الطعام" },
      { src: project3, alt: "التفاصيل", caption: "تفاصيل التصميم الداخلي" },
    ],
    description:
      "تصميم داخلي فاخر لشقة بنتهاوس يجمع بين الأناقة الكلاسيكية واللمسات العصرية، مع اهتمام استثنائي بجودة المواد والتفاصيل.",
    challenge:
      "تحقيق التوازن بين ذوق العميل الكلاسيكي والرغبة في مساحة عصرية مريحة، مع دمج مجموعة فنية قيمة في التصميم.",
    solution:
      "صممنا مساحات تتسم بالحياد اللوني مع إضافة لمسات ذهبية دافئة، واخترنا أثاثًا معاصرًا بخطوط نظيفة يتناغم مع القطع الفنية المعروضة.",
    services: [
      "التصميم الداخلي",
      "اختيار المواد والتشطيبات",
      "تصميم الإضاءة",
      "تنسيق الأثاث والتحف",
    ],
    features: [
      "أرضيات رخامية إيطالية",
      "إضاءة معمارية مخفية",
      "أثاث مخصص",
      "نظام صوتي مدمج",
      "ستائر آلية",
    ],
  },
  {
    id: "resort-landscape",
    title: "حديقة منتجع سياحي",
    category: "لاندسكيب",
    location: "شرم الشيخ، مصر",
    year: "2022",
    client: "شركة فنادق دولية",
    area: "5,000 م²",
    duration: "12 شهر",
    mainImage: project4,
    images: [
      { src: project4, alt: "المسبح والحديقة", caption: "منطقة المسبح الرئيسية" },
      { src: project4, alt: "الممرات", caption: "ممرات الحديقة" },
      { src: project4, alt: "مناطق الجلوس", caption: "مناطق الاستراحة" },
    ],
    description:
      "تصميم متكامل للمساحات الخارجية لمنتجع سياحي فاخر، يجمع بين النباتات الاستوائية والعناصر المائية لخلق واحة استرخاء.",
    challenge:
      "تصميم مناظر طبيعية تتحمل المناخ الصحراوي القاسي مع الحفاظ على مظهر استوائي خصب وجذاب طوال العام.",
    solution:
      "اخترنا نباتات محلية ومتوسطية مقاومة للجفاف، مع نظام ري ذكي بالتنقيط، وعناصر مائية توفر انتعاشًا بصريًا وتساهم في تلطيف الأجواء.",
    services: [
      "تصميم اللاندسكيب",
      "اختيار النباتات",
      "تصميم نظام الري",
      "الإشراف على التنفيذ",
    ],
    features: [
      "نباتات استوائية مقاومة للحرارة",
      "نوافير ومسطحات مائية",
      "إضاءة ليلية مميزة",
      "مناطق جلوس مظللة",
      "ممرات حجرية طبيعية",
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "الكل") return projects;
  return projects.filter((project) => project.category === category);
};

export const getAllProjects = (): Project[] => {
  return projects;
};
