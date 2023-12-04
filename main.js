const getInput = document.querySelector("input");
const button = document.querySelector(".check");
const apiUrl = "https://www.disify.com/api/email/";
const result = document.querySelector(".result");

async function checkEmaIl() {
  const email = getInput.value;
  const getData = await fetch(apiUrl + email);
  const transformData = await getData.json();
  console.log(transformData);
  if (transformData.format && transformData.dns) {
    result.innerHTML = "This email is valid";
  } else{
    result.innerHTML = "Invalid email address";
  };
  if (result.innerHTML !== "") {
    button.textContent = "Check"
    getInput.value = "";
    result.classList.add("reStyle")
  }
}

button.addEventListener("click", () =>{
  button.innerHTML = "Checking..."
  checkEmaIl();
})