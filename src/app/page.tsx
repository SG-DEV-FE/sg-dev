"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon, UserIcon } from '@heroicons/react/24/outline';
import { useEffect } from "react";
import '../../public/styles/custom.scss';
import "./globals.css";

export default function HomePage() {
  // Smooth scroll function to replace AnchorLink
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation effect similar to MDBAnimation
  useEffect(() => {
    const jumbotron = document.getElementById('jumbotron');
    if (jumbotron) {
      jumbotron.classList.add('visible');
    }
  }, []);

  return (
    <main>
      {/* Jumbotron section */}
      <section 
        id="jumbotron" 
        className="fade-in h-screen hero-gradient-overlay flex items-center justify-center text-white"
      >
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Stephen Gault
          </h1>
          <hr className="border-t-2 border-white w-3/4 mx-auto my-6" />
          <h2 className="text-2xl md:text-3xl mb-12">
            UI / UX Developer
          </h2>

          <button
            onClick={() => scrollToSection('personality')}
            className="mt-8 text-white"
            aria-label="Scroll down"
          >
            <ChevronDownIcon className="h-10 w-10 mx-auto animate-bounce-custom" />
          </button>
        </div>
      </section>

      {/* Intro section */}
      <section id="personality" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12">
            <div className="w-40 h-40 md:w-48 md:h-48 mb-8 relative">
              <a 
                href="https://www.linkedin.com/in/stegault/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-full overflow-hidden shadow-xl"
              >
                <Image
                  src="https://res.cloudinary.com/stegault/image/upload/v1604251457/steve-profile_p14vit.jpg"
                  alt="Stephen Gault - Software Developer / Graphic Design"
                  fill
                  className="rounded-full object-cover"
                />
              </a>
            </div>
            <h3 className="text-xl md:text-2xl max-w-3xl text-center mb-6">
              Welcome Ladies & Gents / Orruks & Duardin / Cats & Dogs, you get
              the picture.
            </h3>
            <p className="text-center max-w-2xl mb-8">
              This is me (song's in your head now). I built this little old site to showcase my skills and generally show off some of my personality, that as you have no doubt already surmised is on the dry wit side...
              <br />
              Also its a work in progress so its rough around the edges, like
              all good personal projects are...ahem
            </p>
            <p className="text-center max-w-2xl mb-8">
              Call it an informal cv if you want.
              <br />
              Okay, now what... um... lets. er... oh I know. scroll down a bit
              more.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="max-w-md image-hover-scale">
              <Image
                src="https://res.cloudinary.com/stegault/image/upload/f_auto,q_auto:eco/v1591012741/ntsh_frmtxf.png"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
                alt="keep going"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 lg:w-5/12">
              <blockquote className="border-l-4 border-blue-600 pl-4 py-2 mb-6">
                <span className="text-gradient-primary mr-2">
                  <UserIcon className="h-6 w-6 inline" />
                </span> 
                Personality (or lack of)
              </blockquote>
              <div className="hidden md:block text-center mb-8">
                <Image
                  src="https://res.cloudinary.com/stegault/image/upload/v1591012741/dark_angel_veteran_vyleu2.jpg"
                  width={400}
                  height={500}
                  className="rounded-lg max-w-full h-auto shadow-lg"
                  alt="Dark Angels Space Marine Veteran copyright Games-Workshop plc"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-7/12 md:pl-8">
              <p className="mb-4">
                Now those of you who are viewing this on a mobile phone before using a tablet or pc.... nice phone. If your viewing this on a pc / desktop / laptop then you can probably see the mahoosive (its a word) Space Marine. I believe it is what's referred to as declaring if you have any addictions... Yes I do. Its called Warhammer 40K.
              </p>
              <p className="mb-4">
                Seriously its my main hobby apart from Gaming{' '}
                <svg className="h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>{' '} and{' '}
                <svg className="h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16v12H4zM12 2v4M18 4l2 2M20 10h2M18 16l2 2M12 18v4M6 16l-2 2M4 10H2M6 4l-2 2"></path>
                </svg>,{' '}
                look at them pretty icons. So gaming is a big part of who I am. I have been gaming since the days of the Atari 2600 (centipede was my go to game). Now its mostly PlayStation 4 or my PC. Gamertags can be found further down the page if you're interested in checking me out. Awesome gaming fact I have been credited on the BAFTA winning game Tearaway for the PlayStation Vita.
              </p>
              <p className="mb-4">
                Motorcycling is a big part off my life also, I used to commute all year
                round on a Honda CBR 600 rr (repsol paint). All weather, yes
                even snow (which even I admit can be pushing my luck, if it is
                very heavy obviously gonna use public transport). I love the TT
                in the Isle of Man and wish I could go there more often as it
                feels very much a home from home. Hoping to eventually own a BMW S1000RR.
              </p>
              <p className="mb-4">
                I was going to mention my family of 3 boys and the wife but not fair to place them on here so we'll skip them for now.
              </p>
              <p className="mb-4">
                Now at the moment I am rebuilding and planning a new design for this site. so if you would like to get in touch or request my CV please feel free to use the form Below.
              </p>
              <div className="mt-8">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
