
import React from 'react';
import { Beaker, Settings, Zap, Droplets, Battery, Cpu, Drill, Scissors, Ruler } from 'lucide-react';
import { Material, Step } from './types';

export const MATERIALS: Material[] = [
  { name: 'Cavidad Resonante', description: 'Botella PET 2L o Recipiente ovoide', icon: 'Droplets' },
  { name: 'Sistema de Rotor', description: 'Motor DC (5-12V) y Palitos de helado', icon: 'Settings' },
  { name: 'Sistema Generador', description: 'Segundo motor DC y Turbina casera', icon: 'Zap' },
  { name: 'Circuito de Salida', description: 'LED 3V y Condensador 1000µF', icon: 'Cpu' },
  { name: 'Alimentación', description: 'Pila de 9V o Fuente Variable', icon: 'Battery' }
];

export const TOOLS = [
  { name: 'Pistola de Silicona', icon: <Droplets className="w-5 h-5" /> },
  { name: 'Taladro', icon: <Drill className="w-5 h-5" /> },
  { name: 'Cutter / Tijeras', icon: <Scissors className="w-5 h-5" /> },
  { name: 'Multímetro', icon: <Ruler className="w-5 h-5" /> }
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'Construir la Cavidad',
    description: 'Preparación del cuerpo principal del motor de implosión.',
    details: [
      'Cortar botella PET a 15-20cm de altura.',
      'Sellar la base herméticamente.',
      'Perforar entrada tangencial cerca de la base.',
      'Perforar salida central en el fondo.'
    ],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Construir el Rotor',
    description: 'El corazón del vórtice centrípeto.',
    details: [
      'Utilizar 3 palitos de helado.',
      'Darles curva con calor controlado.',
      'Fijar a un disco central.',
      'Acoplar al eje del motor DC principal.'
    ],
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Montar el Accionamiento',
    description: 'Integración del motor superior.',
    details: [
      'Fijar motor en la tapa superior.',
      'Sellar para evitar fugas.',
      'Asegurar que el rotor gire libremente y centrado.'
    ],
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Sistema de Generación',
    description: 'Conversión de la energía del vórtice.',
    details: [
      'Construir turbina tipo Pelton (tapón y cucharas).',
      'Acoplar al segundo motor DC (generador).',
      'Posicionar bajo la salida de agua.'
    ],
    image: 'https://images.unsplash.com/photo-1509063313031-17ed0bb7d79b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Circuito de Salida',
    description: 'Estabilización y visualización eléctrica.',
    details: [
      'Conectar motor-generador al condensador.',
      'LED en paralelo al condensador.',
      'Respetar polaridad estrictamente.'
    ],
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800'
  }
];
