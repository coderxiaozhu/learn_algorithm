var canConstruct = function(ransomNote, magazine) {
    let res = new Array(26).fill(0);
    let base = 'a'.charCodeAt();
    for(const s of magazine) {
        res[s.charCodeAt() - base]++;
    }
    for(const k of ransomNote) {
        const index = k.charCodeAt() - base;
        if(!res[index]) return false;
        res[index]--;
    }
    return true;
};