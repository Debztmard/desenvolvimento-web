
const nomes = ["Erick","Augusto","Rodrigo","Vitor","Hugo","osiris","Matheus","Brayan","Caio","Helton","Vitor","Isabela","Deborah",
"Tatiana","Patricia","Mariana","Gustavo","Weridiana","Camilla","Renato","Leonardo","joaoLuiz","Michael","Caroline","Jana","Pedor","JoãoPedro","Paula"];

function buscarNomesJota (nomes){
  if(nomes.charAt(0) == "D")
  return nomes;
}
let resultado = nomes.filter(buscarNomesJota);
console.log(resultado);