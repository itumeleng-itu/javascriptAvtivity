function bonAppetit(bill, k, b) {

    let totalCost = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) { 
            totalCost += bill[i];
        }
    }

    let annaShare = totalCost / 2;

    if (b === annaShare) {
        console.log("Bon Appetit"); 
    } else {
        console.log(b - annaShare); 
    }
}