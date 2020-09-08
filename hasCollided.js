var bulletRightEdge,wallLeftEdge;
var bullet,wall;
bulletRightEdge=bullet.x;
wallLeftEdge=wall.x;

function hasCollided(lbullet,lwall)
{
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;

    }

      return false;
}