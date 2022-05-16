let valorIngresado: string = "";
let contraseña : string = "eureka";
let contador : number;

for (contador = 1; contraseña != valorIngresado; contador ++) {
  valorIngresado = prompt("Ingrese Contraseña: ");
  if (contraseña == valorIngresado){
    console.log ("contraseña correcta");
    break;
  } else {
      console.log ("Intenta una vez más");}
  }
}