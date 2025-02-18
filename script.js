const copyDiscountCoupon = document.getElementById("discount-coupon")
copyDiscountCoupon.addEventListener('click', function(){
    const discountText = copyDiscountCoupon.innerText;
    const textarea = document.createElement('textarea');
    textarea.value = discountText;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999)
    document.execCommand('copy');   
    document.body.removeChild(textarea);
    copyDiscountCoupon.textContent = 'copied!';
    setTimeout(()=>{
        copyDiscountCoupon.textContent = discountText;

    }, 900);
 })
 let itemList = [] ;
 function AddItem(item,price){
    itemList.push(item);
    renderList() ;
 }
 
 function renderList(){
    let output = document.getElementById('cart-item')
    output.innerHTML= '' ;
    itemList.forEach((item,index)  =>{
output.innerHTML += ` <div>
${index + 1} . <sapn> ${item}</sapn>
</div>`
    })
 }