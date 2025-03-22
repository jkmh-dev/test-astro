import productosJson from '../data/productos.json';

// Tipo dinámico para representar cualquier categoría y sus productos
type ProductosPorCategoria = typeof productosJson; // Obtiene el tipo del archivo JSON

// Función para obtener todas las categorías (las claves de productosJson)
export function getCategorias() {
  return Object.keys(productosJson).map((categoria) => ({
    nombre: categoria, // La clave (nombre) de cada categoría
    icono: obtenerIcono(categoria), // Aquí obtendremos el icono dinámicamente
  }));
}

// Función para obtener los productos de una categoría
export function getProductosPorCategoria(categoria: string) {
  // Accede de forma dinámica a los productos de la categoría seleccionada
  return productosJson[categoria] || [];
}

// Función para asignar iconos de manera dinámica según el nombre de la categoría
function obtenerIcono(categoria: string): string {
  // Aquí definimos los iconos por categoría, si no existe se asigna un icono por defecto
  const iconosPorCategoria: Record<string, string> = {
    belleza: "💄",
    deporte: "🏋️‍♂️",
    hogar: "🏡",
    moda: "👗",
    tecnologia: "📱",
  };
  
  return iconosPorCategoria[categoria] || "📦"; // Icono por defecto si no existe en el mapa
}
