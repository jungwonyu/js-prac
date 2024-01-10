# JavaScript Practice

### 0_javaScript: javaScript 개념 공부
### 1_calculator: 계산기
### 2_lotto: 로또 번호 자동 추첨
### 3_rps: 컴퓨터와 하는 가위(scissor) 바위(Rock) 보(Paper) 게임
### 4_word_replay: 끝말잇기 게임
### 5_3d_carousel: 3D_carousel
#### position
https://developer.mozilla.org/ko/docs/Web/CSS/position

- 문서 상에 요소를 배치하는 방법
  - static (기본값): top, right, bottom, left 속성값에 영향을 받지 않음
  - relative: 해당 HTML 요소의 기본 위치를 기준으로 위치를 설정하는 방식
  - absolute: 원래 위치와 상관없이 위치를 지정할 수 있음. 단, 가장 가까운 상위 요소를 기준으로 위치가 결정됨.
  - fixed: 원래 위치와 상관없이 위치를 지정할 수 있음. 상위 요소 영향받지 않음.

#### transform

https://developer.mozilla.org/ko/docs/Web/CSS/transform

- 요소에 회전, 크기 조절, 기울이기를 줌

```
transform: translate(12px, 50%);
transform: rotate(0.5turn);
transform: scale(2, 0.5);
...
```

#### translate

https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate()

- transform 의 값
- 요소를 가로 또는 세로 방향으로 재배치

#### css 속성 설정

- perspective
  - 원근감을 주는 속성. 값이 클수록 원근감이 커짐.
- transform-style
  - 자식에게까지 3D 효과를 주게 함

#### 위치 계산하기

- rotateY 값 알아내기
  - cell이 총 9개
  - 360/9 = 40