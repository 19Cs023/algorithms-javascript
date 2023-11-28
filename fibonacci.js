function getNthFib(n){
    if (n<=1){
        return n;
    }
    var sum=0,
        last=1,
        lastlast=0;

        for (i=1;i<n;i++){
            sum=lastlast+last;
            lastlast=last;
            last=sum;
        }
        return sum;
}
console.log(getNthFib(12));