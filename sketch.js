var underwater,underwaterimg
var fishimg,fish2img,rockimg,jellyfishimg,sharkimg
var octopusimg;
var swimmerimg;
var goldencoinimg,jemimg;


function preload()
{
underwaterimg=loadImage("underwater.jpg")
fishimg=loadImage("fish.png")	
fish2img=loadImage("fish2.png")
jellyfishimg=loadImage("jellyfish.png")
sharkimg=loadImage("shark.png")
rockimg=loadImage("rock.png")
octopusimg=loadImage("octopus.png")
swimmerimg=loadImage("swimmer.png")
goldencoinimg=loadImage("goldencoin.png")
jemimg=loadImage("jem.png")
}

function setup() {
	createCanvas(900, 500);
underwater=createSprite(0,250)
underwater.addImage(underwaterimg)
underwater.velocityX=-2;

swimmer=createSprite(80,100)
swimmer.addImage(swimmerimg)
swimmer.scale=0.5;

}


function draw() {
 if(underwater.x<0){
	 underwater.x=900
 }
 if(keyDown(UP_ARROW)){
	 swimmer.y-=5;
 }
 if(keyDown(DOWN_ARROW)){
	swimmer.y+=5;
}
  spawnrock();
  spawnFish();
  spawncoin();
  spawnjem();
  drawSprites();
}


function spawnFish(){
if(frameCount%200===0){
	fish=createSprite(950,200)
	fish.velocityX=-4;
	fish.scale=0.25;
	fish.y=Math.round(random(100,300))
	
fish.lifetime=250;

	var rand=Math.round(random(1,4))
	switch(rand){
		case 1:fish.addImage(fishimg)
		break
		case 2: fish.addImage(fish2img)
		break
		case 3: fish.addImage(jellyfishimg)
		break
		case 4: fish.addImage(sharkimg)
		break
	}
}
}

function spawnrock(){
	if(frameCount%150===0){
		rock=createSprite(950,450)
		rock.velocityX=-4;
		rock.scale=0.25;
		//rock.y=Math.round(random(100,300))

	rock.lifetime=250;

		var rand=Math.round(random(1,2))
		switch(rand){
			case 1:rock.addImage(octopusimg)
			break
			case 2: rock.addImage(rockimg)
			break
			
		}
	}
	}
	function spawncoin(){
		if(frameCount%90===0){
			coin=createSprite(950,450)
			coin.velocityX=-7;
			coin.scale=0.1;
			coin.y=Math.round(random(50,400))
	
		coin.lifetime=130;
	coin.addImage(goldencoinimg)
			
		}
		}
		function spawnjem(){
			if(frameCount%400===0){
				jem=createSprite(950,450)
				jem.velocityX=-7;
				jem.scale=0.2;
				jem.y=Math.round(random(50,400))
		
			jem.lifetime=130;
		jem.addImage(jemimg)
				
			}
			}
		
	