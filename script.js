data.fixtures.forEach((game) => {
    console.log(game);

    //set time to find zone
    const timeZone = new Date();
    
    console.log(timeZone);


    //set current date and game date in milliseconds
     const todayInMilliseconds = new Date().getTime();
     const gameTimeInMilliseconds = new Date(game.match.startDateTimes[1].date).getTime();
     const differenceInMilliseconds = gameTimeInMilliseconds - todayInMilliseconds;
     
    //function to convert milliseconds to days
     const convertMillisecondsToDays = (milliseconds) => {
         return milliseconds / (1000 * 60 * 60 * 24);
     }
 
    const differenceInDays = convertMillisecondsToDays(differenceInMilliseconds);
    
    //creating gameContainer div
    const gameBox = document.createElement('div');
    gameBox.className = 'gameContainer';

    //creating homeTeam div
    const homeLogoBox = document.createElement('div');
    homeLogoBox.className = 'logobox';
    
    //creating homeTeam img
    const homeLogo = document.createElement('img');
    homeLogo.className = 'logo';
    homeLogo.src = `images/${game.homeTeam.teamName}_logo.jpg`.toLowerCase();
       
    //locating homeTeam img within homeTeam div
    homeLogoBox.appendChild(homeLogo);
       
    //locating homeTeam div within gameContainer
    gameBox.appendChild(homeLogoBox);

    //creating gameInfo div
    const gameInfoBox = document.createElement('div');
    gameInfoBox.className = 'gameInfo';
    
    //locating gameInfo div within gameContainer
    gameBox.appendChild(gameInfoBox);
        
    //creating gameMetadata div
    const gameMetadataBox = document.createElement('div');
    gameMetadataBox.className = 'gameMetadata';
    
    //locating gameMetadataBox within gameInfo div
    gameInfoBox.appendChild(gameMetadataBox);

    if (differenceInDays < 0) {

        const homeScore = document.createElement('div');
        homeScore.className = 'scoreDiv';
        gameMetadataBox.appendChild(homeScore);

        const homeTotal = document.createElement('span');
        homeTotal.className = 'totalScore';
        homeTotal.textContent = `${game.homeTeam.totalScore}`;
        homeScore.appendChild(homeTotal);

        const homeBreakdown = document.createElement('span');
        homeBreakdown.className = 'breakdownScore';
        homeBreakdown.textContent = `${game.homeTeam.goals}.${game.homeTeam.behinds}`;
        homeScore.appendChild(homeBreakdown);

        const gameOver = document.createElement('span');
        gameOver.className = 'finishedGame';
        gameOver.textContent = 'Full Time';
        gameMetadataBox.appendChild(gameOver);

        const awayScore = document.createElement('div');
        awayScore.className = 'scoreDiv';
        gameMetadataBox.appendChild(awayScore);

        const awayTotal = document.createElement('div');
        awayTotal.className = 'totalScore';
        awayTotal.textContent = `${game.awayTeam.totalScore}`;
        awayScore.appendChild(awayTotal);

        const awayBreakdown = document.createElement('div');
        awayBreakdown.className = 'breakdownScore';
        awayBreakdown.textContent = `${game.awayTeam.goals}.${game.awayTeam.behinds}`;
        awayScore.appendChild(awayBreakdown);

        const resultDiv = document.createElement('div');
        resultDiv.className = 'gameResult';
        gameInfoBox.appendChild(resultDiv);

        const result = document.createElement('span');
        result.className = 'resultInfo';
        result.textContent = `${game.match.matchResultText}`;
        resultDiv.appendChild(result);

    } else {

        //creating homePosition span
        const homePosition = document.createElement('span');
        homePosition.className = 'position';
        homePosition.textContent = `${game.homeTeam.ladderPositionText}`;

        //locating homePosition span within gameMetadataBox div
        gameMetadataBox.appendChild(homePosition);
    
        //creating eta h3
        const makeETA = document.createElement('h3');
        makeETA.className = 'eta';

        //locating makeETA h3 within gameMetadataBox div
        gameMetadataBox.appendChild(makeETA);

        //creating awayPosition span
        const awayPosition = document.createElement('span');
        awayPosition.className = 'position';
        awayPosition.textContent = `${game.awayTeam.ladderPositionText}`;

        //locating awayPosition span within gameMetadataBox div
        gameMetadataBox.appendChild(awayPosition);

        //creating time of game div
        const timeAndPlaceBox = document.createElement('div');
        timeAndPlaceBox.className = 'timePlaceBox';
    
        //creating time and place span
        const timeAndPlace = document.createElement('span');
        timeAndPlace.className = 'timePlace';
        timeAndPlace.textContent = `${game.match.startDateTimes[1].time} my time, ${game.match.venueShortName}`;

        //creating awayTeam div
        const awayLogoBox = document.createElement('div');
        awayLogoBox.className = 'logobox';

        //creating awayTeam img
        const awayLogo = document.createElement('img');
        awayLogo.className = 'logo';
        awayLogo.src = `images/${game.awayTeam.teamName}_logo.jpg`.toLowerCase();
    
        //locating awayTeam img within awayTeam div
        awayLogoBox.appendChild(awayLogo);
    
        //locating awayTeam div within gameContainer
        gameBox.appendChild(awayLogoBox);

    }
    
    

    







    /*const element = document.createElement('span');
   
    TEXT CONTENT

    element.textContent = `${ladderPosition}`;*/


    //locating container with games
    document.getElementById('games').appendChild(gameBox);
});

