document.getElementById("discount-coupon").addEventListener("keyup", function(event){
    const coupon = event.target.value;
    const deleteButton = document.getElementById("btn-discount");
    if(coupon === "DOM"){
        deleteButton.addEventListener("click", function(){
            const amount = document.getElementById("amount");
            const amountValueString = amount.value;
            const amountValue = parseFloat(amountValueString)
            const newPrice = amountValue - ((amountValue * 30) / 100);
            const amountShow = document.getElementById("discount-show");
            amountShow.innerText = newPrice;
        })
    } else{
        deleteButton.addEventListener("click", function () {
            const amount = document.getElementById("amount");
            const amountValueString = amount.value;
            const amountValue = parseFloat(amountValueString)
            const amountShow = document.getElementById("discount-show");
            amountShow.innerText = amountValue;
        })
    }
})