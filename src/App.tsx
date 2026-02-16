import { motion } from 'framer-motion';
import { 
  User, 
  Heart, 
  Video, 
  MessageCircleQuestion, 
  Sprout, 
  Sparkles, 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import { useState } from 'react';

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Abordagem', href: '#abordagem' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-primary-pink selection:text-text-main">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl text-text-main tracking-tight">
                Dra. Beatriz Sanches
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-main/80 hover:text-text-main text-sm uppercase tracking-wider transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-text-main hover:text-gray-600 focus:outline-none p-2"
                aria-label="Menu principal"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-text-main hover:bg-primary-pink/20 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-bg via-primary-pink/20 to-bg">
        {/* Abstract Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-pink/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent-lavender/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '4s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm md:text-base uppercase tracking-[0.2em] text-gray-500 mb-4">
              Psicóloga Clínica | CRP 06/1357894
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif text-text-main mb-6 leading-tight">
              Um espaço seguro para <br />
              <span className="italic text-gray-600">florescer e transformar</span> <br/>
              seus pensamentos.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Acolhimento especializado através da Terapia Cognitivo-Comportamental para ajudar você a encontrar equilíbrio e clareza emocional.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contato"
                className="px-8 py-4 bg-text-main text-white rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                className="px-8 py-4 bg-white text-text-main border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
              >
                Saiba Mais
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder */}
            <motion.div 
              {...fadeInUp}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary-pink/20 rounded-tl-[100px] rounded-br-[100px] transform translate-x-4 translate-y-4 -z-10" />
              <div className="relative overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-xl aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop" 
                  alt="Beatriz Sanches em seu consultório" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div 
              {...fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-4xl font-serif text-text-main mb-2">Sobre Mim</h2>
              <div className="w-20 h-1 bg-primary-pink rounded-full mb-6" />
              
              <p className="text-gray-600 leading-relaxed text-lg">
                Acredito que a terapia é uma jornada de autodescoberta e fortalecimento. Com mais de 8 anos de experiência, meu foco é oferecer um ambiente livre de julgamentos, onde possamos juntas identificar padrões de pensamento e construir novas formas de lidar com os desafios da vida.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Sou mestre em Psicologia Clínica e apaixonada pelo desenvolvimento humano, com especialização em Terapia Cognitivo-Comportamental (TCC) e Saúde Mental da Mulher.
              </p>
              
              <div className="pt-6 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-serif text-2xl text-text-main">8+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Anos de Experiência</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-text-main">Mestre</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Psicologia Clínica</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-text-main mb-4">Como posso ajudar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Atendimentos personalizados para suas necessidades específicas, presenciais ou online.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <User size={32} className="text-gray-700" />,
                title: "Terapia Individual",
                desc: "Foco em ansiedade, depressão e autoestima, promovendo autoconhecimento.",
                color: "bg-primary-pink/30"
              },
              {
                icon: <Heart size={32} className="text-gray-700" />,
                title: "Terapia de Casal",
                desc: "Mediação de conflitos e fortalecimento de vínculos afetivos e comunicação.",
                color: "bg-primary-blue/30"
              },
              {
                icon: <Video size={32} className="text-gray-700" />,
                title: "Terapia Online",
                desc: "A mesma qualidade e ética, no conforto e segurança do seu lar.",
                color: "bg-accent-lavender/40"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 group cursor-default"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif text-text-main mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="abordagem" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-mint/20 skew-x-12 transform origin-top-right -z-0" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-serif text-text-main mb-6">Abordagem TCC</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                A Terapia Cognitivo-Comportamental é uma abordagem estruturada e baseada em evidências. Focamos em entender como seus pensamentos influenciam seus sentimentos e comportamentos.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <MessageCircleQuestion size={24} />,
                    title: "Pensamentos",
                    desc: "Entender como interpretamos o mundo é o primeiro passo para a mudança."
                  },
                  {
                    icon: <Sprout size={24} />,
                    title: "Crescimento",
                    desc: "Pequenas mudanças diárias florescem em transformações duradouras."
                  },
                  {
                    icon: <Sparkles size={24} />,
                    title: "Transformação",
                    desc: "A borboleta simboliza o processo de se tornar quem você realmente é, com leveza e força."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-bg rounded-full flex items-center justify-center text-text-main shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-text-main mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-accent-lavender/20 flex items-center justify-center p-8"
            >
              <div className="text-center">
                <p className="font-serif text-3xl italic text-gray-500 mb-4">
                  "O principal objetivo da terapia não é transportar o paciente para um impossível estado de felicidade, mas sim ajudá-lo a adquirir firmeza e paciência diante do sofrimento."
                </p>
                <p className="text-sm uppercase tracking-widest text-gray-400">— Carl Jung</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif text-text-main mb-4">Entre em Contato</h2>
              <p className="text-gray-600">
                Dê o primeiro passo para sua transformação. Preencha o formulário abaixo ou entre em contato pelo WhatsApp.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all"
                  placeholder="(11) 98888-7777"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-pink focus:ring-2 focus:ring-primary-pink/20 outline-none transition-all resize-none"
                  placeholder="Olá Beatriz, gostaria de agendar uma consulta..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-primary-pink text-gray-800 font-medium rounded-xl hover:bg-pink-200 transition-colors shadow-sm hover:shadow-md"
              >
                Enviar Mensagem
              </button>
            </form>
            
            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                    Ou envie um e-mail diretamente para <a href="mailto:contato@beatrizsanches.com.br" className="text-primary-pink hover:underline font-medium">contato@drabeatrizsanches.com.br</a>
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl text-text-main">Beatriz Sanches</h3>
              <p className="text-sm text-gray-500 mt-1">Psicóloga Clínica | CRP 06/1357894</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contato@beatrizsanches.com.br" className="text-gray-400 hover:text-accent-lavender transition-colors">
                <Mail size={20} />
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Av. das Orquídeas, 1000 - Sala 42, Edifício Harmonia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>(11) 98888-7777</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-gray-400">
            © {new Date().getFullYear()}Beatriz Sanches. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
