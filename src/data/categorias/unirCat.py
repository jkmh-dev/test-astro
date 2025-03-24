import os
import json

carpeta = r'C:\Users\USER\Desktop\Proyecto web\Emprendimiento\src\data\categorias'
archivo_salida = r'C:\Users\USER\Desktop\Proyecto web\Emprendimiento\public\data\productos.json'


# Lista para almacenar todos los productos
todos_los_productos = []

# Recorremos todos los archivos .json en la carpeta
for nombre_archivo in os.listdir(carpeta):
    if nombre_archivo.endswith('.json'):
        ruta = os.path.join(carpeta, nombre_archivo)
        with open(ruta, 'r', encoding='utf-8') as f:
            try:
                datos = json.load(f)
                if isinstance(datos, list):
                    todos_los_productos.extend(datos)
                else:
                    todos_los_productos.append(datos)
            except Exception as e:
                print(f'Error en {nombre_archivo}: {e}')

# Guardamos todo en un solo JSON
with open(archivo_salida, 'w', encoding='utf-8') as f:
    json.dump(todos_los_productos, f, indent=2, ensure_ascii=False)

print(f'Archivo combinado creado: {archivo_salida}')
