// Temporary development URLs, not finalized public paths.
// The generated pages and all navigation share this single route configuration.
export const services = [
  {
    id: "air-conditioner",
    path: "/services/air-conditioner",
    navLabel: "에어컨",
    title: "에어컨 케어",
    english: "AIR CONDITIONER CARE",
    description: "에어컨 청소",
    image: "/images/air-conditioner.svg",
    imageAlt:
      "벽걸이 에어컨 공간 일러스트. 실제 작업 사진이 아닌 플레이스홀더입니다.",
    icon: "air",
    number: "01",
  },
  {
    id: "space-furniture",
    path: "/services/space-furniture",
    navLabel: "공간·가구",
    title: "공간·가구 케어",
    english: "SPACE & FURNITURE CARE",
    description: "공간·가구 클리닝",
    image: "/images/sofa.jpg",
    imageAlt:
      "소파가 배치된 공간 연출 이미지. 실제 작업 사진이 아닌 플레이스홀더입니다.",
    icon: "sofa",
    number: "02",
  },
  {
    id: "disinfection",
    path: "/services/disinfection",
    navLabel: "방역",
    title: "방역 케어",
    english: "DISINFECTION CARE",
    description: "방역",
    image: "/images/clean-space.jpg",
    imageAlt:
      "정돈된 실내 공간 연출 이미지. 실제 방역 작업 사진이 아닌 플레이스홀더입니다.",
    icon: "shield",
    number: "03",
  },
] as const;
export type Service = (typeof services)[number];
export const site = { name: "SKY CARE ZONE", home: "/", contact: "/#contact" };
