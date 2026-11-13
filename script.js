// count vowels function
function checkVowels(){
    // get content
    const text = document.getElementById("inputText").value.toLowerCase();
    let vowelCount = 0;

    for(let x = 0; x < text.length; x++){
        let char = text.charAt(x);
        if(isVowel(char)){
            vowelCount++;
        }
    }

    const result = document.getElementById("result");
    result.textContent = "Total Vowels: "+vowelCount;
}

// check for vowel
function isVowel(char){
    const vowels = ["a", "e","i","o","u"];
    return vowels.includes(char);
}