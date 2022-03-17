async function asynchrone(){
    //connexion
    let x = await fetch("https://thatsthespir.it/api")
    let y = await x.json()

    //affichage dans le dom
    document.getElementById("phrase").innerHTML = await y.quote
    document.getElementById("auteur").innerHTML = await y.author
    document.querySelector("img").src = await y.photo
} asynchrone()