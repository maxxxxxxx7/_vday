function pic(){
var pic = "/Users/maxgraham/Desktop/_vday/assets/01.jpg"
document.getElementById('bigpic').src = pic.replace('90x90', '225x225');
document.getElementById('bigpic').style.display='block';
}

function picMorn(){
var pic = "/Users/maxgraham/Desktop/_vday/assets/fav.png"
document.getElementById('bigpic01').src = pic.replace('90x90', '225x225');
document.getElementById('bigpic01').style.display='block';
}

function picAfter(){
var pic = "/Users/maxgraham/Desktop/_vday/assets/heart.png"
document.getElementById('bigpic02').src = pic.replace('90x90', '225x225');
document.getElementById('bigpic02').style.display='block';
}



function clearPic(){
  document.getElementById('bigpic').style.display='none';
  document.getElementById('bigpic01').style.display='none';
  document.getElementById('bigpic02').style.display='none';
}
