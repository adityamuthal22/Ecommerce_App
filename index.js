

let arr = JSON.parse(localStorage.getItem("Products")) || [];
//let arr=[];
function Products(n,c,i,p,g,s){
  this.name=n,this.category=c,
  this.image=i,this.price=p,
  this.gender=g,this.sold=s;
   
}


function productInfo(e){

    e.preventDefault();

    let form=document.getElementById("product");
    let name=form.name.value;
   let category =form.category.value;
//console.log("category:",category);
    let image=form.image.value;
   // console.log("image:",image);
    let price=form.price.value;
  //  console.log("price:",price);
    let gender=form.gender.value;
   // console.log("gender:",gender);
    // let sold=form.sold.value;
    let sold=document.querySelector("#sold").checked;
    console.log("sold:",sold);
    
   // console.log("sold:",sold);

    let p1=new Products(name,category,image,price,gender,sold);
    arr.push(p1);
    console.log("arr:",arr);

    localStorage.setItem("Products", JSON.stringify(arr));
    window.location.href="product.html"

}
