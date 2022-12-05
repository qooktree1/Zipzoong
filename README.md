# 🏋🏻 집**에서 운동중- WebRTC 기반 운동 플랫폼**

![Logo.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4638c888-b355-49a8-ba6a-f74ac1153849/Logo.svg)

## [집에서 운동중 링크](https://i7a805.p.ssafy.io/)

---

## 📖 주제

운동 의지가 약한 사람들을 위해 그룹을 통해 다양한 참여 유도 정책을 제공하는 프로젝트****

---

## 📅 **프로젝트 진행 기간**

2022.07.12(화) ~ 2022.08.19(금) [****38****일간 진행] - SSAFY 7기 2학기 공통프로젝트

---

## 🤔 프로젝트에서 다루는 문제

많은 사람들이 하루를 습관처럼 보내고 있으며 이러한 습관을 바꾸기는 어렵습니다. 아무리 강한 의지로 무언가를 계획하고 실천하더라도 그것이 습관이 되기 전에 그만두는 경우가 많습니다.

**작심삼일 증후군**

실제로 새해 결심을 일주일 채 넘기지 못하는 경우는 27.4%입니다. 또한 새해 결심을 연말까지 1년 동안 지킨 비율은 고작 8%에 불과합니다. 많은 사람들이 새해에 운동을 해야겠다고 결심을 많이 합니다. 한국인의 기대 수명은 평균 83.5세이며 아프지 않고 건강한 상태로 지내는 기간은 이보다 짧은 66.3세입니다. 즉, 17년 동안 우리는 건강의 위험 속에서 지내야 하며 운동의 중요성은 점점 더 높아지고 있습니다.

**사용자에게 작심삼일을 극복하기 위한 흥미와 의지를 부여하고자 합니다.**

---

## 💡 문제를 해결하기 위한 솔루션과 목표

미국의 의사 맥스웰 몰츠가 주장한 21일의 법칙과 영국의 심리학자 필리파 랠리와 그의 팀이 진행한 연구에서 발견한 66일 습관의 법칙을 토대로 사용자에게 **21일과 66일 동안 꾸준하게 참여할 수 있는 보상과 흥미를 제공**합니다.

**21일의 법칙**
우리의 뇌가 **새로운 행동에 익숙해지는 데 걸리는 최소한의 시간이 21일**이라는 법칙

**66일의 법칙일정 절차에 따라 66일만 꾸준히 행동하면 원하는 행동을 습관**으로 만들 수 있다는 법칙

---

## 🤔 어떤 보상과 흥미를 통해 문제를 해결할 수 있을까요?

### 🤲 **친구들과 함께하는 운동**

- 친목을 통한 참여 유도
- 초대 링크를 통해 친구를 운동 그룹에 초대할 수 있습니다.

### 🏅**3일, 21일, 66일 기반으로 보상 제공**

- 3일을 연속으로 출석한 경우, 초보자 아이콘을 제공합니다.
- 21일을 연속으로 출석한 경우, 그룹 스트릭이 깨지는 것을 방지하는 쉴드를 제공합니다.
- 66일을 연속으로 출석한 경우, 명예의 전당에 이름이 올라갑니다.

### 🏆**랭킹**

- TIME RANKING - 운동 총 시간(그룹원 모두 참여)을 기준으로 상위 그룹 1개, 하위 그룹 1개를 보여줍니다.
- CONTINUE RANKING - 스트릭을 기준으로 상위 그룹 1개, 하위 그룹 1개를 보여줍니다.

### ✅**그룹 스트릭(1일 1 운동)**

- **그룹원 전원이 운동에 참여해야 획득할 수 있는 그룹 스트릭 정책**을 통해 그룹원들끼리 운동에 참여할 수 있도록 유도합니다.
- 운동에 참여하지 않는 경우, **미 참여자는 “작심삼일” 칭호를 획득**합니다.

### 🏋️**그룹별 운동 진행**

- 그룹마다 운동 루틴을 지정할 수 있습니다.
- 자세 인식을 통해 정확한 자세로 운동에 참여할 수 있도록 유도합니다.
- 게임 종료 후, 목표 대비 개인 달성률, 팀의 평균 달성률을 제공해 협업을 이끌어냅니다.

---

## 📝 **주요 기능**

- **회원 관리**
    - 구글, 카카오, 네이버(검수 요청 예정) **소셜 로그인** : OAuth 2.0 사용해 소셜 로그인 구현
    - JWT Access Token/Refresh Token을 이용한 로그인 인증 방식 적용
    - 닉네임 중복 확인
    - 개인정보 수정(닉네임, 아이콘), 회원 탈퇴
    
- **튜토리얼**
    - 서비스 이용 시 필요한 정보들을 제공
    
- **마이 페이지**
    - 가입한 그룹 확인
    - 운동 기록 확인
        - 전체 운동 기간 : 오늘 날짜를 기준으로 운동한 지 며칠이 되었는지 운동 정보를 제공
        - 전체 운동 시간 : 오늘 날짜를 기준으로 얼마나 운동했는지 시간 정보를 제공
    - 개인 운동 달력
        - 출석 스탬프 : 운동한 날에는 출석 스탬프를 제공
        - 일별 운동 기록 : 운동 달력에서 원하는 날짜를 선택해 운동 기록(운동 종류, 시간, 횟수) 조회
    - 개인 랭킹 : 사용자 기준 상위 2명, 본인, 하위 2명의 랭킹 정보 제공
    
- **운동 그룹**
    - 운동 그룹 생성
    - 링크를 사용한 그룹 가입
        - 그룹원이 **초대 링크**를 공유하고 로그인한 회원이 링크를 공유받아서 그룹에 가입
        - 초대 페이지 존재 ( 예를 누르면 그룹에 가입되도록 유도 )
        
    - 그룹원 정보
        - 그룹원 운동 참여 확인: 그룹원이 운동에 참여했는지 색상으로 확인 가능(미참여: 흰색, 참여: 하늘색)
        - 그룹원 상세 정보 확인 : 그룹원을 클릭해서 상세 정보를 조회
    - 그룹별 운동 루틴 : 운동방에서 사용할 운동 루틴을 관리
    - 그룹별 운동방 : 그룹원끼리 운동할 수 있는 운동방 생성
    - 그룹원 관리 : 그룹장은 그룹원을 강퇴하거나 그룹장을 위임
    - 그룹 운동 달력
        - 출석 스탬프 : 운동한 날에는 출석 스탬프를 제공
        - 일별 운동 기록 : 운동 달력에서 원하는 날짜를 선택해 운동 기록(운동 종류, 시간, 횟수) 조회
    - 그룹 랭킹 : 그룹 기준 상위 2개 그룹, 본인 그룹, 하위 2개 그룹의 랭킹 정보 제공
    
- **운동 루틴**
    - 운동 루틴 생성 : 그룹에서 진행할 운동 종류/횟수/순서와 쉬는 시간 정보를 담은 운동 루틴을 생성
        - 운동 종류: **버피, 팔벌려뛰기, 레터럴레이즈, 런지, 팔굽혀펴기, 스쿼트**
    - 운동 루틴 조회/수정/삭제 : 그룹에서 생성된 운동 루틴 조회/수정/삭제
    
- **운동방(운동 진행)**
    - 운동방 생성 : 그룹 페이지에서 그룹원끼리 운동할 수 있는 운동방 생성
    - 운동방 입장 후 대기
        - 방장은 운동 루틴 선택 및 운동 시작 권한 부여
        - 선택된 운동 루틴의 운동 정보(운동 종류, 횟수)는 모든 참여자가 확인 가능
        - 마이크, 카메라 on/off, 다른 참여자 음소거 가능
    - 운동방 입장 후 운동 시작
        - Teachable Machine으로 학습한 운동 모델을 적용해 운동 자세 인식 및 운동 횟수를 자동 측정
        - 운동 중에는 남은 운동 시간, 현재 진행중인 운동 종류, 측정된 운동 횟수, 앞으로 진행할 운동 정보(To-do List)를 제공
    - 운동방 채팅 : 운동방에서 참여자끼리 채팅 가능
    - 운동 결과 확인 : 진행한 운동 종류 및 횟수와 각 그룹원이 달성한 운동 목표 퍼센테이지를 제공
    
- **운동 기록 저장 및 갱신**
    - 운동 진행 후 운동에 참여한 인원들의 기록을 받아 저장
        - 개인 기록은 개인별 저장하며 스트릭 및 운동시간, 운동 기록 즉시 갱신
        - 그룹 기록은 참여한 인원들의 기록을 합산해서 기록하며 운동시간, 운동 기록 즉시 갱신
        - 누적 운동시간 관련 목표 달성 시 아이콘 지급
    - 스케쥴러 함수가 매일 AM 12:00 실행
        - 그룹 스트릭 갱신 및 운동 미완료 개인, 그룹 실드 보유 여부 체크 후 사용
        - 현재 스트릭이 21일의 배수일 경우 스트릭 보호 실드 제공
        - 최대 스트릭 관련 목표 달성 시 아이콘 지급
        
- **랭킹**
    - 명예의 전당: AM 12:00 갱신 기준 최대 연속 운동 일수 66일 이상 달성 그룹 제공
    - 그룹 TOP 10: AM 12:00 갱신 기준 누적 운동시간, 최대 연속 운동 일수 별 그룹 랭킹 1-10위 제공
    - 개인 TOP 10: AM 12:00 갱신 기준 누적 운동시간, 최대 연속 운동 일수 별 개인 랭킹 1-10위 제공
    - 순위권에 든 그룹/멤버 정보 제공: 그룹 및 개인 선택 시 세부 정보 제공
    
- **스트릭(운동 기록)**
    - 달력을 이용해 그 날 운동을 얼만큼 했는지 확인이 가능하고 목표치에 달성하게 되면 연속해서 운동한 날짜가 증가합니다.
    - 꾸준히 운동하며 운동 기록을 쌓을 수 있습니다.

- **뱃지획득**
    - 달성 스트릭이 길어질수록, 운동한 시간이 길어질수록
    - 그룹에서 획득할 수 있는 뱃지의 가지 수가 많아집니다!
    - 뱃지 달성 조건은 비밀이니 친구들과 운동을 해보며 숨겨진 뱃지를 얻을 수 있습니다.
    - 특정 조건을 달성하면 스트릭이 깨지는 것을 막아주는 쉴드 아이템을 얻을 수 있습니다.

---

## ⌨️ **주요 기술**

**Backend**

- IntelliJ IDE 2022.1.3(Ultimate Edition) 11.0.15 + 10-b2043.56 amd64
- Java 11
- SpringBoot 2.7.1
- MySQL 8.0.30-1.el8
- JPA
- JVM 11.0.16+8-post-Ubuntu-Oubuntu120.04
- Spring Security
- Docker 20.10.17
- Redis 7.0.4

**Frontend**

- Visual Studio Code IDE 1.70.1
- React 18.2.0
- React-Redux 8.0.2
- Tailwind CSS
- FlowBite
- Teachable Machine 2.0

**Tech**

- Teachable Machine 2.0
- Openvidu 2.22.0

**CI/CD**

- AWS EC2 Ubuntu 20.04 LTS
- Jenkins 2.346.2
- NGINX 1.23.1
- SSL 인증서

---

## 🔧 **협업 툴**

- GitLab
- Notion
- JIRA
- MatterMost
- Webex
- Discord

---

## 🏞️ **협업 환경**

- Gitlab
    - 코드의 버전을 관리
    - 이슈 발행, 해결을 위한 토론
    - Pull Request시, 팀원들이 코드리뷰를 진행하고 피드백 게시
    
- JIRA
    - 매주 목표량을 설정하여 Sprint 진행
    - 업무의 할당량을 정하여 Story Point를 설정하고, In-Progress -> Done 순으로 작업
    
- 회의
    - 평일 아침, 점심 회의 진행, 스크럼(전날 목표 달성량과 당일 할 업무 브리핑) 진행 노션링크
    - 각자 위치에서 건네야 할 말이 생기면 팀원의 위치로 이동하여 전달
    
- Notion
    - 회의가 있을때마다 회의록을 기록하여 보관
    - 회의가 길어지지 않도록 다음날 제시할 안건을 미리 기록
    - 기술확보 시, 다른 팀원들도 추후 따라할 수 있도록 보기 쉽게 작업 순서대로 정리
    - 그라운드룰, Git branch 전략 정리
    - 소프트웨어 개발 방법론(애자일) 정리
    - 컨벤션들 정리
        - [PR, Commit, Naming] Convention
    - 기술 스택, 시나리오, 와이어프레임, ERD, REST API 등 기획에 들어가야 하는 자료들을 정리
    

---

## 🏗️ **프로젝트 파일 구조**

### **Back**

```markdown

backend
  ├── main
  │   ├── java
  │   │   └── jibjoong
  │   │       └── jibjoong
  │   │           ├── aop
  │   │           │   └── annotation
  │   │           ├── api
  │   │           │   ├── controller
  │   │           │   ├── dto
  │   │           │   │   ├── common
  │   │           │   │   ├── exercise
  │   │           │   │   ├── icon
  │   │           │   │   ├── information
  │   │           │   │   ├── nickname
  │   │           │   │   ├── ranking
  │   │           │   │   ├── room
  │   │           │   │   ├── routine
  │   │           │   │   └── team
  │   │           │   └── service
  │   │           ├── config
  │   │           │   ├── auth
  │   │           │   ├── jwt
  │   │           │   └── redis
  │   │           ├── db
  │   │           │   ├── domain
  │   │           │   └── repository
  │   │           │       ├── exercise
  │   │           │       ├── history
  │   │           │       ├── memberteam
  │   │           │       ├── room
  │   │           │       └── routine
  │   │           ├── enums
  │   │           ├── exception
  │   │           │   └── advice
  │   │           └── interceptor
  │   └── resources
  └── test
```

### Front

```markdown
frontend
    ├── node_modules
    ├── public
    └── src
        ├── api
        ├── assets
        ├── components
        │   ├── Line.jsx
        │   ├── button
        │   ├── calendar
        │   ├── card
        │   ├── icon
        │   ├── input
        │   ├── modal
        │   ├── nameSquare
        │   ├── navbar
        │   ├── spinner
        │   └── timer
        ├── features
        │   ├── group
        │   ├── login
        │   ├── myPage
        │   ├── rank
        │   ├── room
        │   │   ├── openVidu
        │   │   ├── teachableMachine
        │   │   └── workout
        │   └── routine
        ├── pages
        └── utils
```

---

## 👥 **팀원 역할 분배**

### BackEnd

### 👩🏻‍💻 신슬기 - 팀장

### 👨🏻‍💻 황승주 - DevOps

### FrontEnd

### 👩🏻‍💻 안지영 - WebRTC

### 👩🏻‍💻 채송지 - Design

### 👨🏻‍💻 박종민 - API

---

## **✔ 프로젝트 산출물**

- [포팅메뉴얼](https://lab.ssafy.com/s07-webmobile1-sub2/S07P12A805/-/blob/master/exec/%ED%8F%AC%ED%8C%85%EB%A7%A4%EB%89%B4%EC%96%BC_%EC%A7%91%EC%97%90%EC%84%9C%EC%9A%B4%EB%8F%99%EC%A4%91.pdf)
- [ERD](https://lab.ssafy.com/s07-webmobile1-sub2/S07P12A805/-/blob/master/exec/ERD_%EC%A7%91%EC%97%90%EC%84%9C%EC%9A%B4%EB%8F%99%EC%A4%91.png)
- [아키텍처](https://lab.ssafy.com/s07-webmobile1-sub2/S07P12A805/-/blob/master/exec/%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90_%EC%A7%91%EC%97%90%EC%84%9C%EC%9A%B4%EB%8F%99%EC%A4%91.png)
- [시연시나리오](https://lab.ssafy.com/s07-webmobile1-sub2/S07P12A805/-/blob/main/exec/%EC%8B%9C%EC%97%B0%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4_%EC%A7%91%EC%97%90%EC%84%9C%EC%9A%B4%EB%8F%99%EC%A4%91.pdf)

[컨벤션 (1)](https://www.notion.so/1-8bef3ae2ba1b4007a24868d3fae5d98e)

[API (1)](https://www.notion.so/API-1-20238f1514bf43ec9a03678b0d3b82f9)

[와이어프레임 (1)](https://www.notion.so/1-997f00cf0506409385066186ac065c28)

[회의록 (1)](https://www.notion.so/1-59f6e75603e449e7a4233b200a770078)

- [dumpdata](https://lab.ssafy.com/s07-webmobile1-sub2/S07P12A805/-/blob/main/exec/jibjoongdump.sql)

[사이트맵 (1)](https://www.notion.so/1-0d6091c1a1db4e76bfdde880fa53c246)

[기능 명세서 (1)](https://www.notion.so/1-24186840427d4846a7f59ab5dd3b0e79)

[데일리 스크럼 (1)](https://www.notion.so/1-a83516ecb0da4dea94631f982cc74c8b)

---

## 🖥️ **서비스 화면**

### **회원가입 절차 ( 소셜로그인 )**

- 닉네임 입력 - 닉네임 중복 조회
    
    ![login2.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e36034d4-c26b-4475-894a-1089b064ede0/login2.gif)
    
- 전에 로그인 했던 사용자는 즉시 메인 페이지로 이동
    
    ![login1.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4959a53e-faff-47af-bc6a-e4fc64c99287/login1.gif)
    

### 마이페이지

- 달력을 통한 개인 운동 기록 및 가입한 그룹 목록 등 운동 기록을 볼 수 있음
    
    ![mypage1.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3c9518ef-5bbd-480c-b01c-daf33f140fdb/mypage1.gif)
    

- 그룹 생성
    
    ![KakaoTalk_20220821_012116446.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ffbc51df-7b2d-4e15-a1bb-82d0cc867d83/KakaoTalk_20220821_012116446.gif)
    

### 개인 정보 수정

- Navbar에서 개인 정보 수정 및 닉네임 중복 검사
    
    ![개인정보수정.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ada5bf20-4792-4d86-b73a-682869ba7112/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%88%98%EC%A0%95.gif)
    

### 튜토리얼

- 서비스를 이용할 수 있도록 기능을 소개해주는 튜토리얼을 Navbar에 표시
    
    ![tutorial.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1195d0df-a96f-440c-a2e5-e81063804483/tutorial.gif)
    

### 그룹 페이지

- 그룹페이지에서 그룹에 속한 팀원들의 정보를 볼 수 있음
    
    ![KakaoTalk_20220821_012116769.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c3ddcd36-748d-4783-88db-e92bfcc0894d/KakaoTalk_20220821_012116769.gif)
    

- 날짜별 운동 정보, 쉴드 개수, 그룹 랭킹(본인 그룹 & [위, 아래] 각 2 그룹, 전체 운동 횟수 보기
    
    ![group2.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03baa0d3-0b8c-4449-a636-5ecc0b5efab8/group2.gif)
    

- 운동 방 생성
    
    ![KakaoTalk_20220821_012117103.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22db5ab6-36b5-4589-9269-c3caf9e50f74/KakaoTalk_20220821_012117103.gif)
    

### 그룹 설정 페이지

- 그룹 설정페이지에서 그룹 아이콘 정보 변경 및 획득 이유 열람 가능(그룹장만 열람 가능)
    - 엄지 척 아이콘은 그룹원들이 모두 운동을 한 날
    - 쉴드 아이콘은 그룹이 쉴드를 가진 상태에서 운동을 다하지 못한 상태에서 다음날에 아이템이 자동으로 써집니다
    
    ![KakaoTalk_20220821_012117711.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8dd79db5-3dd0-4088-b689-50e3b8010f83/KakaoTalk_20220821_012117711.gif)
    

### 루틴 페이지

- 그룹페이지에서 루틴을 설정 가능(6가지 운동 및 휴식)
    
    ![KakaoTalk_20220821_012117978.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d958fe40-0f0b-406e-a363-5449297c881c/KakaoTalk_20220821_012117978.gif)
    

### 운동 페이지

- 운동방 생성 및 루틴 선택
    - 운동방이 생성되면 등록된 루틴 확인 및 선택 가능
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d2def9c-26dd-4c7a-b427-9e3545e76659/Untitled.gif)
    
- 운동 진행 화면
    - 타이머: 남은 운동 시간 표시
    - 운동 리스트: 운동 루틴의 진행 상황 안내
    - 현재 운동: 현재 진행되고 있는 운동, 목표 횟수, 달성 횟수 정보 제공
    
    ![KakaoTalk_20220821_164149386.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8b4d3baa-7d13-47cb-8eb1-f2bf02bb776f/KakaoTalk_20220821_164149386.gif)
    

- 운동 종료 후 결과 페이지 확인
    
    ![KakaoTalk_20220821_012117316.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/878a4c49-d4b2-455e-9618-c5d1a5c03d70/KakaoTalk_20220821_012117316.gif)
    

### 명예의 전당

- [그룹, 개인] 랭킹 확인
    - 타임 랭킹 - 운동 시간 순    /    스트릭 랭킹 - 연속한 일 수 순
        
        ![명예의전당.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b87e08b2-b998-446c-ab73-2a822960bb60/%EB%AA%85%EC%98%88%EC%9D%98%EC%A0%84%EB%8B%B9.gif)
