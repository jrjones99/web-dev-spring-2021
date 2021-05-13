let user = {
  name: "",
  date: "",
  time: "",
  method: "",
  amount: null,
  effect: "",
  again: "",
}

const localDB = []

function defineUser() {
  user.name = document.getElementById("sName").value;
  console.log("name", user.name);
  user.date = document.getElementById("date").value;
  console.log("date", user.date);
  user.time = document.getElementById("time").value;
  console.log("time", user.time);
  user.method = document.getElementById("method").value;
  console.log("method", user.method);
  user.amount = document.getElementById("amount").value;
  console.log("amount", user.amount);
  user.effect = document.getElementById("effect").value;
  console.log("effect", user.effect);
  user.again = document.getElementById("again");
  console.log("again", user.again);
  console.log(document.getElementById("user"));
  user.again = document.getElementById("yes").checked;
  console.log('user', user)
  alert('You have successfully submitted your response')
  localDB.push(user);
}