//when user submits add on screen


let submit=document.getElementById("submit")


 submit.onclick= function addToStorage(e){
    e.preventDefault();

    const name= document.getElementById("fname").value
    const phone= document.getElementById("fphone").value
    const email= document.getElementById("femail").value
    const date=document.getElementById("timeforcall").value

    const obj={
        name,
        phone,
        email,
        date
    }
    axios.post("https://crudcrud.com/api/778cdcf56c264e1b93d8c0f2bd029e3a/appointmentData",obj)
      .then((res)=>{
         displayUser(res.data);
         console.log(res);
      })
      .catch(err=>console.log(err))

   //  localStorage.setItem(obj.email,JSON.stringify(obj))

   //  

 }

 window.addEventListener('DOMContentLoaded',()=>{
   //  const localStorageObj= localStorage;
   //  const storageKeys=Object.keys(localStorageObj)
   //  // console.log(storageKeys);


   axios.get("https://crudcrud.com/api/778cdcf56c264e1b93d8c0f2bd029e3a/appointmentData")
      .then((response)=>{
         console.log(response)
         response.data.forEach(res=>{
            
            displayUser(res);
         })
      }) 
       
   
      .catch(err=>{
         // document.getElementsByClassName("list").innerHTML=`<h4>${err}</h4>`
         console.log(err)
      })

   //  storageKeys.forEach(key=>{
   //      const userDetailString= localStorageObj[key];
   //      const userDetailObj=JSON.parse(userDetailString);
   //      displayUser(userDetailObj)

   //  });
 })

function displayUser(user){
    document.getElementById("fname").value=''
    document.getElementById("fphone").value=''
    document.getElementById("femail").value=''
    document.getElementById("timeforcall").value=''

    // console.log(localStorage.getItem(user.email))

   //  if(localStorage.getItem(user.email)!==null){
   //      removeUser(user.email)
   //  }

 const parentNode=document.getElementById("list-parent")
  const childHTML=`<li id="${user.email}">${user.name} -${user.email}- ${user.phone} -${user.date} 
                  
                    <button onclick=editUser('${user.email}','${user.name}','${user.phone}','${user.date}','${user._id}')>Edit</button>
                    <button onclick=delUser('${user.email}','${user._id}') >X</button>

                    </li>`
  if(parentNode.innerHTML){
   parentNode.innerHTML +=childHTML;
  }



 }


 function editUser(emailId,name,phone,date,Id){
    document.getElementById("fname").value=name
    document.getElementById("fphone").value=phone
    document.getElementById("femail").value=emailId
    document.getElementById("timeforcall").value=date

    delUser(emailId,Id)
   // document.getElementById(emailId).remove();
   // localStorage.removeItem(emailId);



 }


function delUser(emailId,Id){

   
   document.getElementById(emailId).remove();
   axios.delete(`https://crudcrud.com/api/778cdcf56c264e1b93d8c0f2bd029e3a/appointmentData/${Id}`)
  
  // localStorage.removeItem(emailId);

}

