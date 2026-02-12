
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown, 
  Play, 
  Info, 
  Github, 
  ExternalLink,
  Beaker,
  Droplets,
  Zap,
  Settings,
  Battery,
  Cpu
} from 'lucide-react';
import { MATERIALS, STEPS, VALIDATIONS, TOOLS } from './constants';
import VortexAnimation from './components/VortexAnimation';
import { Step3Illustration, Step4Illustration } from './components/StepIllustrations';
import { ModelViewer } from './components/ModelViewer';

// Helper for dynamic icons
const IconMap: Record<string, React.ReactNode> = {
  'Droplets': <Droplets className="w-6 h-6" />,
  'Settings': <Settings className="w-6 h-6" />,
  'Zap': <Zap className="w-6 h-6" />,
  'Cpu': <Cpu className="w-6 h-6" />,
  'Battery': <Battery className="w-6 h-6" />
};

const App: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-lg border-b border-cyan-900/50' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-4 h-4 bg-slate-950 rounded-full"></div>
            </div>
            <span className="font-orbitron font-bold text-xl tracking-tighter text-cyan-400">VORTEX ENGINE</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-widest text-slate-400 uppercase">
            <a href="#theory" className="hover:text-cyan-400 transition-colors">Teoría 3D</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">Origen</a>
            <a href="#materials" className="hover:text-cyan-400 transition-colors">Materiales</a>
            <a href="#guide" className="hover:text-cyan-400 transition-colors">Construcción</a>
            <a href="#testing" className="hover:text-cyan-400 transition-colors">Pruebas</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-cyan-400">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <VortexAnimation />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-widest uppercase animate-bounce">
            MVP v1.0 • Código Abierto
          </div>
          <h1 className="font-orbitron text-5xl md:text-8xl font-black mb-6 leading-none tracking-tight">
            MOTOR DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">VÓRTICE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light mb-12 leading-relaxed">
            Generador negentrópico basado en la implosión del Éter. Inspirado en el legado de <strong>Viktor Schauberger</strong>.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#theory" className="w-full md:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-all flex items-center justify-center group">
              Explorar Teoría 3D
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#guide" className="w-full md:w-auto px-8 py-4 bg-slate-900 border border-slate-700 hover:border-cyan-500/50 rounded-full transition-all flex items-center justify-center space-x-2">
              <Play className="w-5 h-5 text-cyan-500" fill="currentColor" />
              <span>Empezar Construcción</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="text-cyan-500 opacity-50" />
        </div>
      </section>

      {/* Theory 3D Section */}
      <section id="theory" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-6 tracking-tighter">ANÁLISIS <span className="text-cyan-400">TEÓRICO 3D</span></h2>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              Visualiza los componentes fundamentales del Motor de Vórtice. Interactúa con los planos tridimensionales para comprender la dinámica de fluidos y la geometría sagrada detrás de la implosión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ModelViewer 
              path="/planos/cavidad_superior.glb" 
              title="Cavidad de Entrada" 
              description="Diseño optimizado para inducir el flujo tangencial inicial. La curvatura interna minimiza la fricción y maximiza la velocidad angular del fluido." 
            />
            <ModelViewer 
              path="/planos/cavidad_inferior.glb" 
              title="Cámara de Compresión" 
              description="Zona donde el vórtice alcanza su máxima densidad. La geometría ovoide permite la formación del núcleo de vacío necesario para la implosión." 
            />
            <ModelViewer 
              path="/planos/rotor-v1.glb" 
              title="Rotor de Succión" 
              description="El elemento activo que mantiene la rotación del fluido. Sus brazos curvos están diseñados siguiendo proporciones áureas para una eficiencia energética superior." 
            />
            <ModelViewer 
              path="/planos/turbina_pelton.glb" 
              title="Turbina Generadora" 
              description="Sistema de captación de energía cinética en la salida. Convierte el flujo laminar residual en torque mecánico para la generación eléctrica." 
            />
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="about" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 text-cyan-400">
                <Beaker className="w-6 h-6" />
                <span className="font-orbitron font-bold tracking-widest uppercase text-sm">El Objetivo</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold leading-tight">
                Conversión del Flujo del Éter
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Este prototipo busca demostrar que un vórtice centrípeto, excitado por una frecuencia de resonancia, puede generar energía eléctrica suficiente para encender un LED. No es solo un experimento; es un desafío a la entropía convencional.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">9V</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Fuente Inicial</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3V</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Salida LED</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border-4 border-cyan-500/20 p-8 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                  alt="Abstract Tech" 
                  className="rounded-full w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">Lista de Materiales</h2>
            <p className="text-slate-500">Componentes de bajo costo para ciencia ciudadana global.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {MATERIALS.map((mat, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {IconMap[mat.icon]}
                </div>
                <h3 className="font-orbitron text-lg font-bold mb-3">{mat.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{mat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-slate-950 border border-dashed border-slate-700">
            <div className="flex flex-wrap items-center justify-center gap-12">
              {TOOLS.map((tool, i) => (
                <div key={i} className="flex items-center space-x-3 text-slate-400">
                  <span className="text-cyan-500">{tool.icon}</span>
                  <span className="text-sm font-medium uppercase tracking-widest">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Guide Section */}
      <section id="guide" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/3 space-y-4">
              <div className="mb-10">
                <h2 className="text-4xl font-orbitron font-black mb-4 tracking-tighter">EL PLAN DE <br/><span className="text-cyan-400">CONSTRUCCIÓN</span></h2>
                <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
              </div>
              {STEPS.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-6 rounded-2xl flex items-center space-x-6 transition-all border ${activeStep === i ? 'bg-cyan-500 border-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.3)]' : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                >
                  <span className="text-2xl font-black font-orbitron">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm uppercase tracking-wider">{step.title}</h4>
                  </div>
                  {activeStep === i && <ChevronRight className="animate-pulse" />}
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="lg:w-2/3">
              <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  {activeStep === 2 ? (
                    <Step3Illustration />
                  ) : activeStep === 3 ? (
                    <Step4Illustration />
                  ) : (
                    <img src={STEPS[activeStep].image} alt={STEPS[activeStep].title} className="w-full h-full object-cover opacity-60" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-10">
                    <span className="inline-block px-3 py-1 rounded bg-cyan-500 text-slate-950 text-xs font-black uppercase mb-2">Fase de Construcción</span>
                    <h3 className="text-3xl font-orbitron font-bold">{STEPS[activeStep].title}</h3>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                    {STEPS[activeStep].description}
                  </p>
                  <ul className="space-y-6">
                    {STEPS[activeStep].details.map((detail, d) => (
                      <li key={d} className="flex items-start space-x-4">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#0ea5e9]"></div>
                        <span className="text-slate-400 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-12 pt-10 border-t border-slate-900 flex items-center justify-between">
                    <button 
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      className="text-slate-500 hover:text-cyan-400 disabled:opacity-20 transition-colors uppercase text-xs font-bold tracking-widest"
                    >
                      Anterior
                    </button>
                    <div className="flex space-x-2">
                      {STEPS.map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full transition-all ${activeStep === i ? 'bg-cyan-500 w-8' : 'bg-slate-800'}`}></div>
                      ))}
                    </div>
                    <button 
                      disabled={activeStep === STEPS.length - 1}
                      onClick={() => setActiveStep(Math.min(STEPS.length - 1, activeStep + 1))}
                      className="text-cyan-500 hover:text-cyan-400 disabled:opacity-20 transition-colors uppercase text-xs font-bold tracking-widest"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Section */}
      <section id="testing" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-12">
              <Info className="text-cyan-500 w-8 h-8" />
              <h2 className="text-4xl font-orbitron font-bold">Validación y Métricas</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {VALIDATIONS.map((val, i) => (
                <div key={i} className={`p-8 rounded-3xl border-2 bg-slate-900/50 flex flex-col items-center text-center ${val.color} backdrop-blur-sm`}>
                  <div className="text-sm font-black uppercase tracking-widest mb-4 opacity-70">{val.level}</div>
                  <h3 className="text-xl font-orbitron font-bold mb-4">{val.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
                <span className="font-orbitron font-bold text-lg text-cyan-400">VORTEX ENGINE</span>
              </div>
              <p className="text-slate-500 max-w-xs text-sm">
                Un proyecto de ciencia ciudadana del Laboratorio de Sinergia Humano-IA.
              </p>
            </div>
            
            <div className="text-xs text-slate-600 uppercase tracking-[0.2em] space-y-2">
              <p>© 2025 Juan Miguel Rivero y Hornos Tverjanovich</p>
              <p>Licencia CC BY 4.0 Internacional</p>
              <p>DOI: 10.5281/ZENODO.17635971</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950 flex flex-col items-center justify-center space-y-8 p-6 md:hidden">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 text-cyan-400">
            <X size={32} />
          </button>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-3xl font-orbitron font-bold text-cyan-400">Origen</a>
          <a href="#materials" onClick={() => setIsMenuOpen(false)} className="text-3xl font-orbitron font-bold text-cyan-400">Materiales</a>
          <a href="#guide" onClick={() => setIsMenuOpen(false)} className="text-3xl font-orbitron font-bold text-cyan-400">Guía</a>
          <a href="#testing" onClick={() => setIsMenuOpen(false)} className="text-3xl font-orbitron font-bold text-cyan-400">Validación</a>
        </div>
      )}
    </div>
  );
};

export default App;
