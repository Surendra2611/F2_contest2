

// user Array

let users = [
  { id: 1, name: "John", profession: "developer", age: 18 },
  { id: 2, name: "Jack", profession: "developer", age: 20 },
  { id: 3, name: "Karen", profession: "admin", age: 19 }
];

// Display function
function displayList(user) {
  let parent = document.getElementById("display-user");
  parent.innerHTML = "";

  user.forEach(user => {
    let container = document.createElement("div");
    container.innerHTML = `
    <p>${user.id}.</p>
    <p>Name: ${user.name}</p>
    <p>Profession: ${user.profession}</p>
    <p>Age: ${user.age}</p>`;
    parent.appendChild(container);
  });
}

displayList(users);


// Add user Function
function addUser() {

  let nameValue = document.getElementById("name-input").value;
  let professionValue = document.getElementById("profession-input").value;
  let ageValue = document.getElementById("age-input").value;

  if(nameValue == "" || professionValue == "" || ageValue == ""){
    alert("Please fill the details");
  }else{
    let obj = {
      id: users.length + 1,
      name: nameValue,
      profession: professionValue,
      age: ageValue
    };
  
    users.push(obj);
    displayList(users);
  
    document.getElementById("name-input").value = '';
    document.getElementById("profession-input").value = '';
    document.getElementById("age-input").value = '';
    document.getElementById("profession").value = '';
  }

}

let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addUser);


// Filter Function
function filterList(){
  let select = document.getElementById("profession").value;

  let filterArr;
  if(select == ""){
    alert("select a profession before clicking the button");
    filterArr = users;
  }else{
    filterArr = users.filter( ele =>{
      return ele.profession === select;
    });
  }

  displayList(filterArr);   
}

let filterButton = document.getElementById("filter-button");
filterButton.addEventListener("click", filterList);      
   
  

  
