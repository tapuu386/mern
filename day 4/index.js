// 
// let arr=[1,2,3,4];
// // arr[1]=20;
// arr.push[10];
// console.log(arr);
// const arr=[1,2,3,4];
// arr[2]=4;
// console.log(arr);
// const obj = {
//     "name": "Ajay",
//     "lastName":"Singh"
// }
// const arr=[1,2,3,4];
// // arr[2]=4;
// console.log(Array.isArray(obj));
// console.log(Array.isArray(arr));
// function isobject(x){
//     if(Array.isArray(x)){
//         console.log("not object");
//     }
//     else{
//     console.log("object");
// }
// }   isobject(1);
// for loop
 
// for(let i of arr){
//     console.log(i);
// }
// for(let i in arrr )
//DOM

// console.log(window);
// console.log(window.innerHeight)
// console.log(window.innerWidth)
// 
// const res=
// document.getElementsByTagName('h4')
// console.log(res)
// const res  =document.getElementById('ht1')
// console.dir(res)
// 
// const res=document.getElementById("ht1")
// res.innerText="hello worrld+"
// console.log(res)
// 

// const ne=document.createElement("h3")
// console.log(ne)
// ne.innerText="dynamic text";
// // document.body.appendChild(ne)
// const div=document.getElementsByTagName("div")
// // div[0].appendChild(ne);
// ne.removeChild("h3")

// function getinfo(){
//     console.log("btn clicked");
//     const p=document.querySelector('div');
//   const ele =document.createElement('p')
//   Element.innerText="hello this is my work"
//   div
// }
// const firstNameChange=(e)=>{
//   console.log(e)=>{
//     const value=e.target.value;
//   }
//   const value=e.
// }
const submitform=(e)=>{
  e.preventDefault();
  const t=e.target;
  const res={};
  for(let i=0;i<=t.length;i++){
    const ty=t[i].type;
    const vt=t[i].value;
    console.log(ty,vt);
    if(ty=='checkbox'){
      console.log((t[i]).checked)
    }
    if(ty!='submit'){

    }
  }
   console.log(res);
  // document.write('tapasya');
}