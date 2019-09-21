let expr = prompt("Digite o nome da fruta!"))

switch (expr)
{
    case "Laranjas":
    console.log ("As laranjas custam $0.59 o quilo.");
        break;
    case "Maçãs":
        console.log("Maçãs custam $0.32 o quilo.");
        break;
    case "Bananas":
        console.log("Bananas custam $0.48 o quilo.");
        break;
    case "Cerejas":
        console.log("Cerejas custam $0.48 o quilo.");
        break;
    case "Mangas":
        console.log("Mangas custam $0.48 o quilo.");
        break;
    case "Mamões":
        console.log("Mamões custam $0.48 o quilo.");
        break;
    default:
        console.log("Desculpa, estamos sem nenhuma " + expr + ".");
}