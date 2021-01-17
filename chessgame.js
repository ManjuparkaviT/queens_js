var queen={
  direction:'s',
  posi_x:parseInt(0),
  posi_y:parseInt(0)
}
var c=parseInt(0);
function changedirection(dir){
  queen.direction=dir
}
while(c<10){
  
  
  function move(a){
    var b=queen.posi_x,c=queen.posi_y;
    switch(queen.direction){
      case 's':
        queen.posi_x+=(parseInt(a));
        break;
      case 'n':
        queen.posi_x-=(parseInt(a));
        break;
      case 'e':
        queen.posi_y+=(parseInt(a));
        break;
      case 'w':
        queen.posi_y-=(parseInt(a));
        break;
      case 'ne':
        queen.posi_x-=(parseInt(a));
        queen.posi_y+=(parseInt(a));
        break;
      case 'se':
        queen.posi_x+=(parseInt(a));
        queen.posi_y+=(parseInt(a));
        break;
      case 'nw':
        queen.posi_x-=(parseInt(a));
        queen.posi_y-=(parseInt(a));
        break;
      case 'sw':
        queen.posi_x+=(parseInt(a));
        queen.posi_y-=(parseInt(a));
        break;
    }
    if (queen.posi_x<0 || queen.posi_y<0 || queen.posi_x>7 || queen.posi_y>7){
      console.log("Invalid move");
      queen.posi_x=parseInt(b);
      queen.posi_y=parseInt(c);
    }
  
  }
  let position=[['a8','b8','c8','d8','e8','f8','g8','h8'],
                ['a7','b7','c7','d7','e7','f7','g7','h7'],
                ['a6','b6','c6','d6','e6','f6','g6','h6'],
                ['a5','b5','c5','d5','e5','f5','g5','h5'],
                ['a4','b4','c4','d4','e4','f4','g4','h4'],
                ['a3','b3','c3','d3','e3','f3','g3','h3'],
                ['a2','b2','c2','d2','e2','f2','g2','h2'],
                ['a1','b1','c1','d1','e1','f1','g1','h1']]
  changedirection(prompt("Enter direction"))
  move(prompt(parseInt("Enter No of Steps")))
  console.log("Queen is in "+position[queen.posi_x][queen.posi_y]+" position")
  c+=1
}
