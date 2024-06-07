
console.log("Inside JS")
let manufacturer = document.getElementById("manufacturer");
console.log(manufacturer);
let l_ocation = document.getElementById("location");
let productName = document.getElementById("product-name");
let price = document.getElementById("price");

function AddData(manufacturer,Location,productName,price) {
   var data =[ {
    "manufacturer" : manufacturer,
    "location" : Location,
    "product-name" : productName,
    "price" : price

   } ]

   fs.appendFileSync('./newFile.json',JSON.stringify(data),(err)=>{
    if(err){
        console.error("error writing");
    }
    else{
        console.log("data appended")
    }

   })
    
}
document.getElementById('button').addEventListener('click',AddData(manufacturer,l_ocation,productName,price))
