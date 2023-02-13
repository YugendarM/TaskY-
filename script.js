const taskContainer =document.querySelector(".task__container");
const globalStore=[];//to store in the localStorage an array is created

const generateNewCard= (taskData) =>`
<div class="col-md-6 col-sm-12 col-lg-4 id=" id=${taskData.id}>
                <div class="card">
                    <div class="card-header d-flex justify-content-end ">
                        <button type="button" class="btn btn-success "><i class="fa-solid fa-pencil"></i></button>
                        <button type="button" class="btn btn-danger ml-2"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title text-primary">${taskData.taskTitle}</h5>
                      <img src=${taskData.imageUrl} class="img-fluid" alt="Responsive image">                      
                      <p class="card-text mt-3">${taskData.taskDescription}</p>
                      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
                    </div>
                </div>
            </div>
`;

const loadInitialCardData =()=> {
    //from local storage to get tasky card data
    const getCardData= localStorage.getItem("tasky");

    //convert to normal object
    const {cards}=JSON.parse(getCardData);//destructuring

    //loop over those array of task object to create HTML card, inject it to DOM
    cards.map ((cardObject) => {
        taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));

    //update our globalstore
    globalStore.push(cardObject);   
    })


    
}

const saveChanges = () => {
    taskData={
        id:`${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value
    };
    // console.log(taskData);

taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));

globalStore.push(taskData);
// localStorage.setItem("tasky",globalStore);
localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));


};