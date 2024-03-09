var currentAttackType = "";
var senderbox = document.getElementById("sendertxt");
var recieverbox = document.getElementById("recievertxt");
let manipulatedtxt = "";

function attk(card) {
  currentAttackType = card.getAttribute("data-attackType");
  switch (currentAttackType) {
    case "fabrication":
      console.log("fabricaiton");
      senderbox.placeholder = "This is Fabrication...";
      recieverbox.placeholder = "This is Fabrication...";

      break;

    case "modification":
      console.log("modification");
      senderbox.placeholder = "This is Modification...";
      recieverbox.placeholder = "This is Modification...";

      break;

    case "replay":
      console.log("replay");
      senderbox.placeholder = "This is Replay...";
      recieverbox.placeholder = "This is Replay...";

      break;

    case "dos":
      console.log("dos");
      senderbox.placeholder = "This is DOS...";
      recieverbox.placeholder = "This is DOS...";

      break;

    case "release-of-content":
      console.log("release of content");
      senderbox.placeholder = "This is Release Of Content...";
      recieverbox.placeholder = "This is Release Of Content...";

      break;

    case "traffic-analysis":
      console.log("traffic analysis");
      senderbox.placeholder = "This is Traffic Analysis...";
      recieverbox.placeholder = "This is Traffic Analysis...";

      break;
  }
}

function send() {
  var sendertxt = document.getElementById("sendertxt").value;
  var recievertxt = document.getElementById("recievertxt").value;

  //   recievertxt = sendertxt;

  //   console.log(sendertxt);
  //   console.log(recievertxt);

  //   document.getElementById("recievertxt").innerText = recievertxt;
  switch (currentAttackType) {
    case "fabrication":
      sendertxt = handleFabrication(sendertxt);
      break;
    case "modification":
      sendertxt = handleModification(sendertxt);
      break;
    case "replay":
      sendertxt = handleReplay(sendertxt);
      break;
    case "dos":
      sendertxt = handleDos(sendertxt);
      break;
    case "release-of-content":
      sendertxt = handleRos(sendertxt);
      break;
    case "traffic-analysis":
      sendertxt = handleTrafficAnalysis(sendertxt);
      break;
    default:
      console.log("Unknown");
      break;
  }
  recievertxt.value = sendertxt;

  console.log(sendertxt);
  console.log(recievertxt.value);
}

// cards:
document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

const card = document.querySelectorAll(".card");

card.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("clicked");

    document.querySelector(".main").style.display = "block";
    document.querySelector("#cards").style.display = "none";
  });
});

// function attk(card) {
//   const attackType = card.getAttribute("data-attackType");
//   // console.log(attackType);

// }

function handleFabrication(message) {
  console.log("this is fabrication");
//   manipulatedtxt = "Hey! I found this amazing game. Its very fun, check it out here..  Link:bluewhale.play"
  
//   message ="Hey! I found this amazing game. Its very fun, check it out here..  Link:bluewhale.play";

  recievertxt.innerText = "Hey! It's me ..name found this amazing game. Its very fun, check it out here..  Link:'bluewhale.play'"; //includde username here
  
  //   console.log(`this is ${sendertxt}`);
}

function handleModification(message) {
    console.log("this is modification");
    recievertxt.innerText = "Hey, I came across this amazing giveaway that I think you'll love. It's a chance to win free gift cards and an iPhone 15Pro Max! All you have to do is click on this link to participate: [http://maliciouslink.com/free-gift-cards]\n\n\n\nI've already won some prizes from it, so I thought I'd share it with you.";
}

function handleReplay(message) {
  console.log("this is replay"); 
  
}

function handleDos(message) {
  console.log("this is dos");
  console.log(message);
  
}

function handleRos(message) {
  console.log("this is ros");
  
}
function handleTrafficAnalysis(message) {
  console.log("this is traffic analysis");
  
}

const backbtn = document.getElementById("backbtn");

backbtn.addEventListener("click", () => {
  console.log("back");

  document.querySelector(".main").style.display = "none";
  document.querySelector("#cards").style.display = "";
});
// document.getElementsByClassName("card").onclick = (e) => {
//         console.log("clicked");
// };
