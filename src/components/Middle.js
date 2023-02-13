export const Middle = () => {
  return (
    <div className="Middle-section">
      <div className="project">
        <h1>Projects</h1>
      </div>
      <div className="projects">
        <div className="carousel">
          <button className="carousel-button prev">Previous</button>
          <button className="carousel-button next">Next</button>
          <ul>
            <li className="slides" data-active>
              <img
                className="garden"
                src="/photos/Screenshot 2023-02-07 at 3.22.47 PM.png"
                alt="garden"
              ></img>
              <p>
                This was my first project learning and getting to know HTML5 and
                CSS. Here I created a website for a fictional Gardening company.
                With this website I made a functioning header that lead to other
                pages for the website as well as a footer that has the ability
                to lead to outside sources such as twitter, youtube, and
                linkedin. Each clickable item on the page has a hover effect as
                well as a unified color scheme.
              </p>
            </li>

            <li className="slides">
              <img
                className="blackjack"
                src="/photos/Screenshot 2023-02-07 at 3.45.19 PM.png"
                alt="blackjack"
              ></img>
              <p>
                Here I was learning Python and created the casino game
                blackjack. Within the game I created the ability to show and
                count the cards you have and how much they equal, as well as
                hide a one card that the dealer had to ensure the real world
                likeness of the game. Another aspect that I added to the game
                was a betting system, within this system you start out with a
                set number of $1000 from there you can bet to your hearts
                content.
                <p>
                  I really enjoyed this project and within it I learned a lot
                  about while loops and if statements. I also learned more about
                  debugging through the process as randomizing the cards and
                  making sure every hand was different was fun and challenging.
                  This is where I began to love python for the ease of the
                  language and the ability to install a plethora of packages to
                  it as well.
                </p>
              </p>
            </li>

            <li className="slides">
              <img
                className="itunes"
                src="/photos/Screenshot 2023-02-07 at 3.51.43 PM.png"
                alt="garden"
              ></img>

              <p>
                This my Itunes search project where I learned about calling API
                methods. In this project I read through the documentation for
                Itunes and how they built out their API. Using Javascript I sent
                a get request with the my search function which in return I
                asked for the API to send back muiltple data. I asked for the
                the artist name, song name, album cover small and large as well
                as small preview of the song.
              </p>
            </li>

            <li className="slides">
              <img className="Journeyal" src="" alt="Journeyal"></img>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
