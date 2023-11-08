
var btn=document.getElementsByClassName('like')


for( let i=0;i<btn.length;i++){
   let like=btn[i]
   like.addEventListener('click',function(){
    if(like.style.color=='black'){
        like.style.color='red'
    }
    else{
        like.style.color='black'
    }
   })
}
//desincrémentation
let minuss=document.getElementsByClassName('minus-btn')
let quantite=document.getElementsByClassName('Quant')

for(let i=0;i<minuss.length;i++){
    minuss[i].addEventListener('click',function(){
        if(quantite[i].value>1)
        quantite[i].value-- 
     total()
    })
  
}
//incrémentation
let plus=document.getElementsByClassName('plus-btn')
for(let i=0;i<plus.length;i++){
    plus[i].addEventListener('click',function(){
        quantite[i].value++ 
        total()
    })
   
}
//supprimer
let btns=document.getElementsByClassName('delete')
let section=document.getElementsByClassName('Item')
let parent=document.getElementsByClassName('items')

console.log('sss',section)
for(i=0;i<btns.length;i++){
    let t=section[i]
   let btnremove=btns[i]
   btnremove.addEventListener('click',function(){
   t.remove()
   total()
   })
}
//total




function total(){
    var items=document.getElementsByClassName('Item')
    var prixfinal=document.getElementById('finalPrice') 

    console.log(items.length);
var s=0
for(let i=0;i<items.length;i++){
    var item=items[i]
    console.log(item.querySelector('.Quant').value);
s=s+item.querySelector('.Quant').value*item.querySelector('.price').innerHTML
}
return(prixfinal.value= s)

}

    





















// var btnmoins=document.getElementsByClassName('minus-btn')
// var inputs=document.getElementsByClassName('Quant')

//  for(let j=0;j<inputs.length;j++){
//     var count=inputs[j]
  
//     var countvalue=count.getAttribute('value')
//     console.log('gdg',countvalue);
   
//     for(let i=0;i<btnmoins.length;i++){
//         let descr = btnmoins[i]
//         descr.addEventListener('click',function(){
//          countvalue=parseInt(countvalue)-1
//          console.log(countvalue)
//          countvalue.value=countvalue
    
    
//         })
//     }
// }







// var btnplus=document.getElementsByClassName('plus-btn')
// console.log(btnplus)
// for(let i =0;i<btnplus.length;i++){
//    let incr=btnplus[i]
//     console.log(incr)
//     incr.addEventListener('click',function(){
//         countvalue=parseInt(countvalue)+1
//         console.log(countvalue)
//     })
// }

