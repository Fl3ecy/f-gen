var NumberOfWords = 13
var words = new BuildArray(NumberOfWords) 

// Use the following variables to 
// define your random words:
words[1] = "https://tii.ai/NordvpnAccount"
words[2] = "https://tii.ai/NordvpnAccount1"
words[3] = "https://tii.ai/NordvpnAccount2"
words[4] = "https://tii.ai/NordvpnAccount3"
words[5] = "https://tii.ai/NordvpnAccount4"
words[6] = "https://tii.ai/NordvpnAccount5"
words[7] = "https://tii.ai/NordvpnAccount6"
words[8] = "https://tii.ai/NordvpnAccount7"
words[9] = "https://tii.ai/NordvpnAccount8"
words[10] = "https://tii.ai/NordvpnAccount9"
words[11] = "https://tii.ai/NordvpnAccount10"
words[12] = "https://tii.ai/NordvpnAccount11"
words[13] = "https://tii.ai/NordvpnAccount12"


==


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}