import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Badge } from './components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Scale, 
  Shield, 
  Users, 
  Award, 
  CheckCircle, 
  MessageCircle,
  Star,
  Clock,
  BookOpen,
  Briefcase
} from 'lucide-react';
import './App.css';

// Importar imagens
import logo from './assets/logo.png';
import satisfiedPeople1 from './assets/satisfied_people_1.jpg';
import satisfiedPeople2 from './assets/satisfied_people_2.jpg';
import satisfiedPeople3 from './assets/satisfied_people_3.jpg';
import satisfiedPeople4 from './assets/satisfied_people_4.jpg';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. 
Email: ${formData.email}
Assunto: ${formData.subject}
Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5551981077272?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openWhatsApp = () => {
    const whatsappUrl = 'https://wa.me/5551981077272?text=Olá! Gostaria de agendar uma consulta jurídica.';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Fernando Trindade Advocacia" className="h-12 w-auto" />
          </div>
          <Button 
            onClick={openWhatsApp}
            className="whatsapp-button text-white font-semibold px-6 py-2 rounded-full"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Mais de 15 anos de experiência
              </Badge>
              <h1 className="hero-title text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Defenda Seus <span className="text-accent">Direitos</span> com Excelência
              </h1>
              <p className="hero-subtitle text-xl mb-8 text-white/90 leading-relaxed">
                Fernando Marchi Trindade, Mestre pela UFRGS, oferece assessoria jurídica 
                especializada com foco em resultados e satisfação do cliente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={openWhatsApp}
                  size="lg" 
                  className="whatsapp-button text-white font-semibold px-8 py-4 text-lg rounded-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consulta Gratuita
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full"
                  onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="floating">
              <img 
                src={satisfiedPeople1} 
                alt="Clientes satisfeitos" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Casos Resolvidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-gray-600">Resposta Garantida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={satisfiedPeople4} 
                alt="Fernando Marchi Trindade" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">
                Sobre o Advogado
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Fernando Marchi Trindade
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Advogado especializado com Mestrado pela Universidade Federal do Rio Grande do Sul (UFRGS), 
                com mais de 15 anos de experiência em diversas áreas do Direito. Comprometido em oferecer 
                soluções jurídicas eficazes e personalizadas para cada cliente.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Mestre pela UFRGS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">15+ Anos de Experiência</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Especialista Reconhecido</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">500+ Clientes Atendidos</span>
                </div>
              </div>
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="whatsapp-button text-white font-semibold px-8 py-4 rounded-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale Comigo Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Áreas de Atuação
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Especialidades Jurídicas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos assessoria completa em diversas áreas do Direito, 
              sempre com foco na excelência e nos melhores resultados.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Direito Civil",
                description: "Contratos, responsabilidade civil, direitos reais e obrigações."
              },
              {
                icon: Briefcase,
                title: "Direito Empresarial",
                description: "Constituição de empresas, contratos comerciais e consultoria."
              },
              {
                icon: Users,
                title: "Direito de Família",
                description: "Divórcio, guarda, pensão alimentícia e sucessões."
              },
              {
                icon: Shield,
                title: "Direito do Trabalho",
                description: "Rescisões, verbas trabalhistas e processos trabalhistas."
              },
              {
                icon: Award,
                title: "Direito do Consumidor",
                description: "Defesa dos direitos do consumidor e relações de consumo."
              },
              {
                icon: BookOpen,
                title: "Direito Imobiliário",
                description: "Compra, venda, locação e regularização de imóveis."
              }
            ].map((area, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Depoimentos
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              O Que Nossos Clientes Dizem
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: satisfiedPeople2,
                name: "Maria Silva",
                rating: 5,
                text: "Excelente profissional! Resolveu meu caso com muita competência e agilidade."
              },
              {
                image: satisfiedPeople3,
                name: "João Santos",
                rating: 5,
                text: "Recomendo totalmente. Atendimento personalizado e resultados excepcionais."
              },
              {
                image: satisfiedPeople1,
                name: "Ana Costa",
                rating: 5,
                text: "Profissional dedicado e experiente. Superou todas as minhas expectativas."
              }
            ].map((depoimento, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={depoimento.image} 
                      alt={depoimento.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{depoimento.name}</h4>
                      <div className="flex">
                        {[...Array(depoimento.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{depoimento.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary">
                Entre em Contato
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Agende Sua Consulta
              </h2>
              <p className="text-lg text-gray-600">
                Preencha o formulário abaixo e entraremos em contato em até 24 horas.
              </p>
            </div>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Assunto *
                    </Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione o assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="direito-civil">Direito Civil</SelectItem>
                        <SelectItem value="direito-empresarial">Direito Empresarial</SelectItem>
                        <SelectItem value="direito-familia">Direito de Família</SelectItem>
                        <SelectItem value="direito-trabalho">Direito do Trabalho</SelectItem>
                        <SelectItem value="direito-consumidor">Direito do Consumidor</SelectItem>
                        <SelectItem value="direito-imobiliario">Direito Imobiliário</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Descreva seu caso
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Conte-nos mais detalhes sobre sua situação..."
                    />
                  </div>
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="whatsapp-button text-white font-semibold px-12 py-4 text-lg rounded-full"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Enviar via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logo} alt="Fernando Trindade Advocacia" className="h-16 w-auto mb-4 brightness-0 invert" />
              <p className="text-white/80 mb-4">
                Advocacia especializada com mais de 15 anos de experiência, 
                oferecendo soluções jurídicas eficazes e personalizadas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>(51) 98107-7272</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>contato@fernandotrindade.adv.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Porto Alegre - RS</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" />
                  <span>Segunda a Sexta: 8h às 18h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" />
                  <span>Sábado: 8h às 12h</span>
                </div>
                <div className="mt-4">
                  <Button 
                    onClick={openWhatsApp}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp 24h
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Fernando Marchi Trindade - Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
