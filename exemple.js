let operationtype;

do {
  operationtype = prompt(
    "1 - Addition \n 2 - Multiplication\n 3 - Soustraction \n 4 - Division \n"
  );
  switch (operationtype) {
    case "1":
      premierNombre = prompt("");
      deuxiemeNombre = prompt("");
      break;
    case "2":
      alert("Multiplication");
      break;
    case "3":
      alert("Soustraction");
      break;
    case "4":
      alert("Division");
      break;
    default:
      break;
  }
} while (operationtype == "" || operationtype > 4 || operationtype == 0);

// do {
//   //   if (isNaN(premierNombre) && isNaN(deuxiemeNombre)) {
//   // console.log(premierNombre, deuxiemeNombre);
//   console.log(premierNombre, deuxiemeNombre);
// } while (isNaN(premierNombre) && isNaN(deuxiemeNombre));
