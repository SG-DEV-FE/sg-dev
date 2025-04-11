import Image from "next/image";

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-g py-5" id="gallery">
        <div className="container mx-auto px-6">
          <div className="flex flex-col mb-6">
            <div className="w-full">
              <blockquote className="border-l-4 border-blue-600 pl-4 py-2 mb-4">
                <span className="text-gradient-primary text-2xl mr-2">🎨</span> Gallery
              </blockquote>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-full">
              <p className="mb-6">
                Here is a gallery of my recent Instagram posts, it will usually contain
                mainly photography and miniatures. With the occasional bit of
                motorcycle feed <br /> I can be found under the name{' '}
                <a href="https://www.instagram.com/fallen_hunter_castiel/" 
                   className="text-blue-600 hover:text-blue-800 underline">
                  fallen_hunter_castiel
                </a>
              </p>
              
              <div className="flex justify-center mb-8">
                <Image 
                  src="https://res.cloudinary.com/stegault/image/upload/v1604251457/fallen_hunter_castiel_nametag_atak9e.webp" 
                  alt="steve gault instagram"
                  width={200}
                  height={200}
                  className="rounded shadow-lg"
                />
              </div>

              {/* SnapWidget */}
              <div className="w-full h-[600px]">
                <iframe
                  src="https://snapwidget.com/embed/886590"
                  className="w-full h-full border-0"
                  title="Instagram feed"
                  allowTransparency={true}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .text-gradient-primary {
          background: linear-gradient(40deg, #ff6ec4, #7873f5);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .bg-g {
          background-color: #efefef;
        }
      `}</style>
    </main>
  );
}