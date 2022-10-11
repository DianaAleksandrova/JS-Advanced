function numbers(n, k){
        let result = [1];
    
        for (let i = 1; i < n; i++) {
            
            let start = i - k < 0 ? 0 : i - k;
            result.push(result.slice(start).reduce((acc, num) => acc + num));
        }
        return result;
    }

console.log(numbers(6, 3));