const printTriangle = 6;
if (typeof printTriangle !== "number") {
  console.log("sorry to enter must number");
} else {
  function printsegitiga(panjang) {
    let hasil = '';
    for (let i = 5; i >= 1; i--) {
      for (let j = 1; j<= i; j++) {
            hasil += j;
        }
        hasil += '\n';
    }
    return hasil;
  }
  
  console.log(printsegitiga(5));
}