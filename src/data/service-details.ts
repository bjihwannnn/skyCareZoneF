import type { Service } from "../config/site";

interface ProcessStep {
  title: string;
  description: string;
}

interface UsageGuideItem {
  icon: string;
  description: string;
}

interface CasePhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export interface ServiceDetails {
  metaDescription: string;
  isPlaceholder: boolean;
  processSteps: readonly ProcessStep[];
  usageGuideItems: readonly UsageGuideItem[];
  // First photo is featured; an empty array keeps the existing placeholder.
  casePhotos: readonly CasePhoto[];
}

// Keys stay in sync with the service IDs defined in site.ts.
export const serviceDetails: Record<Service["id"], ServiceDetails> = {
  "air-conditioner": {
    metaDescription:
      "SKY CARE ZONE의 에어컨 종합세척 절차와 서비스 이용 안내를 확인하세요.",
    isPlaceholder: false,
    casePhotos: [
      {
        src: "/images/cases/air-conditioner/ac-2.jpg",
        width: 1058,
        height: 1411,
        alt: "천장 에어컨에 파란 세척 커버가 연결되고 사다리와 비닐 보양이 설치된 실내",
        caption: "세척 커버가 설치된 작업 현장",
      },
      {
        src: "/images/cases/air-conditioner/ac-1.jpg",
        width: 1411,
        height: 1058,
        alt: "외부 커버가 분리되어 내부와 배선이 드러난 천장형 에어컨",
        caption: "커버를 분리한 에어컨 내부",
      },
      {
        src: "/images/cases/air-conditioner/ac-3.jpg",
        width: 1411,
        height: 1058,
        alt: "바닥에 놓인 원형 커버와 필터 등 분리된 에어컨 부품",
        caption: "분리해 놓은 에어컨 부품",
      },
    ],
    processSteps: [
      {
        title: "분해 및 커버 제거",
        description:
          "외부 커버 및 필터를 완전히 분리하고, 세척 전 전원 차단을 합니다.",
      },
      {
        title: "열교환기 세척",
        description:
          "고압 세척기와 전용 약품으로 내부 열교환기 오염을 제거합니다. 물받이판까지 분해해 곰팡이 및 슬러지 누적을 방지합니다.",
      },
      {
        title: "송풍팬 및 드레인 세척",
        description:
          "팬 날개와 드레인 라인을 세척하여 냄새 원인균을 제거합니다.",
      },
      {
        title: "조립 및 테스트",
        description:
          "건조 후 재조립 및 냉방 테스트로 정상 작동 확인까지 완료합니다.",
      },
    ],
    usageGuideItems: [
      {
        icon: "info",
        description:
          "에어컨의 종류와 설치 환경에 따라 작업 범위 및 소요 시간이 달라질 수 있습니다.",
      },
      {
        icon: "document",
        description:
          "안전하고 원활한 작업을 위해 사전 현장 확인이 필요할 수 있습니다.",
      },
      {
        icon: "help",
        description:
          "다수의 에어컨을 함께 의뢰하시는 경우, 별도 상담을 통해 맞춤 견적을 안내해 드립니다.",
      },
    ],
  },
  "space-furniture": {
    metaDescription:
      "SKY CARE ZONE의 공간·가구 케어 작업 절차와 이용 안내를 확인하세요.",
    isPlaceholder: false,
    casePhotos: [],
    processSteps: [
      {
        title: "오염 확인 및 분류",
        description:
          "오염의 정도, 소재, 마감 상태를 점검하고 적합한 세정 방법을 선정합니다.",
      },
      {
        title: "전처리 및 습식 세정",
        description:
          "친환경 약제를 분사 후, 고온 스팀 및 진공 흡입으로 미세먼지·세균을 제거합니다.",
      },
      {
        title: "건조 및 마감 관리",
        description:
          "습기와 잔여 세제를 제거한 뒤, 소재에 맞춘 보호 코팅 및 항균 처리를 실시합니다.",
      },
      {
        title: "검수 및 고객 확인",
        description:
          "클리닝 결과를 함께 확인하고, 추가 요청 사항을 반영합니다.",
      },
    ],
    usageGuideItems: [
      {
        icon: "info",
        description:
          "소재의 특성과 오염 상태를 고려하여 적합한 클리닝 방식을 적용합니다.",
      },
      {
        icon: "document",
        description:
          "오염의 종류와 경과 시간에 따라 세척 결과에 차이가 있을 수 있습니다.",
      },
      {
        icon: "help",
        description:
          "특수 소재 관리 및 추가 케어는 사전 상담을 통해 안내해 드립니다.",
      },
    ],
  },
  disinfection: {
    metaDescription:
      "SKY CARE ZONE의 방역 케어 작업 절차와 이용 안내를 확인하세요.",
    isPlaceholder: false,
    casePhotos: [],
    processSteps: [
      {
        title: "현장 조사 및 계획 수립",
        description:
          "방역 구역의 규모와 오염 정도를 진단하고, 적합한 약제·기기·작업 동선을 결정합니다.",
      },
      {
        title: "소독 및 분사",
        description:
          "인체 무해 인증 약품을 사용하여 공기 중, 벽면, 바닥 등 접촉 면적 전체를 소독합니다.",
      },
      {
        title: "해충 방제",
        description:
          "바퀴, 진드기, 모기 등 위생 해충을 제거하고 서식지 재발을 방지합니다.",
      },
      {
        title: "사후 관리 및 점검",
        description:
          "방역 완료 후, 잔류 효과와 공기질을 점검하며 주기적인 재점검 일정을 안내드립니다.",
      },
    ],
    usageGuideItems: [
      {
        icon: "info",
        description:
          "공간의 특성과 해충 종류에 따라 적합한 방역 방법을 선정하여 작업합니다.",
      },
      {
        icon: "document",
        description:
          "현장 환경과 방역 범위에 따라 작업 시간 및 관리 방법이 달라질 수 있습니다.",
      },
      {
        icon: "help",
        description:
          "지속적인 위생 관리를 위한 정기 방역 서비스는 별도 상담을 통해 안내해 드립니다.",
      },
    ],
  },
};
