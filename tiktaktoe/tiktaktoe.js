box = document.getElementsByClassName('box')
vic = document.getElementById('victory')
replay = document.getElementById('replay')
player = document.getElementById('player')
move = 0;
IsWin = false;
box_attr = []
function myFunc(ele){
  if(move%2){
    ele.innerHTML = '<i class="fa-solid fa-xmark fa-lg"></i>';
    ele.setAttribute('data-text', 'X')
    player.innerHTML = 'Player O turn'
  }
  else{
    ele.innerHTML = '<i class="fa-solid fa-circle-notch"></i>';
    ele.setAttribute('data-text', 'O')
    player.innerHTML = 'Player X turn'
  }
  ele.setAttribute('disabled', 'disabled')
  move++
  win()
}

function win(){
  for(i=0; i<box.length; i++){
    box_attr[i] = box[i].getAttribute('data-text')
  }
  condition(0,1,2)
  condition(0,3,6)
  condition(0,4,8)
  condition(1,4,7)
  condition(2,5,8)
  condition(2,4,6)
  condition(3,4,5)
  condition(6,7,8)
  if(!box_attr.includes('null') && !IsWin){
    vic.innerHTML = "~ DRAW ~"
    replay.style.display = 'block'
    player.style.display = 'none'
  }
}

function condition(first, sec, third){
  if(box_attr[first] != 'null' && box_attr[first] == box_attr[sec] && box_attr[sec] == box_attr[third]){
    box[first].style.background = "#c0ffee"
    box[sec].style.background = "#c0ffee"
    box[third].style.background = "#c0ffee"
    for(i=0; i<box.length; i++){
      box[i].setAttribute('disabled', 'disabled')
    }
    vic.innerHTML ='PLAYER ' + box_attr[sec] + " WIN!"
    replay.style.display = 'block'
    player.style.display = 'none'
    IsWin = true;
  }
}

function retry(){
  vic.innerHTML = 'Tic - Tac - Toe'
  replay.style.display = 'none'
  player.style.display = 'block'
  player.innerHTML = 'Player O turn'
  move = 0;
  IsWin = false;
  for(i=0; i<box.length; i++){
      box[i].removeAttribute('disabled')
      box[i].innerHTML = ''
      box[i].style.background = '#def'
      box[i].setAttribute('data-text', 'null')
    }
}