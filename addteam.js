var team=[]

$("#addteam").click(function(){
 var tname=prompt("enter team name");
 var tcity=prompt("enter team city");
 var thomegr=prompt("enter homeground");
 var captain=prompt("enter captain");
 addteam(tname,tcity,thomegr,captain);





})

    

function addteam(a,b,c,d){
    let teamHTML="";

   teamHTML = `
                   

                   
                   <div id="teamtitle">
                   <div id="image">
                   <img src="https://cdn2.vectorstock.com/i/1000x1000/95/36/india-cricket-player-batsman-batting-cartoon-vector-2219536.jpg" id="imageipl" alt="">
                   </div>

                     <h2>TEAM NAME:-${a}</h2>
                 <p>TEAM CITY:- ${b}</p>
                     <p>HOME GROUND:- ${c}</p>
                     <p>Captain:- ${d}</p>
                      </div>`;
                      
                
  
                  $("#teamdisp").append(teamHTML);
                
    
                var arr=[[a,b,c,d]]
                
        
                  localStorage.setItem("team",arr);
    
    
                  alert("team created");

}