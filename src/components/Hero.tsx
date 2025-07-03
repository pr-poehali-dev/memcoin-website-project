import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative z-10 flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src="https://cdn.poehali.dev/files/fa13ccd1-e7e9-4a38-b335-f41cc449026c.jpeg"
            alt="Smart Man"
            className="w-80 h-80 rounded-2xl mx-auto mb-8 border-4 border-blue-500 shadow-2xl object-cover"
          />
          <h1 className="text-6xl font-bold text-white mb-4 font-montserrat">
            SMART MAN
          </h1>
          <p className="text-xl text-blue-300 mb-8 font-roboto">
            Мемкойн для умных инвесторов • Игровые механики • NFT
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold relative overflow-hidden group"
          >
            <img
              src="https://cdn.poehali.dev/files/fa13ccd1-e7e9-4a38-b335-f41cc449026c.jpeg"
              alt="Smart Man"
              className="w-6 h-6 rounded-full mr-2 opacity-70 group-hover:opacity-100 transition-opacity"
            />
            Купить токен
            <Icon name="TrendingUp" className="ml-2" size={20} />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg font-semibold relative overflow-hidden group"
          >
            <img
              src="https://cdn.poehali.dev/files/fa13ccd1-e7e9-4a38-b335-f41cc449026c.jpeg"
              alt="Smart Man"
              className="w-6 h-6 rounded-full mr-2 opacity-70 group-hover:opacity-100 transition-opacity"
            />
            Whitepaper
            <Icon name="BookOpen" className="ml-2" size={20} />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">1M+</div>
            <div className="text-gray-300">Токенов в обороте</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300">Держателей</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Торговля</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
