import React, { useState } from 'react';
import '../../../front/styles/Land.css';
import { Link } from 'react-router-dom';
import SpotifyEmbed from '../component/SpotifyEmbed.jsx'; // Update the path to the SpotifyEmbed component
import myImage from '../../img/LandingPage/pexels-elina-sazonova-3971985.jpg';
import CustomNavbar from '../component/CustomNavbar.js';



function LandingPage() {



  const [selectedTrackUri, setSelectedTrackUri] = useState(null);

  // Define an array of Spotify track URIs that you want to play randomly
  const trackUris = [
    "spotify:track:7qiZfU4dY1lWllzX7mPBI3",
    "spotify:track:1f5cbQtDrykjarZVrShaDI",
    "spotify:track:1AWQoqb9bSvzTjaLralEkT",
    "spotify:track:2MAaiV0bbeq4FpSwPe2rR8",
    "spotify:track:2qOm7ukLyHUXWyR4ZWLwxA",
    "spotify:track:3RaCGXCiiMufRPoexXxGkV",
    "spotify:track:5fEB6ZmVkg63GZg9qO86jh",
    "spotify:track:3MjUtNVVq3C8Fn0MP3zhXa"
    // Add more track URIs here
  ];

  // Function to select a random track from the list
  const selectRandomTrack = () => {
    const randomIndex = Math.floor(Math.random() * trackUris.length);
    setSelectedTrackUri(trackUris[randomIndex]);
  };
  return (

    


    <div id="parallax-world-of-ugg">
      <CustomNavbar></CustomNavbar>
      <section>
        <div class="title">
          <h3 style={{ textAlign: 'center' }}>Hynpos</h3>
          <h1 className='sub-header'>Music paradise Awaits you</h1>
          <button className='play-button' onClick={selectRandomTrack}>
            <span>&#9658;</span> Play Random song
          </button>
        </div>
      </section>

       {/* Display the embedded Spotify player with the selected track URI */}
       {selectedTrackUri && (
        <section>
          <div class="block">
            <p className="first">One good thing about music, when it hits<br /> you, you feel no pain. - Bob Marley</p>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10"></p>

            {/* Paste the Spotify embedded player code here */}
            <div className="spotify-player">
              <iframe
                src={`https://open.spotify.com/embed/track/${selectedTrackUri.split(":")[2]}`}
                width="300"
                height="380"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="Embedded Spotify Player"
              ></iframe>
            </div>
          </div>
        </section>
      )}

        
        <section className='one'>
            <div class="parallax-one">


              <Link to= '/TopTracks'>
              <h2>top tracks</h2>
              </Link>
           
            </div>
        </section>
        
        <section>
          <div class="block">
            <p className="first">One good thing about music, when it hits<br></br> you, you feel no pain.   - bob marley</p>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10"></p>
            <iframe src="https://open.spotify.com/embed/track/6wsqVwoiVH2kde4k4KKAFU" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed/track/1BxfuPKGuaTgP7aM0Bbdwr" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed/track/6WzRpISELf3YglGAh7TXcG" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed/track/6wf7Yu7cxBSPrRlWeSeK0Q" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            
          </div>
        </section>
        
        <section>
          <div class="parallax-two">
          
          <Link to='/TopAlbums'>
          <h2>top albums</h2>
          </Link>
          </div>
        </section>
        
        <section>
          <div class="block">

           
          <p className="first">Music is the soundtrack of your life.<br></br>  - dick clark</p>
            <p class="line-break margin-top-10"></p>
           
            
            <p class="margin-top-10">.</p>
            <iframe src="https://open.spotify.com/embed/album/3SpBlxme9WbeQdI9kx7KAV" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed/album/01sfgrNbnnPUEyz6GZYlt9" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed/album/2WFFcvzM0CgLaSq4MSkyZk" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed/album/3euz4vS7ezKGnNSwgyvKcd" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </section>
        
        
        
        <section>
          <div class="block">
          
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10">.</p>
          </div>
        </section>

        <section>
            <div class="parallax-one">

              <Link to='/TopArtists'>
              <h2>top artists</h2> 
              
              </Link>
             
              
            </div>
        </section>

        <section>
            <div class="block">
            <p className="first">Music happens to be an art form that<br></br> transcends language.- Herbie Hancock</p>
              <p class="line-break margin-top-10"></p>
              <p class="margin-top-10">drake</p>
              
            </div>
          </section>
          
        </div>
    
  )
}

export default LandingPage