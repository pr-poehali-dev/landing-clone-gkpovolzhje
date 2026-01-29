import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ГК Поволжье
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Строим будущее
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                вместе с вами
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональное строительство жилых и коммерческих объектов. 
              Более 15 лет опыта и сотни реализованных проектов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Icon name="Briefcase" size={20} className="mr-2" />
                Наши проекты
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:border-primary transition-all hover:scale-105">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4 font-semibold">
                О компании
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Надёжность и качество в каждом проекте
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                ГК Поволжье — это команда профессионалов с более чем 15-летним опытом в строительной отрасли. 
                Мы специализируемся на возведении жилых комплексов, коммерческих зданий и промышленных объектов.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша миссия — создавать пространства, в которых людям комфортно жить и работать. 
                Мы используем только проверенные материалы и современные технологии строительства.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/placeholder.svg" 
                alt="Строительство" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-4 font-semibold">
              Наши услуги
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Полный спектр строительных работ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От проектирования до сдачи объекта под ключ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Home",
                title: "Жилые комплексы",
                description: "Строительство многоквартирных домов и коттеджных поселков с современной инфраструктурой"
              },
              {
                icon: "Building2",
                title: "Коммерческие объекты",
                description: "Возведение торговых центров, офисных зданий и бизнес-центров любой сложности"
              },
              {
                icon: "Factory",
                title: "Промышленные здания",
                description: "Строительство производственных цехов, складов и логистических комплексов"
              },
              {
                icon: "HardHat",
                title: "Реконструкция",
                description: "Модернизация и капремонт существующих зданий с учетом современных стандартов"
              },
              {
                icon: "Wrench",
                title: "Инженерные системы",
                description: "Монтаж и обслуживание всех коммуникаций: электричество, вода, отопление, вентиляция"
              },
              {
                icon: "FileText",
                title: "Проектирование",
                description: "Разработка полного пакета проектной документации и получение разрешений"
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4 font-semibold">
              Преимущества
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Shield",
                title: "Гарантия качества",
                description: "5 лет гарантии на все виды работ"
              },
              {
                icon: "Clock",
                title: "Соблюдение сроков",
                description: "Сдача объектов точно в срок по договору"
              },
              {
                icon: "Award",
                title: "Опыт и экспертиза",
                description: "Команда из 200+ специалистов"
              },
              {
                icon: "DollarSign",
                title: "Прозрачные цены",
                description: "Фиксированная стоимость без скрытых платежей"
              }
            ].map((advantage, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-muted/50 to-background hover:shadow-xl transition-all hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={advantage.icon} size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-accent via-accent/95 to-accent text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-4 font-semibold">
                Контакты
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение часа
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+78005553535" className="text-lg hover:text-primary transition-colors">
                      +7 (800) 555-35-35
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@gkpovolzhje.ru" className="text-lg hover:text-primary transition-colors">
                      info@gkpovolzhje.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-lg text-white/80">
                      г. Самара, ул. Строителей, д. 25
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Оставьте заявку</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон" 
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email" 
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте" 
                      className="min-h-32"
                    />
                  </div>
                  <Button className="w-full h-12 text-lg" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ГК Поволжье
              </div>
              <p className="text-white/70">
                Строим надёжное будущее с 2009 года
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-white/70 hover:text-primary transition-colors">Главная</a>
                <a href="#about" className="block text-white/70 hover:text-primary transition-colors">О компании</a>
                <a href="#services" className="block text-white/70 hover:text-primary transition-colors">Услуги</a>
                <a href="#advantages" className="block text-white/70 hover:text-primary transition-colors">Преимущества</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>© 2024 ГК Поволжье. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
