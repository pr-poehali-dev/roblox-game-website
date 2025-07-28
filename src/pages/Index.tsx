import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const newsItems = [
    {
      id: 1,
      title: "Добавлен EVENT с красной ночью",
      description: "Исследуйте галактику и сражайтесь с врагами в невесомости! Доступны новые корабли и оружие.",
      date: "25 июля 2025",
      type: "Обновление",
      players: "1,250",
      isNew: true
    },
    {
      id: 2,
      title: "Летнее событие: Пиксельная Олимпиада",
      description: "Участвуйте в спортивных соревнованиях и получайте эксклюзивные награды!",
      date: "20 июля 2025", 
      type: "Событие",
      players: "890",
      isNew: true
    },
    {
      id: 3,
      title: "Исправление багов и улучшения",
      description: "Повышена стабильность игры, исправлены проблемы с коннектом и улучшена графика.",
      date: "15 июля 2025",
      type: "Патч",
      players: "2,100",
      isNew: false
    }
  ];

  const communityStats = [
    { label: "Активных игроков", value: "4,240", icon: "Users" },
    { label: "Онлайн сейчас", value: "1,890", icon: "Play" },
    { label: "Серверов", value: "28", icon: "Server" },
    { label: "Событий сегодня", value: "12", icon: "Calendar" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/1bd265a1-a941-4433-beb5-6b2e0ff957c3.png')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-roblox-yellow text-black font-bold text-sm px-4 py-2">
                  🎮 НОВАЯ ИГРА ДОСТУПНА
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                  RUSSIAN
                  <span className="block text-roblox-blue">CORN</span>
                  <span className="block text-roblox-orange">FARMING</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-md">
                  Присоединяйся к эпическим приключениям в мире пикселей! 
                  Сражайся, строй, исследуй вместе с друзьями.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-roblox-blue hover:bg-roblox-blue/80 text-white font-bold px-8 py-4 text-lg">
                  <Icon name="Play" className="mr-2" />
                  ИГРАТЬ СЕЙЧАС
                </Button>
                <Button size="lg" variant="outline" className="border-roblox-orange text-roblox-orange hover:bg-roblox-orange hover:text-white font-bold px-8 py-4 text-lg">
                  <Icon name="Users" className="mr-2" />
                  СООБЩЕСТВО
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {communityStats.map((stat, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700 text-center">
                    <CardContent className="p-4">
                      <Icon name={stat.icon as any} className="w-6 h-6 text-roblox-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="relative">
                <img 
                  src="/img/64649906-0e56-419b-b38b-6fdcd174c8d7.jpg" 
                  alt="Roblox Gaming Setup"
                  className="rounded-2xl shadow-2xl w-full max-w-lg border-4 border-roblox-blue/30"
                />
                <div className="absolute -bottom-4 -right-4 bg-roblox-yellow text-black px-4 py-2 rounded-lg font-bold text-sm">
                  ⭐ 4.8/5 рейтинг
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              🚀 ИГРОВЫЕ НОВОСТИ
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Следите за последними обновлениями, событиями и улучшениями в нашей игре
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="bg-slate-800/50 border-slate-700 hover:border-roblox-blue/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      className={`font-bold ${
                        item.type === 'Обновление' ? 'bg-roblox-blue text-white' :
                        item.type === 'Событие' ? 'bg-roblox-orange text-white' :
                        'bg-slate-600 text-white'
                      }`}
                    >
                      {item.type}
                    </Badge>
                    {item.isNew && (
                      <Badge className="bg-roblox-yellow text-black font-bold">
                        NEW!
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white text-xl font-bold line-clamp-2">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center text-gray-400 text-sm space-x-4">
                    <span>📅 {item.date}</span>
                    <span className="flex items-center">
                      <Icon name="Users" className="w-4 h-4 mr-1" />
                      {item.players}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </CardDescription>
                  <Button 
                    className="w-full bg-roblox-blue/10 hover:bg-roblox-blue text-roblox-blue hover:text-white border border-roblox-blue/30 font-semibold"
                  >
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              👥 НАШЕ СООБЩЕСТВО
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Присоединяйся к активному сообществу игроков со всего мира
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Community Activity */}
            <Card className="bg-gradient-to-br from-roblox-blue/10 to-roblox-blue/5 border-roblox-blue/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Activity" className="mr-2 text-roblox-blue" />
                  Активность сообщества
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Новых игроков сегодня</span>
                  <span className="text-roblox-blue font-bold">+247</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Сообщений в чате</span>
                  <span className="text-roblox-blue font-bold">12,450</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Создано построек</span>
                  <span className="text-roblox-blue font-bold">1,890</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-roblox-blue to-roblox-orange h-2 rounded-full w-3/4"></div>
                </div>
              </CardContent>
            </Card>

            {/* Top Players */}
            <Card className="bg-gradient-to-br from-roblox-orange/10 to-roblox-orange/5 border-roblox-orange/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Trophy" className="mr-2 text-roblox-orange" />
                  Топ игроки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "PixelMaster", score: "15,420", rank: 1 },
                    { name: "BuilderPro", score: "12,890", rank: 2 },
                    { name: "GameHero", score: "11,760", rank: 3 }
                  ].map((player) => (
                    <div key={player.rank} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          player.rank === 1 ? 'bg-roblox-yellow text-black' :
                          player.rank === 2 ? 'bg-gray-300 text-black' :
                          'bg-amber-600 text-white'
                        }`}>
                          {player.rank}
                        </div>
                        <span className="text-white font-semibold">{player.name}</span>
                      </div>
                      <span className="text-roblox-orange font-bold">{player.score}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Join Community */}
            <Card className="bg-gradient-to-br from-roblox-yellow/10 to-roblox-yellow/5 border-roblox-yellow/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="MessageCircle" className="mr-2 text-roblox-yellow" />
                  Присоединяйся
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">
                  Общайся с другими игроками, делись опытом и находи новых друзей!
                </p>
                <div className="space-y-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Icon name="MessageSquare" className="mr-2 w-4 h-4" />
                    Discord сервер
                  </Button>
                  <Button variant="outline" className="w-full border-roblox-yellow text-roblox-yellow hover:bg-roblox-yellow hover:text-black">
                    <Icon name="Users" className="mr-2 w-4 h-4" />
                    Форум
                  </Button>
                </div>
                <div className="text-center text-xs text-gray-400">
                  Более 50,000 активных участников
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;