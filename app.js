
const friend = "BRUTUS";
const shiftValue = 3;


// ========================
// ======== STEP 1 ========
// ========================

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// ========================
// ======== STEP 2 ========
// ========================

let encryptedName = "";

for (let i = 0; i < friend.length; i++) {
    const currentLetter = friend[i];
    const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
    const newIndex = (shiftValue + currentIndex) % alphabet.length;

    encryptedName += alphabet[newIndex].toUpperCase();
}

console.log(encryptedName);

// ========================
// ===== QUESTION 1 =======
// ========================

// It provides us the automation to process each letter of the name without writing excessive(redundant) code.

// ========================
// ===== QUESTION 2 =======
// ========================

// The modulus operator wraps around the length of 'alphabet' guaranteeing continuous encryption.