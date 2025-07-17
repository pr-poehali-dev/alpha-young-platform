import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-alfa-gray to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img 
                  src="https://cdn.poehali.dev/files/a67f6de2-4714-4e3a-a65d-1f42309c964d.jpg" 
                  alt="Alfa"
                  className="w-8 h-8 rounded"
                />
                <h1 className="text-2xl font-montserrat font-bold text-alfa-red">Alfa-Gen Hub</h1>
              </div>
              <Badge variant="outline" className="bg-alfa-orange text-white px-3 py-1">
                Gen Z Platform
              </Badge>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#feed" className="text-alfa-blue hover:text-alfa-red transition-colors">Лента</a>
              <a href="#stars" className="text-alfa-blue hover:text-alfa-red transition-colors">Звезды</a>
              <a href="#top30" className="text-alfa-blue hover:text-alfa-red transition-colors">TOP 30</a>
              <a href="#impact" className="text-alfa-blue hover:text-alfa-red transition-colors">Impact</a>
              <Button className="bg-alfa-red hover:bg-alfa-orange text-white">
                Войти
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-montserrat font-bold text-alfa-blue mb-4 animate-fade-in">
            Твой мир возможностей
          </h2>
          <p className="text-xl text-alfa-green mb-2 animate-fade-in">
            Твой статус. Твое влияние.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button size="lg" className="bg-alfa-red hover:bg-alfa-orange text-white px-8 py-3">
              <Icon name="Zap" className="mr-2 h-5 w-5" />
              Начать путь
            </Button>
            <Button size="lg" variant="outline" className="border-alfa-blue text-alfa-blue hover:bg-alfa-blue hover:text-white px-8 py-3">
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <Card className="mb-6 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat text-alfa-blue flex items-center gap-2">
                  <Icon name="Flame" className="h-6 w-6 text-alfa-red" />
                  Лента возможностей
                </CardTitle>
                <CardDescription>Самое горячее из мира Alfa-Gen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Feed Item 1 */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-alfa-light to-white rounded-lg border-l-4 border-alfa-orange">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-alfa-orange text-white">МС</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-montserrat font-semibold text-alfa-blue">Мария Степанова</h4>
                        <Badge className="bg-alfa-green text-white">Стартапы</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Запустила новый проект по экологичной упаковке! 🌱 Уже собрала 1M рублей инвестиций.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-alfa-green">
                        <span className="flex items-center gap-1">
                          <Icon name="Heart" className="h-4 w-4" />
                          247
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="MessageCircle" className="h-4 w-4" />
                          32
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feed Item 2 */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-alfa-light to-white rounded-lg border-l-4 border-alfa-red">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-alfa-red text-white">АК</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-montserrat font-semibold text-alfa-blue">Алекс Козлов</h4>
                        <Badge className="bg-alfa-blue text-white">Гейминг</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Выиграл турнир по киберспорту! 🏆 Приз - 500K рублей и контракт с командой.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-alfa-green">
                        <span className="flex items-center gap-1">
                          <Icon name="Heart" className="h-4 w-4" />
                          1.2K
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="MessageCircle" className="h-4 w-4" />
                          89
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TOP 30 Section */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat text-alfa-blue flex items-center gap-2">
                  <Icon name="Trophy" className="h-6 w-6 text-alfa-orange" />
                  TOP 30 до 30
                </CardTitle>
                <CardDescription>Те, кто меняет правила игры</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* TOP Person 1 */}
                  <div className="p-4 bg-gradient-to-br from-alfa-red to-alfa-orange rounded-lg text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-alfa-red font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold">Анна Петрова</h4>
                        <p className="text-sm opacity-90">AI-стартап, 25 лет</p>
                      </div>
                    </div>
                    <p className="text-sm opacity-90 mb-3">
                      Создала ИИ-ассистента для малого бизнеса. Оценка компании - 50M руб.
                    </p>
                    <Badge className="bg-white text-alfa-red">Технологии</Badge>
                  </div>

                  {/* TOP Person 2 */}
                  <div className="p-4 bg-gradient-to-br from-alfa-blue to-alfa-green rounded-lg text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-alfa-blue font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold">Дмитрий Волков</h4>
                        <p className="text-sm opacity-90">Эко-проект, 28 лет</p>
                      </div>
                    </div>
                    <p className="text-sm opacity-90 mb-3">
                      Разработал технологию переработки пластика. Спас 10 тонн отходов.
                    </p>
                    <Badge className="bg-white text-alfa-blue">Экология</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* User Status */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-lg font-montserrat text-alfa-blue">Твой статус</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-alfa-red to-alfa-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
                    7
                  </div>
                  <h4 className="font-montserrat font-semibold text-alfa-blue">Активный</h4>
                  <p className="text-sm text-alfa-green">2,340 баллов</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>До PRO статуса</span>
                    <span className="text-alfa-red">660 баллов</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Alfa-Gen Stars */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-lg font-montserrat text-alfa-blue flex items-center gap-2">
                  <Icon name="Star" className="h-5 w-5 text-alfa-orange" />
                  Звезды Alfa-Gen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* Blogger 1 */}
                  <div className="flex items-center gap-3 p-2 hover:bg-alfa-light rounded-lg transition-colors">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-alfa-orange text-white">ЕК</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h5 className="font-semibold text-alfa-blue text-sm">Елена Кузнецова</h5>
                      <p className="text-xs text-alfa-green">Финансы • 2.3M подписчиков</p>
                    </div>
                    <Button size="sm" className="bg-alfa-red hover:bg-alfa-orange text-white">
                      Подписаться
                    </Button>
                  </div>

                  {/* Blogger 2 */}
                  <div className="flex items-center gap-3 p-2 hover:bg-alfa-light rounded-lg transition-colors">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-alfa-blue text-white">ИС</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h5 className="font-semibold text-alfa-blue text-sm">Игорь Смирнов</h5>
                      <p className="text-xs text-alfa-green">Стартапы • 1.8M подписчиков</p>
                    </div>
                    <Button size="sm" className="bg-alfa-red hover:bg-alfa-orange text-white">
                      Подписаться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Hub */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-lg font-montserrat text-alfa-blue flex items-center gap-2">
                  <Icon name="Heart" className="h-5 w-5 text-alfa-green" />
                  Impact Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-gradient-to-r from-alfa-green to-alfa-blue rounded-lg text-white">
                    <div className="text-2xl font-bold mb-1">2.4M ₽</div>
                    <div className="text-sm opacity-90">Собрано на благотворительность</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-r from-alfa-orange to-alfa-red rounded-lg text-white">
                    <div className="text-2xl font-bold mb-1">1,847</div>
                    <div className="text-sm opacity-90">Деревьев посажено</div>
                  </div>
                  <Button className="w-full bg-alfa-green hover:bg-alfa-blue text-white">
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    Поддержать проект
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;