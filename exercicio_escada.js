function escadaF(num){

  if(num == 0){
    return console.log("#")
  }

  let escada = ''
  let espacos = ''

  for(let i=0; i<num; i++){
    espacos = " ".repeat(num - (i + 1))// 9
    escada = escada + "#"
    console.log(espacos, escada)
  }
}

escadaF(10)

// o       o
// oo     oo
// ooo   ooo
// oooo oooo