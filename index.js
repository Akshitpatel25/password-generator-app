 // Get the range input element
 let rangeInput = document.querySelector('.rangee');

 // Get the paragraph element to display the selected value
 let spann = document.querySelector('.spann');

 // Add an event listener to the range input to detect changes
 rangeInput.addEventListener('input', function() {
   // Access and display the selected value
   spann.innerHTML = rangeInput.value;
 });


// to check checked button are clicked or not
let upperr = document.querySelector(".upperr");
let lowerr = document.querySelector(".lowerr");
let numberr = document.querySelector(".num");
let symboll = document.querySelector(".sym");
let upperrr = false;
let lowerrr = false;
let numberrr = false;
let symbolll = false;
upperr.addEventListener("click", function(){
  if(upperr.checked){
    upperrr=true;
    document.querySelector(".option").style.borderColor = "#363131";
  }else {
    upperrr=false;
  }
});

lowerr.addEventListener("click", function(){
  if(lowerr.checked){
    lowerrr=true;
    document.querySelector(".option").style.borderColor = "#363131";
  }else {
    lowerrr=false;
  }
});

numberr.addEventListener("click", function(){
  if(numberr.checked){
    numberrr=true;
    document.querySelector(".option").style.borderColor = "#363131";
  }else {
    numberrr=false;
  }
});

symboll.addEventListener("click", function(){
  if(symboll.checked){
    symbolll=true;
    document.querySelector(".option").style.borderColor = "#363131";
  }else {
    symbolll=false;
  }
});



function generate() { 
 document.getelementbyid("copyimg").style.visibility: visible;
  if(upperrr == true || lowerrr == true || numberrr == true || symbolll == true) {
    // alert("okay");
    // document.querySelector(".option").style.borderColor = "yellow";
  }else {
    document.querySelector(".option").style.borderColor = "red";
  }

  // if only upper option is clicked
  if(upperrr == true){
    function generateRandomAlphabets(length) {
      const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let randomAlphabets = '';
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphabets.length);
        randomAlphabets += alphabets.charAt(randomIndex);
      }
    
      return randomAlphabets;
    }
    
    const result = generateRandomAlphabets(rangeInput.value);
    document.querySelector(".str_meter").innerText = "LOW";
    document.querySelector(".box1").style.backgroundColor = "#ffcc00";
    document.querySelector(".box2").style.backgroundColor = "black";
    document.querySelector(".box3").style.backgroundColor = "black";
    document.querySelector(".box4").style.backgroundColor = "black";
    document.querySelector(".text_generate").style.opacity = "1";
    document.querySelector(".text_generate").innerText = result;
  }

  // if only lower option is clicked
  if(lowerrr == true){
    function generateRandomLowercaseAlphabets(length) {
      const alphabets = 'abcdefghijklmnopqrstuvwxyz';
      let randomAlphabets = '';
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphabets.length);
        randomAlphabets += alphabets.charAt(randomIndex);
      }
    
      return randomAlphabets;
    }
    
    const result = generateRandomLowercaseAlphabets(rangeInput.value);
    
    document.querySelector(".str_meter").innerText = "LOW";
    document.querySelector(".box1").style.backgroundColor = "#ffcc00";
    document.querySelector(".box2").style.backgroundColor = "black";
    document.querySelector(".box3").style.backgroundColor = "black";
    document.querySelector(".box4").style.backgroundColor = "black";
    document.querySelector(".text_generate").style.opacity = "1";
    document.querySelector(".text_generate").innerText = result;
  }

  // if only number option is clicked
  if(numberrr == true){
    function generateRandomNumbers(length) {
      const randomNumbers = [];
    
      for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random()*10); // generates a random number between 0 and 9
        randomNumbers.push(randomNumber);
      }
    
      return randomNumbers;
    }
    
    const result = generateRandomNumbers(rangeInput.value).join('');
    
    document.querySelector(".str_meter").innerText = "LOW";
    document.querySelector(".box1").style.backgroundColor = "#ffcc00";
    document.querySelector(".box2").style.backgroundColor = "black";
    document.querySelector(".box3").style.backgroundColor = "black";
    document.querySelector(".box4").style.backgroundColor = "black";
    document.querySelector(".text_generate").style.opacity = "1";
    document.querySelector(".text_generate").innerText = result;
  }

  // if only symbol option is clicked
  if(symbolll == true){
    function generateRandomSymbols(length) {
      const symbols = ['!', '@', '#', '$', '%', '^', '&', '*']; // Add more symbols as needed
      const randomSymbols = [];
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        randomSymbols.push(symbols[randomIndex]);
      }
    
      return randomSymbols;
    }
    
    const result = generateRandomSymbols(rangeInput.value).join('');
    
    document.querySelector(".str_meter").innerText = "LOW";
    document.querySelector(".box1").style.backgroundColor = "#ffcc00";
    document.querySelector(".box2").style.backgroundColor = "black";
    document.querySelector(".box3").style.backgroundColor = "black";
    document.querySelector(".box4").style.backgroundColor = "black";
    document.querySelector(".text_generate").style.opacity = "1";
    document.querySelector(".text_generate").innerText = result;
  }
  

  // if upper symbol option is selected
  if(upperrr == true && symbolll == true) {
    // alert("okay");
    function generateRandomPassword() {
      const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      // const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
      // const numbers = '0123456789';
      const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
      let password = '';
    
      // Add one character from each category
      password += getRandomCharacter(uppercaseLetters);
      // password += getRandomCharacter(lowercaseLetters);
      // password += getRandomCharacter(numbers);
      password += getRandomCharacter(symbols);
    
      // Add remaining characters randomly
      for (let i = password.length; i < rangeInput.value; i++) {
        const allCharacters = uppercaseLetters + symbols;
        password += getRandomCharacter(allCharacters);
      }
    
      return password;
    }
    
    function getRandomCharacter(characterSet) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      return characterSet.charAt(randomIndex);
    }
    
    const result = generateRandomPassword();
    
    document.querySelector(".str_meter").innerText = "high";
    document.querySelector(".box1").style.backgroundColor = "#ffcc00";
    document.querySelector(".box2").style.backgroundColor = "#ffcc00";
    document.querySelector(".box3").style.backgroundColor = "black";
    document.querySelector(".box4").style.backgroundColor = "black";
    document.querySelector(".text_generate").style.opacity = "1";
    document.querySelector(".text_generate").innerText = result;
  }

  // if all first three option is selected
  if(upperrr == true && lowerrr == true && numberrr == true) {
    // alert("okay");
    function generateRandomPassword() {
      const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';
      // const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
      let password = '';
    
      // Add one character from each category
      password += getRandomCharacter(uppercaseLetters);
      password += getRandomCharacter(lowercaseLetters);
      password += getRandomCharacter(numbers);
      // password += getRandomCharacter(symbols);
    
      // Add remaining characters randomly
      for (let i = password.length; i < rangeInput.value; i++) {
        const allCharacters = uppercaseLetters + lowercaseLetters + numbers;
        password += getRandomCharacter(allCharacters);
      }
    
      return password;
    }
    
    function getRandomCharacter(characterSet) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      return characterSet.charAt(randomIndex);
    }
    
    const result = generateRandomPassword();
    
    document.querySelector(".str_meter").innerText = "HIGH";
    document.querySelector(".box1").style.backgroundColor = "#ffcc00";
    document.querySelector(".box2").style.backgroundColor = "#ffcc00";
    document.querySelector(".box3").style.backgroundColor = "#ffcc00";
    document.querySelector(".box4").style.backgroundColor = "#BLACK";
    document.querySelector(".text_generate").style.opacity = "1";
    document.querySelector(".text_generate").innerText = result;
  }

  // if Number option is not selected
  if(upperrr == true && lowerrr == true && symbolll == true) {
    // alert("okay");
    function generateRandomPassword() {
      const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
      // const numbers = '0123456789';
      const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
      let password = '';
    
      // Add one character from each category
      password += getRandomCharacter(uppercaseLetters);
      password += getRandomCharacter(lowercaseLetters);
      // password += getRandomCharacter(numbers);
      password += getRandomCharacter(symbols);
    
      // Add remaining characters randomly
      for (let i = password.length; i < rangeInput.value; i++) {
        const allCharacters = uppercaseLetters + lowercaseLetters + symbols;
        password += getRandomCharacter(allCharacters);
      }
    
      return password;
    }
    
    function getRandomCharacter(characterSet) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      return characterSet.charAt(randomIndex);
    }
    
    const result = generateRandomPassword();
    
    document.querySelector(".str_meter").innerText = "HIGH";
    document.querySelector(".box1").style.backgroundColor = "#ffcc00";
    document.querySelector(".box2").style.backgroundColor = "#ffcc00";
    document.querySelector(".box3").style.backgroundColor = "#ffcc00";
    document.querySelector(".box4").style.backgroundColor = "BLACK";
    document.querySelector(".text_generate").style.opacity = "1";
    document.querySelector(".text_generate").innerText = result;
  }

  // if upper number symbol is selected
  if(upperrr == true && numberrr == true && symbolll == true) {
    // alert("okay");
    function generateRandomPassword() {
      const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      // const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';
      const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
      let password = '';
    
      // Add one character from each category
      password += getRandomCharacter(uppercaseLetters);
      // password += getRandomCharacter(lowercaseLetters);
      password += getRandomCharacter(numbers);
      password += getRandomCharacter(symbols);
    
      // Add remaining characters randomly
      for (let i = password.length; i < rangeInput.value; i++) {
        const allCharacters = uppercaseLetters + numbers + symbols;
        password += getRandomCharacter(allCharacters);
      }
    
      return password;
    }
    
    function getRandomCharacter(characterSet) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      return characterSet.charAt(randomIndex);
    }
    
    const result = generateRandomPassword();
    
    document.querySelector(".str_meter").innerText = "HIGH";
    document.querySelector(".box1").style.backgroundColor = "#ffcc00";
    document.querySelector(".box2").style.backgroundColor = "#ffcc00";
    document.querySelector(".box3").style.backgroundColor = "#ffcc00";
    document.querySelector(".box4").style.backgroundColor = "#Black";
    document.querySelector(".text_generate").style.opacity = "1";
    document.querySelector(".text_generate").innerText = result;
  }

  // if number symbol is selected
  if(numberrr == true && symbolll == true) {
    // alert("okay");
    function generateRandomPassword() {
      // const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      // const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';
      const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
      let password = '';
    
      // Add one character from each category
      // password += getRandomCharacter(uppercaseLetters);
      // password += getRandomCharacter(lowercaseLetters);
      password += getRandomCharacter(numbers);
      password += getRandomCharacter(symbols);
    
      // Add remaining characters randomly
      for (let i = password.length; i < rangeInput.value; i++) {
        const allCharacters =  numbers + symbols;
        password += getRandomCharacter(allCharacters);
      }
    
      return password;
    }
    
    function getRandomCharacter(characterSet) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      return characterSet.charAt(randomIndex);
    }
    
    const result = generateRandomPassword();
    
    document.querySelector(".str_meter").innerText = "MEDIUM";
    document.querySelector(".box1").style.backgroundColor = "#ffcc00";
    document.querySelector(".box2").style.backgroundColor = "#ffcc00";
    document.querySelector(".box3").style.backgroundColor = "#Black";
    document.querySelector(".box4").style.backgroundColor = "#Black";
    document.querySelector(".text_generate").style.opacity = "1";
    document.querySelector(".text_generate").innerText = result;
  }

  
  // if all four option is selected
  if(upperrr == true && lowerrr == true && numberrr == true && symbolll == true) {
    // alert("okay");
    function generateRandomPassword() {
      const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';
      const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
      let password = '';
    
      // Add one character from each category
      password += getRandomCharacter(uppercaseLetters);
      password += getRandomCharacter(lowercaseLetters);
      password += getRandomCharacter(numbers);
      password += getRandomCharacter(symbols);
    
      // Add remaining characters randomly
      for (let i = password.length; i < rangeInput.value; i++) {
        const allCharacters = uppercaseLetters + lowercaseLetters + numbers + symbols;
        password += getRandomCharacter(allCharacters);
      }
    
      return password;
    }
    
    function getRandomCharacter(characterSet) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      return characterSet.charAt(randomIndex);
    }
    
    const result = generateRandomPassword();
    
    document.querySelector(".str_meter").innerText = "STRONG";
    document.querySelector(".box1").style.backgroundColor = "#ffcc00";
    document.querySelector(".box2").style.backgroundColor = "#ffcc00";
    document.querySelector(".box3").style.backgroundColor = "#ffcc00";
    document.querySelector(".box4").style.backgroundColor = "#ffcc00";
    document.querySelector(".text_generate").style.opacity = "1";
    document.querySelector(".text_generate").innerText = result;
  }
}

function copyToClipboard() {
  const textToCopy = document.querySelector('.text_generate').innerText;

  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  document.execCommand('copy');

  document.body.removeChild(tempInput);

  // Show the copy message
  const copyMessage = document.getElementById('copyMessage');
  copyMessage.style.display = 'block';

  // Hide the message after 2 seconds
  setTimeout(() => {
    copyMessage.style.display = 'none';
  }, 500);
}



