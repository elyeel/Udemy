const todos = ["Test"];
let input = prompt("what would you like to do?");
while(input !== "quit") {
  if (input === "list"){
    console.log(todos);
  } else if (input === "new"){
    let newToDo = prompt("Enter new to do!");
    todos.push(newToDo);
  }
  
  input = prompt("what would you like to do?");
}

console.log("Ok, you quit the app!");
