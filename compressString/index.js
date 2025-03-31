function compressString(s) {
    let result = "";
    let n = s.length;
    
    for (let i = 0; i < n; i++) {
        let c = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                c++;
            } else {
                break;
            }
        }
        result += s[i] + c;
        i += c - 1;
    }
    
    console.log(result);
}


compressString("aaabbaaaccbbb");
