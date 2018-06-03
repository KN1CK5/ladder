//set time to find zone
const myTime = new Date().toString();
timeZone = myTime.slice(35, 39);
let getZone = 0;

if (timeZone === "AEST") {
  getZone = 1;
} else if (timeZone === "ACST") {
  getZone = 2;
} else {
  getZone = 3;
}

let globalDate = undefined;
let borderDate = [];
var count = -1;

const renderGames = data => {
  data.fixtures.forEach(game => {
    const currentGameDateInMilliseconds = new Date(
      `${game.match.startDateTimes[0].date} ${
        game.match.startDateTimes[0].name
      }`
    ).getTime();

    if (
      globalDate === undefined ||
      globalDate !== currentGameDateInMilliseconds
    ) {
      const dateOfGameBox = document.createElement("div");
      dateOfGameBox.className = "dateOfGame";
      let dateGame = new Date(game.match.startDateTimes[0].date);

      const day = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"];
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      dateOfGameBox.innerText = `${
        day[dateGame.getDay()]
      }day, ${dateGame.getDate()} ${
        month[dateGame.getMonth()]
      } ${dateGame.getFullYear()}`;
      document.getElementById("games").appendChild(dateOfGameBox);
      globalDate = currentGameDateInMilliseconds;
    }

    //set current date and game date in milliseconds
    const todayInMilliseconds = new Date().getTime();
    const gameTimeInMilliseconds = new Date(
      game.match.startDateTimes[getZone].date
    ).getTime();
    const differenceInMilliseconds =
      gameTimeInMilliseconds - todayInMilliseconds;

    //function to convert milliseconds to days
    const convertMillisecondsToDays = milliseconds => {
      return milliseconds / (1000 * 60 * 60 * 24);
    };

    const differenceInDays = convertMillisecondsToDays(
      differenceInMilliseconds
    );

    //creating gameContainer div
    const gameBox = document.createElement("div");

    count = count + 1;

    borderDate.push(game.match.startDateTimes[getZone].date);

    if (count >= 1 && borderDate[count] === borderDate[count - 1]) {
      gameBox.className = "gameContainer hasBorder";
    } else {
      gameBox.className = "gameContainer";
    }

    //creating homeTeam div
    const homeLogoBox = document.createElement("div");
    homeLogoBox.className = "logobox";

    //creating homeTeam img
    const homeLogo = document.createElement("img");
    homeLogo.className = "logo";
    homeLogo.src = `images/logos/${
      game.homeTeam.teamName
    }_logo.svg`.toLowerCase();

    //locating homeTeam img within homeTeam div
    homeLogoBox.appendChild(homeLogo);

    //locating homeTeam div within gameContainer
    gameBox.appendChild(homeLogoBox);

    //creating gameInfo div
    const gameInfoBox = document.createElement("div");
    gameInfoBox.className = "gameInfo";

    //locating gameInfo div within gameContainer
    gameBox.appendChild(gameInfoBox);

    //creating gameMetadata div
    const gameMetadataBox = document.createElement("div");
    gameMetadataBox.className = "gameMetadata";

    //locating gameMetadataBox within gameInfo div
    gameInfoBox.appendChild(gameMetadataBox);

    //creating awayTeam div
    const awayLogoBox = document.createElement("div");
    awayLogoBox.className = "logobox";

    //creating awayTeam img
    const awayLogo = document.createElement("img");
    awayLogo.className = "logo";
    awayLogo.src = `images/logos/${
      game.awayTeam.teamName
    }_logo.svg`.toLowerCase();

    //locating awayTeam img within awayTeam div
    awayLogoBox.appendChild(awayLogo);

    //locating awayTeam div within gameContainer
    gameBox.appendChild(awayLogoBox);

    if (differenceInDays < 0) {
      //create homeScore div
      const homeScore = document.createElement("div");
      homeScore.className = "scoreDiv";

      //create homeTotal span
      const homeTotal = document.createElement("span");
      homeTotal.textContent = `${game.homeTeam.totalScore}`;

      //create homeBreakdown span
      const homeBreakdown = document.createElement("span");
      homeBreakdown.className = "breakdownScore";
      homeBreakdown.textContent = `${game.homeTeam.goals}.${
        game.homeTeam.behinds
      }`;

      //create gameOver div
      const gameOverBox = document.createElement("div");
      gameOverBox.className = "gameOverResult";

      //create gameOver span
      const gameOver = document.createElement("span");
      gameOver.className = "finishedGame";
      gameOver.textContent = "Full Time";

      //create awayScore div
      const awayScore = document.createElement("div");
      awayScore.className = "scoreDiv";

      //create awayTotal span
      const awayTotal = document.createElement("span");
      awayTotal.textContent = `${game.awayTeam.totalScore}`;

      //create awayBreakdown span
      const awayBreakdown = document.createElement("span");
      awayBreakdown.className = "breakdownScore";
      awayBreakdown.textContent = `${game.awayTeam.goals}.${
        game.awayTeam.behinds
      }`;

      //create result span
      const resultBox = document.createElement("div");
      resultBox.className = "resultInfo";
      const teamInside = document.createElement("span");
      teamInside.className = "insideTeam";
      const resultInside = document.createElement("span");
      resultInside.className = "insideResult drawn";

      let homeTeamSize = game.homeTeam.teamNickname.length;
      let awayTeamSize = game.homeTeam.teamNickname.length;

      if (game.homeTeam.totalScore > game.awayTeam.totalScore) {
        teamInside.textContent = game.homeTeam.teamNickname;
        resultInside.textContent =
          " by " + (game.homeTeam.totalScore - game.awayTeam.totalScore);
      } else if (game.homeTeam.totalScore === game.awayTeam.totalScore) {
        resultInside.textContent = "Match Drawn";
      } else {
        teamInside.textContent = game.awayTeam.teamNickname;
        resultInside.textContent =
          " by " + (game.awayTeam.totalScore - game.homeTeam.totalScore);
      }

      if (game.homeTeam.totalScore >= game.awayTeam.totalScore) {
        homeTotal.className = "totalScore";
      } else {
        homeTotal.className = "greyScore";
      }

      if (game.awayTeam.totalScore >= game.homeTeam.totalScore) {
        awayTotal.className = "totalScore";
      } else {
        awayTotal.className = "greyScore";
      }

      //locating elements
      gameMetadataBox.appendChild(homeScore);
      gameMetadataBox.appendChild(gameOverBox);
      gameMetadataBox.appendChild(awayScore);
      homeScore.appendChild(homeTotal);
      homeScore.appendChild(homeBreakdown);
      gameOverBox.appendChild(gameOver);
      gameOverBox.appendChild(resultBox);
      resultBox.appendChild(teamInside);
      resultBox.appendChild(resultInside);
      awayScore.appendChild(awayTotal);
      awayScore.appendChild(awayBreakdown);
    } else {
      //creating homePosition span
      const homePosition = document.createElement("span");
      homePosition.className = "position";
      homePosition.textContent = `${game.homeTeam.ladderPositionText}`;

      //locating homePosition span within gameMetadataBox div
      gameMetadataBox.appendChild(homePosition);

      //creating eta h3
      const makeETA = document.createElement("h3");
      makeETA.className = "eta";
      makeETA.textContent = `${Math.round(differenceInDays, -1)} DAYS`;

      //locating makeETA h3 within gameMetadataBox div
      gameMetadataBox.appendChild(makeETA);

      //creating awayPosition span
      const awayPosition = document.createElement("span");
      awayPosition.className = "position";
      awayPosition.textContent = `${game.awayTeam.ladderPositionText}`;

      //locating awayPosition span within gameMetadataBox div
      gameMetadataBox.appendChild(awayPosition);

      //creating time of game div
      const timeAndPlaceBox = document.createElement("div");
      timeAndPlaceBox.className = "timePlaceBox";

      //creating time and place span
      const timeAndPlace = document.createElement("span");
      timeAndPlace.className = "timePlace";
      timeAndPlace.textContent = `${
        game.match.startDateTimes[getZone].time
      } my time, ${game.match.venueShortName}`;
      timeAndPlaceBox.appendChild(timeAndPlace);
    }

    //locating container with games
    document.getElementById("games").appendChild(gameBox);
  });
};

renderGames(roundOne);

function setActiveRound(element) {
  document.querySelector("li.active").classList.remove("active");
  element.parentElement.classList.add("active");
}

let roundTag = undefined;

function roundWipe(event) {
  document.getElementById("games").innerHTML = "Loading";
  setActiveRound(event.target);
  let roundClicked = event.target.textContent;
  console.log(roundClicked);
  if (parseInt(roundClicked) < 10) {
    roundTag = `0${roundClicked}`;
  } else {
    roundTag = roundClicked;
  }
  fetch(
    `https://raw.githubusercontent.com/KN1CK5/ladder/javascript/api/CD_R2018014${roundTag}.json`
  )
    .then(response => response.json())
    .then(aflObject => {
      renderGames(aflObject);
      console.log(aflObject);
    });
  console.log(event.target);
}

document.querySelectorAll(".roundClickHandler").forEach(element => {
  element.onclick = roundWipe;
});

window.onscroll = () => {
  const howFarToScroll =
    document.body.scrollHeight - document.body.clientHeight;
  const currentScrollPosition = document.body.scrollTop;
  const positionFromBottom = howFarToScroll - currentScrollPosition;

  if (positionFromBottom < 75) {
    document.getElementsByClassName("blueBox")[0].classList.add("hidden");
  } else {
    document.getElementsByClassName("blueBox")[0].classList.remove("hidden");
  }
};
