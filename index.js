// let input=document.querySelector('input')

// let getvalue=(e)=>{
//     let btnval=e.target.innerText
//     input.value+=btnval

// }

// let result=()=>{
//     input.value=eval(input.value)
// }

// let empty=()=>{
//     input.value=''
// }


let input=document.querySelector('input')

let getvalue=e=>{input.value+=e.target.innerText}

let result=_=>{input.value=eval(input.value)}

let empty=_=>{input.value=''}