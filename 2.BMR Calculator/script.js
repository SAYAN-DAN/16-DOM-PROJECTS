function calculateBMR() {
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;
  let age = document.querySelector("#age").value;
  let gender = document.querySelector("#gender").value;
  if (gender === "male") {
    var bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    var bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  document.getElementById("result").innerHTML = bmr.toFixed(2);
}
calculateBMR();
