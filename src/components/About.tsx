import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            О токене Smart Man
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Революционный мемкойн, сочетающий интеллект, игровые механики и
            NFT-технологии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 mb-4">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <CardTitle className="text-white">Игровые механики</CardTitle>
              <CardDescription className="text-gray-300">
                Уникальная система стейкинга с игровыми элементами
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Зарабатывайте токены через мини-игры, квесты и интеллектуальные
                задачи
              </p>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white relative overflow-hidden group">
                <img
                  src="https://cdn.poehali.dev/files/952e0e16-caa4-44d1-ae36-11f3cb8e3a72.jpg"
                  alt="Smart Man"
                  className="w-5 h-5 rounded-full mr-2 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                Играть
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 mb-4">
                <Icon name="Image" size={24} className="text-white" />
              </div>
              <CardTitle className="text-white">NFT коллекция</CardTitle>
              <CardDescription className="text-gray-300">
                Коллекционные NFT с пользой для экосистемы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Уникальные NFT Smart Man дают бонусы к стейкингу и доступ к
                эксклюзивным играм
              </p>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white relative overflow-hidden group">
                <img
                  src="https://cdn.poehali.dev/files/952e0e16-caa4-44d1-ae36-11f3cb8e3a72.jpg"
                  alt="Smart Man"
                  className="w-5 h-5 rounded-full mr-2 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                Коллекция
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 mb-4">
                <Icon name="Brain" size={24} className="text-white" />
              </div>
              <CardTitle className="text-white">Интеллект</CardTitle>
              <CardDescription className="text-gray-300">
                Токен для думающих инвесторов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Алгоритмы машинного обучения для оптимизации доходности и
                снижения рисков
              </p>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white relative overflow-hidden group">
                <img
                  src="https://cdn.poehali.dev/files/952e0e16-caa4-44d1-ae36-11f3cb8e3a72.jpg"
                  alt="Smart Man"
                  className="w-5 h-5 rounded-full mr-2 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                Аналитика
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
