const vowels = document.querySelector("#vowels");
const textArea = document.querySelector(".textArea textarea");

let vowel = 0;

let keypressFun = event => {

    let key = event.key;

    switch(key){

        case 'a':
            ++vowel; break;

        case 'e':
            ++vowel; break;

        case 'i':
            ++vowel; break;

        case 'o':
            ++vowel; break;
        
        case 'u':
            ++vowel; break;
        
        case 'A':
            ++vowel; break;

        case 'E':
            ++vowel; break;

        case 'I':
            ++vowel; break;

        case 'O':
            ++vowel; break;
        
        case 'U':
            ++vowel; break;
    }

    if(key == "Backspace"){
        if(textArea.value == ""){
            //
        }
        else{
           if(vowel <= 0){
               //
           }
           else{
                let str = textArea.value + "";

                if((str.charAt(str.length-1) == 'a')  || (str.charAt(str.length-1) == 'A')){
                    --vowel;
                }
                else if((str.charAt(str.length-1) == 'e') || (str.charAt(str.length-1) == 'E')){
                    --vowel;
                }

                else if((str.charAt(str.length-1) == 'i') || (str.charAt(str.length-1) == 'I')){
                    --vowel;
                }

                else if((str.charAt(str.length-1) == 'o') || (str.charAt(str.length-1) == 'O')){
                    --vowel;
                }

                else if((str.charAt(str.length-1) == 'u') || (str.charAt(str.length-1) == 'U')){
                    --vowel;
                }
              
                else{
                    //
                }
            }
        }
    }

    vowels.innerHTML = vowel;
}




