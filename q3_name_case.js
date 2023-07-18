/* Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase. */
var ownName = "Faizan abbasi";
console.log(ownName.toLowerCase());
console.log(ownName.toUpperCase());
console.log(
  ownName
    .split(" ")
    .map(function (w) {
      return w[0].toUpperCase() + w.substring(1).toLowerCase();
    })
    .join(" ")
);
