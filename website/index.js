let mcard = [
{
card_img:"image/burger1.jpg",
card_title:"Classic Cheeseburger",
card_paragraph:"A juicy beef patty topped with melted cheese, fresh lettuce, tomato, and our special sauce. Served with a side of crispy fries.",
},
{
card_img:"image/burger2.jpg",
card_title:"Veggie Delight",
card_paragraph:"A delicious veggie patty made from a blend of fresh vegetables and spices. Topped with avocado, sprouts, and tangy mayo. Served with a side of sweet potato fries.",
},
{
card_img:"image/burger3.jpg",
card_title:"Spicy BBQ Burger",
card_paragraph:"A fiery burger packed with flavor! Grilled chicken breast smothered in spicy BBQ sauce, topped with jalapenos, crispy onion rings, and chipotle mayo. Served with a side of coleslaw.",
},
]
for(var a in mcard){
document.getElementsByClassName('main-menu')[0].innerHTML+=
`
<div class="main-card">
<div class="card">
<img src="${mcard[a].card_img}" alt="">
<div class="card__content">
<h1 class="card__title">${mcard[a].card_title}</h1>
<p class="card__description">${mcard[a].card_paragraph}</p>
</div>
</div>
</div>
`
}