import logoLexpin from "./assets/Lexpin_Logo-color.png";
import SocialMedia from "./componets/SocialMedia";
import iconLexpin from "./assets/lexpin_Icono-color.png";
function SocialMediaPage() {
  return (
    <>
      <section className="w-full py-8 md:py-5 lg:py-0 bg-no-repeat bg-cover bg-[url('./assets/grafiente.png')] dark:bg-gray-800 md:bg-[url('./assets/Wallpaper.png')]">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:gap-1 md:px-6 lg:gap-6">
          <div className="space-y-3 grid grid-rows-2 place-items-center">
            <img className="w-[282px]" src={logoLexpin} alt="" />
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              ¡No te pierdas de nada! Explora más contenido y dinámicas en
              nuestras redes sociales:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {SocialMedia.map((SocialNetwork) => (
              <a
                className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-4 transition-colors hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-800 shadow-md hover:shadow-lg"
                href={SocialNetwork.link}
                key={SocialNetwork.name}
              >
                <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                  {SocialNetwork.name === "LexpinWebSite" ? (
                    <img className="w-[46px]" src={iconLexpin} alt="Lexpin" />
                  ) : (
                    SocialNetwork.icon
                  )}
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {SocialNetwork.name}
                </div>
              </a>
            ))}
          </div>
          <div className="py-[0.300em]">
            <span className="my-2 text-gray-500 text-sm">© 2024 All rights reserved. by Lexpin</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default SocialMediaPage;
