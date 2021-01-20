
function bounceOff(p,q){    //parameters

    if(p.x-q.x<p.width/2+q.width/2 && q.x-p.x<p.width/2+q.width/2){
      //mr.velocityX*=(-1)
      p.velocityX=p.velocityX*(-1)
      q.velocityX=q.velocityX*(-1)
    }
    if(p.y-q.y<p.height/2+q.height/2 && q.y-p.x<p.height/2+q.height/2){
      //mr.velocityX*=(-1)
      p.velocityY=p.velocityY*(-1)
      q.velocityY=q.velocityY*(-1)
    }
  }



