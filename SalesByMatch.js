function sockMerchant(n, ar) {
ar.sort((a, b) => a - b); 

    let pairs = 0;
    let i = 0;

    while (i < n - 1) {
        if (ar[i] === ar[i + 1]) {
            pairs++;
            i += 2;
        } else {
            i++;
        }
    }

    return pairs;
}