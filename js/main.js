function pic(){
var pic = "./assets/Morning.png"
document.getElementById('bigpic').src = pic.replace('90x90', '225x225');
document.getElementById('bigpic').style.display='block';
}

function picAfter(){
var pic = "./assets/midMorning.png"
document.getElementById('bigpic01').src = pic.replace('90x90', '225x225');
document.getElementById('bigpic01').style.display='block';
}

function picEve(){
var pic = "./assets/afternoon.png"
document.getElementById('bigpic02').src = pic.replace('90x90', '225x225');
document.getElementById('bigpic02').style.display='block';
}
function picNight(){
var pic = "./assets/evening.png"
document.getElementById('bigpic03').src = pic.replace('90x90', '225x225');
document.getElementById('bigpic03').style.display='block';
}




function clearPic(){
  document.getElementById('bigpic').style.display='none';
  document.getElementById('bigpic01').style.display='none';
  document.getElementById('bigpic02').style.display='none';
  document.getElementById('bigpic03').style.display='none';
}
