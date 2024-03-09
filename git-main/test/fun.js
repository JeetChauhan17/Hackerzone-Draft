const originaltxt = document.getElementById("sendertxt").value;
let recievertxt = document.getElementById("recievertxt").value;
const sendbtn = document.getElementById("sendbtn");

// let manipulatedtxt = originaltxt;

// console.log(recievertxt);

function sendtxt() {
  const sendertxt = document.getElementById("sendertxt").value;
  let manipulatedtxt = sendertxt;
  console.log(`this is manipulated text: ${manipulatedtxt}`);
  console.log(`this is sender text: ${sendertxt}`);

  document.getElementById("recievertxt").innerText = manipulatedtxt;
  // console.log(sendertxt);
  
  
  //   function replay(){
      //     document.getElementsByClassName("main").innerHtml = 
      //   }
    }
    
    // card > click > atacktype chosen.
    function updateattk(){
    const attackType = document.getElementById("attacktype").value;
    const intruderTextbox = document.getElementById("intruderTextbox");
    if (attackType === "fabrication") {
        intruderTextbox.style.display = "block";
        document.getElementById("intruderText").value = intruderText;
    } else {
        intruderTextbox.style.display = "none";
    }
  
  
    switch (attackType) {
      case "fabrication":
        fabrication();
        console.log("fabrication");
        break;
  
      case "modification":
        modification();
        console.log("modification");
        break;
  
      case "replay":
        replay();
        console.log("replay");
        break;
  
      case "dos":
        dos();
        console.log("dos");
        break;
    }
  
  
    function modification(){
      manipulatedtxt = "hey bro, I just need some money, can you please send 500rs to this account pls.. Acc: XXXXX 56XXX XX987"
      recievertxt = manipulatedtxt;
      document.getElementById("recievertxt").innerText = recievertxt;
    }

    function fabrication(){
        
    }
}


// get input from txtbox 1 ...
// let recievedtxt value = input from txtbox1
// make whole div appear when the card is clicked
// get which card is clicked
// make logic accordingly