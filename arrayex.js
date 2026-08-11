let frutas = ["Maçã", "Banana", "Laranja", "Uva"];

console.log("Primeira fruta:", frutas[0]);

frutas[1] = "Morango";

frutas.push("Manga");

let frutaRemovida = frutas.pop(); 
console.log("Fruta removida:", frutaRemovida);

console.log("\nLista atualizada de frutas:");
for (let i = 0; i < frutas.length; i++) {
    console.log(`- ${frutas[i]}`);
}