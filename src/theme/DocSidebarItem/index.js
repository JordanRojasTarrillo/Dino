import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import { Cpu, Globe, Lock, File, Layers, Zap, MemoryStick, AppWindow, ShieldAlert, Camera, MonitorSmartphone, RadioTower, CircleHelp, Code2, Inspect } from 'lucide-react';

// Mapa de íconos para cada label de los paneles
const iconMap = {
  'Panel de Consola': <Cpu className="w-4 h-4 mr-2 text-purple-500" />,
  'Panel de Red': <Globe className="w-4 h-4 mr-2 text-blue-500" />,
  'Panel de Seguridad': <Lock className="w-4 h-4 mr-2 text-red-500" />,
  'Panel de Layers': <Layers className="w-4 h-4 mr-2 text-green-500" />,
  'Panel de Rendimiento': <Zap className="w-4 h-4 mr-2 text-yellow-500" />,
  'Panel de Memoria': <MemoryStick className="w-4 h-4 mr-2 text-pink-500" />,
  'Panel de Aplicación': <AppWindow className="w-4 h-4 mr-2 text-indigo-500" />,
  'Panel Lighthouse': <ShieldAlert className="w-4 h-4 mr-2 text-lime-500" />,
  'Panel de Grabadora': <Camera className="w-4 h-4 mr-2 text-rose-500" />,
  'Modo de Dispositivo': <MonitorSmartphone className="w-4 h-4 mr-2 text-sky-500" />,
  'Panel de Coverage': <RadioTower className="w-4 h-4 mr-2 text-orange-500" />,
  'Panel de Issues': <CircleHelp className="w-4 h-4 mr-2 text-amber-500" />,
  'Panel de Fuentes': <Code2 className="w-4 h-4 mr-2 text-gray-500" />,
  'Panel de Elementos': <Inspect className="w-4 h-4 mr-2 text-teal-500" />,
};

// Función para obtener el label con su ícono correspondiente
function getLabelWithIcon(label) {
  const icon = iconMap[label];
  return (
    <span className="flex items-center">
      {icon || <File className="w-4 h-4 mr-2 text-gray-400" />}
      {label}
    </span>
  );
}

// Componente que reemplaza el componente original de DocSidebarItem
export default function DocSidebarItem(props) {
  const newProps = {
    ...props,
    item: {
      ...props.item,
      label: typeof props.item.label === 'string'
        ? getLabelWithIcon(props.item.label)
        : props.item.label,
    },
  };

  return <OriginalDocSidebarItem {...newProps} />;
}
