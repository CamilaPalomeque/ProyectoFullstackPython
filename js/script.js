function pruebaEmail(valor) {
  let correo = document.getElementById("email_validate"); //capturo el elemento
  regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //regex para validar email
  !regex.test(valor) //if ternario | En base al resultado del ternario coloco el texto correspondiente dentro del HTML
    ? (correo.innerText = "Email no valido")
    : (correo.innerText = "Email valido");
}

async function getData() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  const welcome = document.getElementById("welcome")
  const results = data.results[0];
  const name = results.name.first + " " + results.name.last;
  welcome.innerText = `Welcome ${name}`
}
