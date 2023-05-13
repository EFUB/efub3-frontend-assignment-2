# efub3-frontend-assignment-2
💛 이펍 프론트엔드 5, 6, 7주차 과제 [React Todolist] 제출 레포지토리

**Todo-list 성능 최적화**

# React.memo 사용
- TodoItem 컴포넌트와 TodoCreate 컴포넌트에 사용하여 투두리스트의 아이템이 삭제, 추가, 수정될때마다 투두리스트 전체가 리렌더링 
되는 것을 방지했습니다.
- TodoListPage에 사용하여 날씨 페이지에 있을때는 TodoList 페이지가 리렌더링 되지 않도록 했습니다.
- TodoHead 컴포넌트에 사용하여 날짜나 요일 혹은 태스크 개수에 변화가 생길때만 리렌더링 되도록 했습니다.

# 커스텀 훅 사용
- WeatherPage에서 사용자의 위치 정보를 받아와서 해당 위치의 날씨 정보를 가져오는 useWeather 훅을 만들었습니다. 이 커스텀 훅을 사용함으로써
기존에 따로 따로 실행되었던 위치 정보를 가져오는 과정과 날씨 정보를 가져오는 과정을 하나로 통합하였고 그렇게 함으로써 기존의 handleGeo 함수를 
생략할 수 있게 되었습니다.
또한 weatherInfo의 초기값을 null로 설정하여, 처음 컴포넌트가 마운트될 때 "Loading..." 메시지가 보이도록 했습니다.

# 임시 state 생성
- TodoListPage.js 파일에 투두리스트에는 영향을 끼치지 않는 Test Button을 추가하여 버튼을 누를때마다 num이 1씩 증가하도록 했습니다. 
그 후 버튼을 누를때 페이지 전체가 리렌더링 되는 문제를 React.memo를 사용해서 해결했습니다.

# 성능 최적화 전
![전](https://github.com/ybchoi5262/efub3-frontend-assignment-2/assets/109021332/992893e2-7ab5-42ee-9dcb-eca1a0d1fa05)
![수정전](https://github.com/ybchoi5262/efub3-frontend-assignment-2/assets/109021332/7a9e884e-bdc8-4751-b2a9-76f3f2d55214)

# 성능 최적화 
![후](https://github.com/ybchoi5262/efub3-frontend-assignment-2/assets/109021332/0fddab19-4b71-4ece-9d23-f30040db5607)
![수정후](https://github.com/ybchoi5262/efub3-frontend-assignment-2/assets/109021332/33741781-a012-4613-9888-cdc92aaf7eae)


