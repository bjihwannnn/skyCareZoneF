// Temporary development URLs, not finalized public paths.
// The generated pages and all navigation share this single route configuration.
export const services = [
  {
    id: "air-conditioner",
    path: "/services/air-conditioner",
    navLabel: "에어컨",
    title: "에어컨 케어",
    english: "AIR CONDITIONER CARE",
    description: "2-Way·4-Way·벽걸이",
    image: "/images/air-conditioner.png",
    imageAlt: "흰 벽에 설치된 벽걸이 에어컨과 수납장 위 화분",
    icon: "air",
    number: "01",
  },
  {
    id: "furniture-fabric",
    path: "/services/furniture-fabric",
    navLabel: "가구·패브릭",
    title: "가구·패브릭 케어",
    english: "FURNITURE & FABRIC CARE",
    description: "소파·침대 및 카페트",
    image: "/images/sofa.png",
    imageAlt: "쿠션과 담요가 놓인 밝은색 소파와 러그, 낮은 테이블",
    icon: "sofa",
    number: "02",
  },
  {
    id: "disinfection",
    path: "/services/disinfection",
    navLabel: "방역",
    title: "방역 케어",
    english: "DISINFECTION CARE",
    description: "소독·해충 방제",
    image: "/images/disinfection.png",
    imageAlt: "나무 선반 위에 놓인 분무 용기와 접힌 흰 수건",
    icon: "shield",
    number: "03",
  },
] as const;
export type Service = (typeof services)[number];
export const site = { name: "SKY CARE ZONE", home: "/", contact: "/#contact" };

export const contactChannels = {
  phone: { number: "01032010019", display: "010-3201-0019" },
  platforms: [
    {
      name: "숨고",
      href: "https://soomgo.com/profile/users/1007377",
      logo: "/images/logos/soomgo.jpg",
    },
    {
      name: "크몽",
      href: "https://kmong.com/@%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%BC%80%EC%96%B4%EC%A1%B4",
      logo: "/images/logos/kmong.jpg",
    },
    {
      name: "당근",
      href: "https://www.daangn.com/kr/local-profile/%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%BC%80%EC%96%B4%EC%A1%B4-t7xkvmebmr6c/",
      logo: "/images/logos/daangn.jpg",
    },
  ],
} as const;
