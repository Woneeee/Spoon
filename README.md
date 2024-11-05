# 🥄Spoon | Fine Restaurant Finder App

## 목적성

- 경주의 맛있는 레스토랑 및 카페를 찾아주는 Fine Restaurant Finder App 입니다.
- 이 앱에서는 유저가 원하는 레스트랑 이름 또는 먹고싶은 요리를 검색하여 그에 해당하는 레스토랑의 정보를 볼 수 있습니다.
- 레스토랑 상세 페이지에서는 업체의 각종 세부적인 특징과 함께 식당에 대한 리뷰를 작성할 수 있는 영역이 존재합니다. 또한 근처 레스토랑을 추천해주며 사용자에게 더 많은 선택의 기회를 제공합니다.
- native app으로서 유저가 정보를 찾는 동시에 활동을 할 수 있게 만들고 재미있는 UI 를 구현하여 ‘Spoon’ 이라는 맛집 탐색 어플을 만들고자 합니다.

## Stack

<div display="flex">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" width="60px" />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s" width="60px" /> 
</div>

- React
- html / css
- JS
- node.js
- git / github

## 개발 기간

- 2024.8.4~ 2024.8.15

## 계획표

| 제목      | 내용                   |
| --------- | ---------------------- |
| 8/4, 5, 6 | 레퍼런스찾기, api 찾기 |
| 8/7       | 전체적인 컴포넌트 구성 |
| 8/8       | 헤더, 푸터, 검색 구성  |
| 8/9       | 홈 구성                |
| 8/10      | 다이닝, 카페 구성      |
| 8/11      | 콜렉션 구성            |
| 8/12      | 디테일 구성            |
| 8/13      | 검색기능 구성          |
| 8/14      | 로그인, 회원가입       |
| 8/15      | 유지보수 및 배포       |

## 프로젝트 소개

- Github Url - https://github.com/Woneeee/Spoon
- Project Url - https://woneeee.github.io/Spoon/#

- 공공데이터 Open Api Url
  - https://www.data.go.kr/data/15114461/openapi.do
  - https://www.data.go.kr/data/15114465/openapi.do
  - https://www.data.go.kr/data/15114467/openapi.do
- 카카오맵 Api Url
  - https://apis.map.kakao.com/

<div display="flex" >
  <img src="./src/mo_spoon/home1.jpg" width="180px" />
  <img src="./src/mo_spoon/home2.jpg" width="180px" />
  <img src="./src/mo_spoon/dining.jpg" width="180px" />
  <img src="./src/mo_spoon/detail1.jpg" width="180px" />
  <img src="./src/mo_spoon/detail2.jpg" width="180px" />
  <img src="./src/mo_spoon/detail3.jpg" width="180px" />
</div >

## 프로젝트를 하면서 느낀점

### 프로젝트 진행 중 겪은 어려움

1. 공공데이터에서 api 로 불러온 데이터를 사용하다 보니 바로 사용하기 쉽도록 깔끔하게 깔끔하게 데이터들이 정돈되어 있지 않고 하나의 property 안에 필요한 정보들이 흩어져 있었습니다. 따라서 함수를 통해 필요한 데이터만 추출해내야하는 부분에서 번거로움과 어려움을 겪었습니다.

2. 또한 필요한 데이터에 p, br, img 태그와 같은것들이 섞여 사용하기에 편리하지않도록 되어있었습니다. 따라서 그러한 것들을 제거하여 깔끔한 데이터로 다시 가공하는 과정에서 어려움이 있었습니다.

3. 마지막으로 가게이름 및 가게 키워드를 통한 검색결과를 제공해야겠다고 생각을 했었습니다. 그러나 이전프로젝트와는 달리 이번프로젝트의 api는 검색결과를 제공하는 데이터가 아니었기 때문에 키워드를 입력하면 그것을 포함하는 정보가 필터 되어 배열의 결과를 보여주는 함수를 사용해 직접 검색 알고리즘을 만드는 과정에서 어려움을 겪었습니다.

### 어려움을 해결한 방안

1. 하나의 property안에 흩어져있는 정보들 가운데 원하는 부분만 추출하기위해 indexOf, lastIndexOf, slice 함수를 사용하였습니다. indexOf 와 indexlastOf 를 이용하여 추출할 부분의 인덱스 값을 얻어냈고 그값을 slice 함수에 사용하여 결과적으로 원하는 정보만을 가져올 수 있었습니다.

2. 또한 필요한 정보안에 태그들도 포함되었기 때문에 이를 제거 하기 위해 검색을 하여 replace 함수와 정규표현식을 사용하면 태그들을 깔끔하게 제거한 결과값을 얻어낼 수 있다는 것을 알게되었고 원하는대로 가공할 수 있었습니다.

3. 마지막으로 입력한 검색어를 포함하는 정보가 필터링 되어 배열로 반환시켜주는 filter, includes 함수를 사용하여 검색결과가 나올 수 있는 알고리즘을 만들어보았고 그 검색결과를 다른 페이지로 이동하여 볼 수 있게끔 useNavigate() Hook을 이용했습니다.

### 프로젝트 진행 중 알게된 내용

- 위에서 언급하였듯이 정제되지 않은 데이터를 indexOf, slice, replace 등과 같은 다양한 함수를 통해 수정 및 활용 하는 법에대해 알게되었습니다.

- 또한 filter 와 includes 함수로 키워드 검색알고리즘을 만들 수 있다는 것도 새롭게 알게되어 더 활용해 보고싶다는 생각했습니다.

- 마지막으로 새롭게 kakaoMap 의 지도 api를 사용해 보며 한층 api를 활용하는 것에 친숙해질 수 있었던 것 같습니다.

- position에 sticky 속성을 썼을때 해당 조상의 스크롤 위치가 도달하면 그때부터 fixed처럼 지정한 위치에 고정되기 시작해서 해당 조상의 위치가 스크롤을 벗어나면 고정되던 위치가 사라진다는 점에서 fixed와의 차이점을 알게되었습니다.

### 프로젝트 진행중 칭찬 및 반성

- 반성할 점

  이번 프로젝트에서는 swiper 라는 슬라이드 라이브러리를 사용하되 css로 디테일을 수정해야겠다는 목표가 있었습니다. 그리하여 새롭게 swiper 에 css를 적용해보기 위해 구글링을 했지만 빠르게 해답이 찾아지지 않았습니다. 그러다가 결국에는 차근차근 읽어보자는 마음가짐으로 swiper 자체 홈페이지에있는 Demo 를 보게 되었고 결국 css 적용법에 대한 해답을 찾게 되었습니다. '등잔밑이 어둡다' 라는 속담이 떠오르게 되었고 다음부터는 다른곳에서 해답을 빨리 찾을 수도 있겠지만 쓰고싶은 라이브러리 공식홈페이지 document (설명서)를 먼저 잘 읽어 보아야겠다는 생각을 했습니다.

- 칭찬할 점

  저번 프로젝트였던 YEAHFLIX 에서 디자인이 직관적이지만 다소 재미가 없는 심심한 느낌이 드는것에 아쉬움이 많이 남았습니다. 그래서 이번 Spoon 프로젝트는 진행을 하기에 앞서 다양한 레퍼런스를 두고 비교 및 참고한 후 진행하게 되었습니다. 따라서 조금 더 완성도있게 만들 수 있었고 저번의 아쉬운 점을 이번 프로젝트를 통해 개선한것 같아 뿌듯한 생각이 들었습니다.

## 앞으로의 개발 방향

- 이번에 새롭게 알게된 filter 와 includes 함수로 검색기능 말고도 단어를 포함하여 일치하는 정보를 찾아 새로운 알고리즘을 만드는 프로젝트를 진행해 보기

- 새로운 라이브러리를 쓸때 공식홈페이지 내의 document를 잘 읽어보기
