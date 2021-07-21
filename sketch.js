var bg1,bg2,chestImg,playerImg,rock,blast,monsu,monss,helicop
var wallGroup,wls,chestGroup,cht,trapGroup,tch,obs,obstacleGroup,nc,npcGroup
var health = 100
var strength = 100
var gameState = "serve"
function preload(){
bg1 = loadImage("images/bg.png")
chestImg =loadImage("images/chestu.png")
monsu = loadImage("images/monsterd.png")
monss = loadImage("images/monsterr.png")
rock = loadImage("images/rock1.png")

}

function setup() {
  createCanvas(1000,1000);
  wall1 = createSprite(300,965,800,5);
  wall1.visible = false
  wall2 = createSprite(505,40,900,5);
  wall2.visible = false
  wall3 = createSprite(950,500,5,912);
  wall3.visible = false
  wall4 = createSprite(905,500,5,800);
  wall4.visible = false
  wall5 = createSprite(790,500,5,790);
  wall5.visible = false
  wall6 = createSprite(450,100,775,5);
  wall6.visible  =false
  wall7 = createSprite(450,160,715,5);
  wall7.visible = false
  wall8 = createSprite(875,420,5,649);
  wall8.visible = false
  wall9 = createSprite(830,420,5,649);
  wall9.visible = false
  wall10 = createSprite(740,355,5,285);
  wall10.visible = false
  wall11 = createSprite(310,347,5,259);
  wall11.visible = false
  wall12 = createSprite(260,347,5,255);
  wall12.visible = false
  wall13 = createSprite(90,275,5,230);
  wall13.visible = false
  wall14 = createSprite(498,600,5,268);
  wall14.visible = false
  wall15 = createSprite(615,495,5,320);
  wall15.visible = false
  wall16 = createSprite(742,756,5,399);
  wall16.visible = false
  wall17 = createSprite(620,845,5,250);
  wall17.visible = false
  wall18 = createSprite(570,870,5,180);
  wall18.visible = false
  wall19 = createSprite(330,818,5,180);
  wall19.visible = false
  wall20 = createSprite(262,780,5,245);
  wall20.visible = false
  wall21 = createSprite(215,810,5,185);
  wall21.visible = false
  wall22 = createSprite(446,625,5,200);
  wall22.visible = false
  wall23 = createSprite(570,525,5,250);
  wall23.visible = false
  wall24 = createSprite(380,845,5,120);
  wall24.visible = false
  wall25 = createSprite(130,768,5,101);
  wall25.visible = false
  wall26 = createSprite(78,650,5,400);
  wall26.visible = false
  wall27 = createSprite(46,940,5,75);
  wall27.visible = false
  wall28 = createSprite(70,60,5,75);
  wall28.visible = false
  wall29 = createSprite(670,535,5,75);
  wall29.visible = false
  wall30 = createSprite(430,440,5,68);
  wall30.visible = false
  wall31 = createSprite(380,390,5,150);
  wall31.visible = false
  wall32 = createSprite(140,320,5,200);
  wall32.visible = false
  wall33 = createSprite(415,253,5,65);
  wall33.visible = false
  wall34 = createSprite(465,253,5,65);
  wall34.visible = false
  wall35 = createSprite(535,940,5,70);
  wall35.visible = false
  wall36 = createSprite(260,562,5,68);
  wall36.visible = false
  wall37 = createSprite(310,562,5,68);
  wall37.visible = false
  wall38 = createSprite(160,470,195,5);
  wall38.visible = false
  wall39 = createSprite(200,220,130,5);
  wall39.visible = false
  wall40 = createSprite(360,220,110,5);
  wall40.visible = false
  wall41 = createSprite(600,220,285,5);
  wall41.visible = false
  wall42 = createSprite(450,280,110,5);
  wall42.visible = false
  wall43 = createSprite(500,350,230,5);
  wall43.visible = false
  wall44 = createSprite(495,410,139,5);
  wall44.visible = false
  wall45 = createSprite(480,470,100,5);
  wall45.visible = false
  wall46 = createSprite(350,470,70,5);
  wall46.visible = false
  wall47 = createSprite(380,530,140,5);
  wall47.visible = false
  wall48 = createSprite(165,530,190,5);
  wall48.visible = false
  wall49 = createSprite(165,660,190,5);
  wall49.visible = false
  wall50 = createSprite(385,730,120,5);
  wall50.visible = false
  wall51 = createSprite(550,730,130,5);
  wall51.visible = false
  wall52 = createSprite(470,790,195,5);
  wall52.visible = false
  wall53 = createSprite(470,905,195,5);
  wall53.visible = false
  wall54 = createSprite(300,905,80,5);
  wall54.visible = false
  wall55 = createSprite(120,905,195,5);
  wall55.visible = false
  wall56 = createSprite(100,820,60,5);
  wall56.visible = false
  wall57 = createSprite(170,720,90,5);
  wall57.visible = false
  wall58 = createSprite(300,590,90,5);
  wall58.visible = false
  wall59 = createSprite(100,365,90,5);
  wall59.visible = false
  wall60 = createSprite(600,655,90,5);
  wall60.visible = false
  wall61 = createSprite(710,555,70,5);
  wall61.visible = false
  wall62 = createSprite(710,495,75,5);
  wall62.visible = false
  wall63 = createSprite(850,745,75,5);
  wall63.visible = false
  wall64 = createSprite(850,895,115,5);
  wall64.visible = false
  wall65 = createSprite(850,955,205,5);
  wall65.visible = false

  wls = [wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17
  ,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,
wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,
wall53,wall54,wall55,wall56,wall57,wall58,wall59,wall60,wall61,wall62,wall63,wall64,wall65]

wallGroup = new Group();

for(var i = 0;i<65;i++){
  wallGroup.add(wls[i]);

}

  
  //creating point chests
chest1 = createSprite(100,790,10,10);
chest1.addImage(chestImg)
chest1.scale = 0.1
chest1.setCollider("rectangle",30,30,60,60)
chest2 = createSprite(100,500,10,10);
chest2.addImage(chestImg)
chest2.scale = 0.1
chest2.setCollider("rectangle",30,30,60,60)
chest3 = createSprite(110,340,10,10);
chest3.addImage(chestImg)
chest3.scale = 0.1
chest3.setCollider("rectangle",30,30,60,60)
chest4 = createSprite(590,630,10,10);
chest4.addImage(chestImg)
chest4.scale = 0.1
chest4.setCollider("rectangle",30,30,60,60)
chest5 = createSprite(850,720,10,10);
chest5.addImage(chestImg)
chest5.scale = 0.1
chest5.setCollider("rectangle",30,30,60,60)
chest6 = createSprite(590,940,10,10);
chest6.addImage(chestImg)
chest6.scale = 0.1
chest6.setCollider("rectangle",30,30,60,60)
chest7 = createSprite(520,940,10,10);
chest7.addImage(chestImg)
chest7.scale = 0.1
chest7.setCollider("rectangle",30,30,60,60)
chest8 = createSprite(930,640,10,10);
chest8.addImage(chestImg)
chest8.scale = 0.1
chest8.setCollider("rectangle",30,30,60,60)
cht = [chest1,chest2,chest3,chest4,chest5,chest6,chest7,chest8]

chestGroup = new Group();

for(var i = 0;i<8;i++){
  chestGroup.add(cht[i]);
  
}




//creating trap chest 
tchest1 = createSprite(280,570,10,10)
tchest1.addImage(chestImg)
tchest1.setCollider("rectangle",30,30,60,60)
tchest1.scale = 0.1
tchest2 = createSprite(680,530,10,10)
tchest2.addImage(chestImg)
tchest2.scale = 0.1
tchest2.setCollider("rectangle",30,30,60,60)
tchest3 = createSprite(440,270,10,10)
tchest3.addImage(chestImg)
tchest3.scale = 0.1
tchest3.setCollider("rectangle",30,30,60,60)

tch = [tchest1,tchest2,tchest3]

trapGroup = new Group()
for(var i = 0;i<3;i++){
  trapGroup.add(tch[i]);
}

//creating obstacles for point chest
obstacle1 = createSprite(105,750,45,10)
obstacle1.shapeColor = rgb(181,101,29)
obstacle2 = createSprite(470,930,10,40)
obstacle2.shapeColor = rgb(181,101,29)
obstacle3 = createSprite(593,900,40,10)
obstacle3.shapeColor = rgb(181,101,29)
obstacle4 = createSprite(593,600,40,10)
obstacle4.shapeColor = rgb(181,101,29)
obstacle5 = createSprite(160,500,10,40)
obstacle5.shapeColor = rgb(181,101,29)
obstacle6 = createSprite(113,300,40,10)
obstacle6.shapeColor = rgb(181,101,29)
obstacle7 = createSprite(925,600,40,10)
obstacle7.shapeColor = rgb(181,101,29)
obstacle8 = createSprite(925,680,40,10)
obstacle8.shapeColor = rgb(181,101,29)
obstacle9  = createSprite(850,680,40,10)
obstacle9.shapeColor = rgb(181,101,29)
//creating obstacles for trap chest
obstacle10= createSprite(280,550,40,10)
obstacle10.shapeColor = rgb(181,101,29)
obs = [obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10]

obstacleGroup = new Group();


for(var i = 0;i<10;i++){
  obstacleGroup.add(obs[i]);

}

//creating npcs
npc1 = createSprite(100,730,10,10)
npc1.addImage(monsu)
npc1.setCollider("rectangle",0,0,140,60)
npc1.scale = 0.3
npc2 = createSprite(430,755,10,10) 
npc2.addImage(monss)
npc2.scale = 0.3
npc2.setCollider("rectangle",0,0,60,140)
npc3 = createSprite(430,500,10,10) 
npc3.addImage(monss)
npc3.scale = 0.3
npc3.setCollider("rectangle",0,0,60,140)
npc4 = createSprite(430,190,10,10)
npc4.addImage(monss)
npc4.scale = 0.3
npc4.setCollider("rectangle",0,0,60,140)
npc5 = createSprite(930,750,10,10)
npc5.addImage(monsu)
npc5.setCollider("rectangle",0,0,140,60)
npc5.scale = 0.3
npc6 = createSprite(750,530,10,10)
npc6.addImage(monss)
npc6.scale = 0.3
npc6.setCollider("rectangle",0,0,60,140)
npc7 = createSprite(850,650,10,10)
npc7.addImage(monsu)
npc7.scale = 0.3
npc7.setCollider("rectangle",0,0,140,60)
npc8 = createSprite(300,70,20,20) 
npc8.addImage(monss)
npc8.scale = 0.5
npc8.setCollider("rectangle",0,0,60,140)
npc9 = createSprite(200,70,20,20)
npc9.addImage(rock)
npc9.scale = 0.6
npc9.setCollider("rectangle",20,0,60,140)

nc = [npc1,npc2,npc3,npc4,npc5,npc6,npc7,npc8,npc9]

npcGroup = new Group();

for(var i = 0;i<9;i++){
  npcGroup.add(nc[i])
}

ext = createSprite(100,70,20,20)

player = createSprite(100,930,10,10)
}

function draw() {
  background(bg1);  
  
  
  if(keyDown("RIGHT_Arrow") || keyDown("d")){
    player.x = player.x+2
  }

  if(keyDown("left_Arrow") || keyDown("a")){
    player.x = player.x-2
    
  }

  if(keyDown("up_Arrow") || keyDown("w")){
    player.y = player.y-2
  }

  if(keyDown("down_Arrow") || keyDown("s")){
    player.y = player.y+2
  }

  if(player.isTouching(npc1)  && keyDown("space")){
    npc1.visible = false;
    npc1.x = 0
    npc1.y = 0
    strength = strength+2
    health = health-2
  } 
  if(player.isTouching(npc2)  && keyDown("space")) {
    npc2.visible = false;
    npc2.x = 0
    npc2.y = 0
    strength = strength+2
    health = health-2
  } 
  if(player.isTouching(npc3)  && keyDown("space")){
    npc3.visible = false;
    npc3.x = 0
    npc3.y = 0
    strength = strength+2
    health = health-2
  } 
  if(player.isTouching(npc4)  && keyDown("space")){
    npc4.visible = false;
    npc4.x = 0
    npc4.y = 0
    strength = strength+2
    health = health-2
  } 
  if(player.isTouching(npc5)  && keyDown("space")){
    npc5.visible = false;
    npc5.x = 0
    npc5.y = 0
    strength = strength+2
    health = health-2
  } 
  if(player.isTouching(npc6)  && keyDown("space")){
    npc6.visible = false;
    npc6.x = 0
    npc6.y = 0
    strength = strength+2
    health = health-2
  } 

  if(player.isTouching(npc7)  && keyDown("space")){
    npc7.visible = false;
    npc7.x = 0
    npc7.y = 0
    strength = strength+2
    health = health-2
  } 
  if(player.isTouching(npc8)  && keyDown("space")){
    npc8.visible = false;
    npc8.x = 0
    npc8.y = 0
    strength = strength+2
    health = health-2
  } 
  if(player.isTouching(obstacle1) && keyDown("space")){
    obstacle1.visible = false;
    obstacle1.x = 0
    obstacle1.y = 0
   
  }
  if(player.isTouching(obstacle2 )&& keyDown("space")){
    obstacle2.visible = false;
    obstacle2.x = 0
    obstacle2.y = 0
    
  }
  if(player.isTouching(obstacle3) && keyDown("space")){
    obstacle3.visible = false;
    obstacle3.x = 0
    obstacle3.y = 0
    
  }
  if(player.isTouching(obstacle4) && keyDown("space")){
    obstacle4.visible = false;
    obstacle4.x = 0
    obstacle4.y = 0
  
  }
  if(player.isTouching(obstacle5) && keyDown("space")){
    obstacle5.visible = false;
    obstacle5.x = 0
    obstacle5.y = 0
    
  }
  if(player.isTouching(obstacle6) && keyDown("space")){
    obstacle6.visible = false;
    obstacle6.x = 0
    obstacle6.y = 0
 
  }
  if(player.isTouching(obstacle7) && keyDown("space")){
    obstacle7.visible = false;
    obstacle7.x = 0
    obstacle7.y = 0
  
  }
  if(player.isTouching(obstacle8) && keyDown("space")){
    obstacle8.visible = false;
    obstacle8.x = 0
    obstacle8.y = 0
  
  }
  if(player.isTouching(obstacle9) && keyDown("space")){
    obstacle9.visible = false;
    obstacle9.x = 0
    obstacle9.y = 0
    
  }
  if(player.isTouching(obstacle10) && keyDown("space")){
    obstacle10.visible = false;
    obstacle10.x = 0
    obstacle10.y = 0
  }
  if(player.isTouching(chest1) &&keyDown("space")){
    chest1.x = 0
    chest1.y = 0
     chest1.visible = false
     health = health +5;
      strength =strength +5
      
  }
  if(player.isTouching(chest2) &&keyDown("space")){
    chest2.x = 0
    chest2.y = 0
    chest2.visible = false
    health = health +5;
      strength =strength +5
     
  }
  if(player.isTouching(chest3) &&keyDown("space")){
    chest3.x = 0
    chest3.y = 0
    chest3.visible = false
    health = health +5;
      strength =strength +5
    
  }
  if(player.isTouching(chest4) &&keyDown("space")){
    chest4.x = 0
    chest4.y = 0
    chest4.visible = false
    health = health +5;
    strength =strength +5
  }
  if(player.isTouching(chest5) &&keyDown("space")){
    chest5.x = 0
    chest5.y = 0
    chest5.visible = false
    health = health +50;
      strength =strength +30
      
  }
  if(player.isTouching(chest6) && keyDown("space")){
    chest6.x = 0
    chest6.y = 0
    chest6.visible = false
    health = health +5;
      strength =strength +5
  }
     
  if(player.isTouching(chest7) && keyDown("space")){
    chest7.x = 0
    chest7.y = 0
    chest7.visible = false
    health = health +5;
      strength =strength +5
    
  }
  if(player.isTouching(chest8) && keyDown("space")){
    chest8.x = 0
    chest8.y = 0
    chest8.visible = false
    health = health +5;
      strength =strength +5
     
  }
  



player.collide(wallGroup)
player.collide(obstacleGroup)
player.collide(npcGroup)
player.collide(chestGroup)
player.collide(trapGroup)



 //camera.position.x = player.x
  //camera.position.y = player.y

  

  drawSprites();
  drawSprites();
  textSize(20);
  fill(51);
  text("health: "+ health,150,30);

  textSize(20);
  fill(51);
  text("strength: "+ strength,300,30);
}
