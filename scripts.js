const reply = document.querySelector("#reply");
const myQuestion = document.querySelector("#myQuestion");
const askButton = document.querySelector("#askButton");

const responseList = [
  "No.",
  "Probably.",
  "Don't count on it!",
  "My sources say yes.",
  "All signs point to it.",
  "Can't predict right now.",
  "There’s no doubt!",
  "Focus and ask again...",
  "Yep, for sure!",
  "Not that I know of.",
  "I didn't get your question.",
  "The odds are good.",
  "Yes!",
  "You may rely on it!",
  "There are pretty slim chances.",
  "Certainly not.",
  "It is very likely.",
  "It's better not to know.",
  "Outlooks are not so good.",
  "In my view, yes.",
  "Not on your life!"
];

function askQuestion() {
  if (myQuestion.value === "") {
    reply.style.opacity = 1;
    reply.innerHTML = "Ask your question...";
  } else {
    const question = "<div>" + myQuestion.value + "</div>";

    const responseListLength = responseList.length;
    const randomReply = Math.floor(Math.random() * responseListLength);

    askButton.setAttribute("disabled", true);

    reply.style.opacity = 1;
    reply.innerHTML = question + responseList[randomReply];
  }

  setTimeout(function () {
    reply.style.opacity = 0;
    askButton.removeAttribute("disabled");
    myQuestion.value = "";

    setTimeout(function () {
      reply.innerHTML = "";
    }, 1000);
  }, 3000);
}
