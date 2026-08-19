export type ProjectColor = 'mint' | 'blue' | 'orange' | 'gold' | 'purple' | 'teal';

export type ProjectIcon =
  | 'archive'
  | 'brain'
  | 'target'
  | 'mountain'
  | 'eye'
  | 'document'
  | 'scales'
  | 'shield'
  | 'database'
  | 'flask'
  | 'telescope'
  | 'chart';

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  color: ProjectColor;
  icon: ProjectIcon;
  status: 'Activo' | 'En desarrollo';
  url?: string;
  keywords: string[];
}

export const projects: Project[] = [
  { id: 'repositorio-amaru', number: '01', title: 'Repositorio Amaru', description: 'Proyectos de cultura, saberes y memoria', category: 'Cultura y memoria', color: 'mint', icon: 'archive', status: 'Activo', keywords: ['cultura', 'saberes', 'memoria', 'repositorio'] },
  { id: 'archivo-inteligente', number: '02', title: 'Archivo Inteligente', description: 'Organiza y consulta información con IA', category: 'Inteligencia artificial', color: 'blue', icon: 'brain', status: 'En desarrollo', keywords: ['archivo', 'organización', 'IA', 'inteligencia artificial'] },
  { id: 'portal-normativo', number: '03', title: 'Portal Normativo', description: 'Normas, leyes y marcos de información clave', category: 'Normativa', color: 'orange', icon: 'target', status: 'En desarrollo', keywords: ['normas', 'leyes', 'regulación', 'marcos'] },
  { id: 'atlas-territorial', number: '04', title: 'Atlas Territorial', description: 'Mapas, territorios y análisis geoespacial', category: 'Territorio', color: 'gold', icon: 'mountain', status: 'En desarrollo', keywords: ['mapas', 'territorio', 'geoespacial', 'atlas'] },
  { id: 'observatorio-digital', number: '05', title: 'Observatorio Digital', description: 'Inteligencia artificial y análisis de tendencias', category: 'Tendencias', color: 'purple', icon: 'eye', status: 'En desarrollo', keywords: ['IA', 'tendencias', 'observatorio', 'análisis'] },
  { id: 'gestor-documental', number: '06', title: 'Gestor Documental', description: 'Organiza, clasifica y encuentra documentos', category: 'Documentos', color: 'teal', icon: 'document', status: 'En desarrollo', keywords: ['documentos', 'clasificación', 'gestión', 'archivo'] },
  { id: 'biblioteca-legal', number: '07', title: 'Biblioteca Legal', description: 'Normas, jurisprudencia y marco legal actualizado', category: 'Derecho', color: 'blue', icon: 'scales', status: 'En desarrollo', keywords: ['legal', 'normas', 'jurisprudencia', 'derecho'] },
  { id: 'matriz-sst', number: '08', title: 'Matriz SST', description: 'Riesgos, seguridad y salud en el trabajo', category: 'Seguridad y salud', color: 'orange', icon: 'shield', status: 'En desarrollo', keywords: ['SST', 'riesgos', 'seguridad', 'salud', 'trabajo'] },
  { id: 'centro-de-datos', number: '09', title: 'Centro de Datos', description: 'Infraestructura y gestión de datos confiables', category: 'Datos', color: 'gold', icon: 'database', status: 'En desarrollo', keywords: ['datos', 'infraestructura', 'gestión', 'confiabilidad'] },
  { id: 'laboratorio-publico', number: '10', title: 'Laboratorio Público', description: 'Investigación, innovación y datos abiertos', category: 'Investigación', color: 'teal', icon: 'flask', status: 'En desarrollo', keywords: ['investigación', 'innovación', 'datos abiertos', 'laboratorio'] },
  { id: 'radar-de-tendencias', number: '11', title: 'Radar de Tendencias', description: 'Monitoreo y alertas de información relevante', category: 'Monitoreo', color: 'purple', icon: 'telescope', status: 'En desarrollo', keywords: ['monitoreo', 'alertas', 'tendencias', 'radar'] },
  { id: 'tableros-inteligentes', number: '12', title: 'Tableros Inteligentes', description: 'Visualiza indicadores y métricas clave', category: 'Visualización', color: 'blue', icon: 'chart', status: 'En desarrollo', keywords: ['tableros', 'indicadores', 'métricas', 'visualización'] },
];

export const projectCategories = [...new Set(projects.map((project) => project.category))];
