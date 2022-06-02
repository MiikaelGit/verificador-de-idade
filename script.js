function diferenca() {
    var current = new Date().getFullYear()
    var birth = document.getElementById('idade')
    var nasc = Number(birth.value)
    

    if (nasc == 0 || nasc > current) {
        alert('Verifique os dados e tente novamente!') 
    } else {
        var total =  current - nasc
        /*document.getElementById('result').innerHTML = total*/
        var sex = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        //img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (total >= 0 && total < 10) {
                img.setAttribute('src', 'img/crianca-homem.jpg')
            } else if (total < 21) {
                img.setAttribute('src', 'img/jovem-homem.jpg')
            } else if (total < 50) {
                img.setAttribute('src', 'img/adulto-homem.jpg')
            } else {
                img.setAttribute('src', 'img/idoso-homem.jpg')
            }
        } else if (sex[1].checked) {
            genero = "Mulher"
            if (total >= 0 && total < 10) {
                img.setAttribute('src', 'img/crianca-mulher.jpg')
            } else if (total < 21) {
                img.setAttribute('src', 'img/jovem-mulher.jpg')
            } else if (total < 50) {
                img.setAttribute('src', 'img/adulta-mulher.jpg')
            } else {
                img.setAttribute('src', 'img/idosa-mulher.jpg')
            } 
        }
        document.getElementById('result').innerHTML = `Detectamos ${genero} com ${total} anos`
        document.getElementById('result').appendChild(img)
    }
    
    
}


