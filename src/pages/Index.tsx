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
            СК Поволжье
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
              Строительство деревянных домов, бань и малых архитектурных форм. 
              С 2010 года используем древесину высших сортов кировского леса
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
                СК Поволжье — это команда специалистов с опытом работы с 2010 года. 
                Мы специализируемся на строительстве деревянных домов, бань, бытовок и других малых архитектурных форм.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша миссия — создавать уютные и надежные деревянные дома для комфортной жизни. 
                Мы работаем по договору и используем только древесину высших сортов кировского леса.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">14+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">30%</div>
                  <div className="text-sm text-muted-foreground">предоплата</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">договор</div>
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
                title: "Деревянные дома",
                description: "Строительство экологичных домов из древесины высших сортов кировского леса под ключ"
              },
              {
                icon: "Waves",
                title: "Бани и сауны",
                description: "Возведение русских бань и саун из качественной древесины с соблюдением всех традиций"
              },
              {
                icon: "Warehouse",
                title: "Бытовки",
                description: "Практичные и долговечные бытовки для дачи, стройки или хозяйственных нужд"
              },
              {
                icon: "Trees",
                title: "Малые архитектурные формы",
                description: "Беседки, навесы, веранды и другие деревянные конструкции для вашего участка"
              },
              {
                icon: "Ruler",
                title: "Индивидуальное проектирование",
                description: "Составим идеальный проект с учётом ваших желаний, внесём изменения в типовой план"
              },
              {
                icon: "Truck",
                title: "Доставка и монтаж",
                description: "Полный цикл работ: от производства до установки готовой конструкции на вашем участке"
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
                icon: "TreePine",
                title: "Кировский лес",
                description: "Используем древесину высших сортов"
              },
              {
                icon: "FileCheck",
                title: "Работа по договору",
                description: "Все работы выполняются строго по договору"
              },
              {
                icon: "Wallet",
                title: "Удобная оплата",
                description: "Предоплата всего 30% от стоимости"
              },
              {
                icon: "Users",
                title: "Опытные мастера",
                description: "Специалисты с опытом работы с 2010 года"
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
                Готовы обсудить ваш проект? Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+78002505141" className="text-lg hover:text-primary transition-colors">
                      8 (800) 250-51-41
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@sk-povolzhye.ru" className="text-lg hover:text-primary transition-colors">
                      info@sk-povolzhye.ru
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
                      Республика Марий Эл, Чувашия
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
                СК Поволжье
              </div>
              <p className="text-white/70">
                Строим деревянные дома с 2010 года
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
            <p>© 2024 СК Поволжье. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
