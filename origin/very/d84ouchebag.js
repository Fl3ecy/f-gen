var NumberOfWords = 20  
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://link-to.net/127891/OriginAccount" 
words[2] = "https://link-to.net/127891/OriginAccount2" 
words[3] = "https://link-to.net/127891/OriginAccount3" 
words[4] = "https://link-to.net/127891/OriginAccount4" 
words[5] = "https://link-to.net/127891/OriginAccount5" 
words[6] = "https://link-to.net/127891/OriginAccount6" 
words[7] = "https://link-to.net/127891/OriginAccount7" 
words[8] = "https://link-to.net/127891/OriginAccount8" 
words[9] = "https://link-to.net/127891/OriginAccount9" 
words[10] = "https://link-to.net/127891/OriginAccount10" 
words[11] = "https://link-to.net/127891/OriginAccount11" 
words[12] = "https://link-to.net/127891/OriginAccount12" 
words[13] = "https://link-to.net/127891/OriginAccount13" 
words[14] = "https://direct-link.net/127891/OriginAccount14" 
words[15] = "https://file-link.net/127891/OriginAccount15" 
words[16] = "https://file-link.net/127891/OriginAccount15" 
words[17] = "https://file-link.net/127891/OriginAccount17" 
words[18] = "https://link-to.net/127891/OriginAccount18" 
words[19] = "https://file-link.net/127891/OriginAccount20" 
words[20] = "https://file-link.net/127891/OriginAccount20" 
 
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