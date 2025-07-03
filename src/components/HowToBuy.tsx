import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HowToBuy = () => {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Как купить Smart Man
          </h2>
          <p className="text-xl text-gray-300">
            Простые шаги для начала инвестирования в будущее
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-slate-800 border-slate-700 text-center">
            <CardHeader>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <CardTitle className="text-white">Создайте кошелек</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Установите MetaMask или другой совместимый кошелек
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 text-center">
            <CardHeader>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <CardTitle className="text-white">Купите ETH</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Пополните кошелек Ethereum для обмена на Smart Man
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 text-center">
            <CardHeader>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <CardTitle className="text-white">Обменяйте на SMART</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Используйте Uniswap или другую DEX для покупки токенов
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Доступные платформы
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white relative overflow-hidden group">
                <img
                  src="https://cdn.poehali.dev/files/952e0e16-caa4-44d1-ae36-11f3cb8e3a72.jpg"
                  alt="Smart Man"
                  className="w-5 h-5 rounded-full mr-2 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                Uniswap
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white relative overflow-hidden group">
                <img
                  src="https://cdn.poehali.dev/files/952e0e16-caa4-44d1-ae36-11f3cb8e3a72.jpg"
                  alt="Smart Man"
                  className="w-5 h-5 rounded-full mr-2 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                1inch
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white relative overflow-hidden group">
                <img
                  src="https://cdn.poehali.dev/files/952e0e16-caa4-44d1-ae36-11f3cb8e3a72.jpg"
                  alt="Smart Man"
                  className="w-5 h-5 rounded-full mr-2 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                SushiSwap
              </Button>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white relative overflow-hidden group">
                <img
                  src="https://cdn.poehali.dev/files/952e0e16-caa4-44d1-ae36-11f3cb8e3a72.jpg"
                  alt="Smart Man"
                  className="w-5 h-5 rounded-full mr-2 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                PancakeSwap
              </Button>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-4">
              Контракт токена
            </h4>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <code className="bg-slate-700 text-green-400 px-4 py-2 rounded font-mono text-sm">
                0x1234567890abcdef...
              </code>
              <Button
                size="sm"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <Icon name="Copy" size={16} className="mr-2" />
                Копировать
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
