"use strict";

module.exports = {
    /**
     * Convert a float number to k-metric number
     * @param {number} number - The number to be converted
     * @return {string} The k-metric string of the number
     */
    convertTo: number => {
        if (number < 1000) return number.toString();
        
        let numberConverted = "",
            times = 0,
            aux = Math.trunc(number / 1000); // Adjusted to divide by 1000 instead of 100
        
        while (aux >= 1) { // Adjusted condition to check if aux is greater than or equal to 1
            aux /= 1000;
            times++;
        }
        
        numberConverted = `${aux}k`; // Adjusted to append "k" directly to aux
        
        for (let i = 0; i < times - 1; i++) { // Adjusted loop to run times - 1 times
            numberConverted += "k";
        }
        
        return numberConverted;
    },
    
    /**
     * Convert a k-metric string number to a float number
     * @param {string} str - The k-metric string to be converted
     * @return {number} The float number converted
     */
    convertFrom: str => {
        let aux = parseFloat(str.toLowerCase().replace("k", ""));
        
        const kCount = (str.match(/k/g) || []).length; // Count occurrences of "k"
        aux *= 1000 ** kCount; // Adjust number by multiplying by 1000 to the power of kCount
        
        return aux;
    }
};
