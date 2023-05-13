# efub3-frontend-assignment-2
💛 이펍 프론트엔드 5, 6, 7주차 과제 [React Todolist] 제출 레포지토리

## Todolist 성능 최적화
### TodoItem 렌더링
완료 버튼 클릭, 투두 추가 및 수정 시 모든 todoList의 아이템이 리렌더링되는 것을 막았습니다.
* TodoItem.js 컴포넌트 코드 수정
* React.memo 사용
* comp 함수를 만들어서 false를 반환할 때 렌더링
    ```javascript
    // prev와 next를 비교하는 함수
    const comp = (prev, next) => {
        if (prev.id === next.id) {  // id가 같은 경우
            if (prev.text !== next.text || prev.done !== next.done) {
                // text 또는 done의 value가 다른 경우에만 렌더링
                return false;
            }
        }
        return true;
    }
    ```
#### 최적화 전 / 최적화 후
![TodoItem 최적화 전](https://github.com/teyeong/test/assets/100225783/bca30cc0-d7d0-4167-a221-18639a31ffa9) | ![TodoItem 최적화 후](https://github.com/teyeong/test/assets/100225783/c3c969f7-92cb-482a-a7ce-8db28c8afdd8)
---|---|
### 텍스트 렌더링
Home.js에서 NoticeText와 TitleText를 TodoText.js 컴포넌트로 정리해서 리렌더링이 되지 않도록 했습니다.
* TodoText.js 컴포넌트 생성
* React.memo 사용
### 임시 state 생성
Home.js 파일에 버튼 클릭 시 1씩 증가하는 count state를 생성했습니다.
* TodoList.js, TodoCreate.js, TodoText.js 파일에서 React.memo 사용

#### 최적화 전
![임시 state 최적화 전](https://github.com/teyeong/test/assets/100225783/c5bc5843-98eb-4b1a-9a8a-6bf7fbf5c65f)
![임시 state 최적화 전](https://github.com/EFUB/efub3-frontend-assignment-2/assets/100225783/20a2f296-7194-4584-bc13-a40798ac3727)
#### 최적화 후
![임시 state 최적화 후](https://github.com/teyeong/test/assets/100225783/e6eea52f-ead4-40db-8718-3b42fdedb6b9)
![임시 state 최적화 후](https://github.com/EFUB/efub3-frontend-assignment-2/assets/100225783/7d18f0c5-657b-4edb-8d9b-21cc6e7b4860)
### Timer 렌더링
타이머를 사용하지 않을 때에는 렌더링이 되지 않도록 했습니다.
* Timer.js 파일에서 React.memo 사용
### GuestItem 렌더링
GuestItem 추가 및 삭제 시 모든 아이템이 렌더링 되는 것을 막았습니다.
* GuestItem.js 파일에서 React.memo 사용
* comp 함수 선언
    ```javascript
    // 다른 아이템이 렌더링되지 않도록 true를 반환하는 comp 함수
    const comp = () => (true);
    ```
## Todolist 배포
<https://efub3-frontend-assignment-2-three.vercel.app/>