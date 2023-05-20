//intialising array

let arr = [
    {
        id:1,name:'john',age:'18',profession:'developer'
    },

    {
        id:2, name:'jack',age:'20', profession:'developer'
    },
    
    {
            id:3, name:'karen', age:'19',profession:'admin'
    }
]

//displaying the array data
let displaydiv = document.getElementById("display")


function adddata(arr, index = 0) {
    if (index >= arr.length) {
      return;
    }
  
    let subdiv = document.createElement("div");
    subdiv.className = "subdivclass";
  
    let id = document.createElement("div");
    id.innerText = arr[index].id;
  
    let name = document.createElement("div");
    name.innerText = "Name: " + arr[index].name;
  
    let age = document.createElement("div");
    age.innerText = "Age: " + arr[index].age;
  
    let profession = document.createElement("div");
    profession.innerText = "Profession: " + arr[index].profession;
  
    subdiv.append(id);
    subdiv.append(name);
    subdiv.append(profession);
    subdiv.append(age);
  
    displaydiv.append(subdiv);
  
    adddata(arr, index + 1);
  }

  adddata(arr,0)





// Function to filter users based on profession
const filterBtn = document.getElementById('dropdown');

function filterUsersByProfession() {
    const selectedProfession = document.getElementById("dropdown").value;
    const userList = document.getElementById("display");
    userList.innerHTML = "";

   
  
    if (!selectedProfession) {
      alert('Please select a profession.');
      
      return;
    }
  
    const filteredUsers = arr.filter(user => user.profession.toLowerCase() === selectedProfession.toLowerCase());
    
    if (filteredUsers.length === 0) {
        alert('select a profession before clicking the button');
        adddata(arr);
      } else {
        adddata(filteredUsers);
      }
}



//adding users 

function addUser() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('newProfession').value;
    const age = document.getElementById('age').value;
  
    if (!name || !profession || !age) {
      alert('Please enter all the details.');
      return;
    }
  
    const newUser = {
      id: arr.length + 1,
      name: name,
      profession: profession,
      age: age
    };
  
    arr.push(newUser);
    displaydiv.innerHTML = ""; // Clear the existing content
    adddata(arr);
  
    // Reset input fields
    document.getElementById('name').value = '';
    document.getElementById('newProfession').value = "";
    document.getElementById('age').value = "";
  }
