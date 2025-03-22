export function generarSlug(nombre: string): string {
  return encodeURIComponent(
    nombre
      .toLowerCase()
      .normalize("NFD")            // Eliminar tildes
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")        // Reemplazar espacios por "-"
      .replace(/[^a-z0-9\-]/g, "") // Eliminar caracteres especiales
      .replace(/-+/g, "-")         // Reemplazar múltiples guiones seguidos con uno solo
      .replace(/^-|-$/g, "")       // Eliminar guiones al inicio o final
  );
}
