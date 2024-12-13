//connect words in an array into an single string 
let word=["apple","orange","grape"];
function connectWords(){
  let result="";
  for (var i = 0; i < word.length; i++) {
    result+=word[i];
  }
  console.log(result)
}
connectWords();

