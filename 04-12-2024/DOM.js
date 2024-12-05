uplet paragraph=document.getElementById('para-1')
paragraph.innerText="This is a paragraph"

let para=document.getElementsByTagName('p')[0]
para.innerText="This is a new paragraph"

let doc = document.getElementById('para-2')
doc.innerHTML="<h1>This is a main heading</h1>"
doc.style.color='blue'
para.style.color='red'
para.style.textAlign='center'

function onClick(){
    let button=document.getElementById('btn')
    button.style.color='red'
}

function mouseOver(){
    let heading=document.getElementById('head-2')
    heading.style.color='green'
}


