# SKY CARE ZONE 첫 번째 디자인 시안

## 디자인 분석과 적용

레퍼런스: https://coastlinecleaningla.com/

2026-10-27 기준 실제 Chrome 렌더링으로 데스크톱 1440px와 모바일 390px 화면을 확인했다. 레퍼런스의 이미지·로고·문구·소스는 결과물에 복사하지 않았다.

| 관찰 항목 | 레퍼런스 | 이번 시안에 적용한 방식 |
| --- | --- | --- |
| 전체 분위기 | 밝은 오프화이트, 세이지 면, 차분한 사진, 단순한 선과 버튼 | README의 오프화이트·블루·세이지 토큰을 사용해 밝고 정돈된 분위기 구성 |
| Hero | 텍스트 왼쪽·큰 실내 사진 오른쪽의 2열 구성 | 한국어 타이틀과 실내 연출 이미지, 독립된 문의 CTA 영역 |
| 레이아웃·여백 | 넓은 콘텐츠 폭, 데스크톱 섹션 세로 여백 128px, 모바일 80px | 최대 1200px, 지정된 좌우 20/32/40px, 세로 여백 72/88/112px |
| 타이포그래피 | Inter, 데스크톱 Hero 72px, 모바일 36px, 굵은 제목 | README의 SUIT Variable·굵기·행간·크기·자간을 우선 적용 |
| 이미지 배치 | 자연광의 실내 사진, 작은 모서리 라운드, 사진과 설명의 교차 배치 | 큰 Hero 사진과 세 가지 서비스 이미지, 서비스 갤러리의 동일한 화면 언어 |
| 반응형 | 768/1024px 전환, 모바일에서 2열을 세로로 적층 | 같은 전환 구간과 지정된 여백·타입 크기 적용. 모바일 가로는 가능한 경우 2열 유지, 짧은 화면은 높이를 압축 |

Hero → 별도 문의 CTA → 서비스 개요 → 문의 순서다. 회사 실적·후기·인증 등 검증 가능한 자료가 없어 신뢰 요소 섹션은 표시하지 않는다.

상세 페이지는 작업 절차 → 작업 사례 → 유의사항 → 문의 순서다. 확인되지 않은 서비스 세부 과정은 작성하지 않고 준비 상태를 표시했다. 글로벌 문의 링크는 모든 페이지에서 `/#contact`로 연결된다.

## 구현 구조

- `src/config/site.ts`: 세 서비스 데이터와 **임시 개발 URL**의 단일 설정. 최종 URL이 확정되면 이 파일의 `path`를 변경한다. 동적 Astro 페이지가 설정을 기준으로 생성된다.
- `src/layouts/SiteLayout.astro`: 한국어 문서, 메타 정보, 공통 레이아웃.
- `src/components/`: 로고 시안, 아이콘, 헤더, 푸터, 문의 영역.
- `src/styles/global.css`: 지정된 전역 색상·타입 토큰과 적응형 화면 스타일.
- `src/pages/index.astro`: 홈.
- `src/pages/[...service].astro`: 세 서비스 상세 페이지 공통 템플릿.

기존 Astro·React·Tailwind 설정과 의존성은 유지했다. 외부 통신·문의 전송·백엔드는 추가하지 않았다. 문의 영역의 선택 버튼은 화면 상태만 변경한다. 폰트와 이미지는 로컬 제공하며 방문 시 외부 CDN 요청이 필요하지 않다.

로고와 파비콘은 첫 시안을 위한 벡터 콘셉트이며 확정 로고가 아니다. UI에는 확정되지 않은 연락처·영업 시간·가격·서비스 범위·고객 후기를 넣지 않았다.

## 이미지·글꼴 출처

모든 이미지는 실제 회사 작업 사진이 아닌 **플레이스홀더**이며 화면과 대체 텍스트에 표시했다.

| 파일 | 출처·용도 |
| --- | --- |
| `public/images/living-room.jpg` | Unsplash: https://images.unsplash.com/photo-1600210492486-724fe5c67fb0 — Hero 연출 이미지 |
| `public/images/sofa.jpg` | Unsplash: https://images.unsplash.com/photo-1555041469-a586c61ea9bc — 공간·가구 연출 이미지 |
| `public/images/clean-space.jpg` | Unsplash: https://images.unsplash.com/photo-1584622650111-993a426fbf0a — 정돈된 실내 연출 이미지, 방역 사례가 아님 |
| `public/images/air-conditioner.svg` | 이번 시안을 위해 코드로 제작한 에어컨 공간 일러스트 |
| `public/fonts/SUIT-Variable.woff2` | SUIT Variable, 공식 프로젝트 https://github.com/sun-typeface/SUIT — SIL Open Font License 1.1, 라이선스 동봉 |

실제 작업 사진을 제공받으면 연출 이미지를 교체하고 플레이스홀더 표기를 제거할 수 있다.

## 로컬 실행

```powershell
npm.cmd run dev -- --background
npm.cmd run astro -- dev status
npm.cmd run astro -- dev logs
npm.cmd run astro -- dev stop
npm.cmd run build
```

PowerShell 실행 정책의 영향을 피하기 위해 `.cmd`를 명시했다. 개발 서버는 AGENTS.md에 따라 background 모드로 실행한다.

## 검증

- `npm.cmd run build`: 홈과 서비스 상세 3개, 총 4개 정적 페이지 생성.
- `node node_modules/typescript/bin/tsc --noEmit`: 통과.
- 실제 Chrome에서 4개 페이지 × 11개 화면 크기(320×568, 390×844, 667×375, 767×600, 768×1024, 820×1180, 1023×768, 1024×768, 1440×900, 1920×1080, 2560×1440), 총 44개 조합 점검. 가로 넘침·화면 밖 콘텐츠 없음, 지정된 타입 크기·굵기·자간·좌우 여백·최대 너비와 내비게이션 순서 확인.
- 모바일 메뉴 열기, Escape로 닫기와 포커스 복귀, 세 서비스 선택, 상세 페이지에서 홈 문의 영역으로 이동 확인.
- 실제 SUIT 글꼴·이미지 로딩 정상. 검사 중 클라이언트 예외 없음.
- 브라우저 검증은 로컬 Chrome 기준이며 Safari·Firefox 실기기 검증은 포함하지 않았다.
