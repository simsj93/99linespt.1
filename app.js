var friends = ['Jake', 'Winnie', 'Cebastian', 'Caleb', 'Tyler']


 for (let i=0; i < friends.length; i++) {
     console.log(friends[i] + ":")
     for (let l = 99; l > 0; l--) {
         if (l == 1) {
             console.log(l + " line of code in the file " + l + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
         }
         else {
            if (l == 2) {
                console.log(l + " lines of code in the file " + l + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (l - 1) +  " more line of code in the file");
            }
            else {
                console.log(l + " lines of code in the file " + l + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (l - 1) +  " more lines of code in the file");
            }
            }
 }
}