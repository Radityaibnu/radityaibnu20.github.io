let konfirmasi = confirm(" ingin main ? ");
while(konfirmasi == true){
    let number = Math.floor(Math.random() * 10 + 1) ; // 1 < x < 10
    console.log(number) ;
    let inputNumber = prompt ("tebak angka !");  
    if(number == inputNumber){
        alert("selamat anda benar")
    }else if(inputNumber < number){
        alert("tebakan anda kurang dari angka , silahkan menebak lagi")
    }else if(inputNumber > number){
        alert("tebakan anda melebihi angka , silahkan menebak lagi")
        }
        konfirmasi = confirm("lanjut ?")
}
