data.fixtures.forEach((game) => {
    console.log(game);

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

    //creating homePosition span
    const homePosition = document.createElement('span');
    homePosition.className = 'position';
    homePosition.textContent = `${data.fixtures.homeTeam.ladderPositionText}`;

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
    awayPosition.textContent = `${data.fixtures.awayTeam.ladderPositionText}`;

    //locating awayPosition span within gameMetadataBox div
    gameMetadataBox.appendChild(awayPosition);
    





    /*const element = document.createElement('span');
   
    TEXT CONTENT

    element.textContent = `${ladderPosition}`;*/


    //locating container with games
    document.getElementById('games').appendChild(gameBox);
});

