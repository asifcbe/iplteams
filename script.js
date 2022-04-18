var teamlist=[{id:0,
    name:"Chennai Super Kings",
    homegr:"MA Chidambaram Stadium",
    city:"Chennai",
    captain:"Ravindra Jadeja",
    logo:"https://www.timesofsports.com/wp-content/uploads/2021/12/CSK-Logo.png"

},
{ id:1,name:"Delhi Capitals",
    homegr:"Arun Jaitley Stadium",
    city:"Delhi",
    captain:"Rishabh Pant",
    logo:"https://www.timesofsports.com/wp-content/uploads/2021/12/Delhi-Capitals-Logo.png"
},
    { id:2,
        name:"Gujarat Titans",
        homegr:"Narendra Modi Stadium",
        city:"Ahmedabad",
        captain:"Hardik Pandya",logo:"https://www.timesofsports.com/wp-content/uploads/2022/02/Gujarat-Titans-Logo.png"},
        { id:3,
            name:"Kolkata Knight Riders",
            homegr:"Eden Gardens",
            city:"	Kolkata",
            captain:"	Shreyas Iyer",logo:"https://www.timesofsports.com/wp-content/uploads/2021/12/KKR-Logo.png"},
            { id:4,
                name:"Lucknow Super Giants",
                homegr:"Bharat Ekana Stadium",
                city:"Lucknow",
                captain:"KL Rahul",logo:"https://www.timesofsports.com/wp-content/uploads/2022/01/Lucnow-Supergiants-IPL-Logo.png"},
                { id:5,
                    name:"Mumbai Indians",
                    homegr:"Wankhede Stadium",
                    city:"Mumbai",
                    captain:"Rohit Sharma",logo:"https://www.timesofsports.com/wp-content/uploads/2021/12/Mumbai-Indians-logo.png"},
                    { id:6,
                        name:"Punjab Kings",
                        homegr:"PCA Stadium",
                        city:"Mohali",
                        captain:"Mayank Agarwal",logo:"https://www.timesofsports.com/wp-content/uploads/2021/12/Punjab-Kings.png"},
                        { id:7,
                            name:"Rajasthan Royals",
                            homegr:"Sawai Man Singh Stadium",
                            city:"Jaipur",
                            captain:"Sanju Samson",logo:"data:image/png;base64,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"},
                            { id:8,
                                name:"Royal Challengers ",
                                homegr:"Chinnaswamy Stadium",
                                city:"Bengaluru",
                                captain:"Faf du Plessis",logo:"https://www.timesofsports.com/wp-content/uploads/2021/12/Royal-Challengers-Bangalore-Logo.png"},
                                { id:9,
                                    name:"Sunrisers Hyderabad",
                                    homegr:"Rajiv Gandhi International Stadium",
                                    city:"Hyderabad",
                                    captain:"Kane Williamson",logo:"https://www.timesofsports.com/wp-content/uploads/2022/01/SRH-team-logo.png"}];










// autoplay of images
var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 2000); // Change image every 2 seconds
} 
// autoplay ends







                                    // $(".ipllogo").click(function(){
                                    //     console.log(teamlist[5].name);
                                    // });
                       
                                    


    let teamHTML="";

   for(var i=0; i<teamlist.length; i++){

                          teamHTML += `
                          <div id="teamscard">
                          <a href="./teamplayers.html?id=${teamlist[i].id}">
                   
                          <div id="image">
                          <img src="${teamlist[i].logo}" id="imageipl" alt="">
                          </div>
                          <div id="teamtitle">
                          <h2>${teamlist[i].name}</h2>
                          <p>Captain:- ${teamlist[i].captain}</p>
                          <p>Home Ground:- ${teamlist[i].homegr}</p>
                          <p>City:- ${teamlist[i].city}</p>
                          </div>
                          </a>
             
                      </div>`;
                      
                  }
  
                  $("#teams").append(teamHTML);


                  $("#teamscard").click(function(){
                    
                  });

                  for(i=0;i<teamlist.length;i++){
                      console.log(teamlist[i].name+i);
                  }