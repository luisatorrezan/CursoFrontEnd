//galeria de imagens -> DOM
let uploadInput = document.getElementById("upload");
let addButton = document.getElementById("addImage");
let galeria = document.getElementById("galeria");
let carrossel = document.getElementById("carrossel");

//upload das imagens
let imagens = [];

addButton.addEventListener("click", ()=>{
        //para pegar imagens do computador
        //let file = uploadInput.file[0];
        // if(file){
        //     let reader = new FileReader();
        //     reader.onload = function (e){
        //         let imageUrl = e.target.result;
        //         imagens.push(imageUrl);
        //    }
        // }
    imagemUrl = uploadInput.value.trim();
    if(imagemUrl==="") return;
    imagens.push(imagemUrl);
    atualizarGaleria();
    atualizarCarrossel();
    uploadInput.value = "";
});

//atualizarGaleria 
function atualizarGaleria(){
    galeria.innerHTML = "";
    imagens.forEach(
        (imagem,index)=>{
            let container = document.createElement("div");
            container.classList.add(imagem-container);

            let img = document.createElement("img");
            img=src = imagem;
        }
    )
}