function verificar(){
    var data = new Date();
    var ano = data.getFullYear()
    var fano = document.getElementById('ano');
    var res = document.getElementById('res');

    if(fano.value == "" || Number(fano.value) > ano){
        window.alert('[ERRO] Verifiquer os dados e tente novamente!');
    } else {
        var sex = document.getElementsByName('sex');
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(sex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/homem-criança.jpg');
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/homem-jovem.jpg');
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/homem-adulto.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'img/homem-idoso.jpg');
            }
        } else {
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/mulher-criança.jpg');
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/mulher-jovem.jpg');
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/mulher-adulta.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'img/mulher-idosa.jpg');
            }
        }

        res.style.textAlign = "center";
        res.innerHTML = `<strong>Detectamos ${genero} com ${idade} anos!</strong>`
        res.appendChild(img);

    }
}

