export const projectHighlights: Record<string, { category: string; title: string; role: string; contribution: string }> = {
  'Sistema POS Karamelos': {
    category: 'COMERCIO · PUNTO DE VENTA', title: 'Karamelos', role: 'Desarrollo de API REST',
    contribution: 'API en Laravel para ventas por gramaje, inventario, permisos por rol y cortes de caja X y Z. Documentación de endpoints con Swagger.',
  },
  'CRM Costureria': {
    category: 'OPERACIONES · GESTIÓN DE NEGOCIO', title: 'CRM para costurería', role: 'Desarrollo full stack',
    contribution: 'Clientes, pedidos, entregas e inventario en un mismo sistema. Cada pedido distingue las telas disponibles de los materiales por comprar.',
  },
  'Cimafood': {
    category: 'COMERCIO · PLATAFORMA MULTINEGOCIO', title: 'Cimafood', role: 'Desarrollo con Laravel y Livewire',
    contribution: 'Un carrito compartido que divide los pedidos entre vendedores, con búsqueda, favoritos y control de acceso para cada negocio.',
  },
  'CLI Vane': {
    category: 'HERRAMIENTAS · EXPERIENCIA DE DESARROLLO', title: 'Vane CLI', role: 'Arquitectura backend y CLI',
    contribution: 'Generación de controladores, servicios, rutas y validaciones Zod a partir del esquema de Prisma, sobre una base modular de Express y TypeScript.',
  },
};
