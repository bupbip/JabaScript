function dead() {
    var i = 1000;
    while(i > 0){
        setTimeout(() => {
          console.log(i);
        }, 1000);
        i -= 7;
    }

}

