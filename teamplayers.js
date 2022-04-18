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


// var players=[[{
//     name:"",photo:"",team:"",price:"",playing_status:"",role:""
// }]]

var players=[];
for(var i=0;i<10;i++){
players[i]=[];
}
// playerdatastart
players[0][0]= {name:" Ruturaj Gaikwad (R) ",team:" CSK ",price:" ₹6 crore ",playing_status:" PLAYING ",role:" Batter "};
players[0][1]= {name:" MS Dhoni (R) ",team:" CSK ",price:" ₹12 crore ",playing_status:" PLAYING ",role:" Batter "};
players[0][2]= {name:" Hari Nishanth ",team:" CSK ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[0][3]= {name:" Subhranshu Senapati ",team:" CSK ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[0][4]= {name:" Devon Conway ",team:" CSK ",price:" ₹1 crore ",playing_status:" PLAYING ",role:" Batter "};
players[0][5]= {name:" Robin Uthappa ",team:" CSK ",price:" ₹2 crore ",playing_status:" PLAYING ",role:" Batter "};
players[0][6]= {name:" N Jagadeesan ",team:" CSK ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[0][7]= {name:" Ambati Rayudu ",team:" CSK ",price:" ₹6.75 crore",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[0][8]= {name:" Ravindra Jadeja (R) ",team:" CSK ",price:" ₹16 crore ",playing_status:" PLAYING ",role:" All-rounder "};
players[0][9]= {name:" Moeen Ali (R) ",team:" CSK ",price:" ₹8 crore ",playing_status:" PLAYING ",role:" All-rounder "};
players[1][0]= {name:" Prithvi Shaw (R) ",team:" DC ",price:" ₹7.5 crore ",playing_status:" PLAYING ",role:" Batter "};
players[1][1]= {name:" Sarfaraz Khan ",team:" DC ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[1][2]= {name:" Yash Dhull ",team:" DC ",price:" ₹50 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[1][3]= {name:" Rovman Powell ",team:" DC ",price:" ₹2.8 crore ",playing_status:" PLAYING ",role:" Batter "};
players[1][4]= {name:" Mandeep Singh ",team:" DC ",price:" ₹1.1 crore ",playing_status:" PLAYING ",role:" Batter "};
players[1][5]= {name:" Ashwin Hebbar ",team:" DC ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[1][6]= {name:" David Warner ",team:" DC ",price:" ₹6.25 crore",playing_status:" PLAYING ",role:" Batter "};
players[1][7]= {name:" Rishabh Pant (R) ",team:" DC ",price:" ₹16 crore ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[1][8]= {name:" Tim Seifert ",team:" DC ",price:" ₹50 lakh ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[1][9]= {name:" Srikar Bharat ",team:" DC ",price:" ₹2 crore ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[2][0]= {name:" Shubman Gill (D) ",team:" GT ",price:" ₹8 crore ",playing_status:" PLAYING ",role:" Batter "};
players[2][1]= {name:" Sai Sudharsan ",team:" GT ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[2][2]= {name:" David Miller ",team:" GT ",price:" ₹3 crore ",playing_status:" PLAYING ",role:" Batter "};
players[2][3]= {name:" Abhinav Manohar ",team:" GT ",price:" ₹2.6 crore ",playing_status:" PLAYING ",role:" Batter "};
players[2][4]= {name:" Jason Roy ",team:" GT ",price:" ₹2 crore ",playing_status:" PLAYING ",role:" Batter "};
players[2][5]= {name:" Matthew Wade ",team:" GT ",price:" ₹2.4 crore ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[2][6]= {name:" Wriddhiman Saha ",team:" GT ",price:" ₹1.9 crore ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[2][7]= {name:" Hardik Pandya (D) ",team:" GT ",price:" ₹15 crore ",playing_status:" PLAYING ",role:" All-rounder "};
players[2][8]= {name:" Vijay Shankar ",team:" GT ",price:" ₹1.4 crore ",playing_status:" PLAYING ",role:" All-rounder "};
players[2][9]= {name:" Gurkeerat Singh Mann ",team:" GT ",price:" ₹50 lakh ",playing_status:" PLAYING ",role:" All-rounder "};
players[3][0]= {name:" Ramesh Kumar ",team:" KKR ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[3][1]= {name:" Aman Hakim Khan ",team:" KKR ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[3][2]= {name:" Abhijeet Tomar ",team:" KKR ",price:" ₹40 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[3][3]= {name:" Pratham Singh ",team:" KKR ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[3][4]= {name:" Alex Hales ",team:" KKR ",price:" ₹1.5 crore ",playing_status:" PLAYING ",role:" Batter "};
players[3][5]= {name:" Baba Indrajith ",team:" KKR ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[3][6]= {name:" Rinku Singh ",team:" KKR ",price:" ₹55 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[3][7]= {name:" Ajinkya Rahane ",team:" KKR ",price:" ₹1 crore ",playing_status:" PLAYING ",role:" Batter "};
players[3][8]= {name:" Shreyas Iyer ",team:" KKR ",price:" ₹12.25 crore",playing_status:" PLAYING ",role:" Batter "};
players[3][9]= {name:" Sam Billings ",team:" KKR ",price:" ₹2 crore ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[4][0]= {name:" Evin Lewis ",team:" LSG ",price:" ₹2 crore ",playing_status:" PLAYING ",role:" Batter "};
players[4][1]= {name:" Manan Vohra ",team:" LSG ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[4][2]= {name:" Manish Pandey ",team:" LSG ",price:" ₹4.6 crore ",playing_status:" PLAYING ",role:" Batter "};
players[4][3]= {name:" KL Rahul (D) ",team:" LSG ",price:" ₹17 crore ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[4][4]= {name:" Quinton de Kock ",team:" LSG ",price:" ₹6.75 crore",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[4][5]= {name:" Marcus Stoinis (D) ",team:" LSG ",price:" ₹9.2 crore ",playing_status:" PLAYING ",role:" All-rounder "};
players[4][6]= {name:" Ayush Badoni ",team:" LSG ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" All-rounder "};
players[4][7]= {name:" Kyle Mayers ",team:" LSG ",price:" ₹50 lakh ",playing_status:" PLAYING ",role:" All-rounder "};
players[4][8]= {name:" Karan Sharma ",team:" LSG ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" All-rounder "};
players[4][9]= {name:" Krishnappa Gowtham ",team:" LSG ",price:" ₹90 lakh ",playing_status:" PLAYING ",role:" All-rounder "};
players[5][0]= {name:" Rohit Sharma (R) ",team:" MI ",price:" ₹16 crore ",playing_status:" PLAYING ",role:" Batter "};
players[5][1]= {name:" Suryakumar Yadav(R) ",team:" MI ",price:" ₹8 crore ",playing_status:" PLAYING ",role:" Batter "};
players[5][2]= {name:" Ramandeep Singh ",team:" MI ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[5][3]= {name:" Rahul Buddhi ",team:" MI ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[5][4]= {name:" Anmolpreet Singh ",team:" MI ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[5][5]= {name:" Tilak Varma ",team:" MI ",price:" ₹1.7 crore ",playing_status:" PLAYING ",role:" Batter "};
players[5][6]= {name:" Dewald Brevis ",team:" MI ",price:" ₹3 crore ",playing_status:" PLAYING ",role:" Batter "};
players[5][7]= {name:" Aryan Juyal ",team:" MI ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[5][8]= {name:" Ishan Kishan ",team:" MI ",price:" ₹15.25 crore",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[5][9]= {name:" Kieron Pollard (R) ",team:" MI ",price:" ₹6 crore ",playing_status:" PLAYING ",role:" All-rounder "};
players[6][0]= {name:" Mayank Agarwal (R) ",team:" PK ",price:" ₹12 crore ",playing_status:" PLAYING ",role:" Batter "};
players[6][1]= {name:" Prerak Mankad ",team:" PK ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[6][2]= {name:" Bhanuka Rajapaksa ",team:" PK ",price:" ₹50 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[6][3]= {name:" Shikhar Dhawan ",team:" PK ",price:" ₹8.25 crore",playing_status:" PLAYING ",role:" Batter "};
players[6][4]= {name:" Jitesh Sharma ",team:" PK ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[6][5]= {name:" Prabhsimran Singh ",team:" PK ",price:" ₹60 lakh ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[6][6]= {name:" Jonny Bairstow ",team:" PK ",price:" ₹6.75 crore",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[6][7]= {name:" Benny Howell ",team:" PK ",price:" ₹40 lakh ",playing_status:" PLAYING ",role:" All-rounder "};
players[6][8]= {name:" Atharva Taide ",team:" PK ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" All-rounder "};
players[6][9]= {name:" Baltej Singh ",team:" PK ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" All-rounder "};
players[7][0]= {name:" Yashasvi Jaiswal (R) ",team:" RR ",price:" ₹4 crore ",playing_status:" PLAYING ",role:" Batter "};
players[7][1]= {name:" Rassie van der Dussen ",team:" RR ",price:" ₹1 crore ",playing_status:" PLAYING ",role:" Batter "};
players[7][2]= {name:" Karun Nair ",team:" RR ",price:" ₹1.4 crore ",playing_status:" PLAYING ",role:" Batter "};
players[7][3]= {name:" Devdutt Padikkal ",team:" RR ",price:" ₹7.75 crore",playing_status:" PLAYING ",role:" Batter "};
players[7][4]= {name:" Shimron Hetmyer ",team:" RR ",price:" ₹8.5 crore ",playing_status:" PLAYING ",role:" Batter "};
players[7][5]= {name:" Sanju Samson (R) ",team:" RR ",price:" ₹14 crore ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[7][6]= {name:" Jos Buttler (R) ",team:" RR ",price:" ₹10 crore ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[7][7]= {name:" Dhruv Jurel ",team:" RR ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[7][8]= {name:" Daryl Mitchell ",team:" RR ",price:" ₹75 lakh ",playing_status:" PLAYING ",role:" All-rounder "};
players[7][9]= {name:" James Neesham ",team:" RR ",price:" ₹1.5 crore ",playing_status:" PLAYING ",role:" All-rounder "};
players[8][0]= {name:" Virat Kohli (R) ",team:" RCB ",price:" ₹15 crore ",playing_status:" PLAYING ",role:" Batter "};
players[8][1]= {name:" Suyash Prabhudessai ",team:" RCB ",price:" ₹30 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[8][2]= {name:" Faf du Plessis ",team:" RCB ",price:" ₹7 crore ",playing_status:" PLAYING ",role:" Batter "};
players[8][3]= {name:" Rajat Patidar ",team:" RCB ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[8][4]= {name:" Finn Allen ",team:" RCB ",price:" ₹80 lakh ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[8][5]= {name:" Anuj Rawat ",team:" RCB ",price:" ₹3.4 crore ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[8][6]= {name:" Dinesh Karthik ",team:" RCB ",price:" ₹5.5 crore ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[8][7]= {name:" Glenn Maxwell (R) ",team:" RCB ",price:" ₹11 crore ",playing_status:" PLAYING ",role:" All-rounder "};
players[8][8]= {name:" Sherfane Rutherford ",team:" RCB ",price:" ₹1 crore ",playing_status:" PLAYING ",role:" All-rounder "};
players[8][9]= {name:" Aneeshwar Gautam ",team:" RCB ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" All-rounder "};
players[9][0]= {name:" Kane Williamson (R) ",team:" SRH ",price:" ₹14 crore ",playing_status:" PLAYING ",role:" Batter "};
players[9][1]= {name:" Ravikumar Samarth ",team:" SRH ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[9][2]= {name:" Shashank Singh ",team:" SRH ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[9][3]= {name:" Aiden Markram ",team:" SRH ",price:" ₹2.6 crore ",playing_status:" PLAYING ",role:" Batter "};
players[9][4]= {name:" Rahul Tripathi ",team:" SRH ",price:" ₹8.5 crore ",playing_status:" PLAYING ",role:" Batter "};
players[9][5]= {name:" Priyam Garg ",team:" SRH ",price:" ₹20 lakh ",playing_status:" PLAYING ",role:" Batter "};
players[9][6]= {name:" Glenn Philipps ",team:" SRH ",price:" ₹1.5 crore ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[9][7]= {name:" Vishnu Vinod ",team:" SRH ",price:" ₹50 lakh ",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[9][8]= {name:" Nicholas Pooran ",team:" SRH ",price:" ₹10.75 crore",playing_status:" PLAYING ",role:" Wicket-keeper "};
players[9][9]= {name:" Abdul Samad (R) ",team:" SRH ",price:" ₹4 crore ",playing_status:" PLAYING ",role:" All-rounder "};


var playerimage="https://cdn2.vectorstock.com/i/1000x1000/95/36/india-cricket-player-batsman-batting-cartoon-vector-2219536.jpg";
//dataend
let url_string = location.href;
    let url = new URL(url_string);
    let teamid = url.searchParams.get("id");
    
//     for(var i=0;i<9;i++){
// console.log(players[teamid][i].name);
// }  

let title="";
title=`<h2 id="teamtitle">${teamlist[teamid].name}</h2>`;
$("#teamnamecont").append(title);


let teamHTML="";

   for(var i=0; i<teamlist.length; i++){

                          teamHTML += `
                          <div id="teamscard">
                          <a href="./playerdetails.html?id=${i}~${teamid}">
                   
                          <div id="image">
                          <img src="${playerimage}" id="imageipl" alt="">
                          </div>
                          <div id="teamtitle">
                          <h2>${players[teamid][i].name}</h2>
                          <p>TEAM:- ${players[teamid][i].team}</p>
                          <p>PRICE:- ${players[teamid][i].price}</p>
                          <p>ROLE:- ${players[teamid][i].role}</p>
                          <p>STATUS:- ${players[teamid][i].playing_status}</p>
                          </div>
                          </a>
                          
                            
                      </div>`;
                      
                  }
  
                  $("#teams").append(teamHTML);