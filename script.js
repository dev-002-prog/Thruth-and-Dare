const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id");
      console.log("userchoice is",userchoice);
      playgame(userchoice);
    });
});

const playgame=(userchoice)=>{
    if(userchoice=="truth"){
        gentruth();
    }   
    else{
        gendare();
    }
}

const gendare=()=>{
    let number=Math.floor(Math.random()*6);
        switch(number){
            case 1:
                msg.innerText="Send your ex-friend a message saying you miss them.";
                console.log("dare");
                break;
    
             case 2:
                msg.innerText="Pass your phone to the person on your left and let them post a status to your Facebook.";
                console.log("dare");
                break;  
    
            case 3:
                msg.innerText=" Drop an ice cube in your pants.";
                console.log("dare");
                break;  
    
            case 4:
                msg.innerText="Show your search history on your phone.";
                console.log("dare");
                break;  
    
            case 5:
                msg.innerText="Let another person post a status on your behalf.";
                console.log("dare");
                break;  
                            
        }
     }

 const gentruth=()=>{
         let randomno=Math.floor(Math.random()*6);
         switch(randomno){
             case 1:
                 msg.innerText="tell your secret that nobody knows";
                 console.log("truth");
                 break;  
              case 2:
                 msg.innerText="What's your biggest fear?";
                 console.log("truth");
                 break;    
             case 3:
                 msg.innerText="Who's the last person you searched on Instagram?";
                 console.log("truth");
                 break;    
             case 4:
                 msg.innerText="Who was your first celebrity crush?";
                 console.log("truth");
                 break;    
             case 5:
                 msg.innerText="Have you ever been caught doing something wrong? If so, tell the story?";
                 console.log("truth");
                 break;  
         }
     }
 

