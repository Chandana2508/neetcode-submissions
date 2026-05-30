class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }
        let a = s.split('').sort().join('');
        let b = t.split('').sort().join('');
        return a==b;
    }

}

function getTotal(s){
        let sum = 0;
        for(let i=0; i<s.length; i++){
            sum = sum + s.charCodeAt(i);
        }
        return sum;
    }
