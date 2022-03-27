# 쉼쉼 프로젝트

## 배포 브랜치 -> master

### 테스트 배포 도메인 : https://sharp-yalow-b97865.netlify.app

## URL 구조
/ : 홈페이지. 최종 결과물 페이지.
┗ test: 씬별로 테스트가 가능한 페이지
  ┗ :id: (/test/1) id: 씬의 키값

## 레포지토리 구조
/
┣ public: index.html, logo등이 있는 폴더
┃  
┣ src: 소스코드 포함
┃  ┣ hook
┃  ┃  ┣ useScene.tsx: (미개발) 매 씬에 들어갈 로직을 Hook으로 구현할 계획
┃  ┃  ┗ useStore.tsx: Zustand를 이용해 전역으로 데이터(Store)를 관리.
┃  ┃
┃  ┣ page
┃  ┃  ┣ HomePage.tsx: 홈페이지. 최종 결과물을 보는 위치
┃  ┃  ┣ TestPage.tsx: 씬별로 확인할 수 있는 페이지
┃  ┃  ┗ TestContainerPage: '/test/???'로 접속했을 때, parameter에 따라 씬을 출력하는 씬
┃  ┃
┃  ┣ scene
┃  ┃  ┣ index.tsx: 모든 씬을 export하는 모듈
┃  ┃  ┗ SceneNotFound: 현재 없는 씬에 접근할 경우 노출되는 페이지
┃  ┃  
┃  ┣ index.tsx: 엑세스 포인트. Context Provider를 wrapping하는 위치
┃  ┣ App.tsx: 베이스 컴포넌트. React Router를 통해 url에 따라서 라우팅 함.
┃  ┗ style.css: CSS 파일
┃
┗ package.json: 포함 패키지 정보
