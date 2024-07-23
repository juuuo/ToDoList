# :heavy_check_mark: ToDoList
* javascript를 사용한 ToDoList 만들기
  
## :memo: 소개
* 페이지 새로고침 시 전체 List가 갱신되는 ToDoList 입니다.

## :gear: 구현한 기능들
* 할 일 추가 : 내용 작성 후 enter 키를 누르거나 화면상의 :heavy_plus_sign: 버튼을 눌러서 List 추가 가능
* :heavy_check_mark: 버튼 : 클릭 시 할 일이 완료됐음을 표시하며 개별 체크와 모든 List 한 번에 체크가 가능
* 개별 삭제 : del 버튼 클릭 시 개별 삭제 가능
* 선택 삭제 : 선택 삭제 버튼 클릭 시 :heavy_check_mark:(완료) 표시되어있는 List만 삭제 가능
* 모두 삭제 : 작성된 모든 List 삭제 가능
* 전체 버튼 : 작성된 모든 List를 보여 줌
* 진행 중 버튼 : 아직 완료되지 않은 List 들만 보여 줌
* 완료 버튼 : 완료된 List 들만 보여 줌
* list left : 현재 작성된 List 들의 개수를 보여 줌

## :computer: 구현 화면
<p align="center">
  <img src="https://github.com/user-attachments/assets/5530e323-a6cd-4c87-839c-6d1a198eba4c" width="80%" height="80%"/>
  <img src="https://github.com/user-attachments/assets/84681a2c-8276-49a9-8f06-c85173cb8bf9" width="80%" height="80%"/>
  <img src="https://github.com/user-attachments/assets/572345e7-cdda-412d-a744-1dda954517f3" width="80%" height="80%"/>
  <img src="https://github.com/user-attachments/assets/a3b60f31-d03e-40a4-8c55-38f908ecb933" width="80%" height="80%"/>
  <img src="https://github.com/user-attachments/assets/1933c3b0-1392-46f0-8016-3d504275d74e" width="80%" height="80%"/>
</p>

## :dart: 트러블슈팅
### :boom: 리스트 개수 표시
#### :interrobang: 고민
```
리스트의 개수를 세기 위해 리스트 목록 하단에 lists left 기능을 넣으려는데
어떻게 기능을 구현할지 고민이 됐다.
```
#### :100: 해결 방법
```
내가 선택한 방법은 이러하다.
처음 리스트 추가할 때 그 안에 no를 숨겨놓고 각각의 리스트 추가, 삭제할 때
이미 숨겨놓은 no의 개수에 변화를 주어 lists left를 계산할 수 있게 했다.
```
<p align="center">
  <img src="https://github.com/user-attachments/assets/de930f50-4035-4aa2-822d-6e90fcbee345" width="80%" height="80%"/>
</p>

### :boom: 리스트 체크 여부 구분짓기
#### :interrobang: 고민
```
선택삭제와 전체삭제 버튼을 눌렀을 때 체크되어있는 리스트만 삭제되는 기능을 만들고 싶었다.
```
#### :100: 해결 방법
```
이미 개별 체크된 리스트를 제외한 나머지 리스트에도 체크 표시를 하거나(개별/전체 체크 선택 시)
또는 그 반대의 경우(개별/전체 체크 해제 시),
리스트에 포함된 css classList에 on, hidden 클래스가 존재하는지 여부에 따라
구분되어 작동되도록 코드를 구성했다.
```
<p align="center">
  <img src="https://github.com/user-attachments/assets/129dcf35-d69d-4ce8-a316-cd93cf1ac330" width="40%" height="40%" />
  <img src="https://github.com/user-attachments/assets/1de10ad9-b392-4589-a62c-1c54fd3f8f39" width="80%" height="80%"/>
</p>
<br>

***
<div align="center">
    <div align="center">
    Tech Stack<br>
</div>
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
</div>
<br>
<div align="center">
    <div align="center">
    Tools<br>
</div>
<div align="center">
    <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white" />
</div>
<br>
<div align="center">
  <div align="center">
  Collaborations<br>
</div>
<div align="center">
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" />
</div>
  
***
