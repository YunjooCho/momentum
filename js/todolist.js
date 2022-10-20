const toDoForm = document.querySelector("#toDoForm");
const inputTodoContents = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");

let toDos = [];

toDoForm.addEventListener("submit", submitToDos);

//현재 LocalStorage에 저장된 ToDos Array에 값이 존재하면 index.html에 뿌려줌
const currentToDos = localStorage.getItem("toDos");
if(currentToDos !== null){
    const parsedToDos = JSON.parse(currentToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(toDoView);
}

//[1]이용자가 ToDo내용을 입력 후 엔터를 누르면 이벤트 실행
function submitToDos(event){
    event.preventDefault();
    const inputToDo = inputTodoContents.value;
    inputTodoContents.value = "";
    const inputToDoObj = {
        contents : inputToDo,
        id : Date.now()
    }
    toDos.push(inputToDoObj);
    toDoView(inputToDoObj);
    saveToDosAtLocalStorage();
}


//[2]LocalStorage에 toDos Arr를 저장
//LocalStorage에는 String타입만 저장되므로 JSON.stringify()를 통해 Array를 String으로 변환
function saveToDosAtLocalStorage(){ //toDos를 인자로 안받는 이유는 let toDos가 전역변수이기 때문?
    localStorage.setItem("toDos",JSON.stringify(toDos));
}


//[3]입력받은 ToDo내용을 index.html에 뿌려줌(li요소 하위에 span, deleteBtn을 추가한 뒤, html에 있는 ul요소 밑에 li요소를 추가)
function toDoView(inputToDoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    li.id = inputToDoObj.id;
    span.innerText = inputToDoObj.contents;
    deleteBtn.innerText = "삭제";
    deleteBtn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    console.log(li);
    toDoList.appendChild(li);
}


//[4]이용자가 화면 옆 deleteBtn을 클릭하면 이벤트 실행
function deleteToDo(event){
    //(1)index.html에서 삭제
    const li = event.target.parentElement;
    li.remove();

    //(2)LocalStorage의 toDos Array에서 삭제
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
    saveToDosAtLocalStorage();
}

