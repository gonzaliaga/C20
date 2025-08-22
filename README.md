
# Hoja de Trabajo: Programación Funcional en JavaScript

### 1️⃣ Conceptos rápidos
- **Función pura:** Siempre devuelve el mismo resultado con los mismos argumentos, sin efectos secundarios.
- **Inmutabilidad:** Los datos originales no se modifican; se crean nuevos.
- **Spread operator (\`...\`):** Copia todas las propiedades de un objeto.
- **Métodos de arreglo funcionales:** \`map\`, \`filter\`, \`find\`, \`some\`.

### 2️⃣ Mini-ejercicios

#### Ejercicio 1: Área de un rectángulo
Crea una función pura \`calcularArea(longitud, ancho)\` que:
- Devuelva el área del rectángulo.
- Valide que los números sean positivos.

**Espacio para tu código:**


// Escribe tu función aquí






**Pregunta:** ¿Qué pasaría si pasamos un número negativo?
Respuesta: _______________________________

#### Ejercicio 2: Actualizar usuario
Dada la lista:

let usuarios = [{ nombre: "Ana", edad: 25 }];

Actualiza a Ana a 26 usando \`map\` y spread.

**Espacio para tu código:**

// Escribe tu función aquí





**Pregunta:** ¿Cómo actualizarías varios usuarios a la vez?
Respuesta: _______________________________

#### Ejercicio 3: Reservar asiento
Lista de asientos:

let asientos = [1, 2, 3, 4, 5];

Crea función \`reservarAsiento\` usando \`filter\` para eliminar el asiento 3.

**Espacio para tu código:**

// Escribe tu función aquí


**Pregunta:** ¿Qué pasa si intentamos reservar un asiento que no existe?
Respuesta: _______________________________

#### Ejercicio 4: Agregar paciente
Lista inicial:

let pacientes = [{ nombre: "Ana" }];

Agrega un nuevo paciente "Pedro" validando que no exista ya en la lista.

**Espacio para tu código:**

// Escribe tu función aquí


**Pregunta:** ¿Cómo harías la búsqueda para que sea sensible a mayúsculas/minúsculas?
Respuesta: _______________________________

#### Ejercicio 5: Gestión de proyectos
Lista inicial:

let proyectos = [{ nombre: "Torre Central", arquitecto: "Luis" }];

1. Agrega un proyecto "Casa Verde".
2. Crea función para buscar un proyecto por nombre.
3. Filtra proyectos por arquitecto "Ana".

**Espacio para tu código:**

// Escribe tu función aquí


**Pregunta:** ¿Por qué es importante no modificar la lista original?
Respuesta: _______________________________

### 3️⃣ Tips para la práctica
- Recuerda: la **inmutabilidad facilita debugging y testing**.
- Intenta identificar errores comunes en funciones puras o con \`map\` y \`filter\`.


