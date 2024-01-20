let items=[
  {
    title:"This was our pact",
    quantity:0,
    dollars:7,
    cents:49,
  },
  {
    title:"The famous five",
    quantity:0,
    dollars:4,
    cents:59,
  },
  {
    title:"Matilda",
    quantity:0,
    dollars:6,
    cents:80,
  },
  {
    title:"Harry Potter",
    quantity:0,
    dollars:10,
    cents:0,
  },
  {
    title:"For Young Readers",
    quantity:0,
    dollars:7,
    cents:29,
  },
  {
    title:"Wimpy Kid - DIY",
    quantity:0,
    dollars:4,
    cents:99,
  },
  {
    title:"Dart Board",
    quantity:0,
    dollars:17,
    cents:49,
  },
  {
    title:"Connect Four",
    quantity:0,
    dollars:19,
    cents:99,
  },
  {
    title:"Jenga",
    quantity:0,
    dollars:20,
    cents:99,
  },
  {
    title:"Monopoly",
    quantity:0,
    dollars:19,
    cents:49,
  },
  {
    title:"Bookmarks",
    quantity:0,
    dollars:12,
    cents:49,
  },
  {
    title:"Birthday Card",
    quantity:0,
    dollars:12,
    cents: 49,
  },
  {
    title:"Stuffed toys",
    quantity:0,
    dollars:15,
    cents:99,
  }
  ,
  {
    title:"Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents:49,
  },
]

let cartvalue=document.getElementById("cart-value");
let cartButton=document.getElementById("cart");
let addbtn=document.getElementsByClassName("button");

function updatecart(){
  let c=0;
  for(let i=0;i<items.length;i++){
    c=c+items[i].quantity;
  }
  cartvalue.innerHTML=c;
}
for(let i=0;i<addbtn.length;i++){
addbtn[i].onclick=()=>{
items[i].quantity++;
    updatecart();
  }
}


let totaldollars=0;
let totalcent=0;

function updatprice(){
  let totalpricecents=0;
  for(let i=0;i<items.length;i++){
    totalpricecents=totalpricecents+
                    items[i].quantity*(items[i].dollars*100
                    +items[i].cents)
  }
  totaldollars=Math.floor(totalpricecents/100)
  totalcent= totalpricecents % 100;
}



cartButton.onclick=()=>{
  updatprice();
  for(let i=0;i<items.length;i++){
    if(items[i].quantity!=0){
    console.log(
    "Item title:"+items[i].title +
    "-Quantity:"+items[i].quantity
    )}}
  
  console.log("The total amount is "+totaldollars+"$ and "+totalcent+" cents")
}