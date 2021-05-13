let user = {
  name: "",
  date: "",
  time: "",
  method: "",
  amount: null,
  effect: "",
  again: "",
}

function defineUser() {
  let confirm = document.getElementsByTagName("form");
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
  confirm[0].innerHTML = "You have successfuly submitted your response";
}