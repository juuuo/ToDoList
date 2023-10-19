let no = 0; //leftItems 카운트
let listNo = 0; //list 생성시 부여되는 list 구분번호

let addValue = document.getElementById("addValue"); //할 일 입력창
let result = document.getElementById("result"); //추가된 할 일 리스트
let leftItems = document.querySelector(".lists-left"); //화면에 남아있는 할 일 리스트 갯수

const completeAllBtn = document.querySelector(".complete-all-btn"); //모든 목록선택버튼
const showAllBtn = document.getElementById("show-all-btn"); //전체 목록조회버튼
const showActiveBtn = document.getElementById("show-active-btn"); //진행중 목록조회버튼
const showCompletedBtn = document.getElementById("show-completed-btn"); //완료된 목록조회버튼


//할 일 추가시
function addTodo(){

    if(addValue.value==false){
        alert("내용을 입력하세요!");
    } else{
        let li = document.createElement("li");
        let del = document.createElement("button");
        let checked = document.createElement("div");
        let list = document.createElement("div");
        let hidden = document.createElement("div");

        list.innerHTML = addValue.value;
        li.appendChild(list);
        list.classList.add("inline");

        no = 1+no ++;  //list 카운트
        leftItems.innerText = no + " lists left";
        
        // result.prepend(li);    // TodoList의 최신값이 맨 위로 오게하는법
        result.appendChild(li);       //추가된 할 일에 할 일 리스트 추가하기
        li.classList.add("list");

        li.prepend(checked);      //할 일 리스트 추가시 체크버튼도 추가
        checked.innerText ="✔";
        checked.classList.add("checkBtn");
        checked.addEventListener("click", function(e) {
            checkList(this);
        });

        li.appendChild(del);      //할 일 리스트 추가시 삭제버튼도 추가    
        del.innerText = "del";      //삭제버튼에 들어갈 'del'
        del.classList.add("delBtn");
        del.addEventListener("click", deleteList); //삭제버튼 클릭시 리스트지우기 이벤트 실행
        del.style.position="relative";
        
        li.appendChild(hidden);     //몇 번째 todolist인지 div에 숨겨놓은 숫자(새로고침 후 몇 개째 추가했는지 console에서 보기 위함)
        hidden.classList.add("hidden");
        listNo++;
        hidden.innerText = listNo;
        console.log(hidden);

        addValue.value = "";       //할일 입력창 초기화
        addValue.focus();           //강제 커서 깜빡임

    }
}

//엔터키로 할 일 추가하기
addValue.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTodo();
    }
})

//✔클릭하면 체크여부 변경
function checkList(e){
    if(e.classList.contains("checked")){
        e.classList.remove("checked");
        e.parentElement.classList.remove("on");
    } else{
        e.classList.add("checked");
        e.parentElement.classList.add("on");
    }
}

//complete-all-btn 버튼으로 모든 list 선택, 선택해제하기
let count = 0;

completeAllBtn.addEventListener("click", function(){

    const list = document.getElementsByClassName("list");
    const arrayList = Array.from(list);
    console.log("arrayList : " + arrayList);
    
    const checkedList = document.getElementsByClassName("list on");
    const arrayCheckList = Array.from(checkedList);
    count = arrayCheckList.length;
    console.log("count : " + count);

    const checked = document.getElementsByClassName("checkBtn");

    if(count == arrayList.length) { //<예시> arrayList(화면에 존재하는 전체 list)가 3개 일 때
        console.log("arrayList.length 랑 같을때 = 3 : " + count);
        for(let i=0; i<arrayList.length; i++){         
            count--;        
            list[i].classList.remove("on");
            checked[i].classList.remove("checked");
        }
        console.log(count);

    } else if(count != arrayList.length && count != 0){ //1개 or 2개의 리스트에만 ✔ 클릭되어 선택되있는 경우
        console.log("arrayList.length 랑 다르고 0 도 아닐때 = 1 or 2 : " + count);
        for(let i=0; i<arrayList.length; i++){         
            count = arrayList.length;
            list[i].classList.add("on");
            checked[i].classList.add("checked");
        }
        console.log(count);

    } else{    //모든 리스트에 ✔ 선택이 안되있는 경우
        console.log("0 일때 : " + count);
        for(let i =0; i<arrayList.length; i++ ){
            count++;
            list[i].classList.add("on");
            checked[i].classList.add("checked");
        }
        console.log(count);
    }
})

//개별 할일 삭제시(1개 삭제)
function deleteList(e){ //삭제 버튼(del) 클릭시
    
    let removeOne = e.target.parentElement; //선택한 목록 한개만 지우기(부모 객체를 지운다)
    removeOne.remove();
    
    no = (-1)+no--;    //list 카운트
    leftItems.innerText = no + " lists left";
}

//선택되있는 할 일 삭제시(선택된것만 삭제)
function selectClear(){ //선택 삭제 버튼 클릭시

    const selectDelete = document.getElementsByClassName("list on");

    let arraySelectList = Array.from(selectDelete); //HTMLCollection을 Array로 치환하기

    if(confirm("정말 삭제하시겠습니까?") == true){
        if(arraySelectList.length == 0){
            alert("삭제할 목록이 없습니다");
        } else{
            for(let i=0; i<arraySelectList.length; i++){
    
                console.log(arraySelectList); //배열자체
                console.log(arraySelectList[i]); //배열안의 값
                arraySelectList[i].remove();

                no = (-1)+no--;    //list 카운트
                leftItems.innerText = no + " lists left";
            }
        }
    } else{
        return false;
    }
}

//전체 삭제시(todolist 전부 삭제)
function allClearList(){
    
    const allDelete = document.getElementsByClassName("list");

    let arrayAllDeleteList = Array.from(allDelete); //HTMLCollection을 Array로 치환하기

    if(confirm("정말 삭제하시겠습니까?") == true){ //취소메시지가 true(ok)일때
        if(arrayAllDeleteList.length == 0){             //list의 길이가 0이면
            alert("삭제할 목록이 없습니다");           //삭제할 목록이 없다는 경고창
        } else{                                        //삭제할 목록이 있다면
                result.innerText = "";                       //전체 삭제
                no = 0;
                leftItems.innerText = no + " list left";      //list 카운트
            }
        } else{                                      //취소메시지가 false(no)일때
            return false;                           //삭제 취소
        }
}

//하단의 '전체' 버튼 클릭시(모든 todolist 노출)
showAllBtn.addEventListener("click", function(){

    const checkedList = document.getElementsByClassName("list");
    const arrayCheckList = Array.from(checkedList);

    for(let i=0; i<arrayCheckList.length; i++){
        if(arrayCheckList[i].classList.contains("hidden")){
            arrayCheckList[i].classList.remove("hidden");
            console.log(arrayCheckList);
        }
    }
})

//하단의 '진행중' 버튼 클릭시(체크 된 todolist 숨기기)
showActiveBtn.addEventListener("click", function(){

    const checkedList = document.getElementsByClassName("list");
    const arrayCheckList = Array.from(checkedList);

    for(let i = 0; i <arrayCheckList.length; i++){
        if(arrayCheckList[i].classList.contains("on")){
            arrayCheckList[i].classList.add("hidden");
        } else{
            arrayCheckList[i].classList.remove("hidden");
        }
    }
    console.log(arrayCheckList);
})

//하단의 '완료' 버튼 클릭시(체크 안 된 todolist 숨기기)
showCompletedBtn.addEventListener("click", function(){
    
    const checkedList = document.getElementsByClassName("list");
    const arrayCheckList = Array.from(checkedList);

    for(let i=0; i<arrayCheckList.length; i++){
        if(arrayCheckList[i].classList.contains("on")){
            arrayCheckList[i].classList.remove("hidden");
        } else{
            arrayCheckList[i].classList.add("hidden");
        }
    }
    console.log(arrayCheckList);
})