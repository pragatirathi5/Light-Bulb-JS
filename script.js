const handleBulb = () => {
    let bulb = document.getElementById("mybulb");

    if(bulb.src.match("Light-Bulb-Off")){
        bulb.src="Light-Bulb-On.jpg";
    }
    else{
        bulb.src="Light-Bulb-Off.jpg";
    }
}