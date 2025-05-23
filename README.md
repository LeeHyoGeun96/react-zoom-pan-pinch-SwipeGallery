
# 🖼 개선된 중고차 이미지 뷰어 프로젝트

## 📌 Overview
|![Image](https://github.com/user-attachments/assets/ccba103d-7f4a-4b08-b6f6-4a6c0429987b)|![Image](https://github.com/user-attachments/assets/e8f5b186-392b-4001-af2c-491318d754f2)|
|:---: |:---: |
| 개선한 이미지 뷰어| 이전의 불편한 이미지 뷰어 |

중고차 판매 사이트의 불편한 이미지 뷰어를 개선한 프로젝트입니다. 사용자 중심 설계로 더 직관적이고 접근성 높은 이미지 탐색 경험을 제공합니다.

[🔗 라이브 데모](https://image-viewer-one.vercel.app/) | [📝 자세한 개발 과정](https://lim-2.tistory.com/121)

## 🎯 Key Features

- ⚡️ **직관적인 확대/축소** - 휠, 더블클릭, 핀치 제스처 지원
- 🖱️ **자연스러운 패닝** - 확대 상태에서 드래그로 이미지 탐색
- 📱 **반응형 디자인** - 모바일/데스크탑 환경 최적화
- 🔄 **모바일 화면 방향 제어** - 더 큰 화면으로 자동 전환
- ♿️ **웹 접근성 준수** - 키보드 내비게이션, ARIA 속성, 포커스 관리
- 🚀 **성능 최적화** - 빠른 로딩과 부드러운 인터랙션

## 🛠 Tech Stack

### 핵심 기술
- ![React 19](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black): 최신 버전의 리액트를 사용하여 컴포넌트 기반 아키텍처 구현 및 최신 기능 활용
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white): 타입 안정성 확보로 개발 단계에서 오류 예방 및 코드 품질 향상
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white): 빠른 개발 환경과 효율적인 빌드 프로세스를 위해 선택
### UI 및 상호작용
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white): 빠른 UI 개발과 일관된 디자인 시스템 적용을 위한 유틸리티 우선 CSS 프레임워크
- ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white): 직관적이고 반응형 이미지 슬라이더 구현에 활용, 문서가 상세하게 되어 있음
- **react-zoom-pan-pinch**: 이미지 확대/축소 및 패닝 기능을 효율적으로 구현하기 위해 선택, 문서가 상세하게 되어 있음
- **react-icons** - 다양한 아이콘 세트를 일관된 인터페이스로 사용 가능
### 유틸리티 및 최적화

-   **react-device-detect** - 모바일 사용자에게만 화면 방향 전환 기능을 제공하기 위해 사용
-   **Lodash** - 디바운싱, 쓰로틀링 등 성능 최적화와 데이터 조작을 위한 유틸리티 함수 활용
-   **Zustand** - 전역 상태를 관리하여 프롭스 드릴링 제거와 성능 최적화

## 🖥️ Final View 🖥️
<div align="center">
 
|                                 |                                   |
| :-----------------------------: | :-------------------------------: |
|           **확대, 스와이프(휠, 드래그)**           |         **줌, 패닝(키보드)**          |
| ![Image](https://github.com/user-attachments/assets/89e984ef-8422-43fc-822c-4aeb2b8a3fc8) | ![Image](https://github.com/user-attachments/assets/1b37f318-658c-45ee-9ab2-944f2250e9fa) |
|          **탭 인덱스**          |           **포커스 트래핑**           |
| ![Image](https://github.com/user-attachments/assets/8d84e696-8b77-4a23-8d0d-0b2335db6740) | ![Image](https://github.com/user-attachments/assets/d4769d87-da86-42f3-b797-73e44a0dd259)|
|          **버튼 툴팁(스크린리더 모드 전환)**          |            **모바일 전체화면 방향 전환**             |
|![Image](https://github.com/user-attachments/assets/18607382-f4d1-4dd1-8d36-9220700e0227) | ![Image](https://github.com/user-attachments/assets/f276a46e-8343-4687-a1c5-147fddbfc473) |



</div>

## ⚡ 성능 최적화
<div align="center">

![image](https://github.com/user-attachments/assets/6177b0de-5b0f-4426-948d-a1ad5fb198ae)

</div>

- **스켈레톤 UI**: 초기 로딩 시 사용자 대기 경험 개선
- **이미지 Lazy 로딩**: 네트워크 부담 감소
- **이미지 프리로딩**: 다음/이전 이미지를 미리 로드하여 스와이프 시 즉각적인 반응성 제공
- **렌더링 최적화** - 메모이제이션 기법으로 불필요한 리렌더링 방지, 프리로딩, zustand select 패턴 사용
- **이벤트 최적화** - 디바운싱 및 쓰로틀링 적용으로 성능 병목 해소, isCurrentImage 변수를 사용하여 가드 적용
- **썸네일 배치 로딩(Batch Loading)**: 썸네일을 5개씩 나누어 순차적으로 로드하여 네트워크 부하 분산

## 🔍 주요 구현 사항


<b>📁 프로젝트 구조</b>

```
├───📁 api/
│   └───📄 imageApi.ts
├───📁 assets/
│   ├───📁 customIcon/
│   │   └───📄 doubleClickIcon.svg
│   └───📄 rotatePhone.svg
├───📁 components/
│   ├───📁 ImageViewer/
│   │   ├───📄 ImageViewer.tsx
│   │   ├───📄 NavigationControls.tsx
│   │   ├───📄 ThumbnailItem.tsx
│   │   └───📄 ThumbnailPanel.tsx
│   ├───📁 SwiperGallery/
│   │   └───📄 SwiperGallery.tsx
│   ├───📁 UI/
│   │   └───📄 Skeleton.tsx
│   ├───📁 reactZoomPanPinch/
│   │   ├───📄 ImageRenderer .tsx
│   │   ├───📄 TransformViwer.tsx
│   │   └───📄 ZoomControls.tsx
│   └───📁 ui/
│       └───📄 tooltip.tsx
├───📁 hooks/
│   ├───📁 ImageViewer/
│   │   ├───📄 useFocusManagement.tsx
│   │   ├───📄 useFullscreen.tsx
│   │   ├───📄 useImageSlider.tsx
│   │   ├───📄 useKeyboardNavigation.tsx
│   │   ├───📄 useScreenOrientation.tsx
│   │   └───📄 useThumbnailLoader.tsx
│   ├───📁 TransformViwer/
│   │   ├───📄 usePanningControl.tsx
│   │   ├───📄 useSwipeMessage.tsx
│   │   ├───📄 useTransformViewerShortcuts.tsx
│   │   └───📄 useZoomControl.tsx
│   ├───📄 useGalleryData.tsx
│   └───📄 useImagePreloader.tsx
├───📁 lib/
│   └───📄 utils.ts
├───📁 store/
│   └───📄 useZoomScreenReaderStore.ts
├───📄 App.tsx
├───📄 index.css
├───📄 main.tsx
└───📄 vite-env.d.ts

```

![image](https://github.com/user-attachments/assets/4eaab63d-0320-486c-a290-2df7653e6705)

### 아키텍처 개요

-   react-zoom-pan-pinch 라이브러리를 사용한 TransformViwer를 swiper를 사용한 SwiperGallery로 감싸는 형태
-   React와 TypeScript를 기반으로 한 모듈화된 컴포넌트 구조
-   관심사 분리 원칙에 따른 커스텀 훅 설계
-   상태 관리와 이벤트 처리의 효율적인 분리

### 핵심 컴포넌트 설명

-   **ImageViewer**: 전체 뷰어의 컨테이너 역할, 하위 컴포넌트 조율
-   **SwiperGallery**: 이미지 간 슬라이드 기능 담당
-   **TransformViewer**: 확대/축소와 패닝 기능 구현
-   **ThumbnailPanel**: 썸네일 목록 관리 및 표시
-   **NavigationControls**: 사용자 인터페이스 컨트롤 제공

### 중요 커스텀 훅 소개

-   **useImageSlider**: 이미지 슬라이드 기능과 상태 관리
-   **useZoomControl**: 확대/축소 기능 제어
-   **usePanningControl**: 패닝 동작 처리 및 경계 감지
-   **useKeyboardNavigation**: 키보드 내비게이션 지원
-   **useScreenOrientation**: 모바일 전체 화면 방향 제어
-   **useThumbnailLoader**: 썸네일 이미지 효율적 로딩
</details>


<b>🔧 주요 기능 및 개선점</b>

### 직관적인 확대/축소

-   **PC**: 마우스 휠과 더블클릭을 통한 직관적인 확대/축소
-   **모바일**: 핀치 제스처를 통한 자연스러운 확대/축소

### 개선된 썸네일 내비게이션

-   사용자 접근성을 고려한 썸네일 패널 디자인
-   현재 이미지와 썸네일 간의 시각적 동기화 제공
-   확장 가능한 썸네일 패널로 효율적인 이미지 탐색

### 플랫폼 최적화

-   화면 방향 제어 지원으로 모바일 사용자 경험 향상

### 접근성 기능

-   tab index와 short cut으로 **모든 기능을 키보드로 사용** 가능하게 함, 단축키를 tooltip을 전달
-   의미있는 순서로 요소들을 배치하여 **사용자가 예측 가능한 탐색 경험**을 느끼도록 함
-   현재 포커스된 요소를 시각적으로 구분하여 현재 작업 중인 요소 **식별 용이** 하도록 함
-   포커스 트래핑을 구현하여 dialog 내부에서도 **자연스런 탐색**이 가능하게 함
-   dialog를 열 때 이전의 ref를 기억하여 닫았을 때 해당 위치에서 다시 포커스 요소를 복원하도록 함, **탐색의 흐름 유지**
-   시맨틱 HTML과 ARIA 속성 활용
-   일반 사용자와 스크린 리더 사용자의 단축키 다르게 설정 하여 **사용자 경험 최적화**

## 🚀 Getting Started

```bash
# 저장소 클론
git clone git@github.com:LeeHyoGeun96/react-zoom-pan-pinch-SwipeGallery.git

# 의존성 설치
cd react-zoom-pan-pinch-SwipeGallery
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```
