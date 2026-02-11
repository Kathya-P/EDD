window.QUESTION_BANK = [
  // ============================================
  // OPERADORES EN JAVA
  // ============================================
  {
    id: 1,
    topic: "Operadores Aritméticos",
    difficulty: "basico",
    type: "input",
    prompt: "En Java, ¿cuál es el resultado de la división entera 7 / 4?",
    answer: ["1"],
    answerText: "1",
    explanation: "La división entera en Java trunca la parte decimal. 7/4 = 1.75, pero como ambos son enteros, el resultado es 1.",
    hint: "La división entera NO redondea, solo trunca la parte decimal."
  },
  {
    id: 2,
    topic: "Operadores Aritméticos",
    difficulty: "basico",
    type: "input",
    prompt: "¿Cuál es el resultado de 17 % 5 en Java?",
    answer: ["2"],
    answerText: "2",
    explanation: "El operador % (módulo o residuo) devuelve el residuo de la división. 17 = 3*5 + 2, por lo tanto 17 % 5 = 2.",
    hint: "El operador % calcula el residuo de la división."
  },
  {
    id: 3,
    topic: "Operadores Aritméticos",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el resultado de la expresión: 7 % 4?",
    choices: ["0", "1", "2", "3"],
    answer: 3,
    explanation: "7 dividido entre 4 es 1 con residuo 3. El operador % devuelve el residuo, por lo tanto 7 % 4 = 3.",
    hint: "7 = 1*4 + 3"
  },
  {
    id: 4,
    topic: "Operadores Relacionales",
    difficulty: "basico",
    type: "input",
    prompt: "En Java, ¿cuál es el operador relacional para 'no es igual'?",
    answer: ["!="],
    answerText: "!=",
    explanation: "El operador de desigualdad en Java es != (no usar =, es comparación).",
    hint: "Se usa el signo de exclamación con el igual."
  },
  {
    id: 5,
    topic: "Operadores Relacionales",
    difficulty: "basico",
    type: "truefalse",
    prompt: "En Java, el operador == se utiliza para comparar si dos valores son iguales.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "El operador == (doble igual) se usa para comparación. El operador = (un solo igual) se usa para asignación.",
    hint: "No confundir = (asignación) con == (comparación)."
  },
  {
    id: 6,
    topic: "Operadores de Asignación",
    difficulty: "medio",
    type: "mcq",
    prompt: "Si int x = 10; y luego ejecutamos x += 5; ¿cuál es el valor final de x?",
    choices: ["5", "10", "15", "50"],
    answer: 2,
    explanation: "El operador += es equivalente a x = x + 5. Por lo tanto, x = 10 + 5 = 15.",
    hint: "x += 5 es lo mismo que x = x + 5."
  },
  {
    id: 7,
    topic: "Operadores de Asignación",
    difficulty: "medio",
    type: "input",
    prompt: "¿Cuál es la forma simplificada de escribir la operación: algo = algo * 3?",
    answer: ["algo *= 3", "algo*=3"],
    answerText: "algo *= 3",
    explanation: "Los operadores de asignación compuestos combinan una operación aritmética con la asignación. algo *= 3 es equivalente a algo = algo * 3.",
    hint: "Se juntan el operador de multiplicación con el de asignación."
  },
  {
    id: 8,
    topic: "Jerarquía de Operadores",
    difficulty: "basico",
    type: "truefalse",
    prompt: "El paréntesis ( ) es el único operador asociativo en Java y permite indicar en qué orden deben realizarse las operaciones.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Los paréntesis tienen la mayor prioridad y permiten controlar el orden de evaluación de las operaciones.",
    hint: "Los paréntesis se evalúan primero, como en matemáticas."
  },
  {
    id: 9,
    topic: "Jerarquía de Operadores",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué operadores tienen el mismo nivel de precedencia en Java?",
    choices: ["+ y -", "* y +", "/ y +", "+ y =="],
    answer: 0,
    explanation: "Los operadores de suma (+) y resta (-) tienen el mismo nivel de precedencia y se evalúan de izquierda a derecha.",
    hint: "Los operadores aritméticos del mismo tipo tienen la misma prioridad."
  },
  {
    id: 10,
    topic: "Operadores Lógicos",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuál es el operador lógico AND en Java?",
    choices: ["&&", "&", "AND", "and"],
    answer: 1,
    explanation: "El operador lógico AND de bit es &. El operador && es el AND lógico con cortocircuito.",
    hint: "Puede ser un solo ampersand o doble."
  },

  // ============================================
  // CONDICIONALES EN JAVA
  // ============================================
  {
    id: 11,
    topic: "Estructuras Condicionales",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuál es la estructura de control más básica en Java para tomar decisiones?",
    choices: ["switch", "if-then", "for", "while"],
    answer: 1,
    explanation: "La estructura if-then es la sentencia de control de flujo más básica. Permite ejecutar código solo si una condición es verdadera.",
    hint: "Es la estructura más simple, 'si esto, entonces haz aquello'."
  },
  {
    id: 12,
    topic: "Estructuras Condicionales",
    difficulty: "basico",
    type: "truefalse",
    prompt: "La cláusula 'else' se ejecuta cuando la condición del 'if' es falsa.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "La cláusula else proporciona un camino de ejecución alternativo cuando la condición if es false.",
    hint: "else = 'de lo contrario'."
  },
  {
    id: 13,
    topic: "Estructuras Condicionales",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint x = 15;\nif (x > 10) {\n    System.out.println(\"Mayor\");\n} else {\n    System.out.println(\"Menor\");\n}",
    answer: ["Mayor", "mayor"],
    answerText: "Mayor",
    explanation: "Como x = 15 y 15 > 10, la condición es verdadera y se ejecuta el primer bloque imprimiendo 'Mayor'.",
    hint: "Evalúa la condición: ¿15 es mayor que 10?"
  },
  {
    id: 14,
    topic: "Estructuras Condicionales",
    difficulty: "medio",
    type: "input",
    prompt: "En la estructura else-if, ¿qué sucede cuando se encuentra la primera condición verdadera?",
    answer: ["se detiene", "el programa se detiene", "deja de evaluar", "termina", "se ejecuta y termina"],
    answerText: "El programa se detiene en la primera condición verdadera",
    explanation: "En una cadena else-if, las condiciones se evalúan en orden y el programa se detiene en la primera que sea true.",
    hint: "No se evalúan las demás condiciones después de encontrar una verdadera."
  },
  {
    id: 15,
    topic: "Estructuras Condicionales",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint nota = 85;\nif (nota >= 90) {\n    System.out.println(\"A\");\n} else if (nota >= 80) {\n    System.out.println(\"B\");\n} else {\n    System.out.println(\"C\");\n}",
    answer: ["B", "b"],
    answerText: "B",
    explanation: "nota = 85, no cumple nota >= 90, pero SÍ cumple nota >= 80, por lo tanto imprime 'B' y se detiene.",
    hint: "Se evalúa en orden: ¿85 >= 90? No. ¿85 >= 80? Sí."
  },
  {
    id: 16,
    topic: "Switch",
    difficulty: "basico",
    type: "truefalse",
    prompt: "La estructura switch evalúa una sola variable contra una lista de valores específicos.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Switch está diseñado para evaluar una variable contra múltiples valores constantes (cases).",
    hint: "Es ideal para menús y selecciones con valores exactos."
  },
  {
    id: 17,
    topic: "Switch",
    difficulty: "medio",
    type: "input",
    prompt: "En una estructura switch, ¿qué palabra clave se usa para detener la ejecución y salir del switch?",
    answer: ["break"],
    answerText: "break",
    explanation: "La palabra clave 'break' detiene la ejecución del switch y evita que continúe ejecutando los siguientes cases.",
    hint: "Sin esta palabra, el código seguiría ejecutando los demás cases."
  },
  {
    id: 18,
    topic: "Switch",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint dia = 3;\nswitch(dia) {\n    case 1: System.out.println(\"Lunes\"); break;\n    case 2: System.out.println(\"Martes\"); break;\n    case 3: System.out.println(\"Miércoles\"); break;\n    default: System.out.println(\"Otro\");\n}",
    answer: ["Miércoles", "miércoles", "Miercoles", "miercoles"],
    answerText: "Miércoles",
    explanation: "El valor de dia es 3, por lo tanto entra al case 3 e imprime 'Miércoles', luego el break sale del switch.",
    hint: "Busca el case que coincida con el valor 3."
  },
  {
    id: 19,
    topic: "Estructuras Condicionales",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué cláusula del switch maneja valores no previstos o no coincidentes?",
    answer: ["default"],
    answerText: "default",
    explanation: "La cláusula 'default' se ejecuta cuando ningún case coincide con el valor de la variable.",
    hint: "Es como el 'else' del switch."
  },
  {
    id: 20,
    topic: "Condicionales vs Switch",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuándo es más apropiado usar switch en lugar de if-else?",
    choices: ["Para rangos numéricos", "Para valores discretos exactos", "Para condiciones complejas", "Para comparaciones múltiples"],
    answer: 1,
    explanation: "Switch es ideal para comparar una variable con valores exactos y discretos (menús, opciones específicas).",
    hint: "Switch funciona mejor con valores concretos como 1, 2, 3 o 'A', 'B', 'C'."
  },

  // ============================================
  // BUCLES EN JAVA
  // ============================================
  {
    id: 21,
    topic: "Bucle While",
    difficulty: "basico",
    type: "truefalse",
    prompt: "El bucle while evalúa la condición ANTES de ejecutar el bloque de código.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "While es una estructura de pre-prueba. Primero evalúa la condición, y si es true, ejecuta el código.",
    hint: "Es el 'guardián' que evalúa antes de dejar entrar."
  },
  {
    id: 22,
    topic: "Bucle Do-While",
    difficulty: "basico",
    type: "truefalse",
    prompt: "El bucle do-while garantiza que el código se ejecute al menos una vez.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Do-while es post-prueba: primero ejecuta el código, luego evalúa la condición. Por eso siempre se ejecuta al menos una vez.",
    hint: "Primero actúa, luego verifica."
  },
  {
    id: 23,
    topic: "While vs Do-While",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es la principal diferencia entre while y do-while?",
    choices: ["While es más rápido", "Do-while evalúa la condición al final", "While no puede tener break", "Do-while no puede usar contadores"],
    answer: 1,
    explanation: "While evalúa arriba (puede no ejecutarse nunca). Do-while evalúa abajo (se ejecuta al menos una vez).",
    hint: "La ubicación de la evaluación de la condición es diferente."
  },
  {
    id: 24,
    topic: "Bucle For",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué tipo de bucle es ideal cuando se conoce el rango exacto de iteraciones?",
    answer: ["for"],
    answerText: "for",
    explanation: "El bucle for es ideal para iterar sobre un rango conocido. Es compacto y centraliza inicialización, condición e incremento.",
    hint: "Es el más compacto y usado para recorrer arreglos."
  },
  {
    id: 25,
    topic: "Bucle For",
    difficulty: "medio",
    type: "mcq",
    prompt: "En un bucle for, ¿cuántas veces se ejecuta la inicialización?",
    choices: ["Nunca", "Una vez", "En cada iteración", "Depende de la condición"],
    answer: 1,
    explanation: "La inicialización (ej: int i=1) se ejecuta una sola vez al comenzar el bucle.",
    hint: "Solo se inicializa al inicio."
  },
  {
    id: 26,
    topic: "Bucles",
    difficulty: "basico",
    type: "input",
    prompt: "Si int count = 1; while (count <= 3) { count++; }, ¿cuántas veces se ejecuta el bucle?",
    answer: ["3", "tres"],
    answerText: "3",
    explanation: "El bucle se ejecuta cuando count vale 1, 2 y 3. Cuando count llega a 4, la condición (count <= 3) es false y termina.",
    hint: "Cuenta: 1, 2, 3."
  },
  {
    id: 27,
    topic: "Bucles Infinitos",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Un bucle sin condición de salida (que nunca se vuelva false) se llama bucle infinito.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Si la condición nunca se vuelve false, el bucle continuará ejecutándose indefinidamente (bucle infinito).",
    hint: "Siempre debe haber una forma de que la condición sea false."
  },
  {
    id: 28,
    topic: "Uso de Bucles",
    difficulty: "medio",
    type: "mcq",
    prompt: "Según el PDF, ¿qué tipo de bucle se recomienda para menús de usuario?",
    choices: ["while", "for", "do-while", "for-each"],
    answer: 2,
    explanation: "Do-while es ideal para menús porque garantiza que se muestre al menos una vez antes de preguntar si continuar.",
    hint: "El menú debe mostrarse al menos una vez."
  },
  {
    id: 29,
    topic: "Bucles Anidados",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Los bucles anidados son bucles dentro de otros bucles y se usan para procesar estructuras bidimensionales como matrices.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Un bucle anidado es un bucle dentro de otro. Son útiles para matrices (un bucle para filas, otro para columnas).",
    hint: "Bucle dentro de bucle = anidado."
  },
  {
    id: 30,
    topic: "Aplicación de Bucles",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué bucle usarías para imprimir la tabla de multiplicar del 5 (del 5x1 al 5x10)?",
    answer: ["for"],
    answerText: "for",
    explanation: "Como se conoce el rango exacto (del 1 al 10), el bucle for es la mejor opción: for(int i=1; i<=10; i++).",
    hint: "Conoces exactamente cuántas veces repetir (10 veces)."
  },

  // ============================================
  // ARREGLOS EN JAVA
  // ============================================
  {
    id: 31,
    topic: "Arreglos",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Un arreglo en Java es una secuencia de datos del mismo tipo.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Un array agrupa varios elementos del mismo tipo de dato (int, double, String, etc.).",
    hint: "Todos los elementos deben ser del mismo tipo."
  },
  {
    id: 32,
    topic: "Arreglos",
    difficulty: "basico",
    type: "input",
    prompt: "En Java, los índices de un arreglo empiezan en ¿qué número?",
    answer: ["0", "cero"],
    answerText: "0",
    explanation: "Los índices en Java siempre empiezan en 0. Si un arreglo tiene n elementos, los índices van de 0 a n-1.",
    hint: "El primer elemento está en la posición 0."
  },
  {
    id: 33,
    topic: "Arreglos",
    difficulty: "medio",
    type: "mcq",
    prompt: "Si se declara int[] edad = new int[5]; ¿cuáles son los índices válidos?",
    choices: ["1 al 5", "0 al 5", "0 al 4", "1 al 4"],
    answer: 2,
    explanation: "Un arreglo de 5 elementos tiene índices del 0 al 4 (tamaño - 1).",
    hint: "Los índices van de 0 a tamaño-1."
  },
  {
    id: 34,
    topic: "Arreglos",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué atributo de un arreglo en Java devuelve su número de elementos?",
    answer: ["length", ".length"],
    answerText: "length",
    explanation: "El atributo 'length' devuelve el tamaño del arreglo. Por ejemplo: int tamaño = notas.length;",
    hint: "Es un atributo, no un método (no lleva paréntesis)."
  },
  {
    id: 35,
    topic: "Arreglos Unidimensionales",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Los arreglos unidimensionales en Java también se conocen como vectores.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Los arreglos unidimensionales (una sola dimensión) se conocen comúnmente como vectores.",
    hint: "Una dimensión = vector."
  },
  {
    id: 36,
    topic: "Arreglos Bidimensionales",
    difficulty: "medio",
    type: "input",
    prompt: "Los arreglos bidimensionales también se conocen como...",
    answer: ["matrices", "matriz"],
    answerText: "matrices",
    explanation: "Los arreglos bidimensionales (dos dimensiones: filas y columnas) se conocen como matrices.",
    hint: "Dos dimensiones = matriz."
  },
  {
    id: 37,
    topic: "Arreglos Bidimensionales",
    difficulty: "medio",
    type: "mcq",
    prompt: "Si se declara int[][] m = new int[3][5]; ¿cuántos elementos puede almacenar?",
    choices: ["3", "5", "8", "15"],
    answer: 3,
    explanation: "Un arreglo de 3 filas x 5 columnas puede almacenar 3 * 5 = 15 elementos.",
    hint: "Multiplica filas por columnas."
  },
  {
    id: 38,
    topic: "Arreglos Bidimensionales",
    difficulty: "medio",
    type: "input",
    prompt: "En un arreglo bidimensional, ¿cómo se accede al elemento en la fila 2, columna 3?",
    answer: ["m[2][3]", "arreglo[2][3]", "[2][3]"],
    answerText: "m[2][3]",
    explanation: "Para acceder a un elemento se usa: nombreArreglo[fila][columna]. Por ejemplo: m[2][3].",
    hint: "Se usan dos pares de corchetes: [fila][columna]."
  },
  {
    id: 39,
    topic: "Inicialización de Arreglos",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es la forma correcta de inicializar un arreglo con valores?",
    choices: ["int[] edad = {45, 23, 11, 9};", "int[] edad = [45, 23, 11, 9];", "int edad[] = (45, 23, 11, 9);", "int edad = {45, 23, 11, 9};"],
    answer: 0,
    explanation: "En Java se usan llaves {} para inicializar arreglos con valores: int[] edad = {45, 23, 11, 9};",
    hint: "Se usan llaves, no corchetes ni paréntesis."
  },
  {
    id: 40,
    topic: "Arreglos y Bucles",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Para recorrer todos los elementos de un arreglo, es común usar un bucle for con el atributo length.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Es muy común usar: for(int i=0; i<arreglo.length; i++) para recorrer todos los elementos.",
    hint: "El bucle for es ideal para recorrer arreglos."
  },

  // ============================================
  // EJERCICIOS PRÁCTICOS Y APLICACIONES
  // ============================================
  {
    id: 41,
    topic: "Aplicación - Factorial",
    difficulty: "medio",
    type: "mcq",
    prompt: "Para calcular el factorial de un número n!, ¿qué estructura de repetición es más apropiada?",
    choices: ["do-while", "while sin condición", "for con rango conocido", "if-else"],
    answer: 2,
    explanation: "El factorial requiere multiplicar desde 1 hasta n, por lo que un for con rango conocido es ideal.",
    hint: "Conoces el rango: de 1 hasta n."
  },
  {
    id: 42,
    topic: "Aplicación - Números Pares",
    difficulty: "basico",
    type: "input",
    prompt: "Para imprimir los números pares del 1 al 50, ¿qué operador usarías para verificar si un número es par?",
    answer: ["%", "modulo", "módulo"],
    answerText: "%",
    explanation: "Se usa el operador módulo: if(numero % 2 == 0) para verificar si un número es par (residuo 0 al dividir entre 2).",
    hint: "Un número es par si su residuo al dividir entre 2 es 0."
  },
  {
    id: 43,
    topic: "Aplicación - Calificaciones",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Para calcular la calificación final con porcentajes (55% parciales, 30% examen, 15% trabajo), se deben usar operadores aritméticos y de asignación.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Se calcula: final = (parciales*0.55) + (examen*0.30) + (trabajo*0.15), usando multiplicación y suma.",
    hint: "Los porcentajes se calculan multiplicando por decimales (55% = 0.55)."
  },
  {
    id: 44,
    topic: "Aplicación - Descuentos",
    difficulty: "medio",
    type: "mcq",
    prompt: "Una tienda ofrece 15% de descuento. Si el total es $100, ¿cuál es la expresión correcta para calcular el total con descuento?",
    choices: ["total * 15 / 100", "total - (total * 0.15)", "total + (total * 0.15)", "total / 0.15"],
    answer: 1,
    explanation: "Para aplicar 15% de descuento: total - (total * 0.15) = 100 - 15 = 85.",
    hint: "Restas el descuento al total."
  },
  {
    id: 45,
    topic: "Aplicación - Scanner",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué clase de Java se usa para leer entrada del usuario desde la consola?",
    answer: ["Scanner", "scanner"],
    answerText: "Scanner",
    explanation: "La clase Scanner del paquete java.util se usa para leer entrada: Scanner entrada = new Scanner(System.in);",
    hint: "Necesitas importar: import java.util.Scanner;"
  },
  {
    id: 46,
    topic: "Valores por Defecto",
    difficulty: "medio",
    type: "mcq",
    prompt: "Si se declara un arreglo int[] numeros = new int[3]; sin inicializar valores, ¿qué valor tienen los elementos por defecto?",
    choices: ["null", "0", "1", "undefined"],
    answer: 1,
    explanation: "Los arreglos numéricos se inicializan por defecto con 0, los booleanos con false, y las referencias con null.",
    hint: "Los números empiezan en 0."
  },
  {
    id: 47,
    topic: "Aplicación - Tablas de Multiplicar",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Para imprimir las tablas de multiplicar del 11 al 20, necesitas bucles anidados (uno para las tablas y otro para los multiplicadores).",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Se necesita un bucle externo para las tablas (11 a 20) y uno interno para los multiplicadores (1 a 10).",
    hint: "Dos niveles de repetición = bucles anidados."
  },
  {
    id: 48,
    topic: "Aplicación - Validación",
    difficulty: "medio",
    type: "mcq",
    prompt: "Para validar que un número esté entre 10 y 100 (inclusive), ¿cuál es la condición correcta?",
    choices: ["numero > 10 && numero < 100", "numero >= 10 && numero <= 100", "numero == 10 || numero == 100", "numero > 10 || numero < 100"],
    answer: 1,
    explanation: "Se usa: numero >= 10 && numero <= 100 para incluir los límites 10 y 100.",
    hint: "Usa >= y <= para incluir los límites."
  },
  {
    id: 49,
    topic: "Conversión de Tipos",
    difficulty: "medio",
    type: "input",
    prompt: "En el ejemplo del método Math.pow, ¿qué operador se usa para convertir el resultado a int?",
    answer: ["(int)", "cast"],
    answerText: "(int)",
    explanation: "Se usa casting: (int)Math.pow(5, 2) para convertir el resultado double a int.",
    hint: "Se pone el tipo entre paréntesis antes del valor."
  },
  {
    id: 50,
    topic: "Buenas Prácticas",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Es importante inicializar los contadores (ej: int count = 1) antes de usarlos en un bucle while.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Siempre se debe inicializar el contador antes del bucle para evitar errores y asegurar el comportamiento correcto.",
    hint: "Sin inicialización, el contador no tiene un valor definido."
  },
  {
    id: 51,
    topic: "Ejercicio - Operadores",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint a = 10;\na += 3;\na *= 2;\nSystem.out.println(a);",
    answer: ["26"],
    answerText: "26",
    explanation: "a = 10, luego a += 3 → a = 13, luego a *= 2 → a = 26. Imprime 26.",
    hint: "Resuelve paso a paso: primero suma, luego multiplica."
  },
  {
    id: 52,
    topic: "Ejercicio - Bucles",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint suma = 0;\nfor (int i = 1; i <= 4; i++) {\n    suma += i;\n}\nSystem.out.println(suma);",
    answer: ["10"],
    answerText: "10",
    explanation: "El bucle suma: 0 + 1 + 2 + 3 + 4 = 10. Imprime 10.",
    hint: "Suma los números del 1 al 4."
  },
  {
    id: 53,
    topic: "Ejercicio - Condicionales",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint x = 20;\nif (x % 2 == 0) {\n    System.out.println(\"Par\");\n} else {\n    System.out.println(\"Impar\");\n}",
    answer: ["Par", "par"],
    answerText: "Par",
    explanation: "20 % 2 = 0 (sin residuo), por lo tanto es par. Imprime 'Par'.",
    hint: "Un número es par si al dividirlo entre 2 el residuo es 0."
  },
  {
    id: 54,
    topic: "Ejercicio - Switch",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint x = 2;\nswitch(x) {\n    case 1: System.out.println(\"Uno\");\n    case 2: System.out.println(\"Dos\");\n    case 3: System.out.println(\"Tres\"); break;\n    default: System.out.println(\"Otro\");\n}",
    answer: ["DosTres", "Dos Tres", "dos tres"],
    answerText: "DosTres",
    explanation: "Como no hay break en case 2, ejecuta 'Dos' y continúa con 'Tres' hasta encontrar el break. Imprime DosTres.",
    hint: "Sin break, el código sigue ejecutando los casos siguientes."
  },
  {
    id: 55,
    topic: "Ejercicio - Arreglos",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint[] nums = {5, 10, 15};\nSystem.out.println(nums[1]);",
    answer: ["10"],
    answerText: "10",
    explanation: "Los índices empiezan en 0: nums[0]=5, nums[1]=10, nums[2]=15. Imprime 10.",
    hint: "Recuerda que los índices empiezan en 0."
  },
  {
    id: 56,
    topic: "Ejercicio - Bucles While",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint i = 5;\nwhile (i > 0) {\n    System.out.print(i);\n    i--;\n}",
    answer: ["54321"],
    answerText: "54321",
    explanation: "El bucle imprime i en cada iteración y lo decrementa: 5, 4, 3, 2, 1. Imprime 54321.",
    hint: "Cuenta regresiva desde 5 hasta 1."
  },
  {
    id: 57,
    topic: "Ejercicio - Do-While",
    difficulty: "medio",
    type: "input",
    prompt: "¿Cuántas veces se ejecuta el bucle?\n\nint x = 10;\ndo {\n    x++;\n} while (x < 10);",
    answer: ["1", "una", "una vez"],
    answerText: "1",
    explanation: "Do-while ejecuta el código al menos una vez antes de evaluar. Se ejecuta con x=10, luego x=11, y la condición (11<10) es false.",
    hint: "Do-while siempre ejecuta al menos una vez."
  },
  {
    id: 58,
    topic: "Ejercicio - Operadores Lógicos",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint a = 5, b = 10;\nif (a > 3 && b < 15) {\n    System.out.println(\"Verdadero\");\n} else {\n    System.out.println(\"Falso\");\n}",
    answer: ["Verdadero", "verdadero"],
    answerText: "Verdadero",
    explanation: "a > 3 es true (5 > 3) Y b < 15 es true (10 < 15). Ambas condiciones son true, por lo tanto imprime 'Verdadero'.",
    hint: "El operador && requiere que AMBAS condiciones sean verdaderas."
  },
  {
    id: 59,
    topic: "Ejercicio - Arreglos 2D",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint[][] m = {{1, 2}, {3, 4}};\nSystem.out.println(m[1][0]);",
    answer: ["3"],
    answerText: "3",
    explanation: "m[1][0] accede a fila 1 (segunda fila), columna 0 (primera columna). En la matriz es el valor 3.",
    hint: "[fila][columna]. Fila 1 = {3, 4}, columna 0 = 3."
  },
  {
    id: 60,
    topic: "Ejercicio - For con Arreglos",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué imprime este código?\n\nint[] arr = {2, 4, 6};\nint suma = 0;\nfor (int i = 0; i < arr.length; i++) {\n    suma += arr[i];\n}\nSystem.out.println(suma);",
    answer: ["12"],
    answerText: "12",
    explanation: "Suma todos los elementos: 2 + 4 + 6 = 12. Imprime 12.",
    hint: "Suma todos los valores del arreglo."
  },

  // ============================================
  // IDENTIFICACIÓN DE ERRORES
  // ============================================
  {
    id: 61,
    topic: "Identificar Error - Arreglos",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuál es el error en este código?\n\nint[] numeros = new int[5];\nSystem.out.println(numeros[5]);",
    choices: ["No hay error", "Índice fuera de rango", "Falta inicializar el arreglo", "Sintaxis incorrecta"],
    answer: 1,
    explanation: "El arreglo tiene 5 elementos (índices 0-4). Intentar acceder a numeros[5] causa un error ArrayIndexOutOfBoundsException.",
    hint: "Recuerda que los índices van de 0 a length-1."
  },
  {
    id: 62,
    topic: "Identificar Error - Operadores",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuál es el error en este código?\n\nint x = 10;\nif (x = 5) {\n    System.out.println(\"Cinco\");\n}",
    choices: ["No hay error", "Se debe usar == en lugar de =", "Falta punto y coma", "x debe ser double"],
    answer: 1,
    explanation: "El operador = es de asignación. Para comparar se debe usar == (doble igual). El código intenta asignar 5 a x en lugar de comparar.",
    hint: "= es asignación, == es comparación."
  },
  {
    id: 63,
    topic: "Identificar Error - Bucles",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué problema tiene este código?\n\nint i = 0;\nwhile (i < 10) {\n    System.out.println(i);\n}",
    choices: ["No hay problema", "Bucle infinito", "Error de sintaxis", "i debe empezar en 1"],
    answer: 1,
    explanation: "El valor de i nunca cambia dentro del bucle, por lo que la condición i < 10 siempre será true, creando un bucle infinito.",
    hint: "Falta incrementar o modificar la variable de control."
  },
  {
    id: 64,
    topic: "Identificar Error - Switch",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué palabra clave falta en este switch?\n\nint opcion = 1;\nswitch(opcion) {\n    case 1: System.out.println(\"Uno\");\n    case 2: System.out.println(\"Dos\");\n}",
    answer: ["break"],
    answerText: "break",
    explanation: "Faltan las sentencias 'break' en cada case. Sin break, el código continuará ejecutando los siguientes cases (fall-through).",
    hint: "Sin esta palabra, todos los cases se ejecutan en cascada."
  },
  {
    id: 65,
    topic: "Identificar Error - For",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el error en este bucle?\n\nfor (int i = 0; i < 10; i--) {\n    System.out.println(i);\n}",
    choices: ["No hay error", "Debería ser i++", "Falta inicialización", "Condición incorrecta"],
    answer: 1,
    explanation: "El bucle usa i-- (decremento) pero la condición es i < 10. Como i empieza en 0 y disminuye, nunca será >= 10, creando un bucle infinito.",
    hint: "La dirección del incremento no coincide con la condición."
  },
  {
    id: 66,
    topic: "Identificar Error - Arreglos",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el error en este código?\n\nint[] numeros = new int[3];\nfor (int i = 1; i <= 3; i++) {\n    numeros[i] = i * 2;\n}",
    choices: ["No hay error", "Índice fuera de rango en i=3", "Debería empezar en i=0", "Ambas: empieza mal y se pasa del límite"],
    answer: 3,
    explanation: "Los índices válidos son 0, 1, 2. El bucle empieza en 1 (ignora índice 0) y llega hasta 3 (que no existe), causando ArrayIndexOutOfBoundsException.",
    hint: "Los índices van de 0 a length-1."
  },
  {
    id: 67,
    topic: "Identificar Error - División",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué error puede ocurrir en este código?\n\nint a = 10;\nint b = 0;\nint resultado = a / b;",
    choices: ["No hay error", "División por cero", "Error de sintaxis", "Resultado incorrecto"],
    answer: 1,
    explanation: "Dividir entre cero causa ArithmeticException. Siempre se debe validar que el divisor no sea cero antes de dividir.",
    hint: "No se puede dividir entre cero en matemáticas ni en programación."
  },
  {
    id: 68,
    topic: "Identificar Error - Condicionales",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué está mal en este código?\n\nint edad = 25;\nif (edad >= 18 && edad <= 65);\n    System.out.println(\"Adulto\");",
    choices: ["No hay error", "Punto y coma después del if", "Falta else", "Condición incorrecta"],
    answer: 1,
    explanation: "El punto y coma después del if cierra la sentencia, haciendo que el System.out.println se ejecute siempre, sin importar la condición.",
    hint: "Un ; extra termina la sentencia if prematuramente."
  },
  {
    id: 69,
    topic: "Identificar Error - Scope",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el error en este código?\n\nif (true) {\n    int x = 5;\n}\nSystem.out.println(x);",
    choices: ["No hay error", "x no está definida fuera del if", "Falta inicializar x", "Sintaxis incorrecta"],
    answer: 1,
    explanation: "La variable x solo existe dentro del bloque if (scope local). Fuera del bloque, x no está definida y causa un error de compilación.",
    hint: "Las variables declaradas dentro de {} solo existen en ese bloque."
  },
  {
    id: 70,
    topic: "Identificar Error - While",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué problema tiene este código?\n\nint count;\nwhile (count < 5) {\n    System.out.println(count);\n    count++;\n}",
    choices: ["No hay error", "count no está inicializado", "Falta condición", "Debería ser do-while"],
    answer: 1,
    explanation: "La variable count se declara pero no se inicializa. Intentar usarla sin valor inicial causa un error de compilación.",
    hint: "Las variables locales deben inicializarse antes de usarse."
  },
  {
    id: 71,
    topic: "Identificar Error - Matriz",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el error en este código?\n\nint[][] matriz = new int[2][3];\nmatriz[2][0] = 10;",
    choices: ["No hay error", "Índice de fila fuera de rango", "Índice de columna fuera de rango", "Falta inicializar matriz"],
    answer: 1,
    explanation: "La matriz tiene 2 filas (índices 0 y 1). Intentar acceder a matriz[2] causa ArrayIndexOutOfBoundsException.",
    hint: "2 filas significa índices 0 y 1."
  },
  {
    id: 72,
    topic: "Identificar Error - Operadores Lógicos",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué operador está mal usado?\n\nint x = 5;\nif (x > 3 & x < 10) {\n    System.out.println(\"Correcto\");\n}",
    answer: ["&", "& (debería ser &&)", "and", "ampersand"],
    answerText: "&",
    explanation: "Se usa & (operador de bit) en lugar de && (operador lógico AND). Aunque funciona, && es más eficiente (evaluación con cortocircuito).",
    hint: "Para operaciones lógicas se prefiere el operador doble."
  },
  {
    id: 73,
    topic: "Identificar Error - String",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el problema con este código?\n\nString nombre = \"Juan\";\nif (nombre == \"Juan\") {\n    System.out.println(\"Hola Juan\");\n}",
    choices: ["No hay error", "Se debe usar .equals() para comparar Strings", "Falta inicializar nombre", "Sintaxis incorrecta"],
    answer: 1,
    explanation: "El operador == compara referencias, no contenido. Para comparar el contenido de Strings se debe usar .equals(): nombre.equals(\"Juan\").",
    hint: "== compara si son el mismo objeto, no si tienen el mismo texto."
  },
  {
    id: 74,
    topic: "Identificar Error - Tipos de Datos",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué error hay en este código?\n\nint resultado = 10 / 4.0;",
    choices: ["No hay error", "Pérdida de precisión (double a int)", "División incorrecta", "Falta casting"],
    answer: 1,
    explanation: "10 / 4.0 devuelve 2.5 (double). Asignar un double a una variable int sin casting causa error de compilación por posible pérdida de datos.",
    hint: "No se puede asignar un decimal (double) a un entero (int) sin conversión explícita."
  },
  {
    id: 75,
    topic: "Identificar Error - Arreglos 2D",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué está mal en este código?\n\nint[][] m = {{1, 2, 3}, {4, 5}};\nfor (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 3; j++) {\n        System.out.println(m[i][j]);\n    }\n}",
    choices: ["No hay error", "La segunda fila solo tiene 2 elementos", "Falta inicialización", "Índices incorrectos"],
    answer: 1,
    explanation: "La matriz es irregular: fila 0 tiene 3 elementos, fila 1 solo tiene 2. Al intentar acceder a m[1][2] causará ArrayIndexOutOfBoundsException.",
    hint: "Las filas tienen diferentes longitudes."
  },
  {
    id: 76,
    topic: "Identificar Error - Do-While",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el error de sintaxis?\n\nint i = 0;\ndo {\n    System.out.println(i);\n    i++;\n} while (i < 5)",
    choices: ["No hay error", "Falta punto y coma después del while", "Condición incorrecta", "Falta inicializar i"],
    answer: 1,
    explanation: "La estructura do-while requiere un punto y coma al final: while (i < 5); Es una regla de sintaxis específica de do-while.",
    hint: "Do-while es la única estructura que necesita ; al final."
  },
  {
    id: 77,
    topic: "Identificar Error - Casting",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué falta en este código para que compile?\n\ndouble x = 10.5;\nint y = x;",
    answer: ["(int)", "casting", "cast", "conversion"],
    answerText: "(int)",
    explanation: "Se necesita casting explícito para convertir double a int: int y = (int)x; Java no hace esta conversión automáticamente por posible pérdida de datos.",
    hint: "Necesitas conversión explícita de tipo."
  },
  {
    id: 78,
    topic: "Identificar Error - Lógica",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué lógica está invertida?\n\nint nota = 85;\nif (nota < 60) {\n    System.out.println(\"Aprobado\");\n} else {\n    System.out.println(\"Reprobado\");\n}",
    choices: ["No hay error", "La condición está al revés", "Falta else-if", "nota debe ser double"],
    answer: 1,
    explanation: "La lógica está invertida: nota < 60 debería imprimir 'Reprobado', no 'Aprobado'. Debería ser: if (nota >= 60) para aprobar.",
    hint: "Si la nota es menor a 60, ¿está aprobado o reprobado?"
  },
  {
    id: 79,
    topic: "Identificar Error - For Mejorado",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué está mal en este código?\n\nint[] nums = {1, 2, 3};\nfor (int n : nums) {\n    n = n * 2;\n}\nSystem.out.println(nums[0]);",
    choices: ["No hay error", "El for-each no modifica el arreglo original", "Sintaxis incorrecta", "Falta índice"],
    answer: 1,
    explanation: "En un for-each, la variable n es una copia. Modificar n no afecta el arreglo original. Se imprimirá 1, no 2.",
    hint: "El for-each crea copias, no trabaja con referencias del arreglo."
  },
  {
    id: 80,
    topic: "Identificar Error - Constante",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué error causará este código?\n\nfinal int MAX = 100;\nMAX = 200;",
    choices: ["No hay error", "No se puede modificar una constante (final)", "Falta inicializar", "MAX debe ser double"],
    answer: 1,
    explanation: "La palabra clave 'final' hace que MAX sea una constante. Intentar cambiar su valor causa un error de compilación.",
    hint: "final significa que el valor no puede cambiar después de inicializarse."
  },
  {
    id: 81,
    topic: "Identificar Error - Precedencia",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué resultado inesperado da este código?\n\nint resultado = 5 + 3 * 2;\nSystem.out.println(resultado);",
    answer: ["11"],
    answerText: "11",
    explanation: "No es un error de sintaxis, pero muchos esperan 16. Por precedencia, la multiplicación se hace primero: 3*2=6, luego 5+6=11.",
    hint: "La multiplicación tiene mayor precedencia que la suma."
  },
  {
    id: 82,
    topic: "Identificar Error - Return",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué falta en este método?\n\npublic static int suma(int a, int b) {\n    int resultado = a + b;\n}",
    choices: ["No falta nada", "Falta la sentencia return", "Falta inicializar resultado", "Parámetros incorrectos"],
    answer: 1,
    explanation: "El método declara que devuelve un int, pero no tiene sentencia return. Debe incluir: return resultado; al final.",
    hint: "Un método que devuelve un valor debe usar return."
  },
  {
    id: 83,
    topic: "Identificar Error - Bucles Anidados",
    difficulty: "avanzado",
    type: "mcq",
    prompt: "¿Qué problema tiene este código?\n\nfor (int i = 0; i < 3; i++) {\n    for (int i = 0; i < 2; i++) {\n        System.out.println(i);\n    }\n}",
    choices: ["No hay error", "Variable i declarada dos veces", "Falta incremento", "Condición incorrecta"],
    answer: 1,
    explanation: "Se declara la variable i dos veces en el mismo scope. El bucle interno debe usar otra variable como j.",
    hint: "No puedes declarar la misma variable dos veces."
  },
  {
    id: 84,
    topic: "Identificar Error - Overflow",
    difficulty: "avanzado",
    type: "mcq",
    prompt: "¿Qué problema puede ocurrir?\n\nint x = 2147483647;\nx = x + 1;",
    choices: ["No hay problema", "Overflow: excede el máximo de int", "Error de sintaxis", "Falta casting"],
    answer: 1,
    explanation: "2147483647 es el valor máximo de int. Sumar 1 causa overflow y el valor se vuelve -2147483648 (el valor mínimo).",
    hint: "Los tipos de datos tienen límites máximos."
  },
  {
    id: 85,
    topic: "Identificar Error - NullPointer",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué error ocurrirá en tiempo de ejecución?\n\nString texto = null;\nSystem.out.println(texto.length());",
    choices: ["No hay error", "NullPointerException", "Error de compilación", "Imprime 0"],
    answer: 1,
    explanation: "Intentar llamar un método (.length()) sobre una referencia null causa NullPointerException. Se debe validar: if (texto != null).",
    hint: "No puedes llamar métodos sobre objetos null."
  },

  // ============================================
  // LA PLATAFORMA JAVA
  // ============================================
  {
    id: 86,
    topic: "Plataforma Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuáles son los tres componentes principales de la Plataforma Java?",
    choices: ["JVM, Java API y el Lenguaje de Programación", "Compilador, Intérprete y Debugger", "Eclipse, NetBeans y Visual Age", "Applets, Servlets y JavaBeans"],
    answer: 0,
    explanation: "La Plataforma Java consta de: 1) La JVM (Máquina Virtual), 2) Java API (Bibliotecas Estándar), y 3) El Lenguaje de Programación.",
    hint: "Piensa en los tres elementos fundamentales que necesitas para ejecutar programas Java."
  },
  {
    id: 87,
    topic: "Plataforma Java",
    difficulty: "basico",
    type: "truefalse",
    prompt: "La Máquina Virtual Java (JVM) es el motor que procesa el software Java y es imprescindible para la ejecución.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "La JVM es el componente fundamental que ejecuta los programas Java. Sin ella, no se pueden ejecutar aplicaciones Java.",
    hint: "Es el 'motor' de Java."
  },
  {
    id: 88,
    topic: "Plataforma Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué es el Java API (Bibliotecas Estándar)?",
    choices: ["Un editor de código", "Una colección de componentes prefabricados listos para usar", "Un compilador", "Un sistema operativo"],
    answer: 1,
    explanation: "El Java API es una amplia colección de componentes prefabricados (Networking, GUI, I/O, Database, Collections, etc.) que están listos para usar.",
    hint: "Son herramientas ya hechas que puedes usar en tus programas."
  },

  // ============================================
  // HISTORIA DE JAVA
  // ============================================
  {
    id: 89,
    topic: "Historia de Java",
    difficulty: "medio",
    type: "input",
    prompt: "¿Cuál fue el nombre original del lenguaje Java antes de ser renombrado?",
    answer: ["Oak", "oak"],
    answerText: "Oak",
    explanation: "James Gosling creó el lenguaje originalmente con el nombre 'Oak' para el proyecto Green y el dispositivo Star Seven.",
    hint: "Es el nombre de un árbol."
  },
  {
    id: 90,
    topic: "Historia de Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Para qué mercado fue originalmente diseñado Java (Oak)?",
    choices: ["Servidores web", "Electrónica de consumo (microondas, TV, tostadoras)", "Computadoras personales", "Teléfonos móviles"],
    answer: 1,
    explanation: "Sun Microsystems buscaba entrar en la electrónica de consumo. Java/Oak fue creado para dispositivos como microondas, tostadoras y TV interactiva.",
    hint: "Electrodomésticos y aparatos del hogar."
  },
  {
    id: 91,
    topic: "Historia de Java",
    difficulty: "medio",
    type: "input",
    prompt: "¿Cómo se llamaba el dispositivo controlador del hogar con interfaz táctil creado en el Proyecto Green?",
    answer: ["Star Seven", "star seven", "*7", "7"],
    answerText: "Star Seven (*7)",
    explanation: "El prototipo Star Seven (*7) era un controlador del hogar con interfaz táctil, desarrollado por James Gosling en el Proyecto Green.",
    hint: "Estrella y un número."
  },
  {
    id: 92,
    topic: "Historia de Java",
    difficulty: "basico",
    type: "truefalse",
    prompt: "El proyecto inicial de Java/Oak en electrónica de consumo fue un éxito comercial inmediato.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. El mercado de TV interactiva no despegó y FirstPerson cerró en 1994. Fue un fracaso inicial antes de su renacimiento con Internet.",
    hint: "El proyecto cerró en 1994."
  },
  {
    id: 93,
    topic: "Historia de Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Quién vio el potencial de Oak para Internet y promovió su renacimiento como Java?",
    choices: ["James Gosling", "Bill Joy", "Larry Ellison", "Steve Jobs"],
    answer: 1,
    explanation: "Bill Joy vio el potencial de Oak para Internet. Fue renombrado como Java y lanzado en Sun World '95 para competir con Microsoft.",
    hint: "No fue el creador original, sino otro ejecutivo de Sun."
  },
  {
    id: 94,
    topic: "Historia de Java",
    difficulty: "basico",
    type: "input",
    prompt: "¿En qué año se lanzó Java públicamente en Sun World?",
    answer: ["1995", "95"],
    answerText: "1995",
    explanation: "Java fue lanzado públicamente en Sun World en 1995, marcando su renacimiento como lenguaje para Internet.",
    hint: "A mediados de los años 90."
  },

  // ============================================
  // ARQUITECTURA JAVA
  // ============================================
  {
    id: 95,
    topic: "Arquitectura Java",
    difficulty: "basico",
    type: "input",
    prompt: "¿Cómo se llama el código intermedio que genera el compilador de Java?",
    answer: ["bytecode", "bytecodes", "byte code"],
    answerText: "Bytecode",
    explanation: "El compilador javac no genera código máquina específico, sino 'bytecodes', un código intermedio independiente de la plataforma.",
    hint: "Es un código de bytes intermedio."
  },
  {
    id: 96,
    topic: "Arquitectura Java",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Los bytecodes son el 'lenguaje máquina' de la JVM y son independientes de la plataforma.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Los bytecodes son el lenguaje que entiende la JVM. Al ser independientes del hardware, permiten la portabilidad de Java.",
    hint: "Por eso el mismo .class funciona en Windows, Linux y Mac."
  },
  {
    id: 97,
    topic: "Arquitectura Java",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué extensión tienen los archivos que contienen bytecode de Java?",
    answer: [".class", "class"],
    answerText: ".class",
    explanation: "Los archivos compilados de Java tienen extensión .class y contienen los bytecodes que la JVM ejecuta.",
    hint: "Es la extensión del archivo compilado."
  },
  {
    id: 98,
    topic: "Arquitectura Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el lema que describe la portabilidad de Java?",
    choices: ["Code Once, Deploy Anywhere", "Write Once, Run Anywhere", "Compile Once, Execute Everywhere", "Program Once, Use Everywhere"],
    answer: 1,
    explanation: "'Write Once, Run Anywhere' (WORA) es el lema de Java. El mismo archivo .class se ejecuta en diferentes sistemas operativos sin recompilar.",
    hint: "Escribe una vez, ejecuta en cualquier lugar."
  },
  {
    id: 99,
    topic: "Arquitectura Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "A diferencia de C/C++, en Java no es necesario recompilar el código fuente para ejecutarlo en diferentes sistemas operativos.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Java compila a bytecode que es portable. C/C++ compila a código máquina específico de cada plataforma, requiriendo recompilación.",
    hint: "Esta es una ventaja clave de Java sobre C/C++."
  },

  // ============================================
  // ESTRATEGIAS DE EJECUCIÓN
  // ============================================
  {
    id: 100,
    topic: "Ejecución de Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuáles son las dos estrategias principales para ejecutar bytecodes de Java?",
    choices: ["Compilación e Interpretación", "Intérprete y Compilador JIT", "Debugger y Profiler", "API y SDK"],
    answer: 1,
    explanation: "Las dos opciones son: A) Intérprete (lee y ejecuta instrucción por instrucción), B) Compilador JIT (compila a código nativo durante la carga).",
    hint: "Una es lenta pero flexible, otra es rápida."
  },
  {
    id: 101,
    topic: "Ejecución de Java",
    difficulty: "basico",
    type: "truefalse",
    prompt: "El intérprete de Java lee y ejecuta los bytecodes instrucción por instrucción, siendo más flexible pero más lento.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "El intérprete ejecuta cada instrucción una por una, lo que lo hace flexible pero menos eficiente en velocidad.",
    hint: "Como leer un libro línea por línea en tiempo real."
  },
  {
    id: 102,
    topic: "Ejecución de Java",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué significan las siglas JIT en el contexto de Java?",
    answer: ["Just In Time", "just in time"],
    answerText: "Just In Time",
    explanation: "JIT significa 'Just In Time' (Justo a Tiempo). Es un compilador que traduce bytecodes a código máquina nativo durante la ejecución.",
    hint: "Se compila 'justo a tiempo' cuando se necesita."
  },
  {
    id: 103,
    topic: "Ejecución de Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es la ventaja principal del Compilador JIT sobre el intérprete?",
    choices: ["Mayor flexibilidad", "Aumenta drásticamente la velocidad", "Menor uso de memoria", "Mejor portabilidad"],
    answer: 1,
    explanation: "El compilador JIT compila los bytecodes a código máquina nativo del ordenador, lo que aumenta drásticamente la velocidad de ejecución.",
    hint: "Una vez compilado a código nativo, se ejecuta mucho más rápido."
  },
  {
    id: 104,
    topic: "Ejecución de Java",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Java logra un equilibrio entre portabilidad y rendimiento mediante la combinación de bytecodes portables y compilación JIT.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Los bytecodes dan portabilidad (mismo código en todas las plataformas) y el JIT da rendimiento (compilación a código nativo).",
    hint: "Lo mejor de dos mundos."
  },

  // ============================================
  // ECOSISTEMA DE DESARROLLO
  // ============================================
  {
    id: 105,
    topic: "Herramientas Java",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué comando se usa para compilar aplicaciones Java?",
    answer: ["javac"],
    answerText: "javac",
    explanation: "El comando 'javac' es el compilador de Java. Transforma archivos .java en archivos .class con bytecodes.",
    hint: "Java Compiler."
  },
  {
    id: 106,
    topic: "Herramientas Java",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué comando se usa para ejecutar aplicaciones Java compiladas?",
    answer: ["java"],
    answerText: "java",
    explanation: "El comando 'java' ejecuta programas Java. Carga el archivo .class y lo ejecuta en la JVM.",
    hint: "Es simplemente el nombre del lenguaje."
  },
  {
    id: 107,
    topic: "Herramientas Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué herramienta del SDK de Java genera documentación automática?",
    choices: ["javac", "javadoc", "jar", "jdb"],
    answer: 1,
    explanation: "javadoc es el generador de documentación automática. Crea documentación HTML a partir de comentarios en el código.",
    hint: "Java Documentation."
  },
  {
    id: 108,
    topic: "Herramientas Java",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué herramienta del SDK se usa para crear archivos de distribución (empaquetado)?",
    answer: ["jar"],
    answerText: "jar",
    explanation: "La herramienta 'jar' (Java ARchive) crea archivos comprimidos .jar que contienen múltiples archivos .class y recursos.",
    hint: "Java Archive."
  },
  {
    id: 109,
    topic: "Herramientas Java",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué herramienta del SDK es el depurador (debugger) de Java?",
    answer: ["jdb"],
    answerText: "jdb",
    explanation: "jdb (Java Debugger) es la herramienta para depurar programas Java, permitiendo ejecutar paso a paso y examinar variables.",
    hint: "Java Debugger."
  },
  {
    id: 110,
    topic: "Ediciones de Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué edición de Java se usa para aplicaciones de escritorio?",
    choices: ["J2EE", "J2SE", "J2ME", "J2DE"],
    answer: 1,
    explanation: "J2SE (Java 2 Standard Edition) es la edición para aplicaciones de escritorio y uso general.",
    hint: "Standard Edition."
  },
  {
    id: 111,
    topic: "Ediciones de Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué edición de Java se usa para aplicaciones empresariales y servidores?",
    choices: ["J2SE", "J2EE", "J2ME", "J2BE"],
    answer: 1,
    explanation: "J2EE (Java 2 Enterprise Edition) es la edición para aplicaciones empresariales, servidores web y sistemas distribuidos.",
    hint: "Enterprise Edition."
  },
  {
    id: 112,
    topic: "Ediciones de Java",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué edición de Java se usa para dispositivos móviles y embebidos?",
    answer: ["J2ME", "Micro Edition"],
    answerText: "J2ME",
    explanation: "J2ME (Java 2 Micro Edition) es la edición para dispositivos con recursos limitados como teléfonos móviles y sistemas embebidos.",
    hint: "Micro Edition."
  },
  {
    id: 113,
    topic: "IDEs de Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuáles de los siguientes son IDEs gratuitos para Java?",
    choices: ["Eclipse y NetBeans", "Visual Age y Borland JBuilder", "Microsoft Visual Studio", "Xcode"],
    answer: 0,
    explanation: "Eclipse y NetBeans son IDEs gratuitos y de código abierto muy populares para desarrollo Java.",
    hint: "Los dos IDEs más populares y gratuitos."
  },

  // ============================================
  // APLICACIONES Y APPLETS
  // ============================================
  {
    id: 114,
    topic: "Aplicaciones vs Applets",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Las aplicaciones Java son programas independientes que se instalan y tienen acceso completo a los recursos del sistema.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Las aplicaciones Java son programas completos e independientes que pueden acceder a archivos, red y otros recursos del sistema.",
    hint: "Como cualquier programa normal instalado en tu computadora."
  },
  {
    id: 115,
    topic: "Aplicaciones vs Applets",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué son los Applets de Java?",
    choices: ["Programas grandes para servidores", "Pequeñas aplicaciones incrustadas en páginas web", "Herramientas de desarrollo", "Sistemas operativos"],
    answer: 1,
    explanation: "Los Applets son pequeñas aplicaciones que se ejecutan dentro de navegadores web, incrustadas en páginas HTML.",
    hint: "Se ejecutan en el navegador web."
  },
  {
    id: 116,
    topic: "Seguridad Java",
    difficulty: "medio",
    type: "input",
    prompt: "¿Cómo se llama el entorno de seguridad restringido en el que operan los Applets?",
    answer: ["Sandbox", "sandbox", "caja de arena"],
    answerText: "Sandbox",
    explanation: "El 'Sandbox' (caja de arena) es un entorno de seguridad que restringe lo que los Applets pueden hacer, protegiéndote de código malicioso.",
    hint: "Un lugar seguro para jugar sin causar daño."
  },
  {
    id: 117,
    topic: "Seguridad Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál de las siguientes restricciones NO aplica a los Applets en el Sandbox?",
    choices: ["No pueden acceder a ficheros locales", "No pueden ejecutar otros programas", "Solo pueden conectarse al servidor de origen", "No pueden mostrar gráficos"],
    answer: 3,
    explanation: "Los Applets SÍ pueden mostrar gráficos. Las restricciones son: no acceder a archivos, no ejecutar programas y solo conectarse a su servidor de origen.",
    hint: "Los Applets son aplicaciones gráficas, así que deben poder mostrar gráficos."
  },
  {
    id: 118,
    topic: "Seguridad Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Un Applet puede conectarse a cualquier servidor en Internet para obtener datos.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. Los Applets solo pueden conectarse al servidor del cual se descargaron (servidor de origen), por razones de seguridad.",
    hint: "Está limitado al servidor de donde proviene."
  },

  // ============================================
  // CICLO DE VIDA Y PROCESO
  // ============================================
  {
    id: 119,
    topic: "Ciclo de Vida Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuál es el orden correcto de las fases en el ciclo de vida de un programa Java?",
    choices: ["Edición → Ejecución → Compilación", "Compilación → Edición → Ejecución", "Edición → Compilación → Carga → Ejecución", "Ejecución → Compilación → Edición"],
    answer: 2,
    explanation: "El ciclo es: 1) Edición (escribir .java), 2) Compilación (javac genera .class), 3) Carga (Cargador de Clases), 4) Ejecución (Intérprete/JIT).",
    hint: "Primero escribes, luego compilas, luego cargas y finalmente ejecutas."
  },
  {
    id: 120,
    topic: "Ciclo de Vida Java",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué componente de la JVM carga los archivos .class desde el disco a la memoria RAM?",
    answer: ["Cargador de Clases", "Class Loader", "cargador"],
    answerText: "Cargador de Clases (Class Loader)",
    explanation: "El Cargador de Clases (Class Loader) es responsable de cargar los archivos .class desde el disco hacia la memoria para su ejecución.",
    hint: "Se encarga de cargar las clases."
  },
  {
    id: 121,
    topic: "Proceso de Compilación",
    difficulty: "basico",
    type: "input",
    prompt: "Si tienes un archivo llamado Programa.java, ¿qué comando usas para compilarlo?",
    answer: ["javac Programa.java", "javac programa.java"],
    answerText: "javac Programa.java",
    explanation: "Se usa el comando javac seguido del nombre del archivo: javac Programa.java. Esto genera Programa.class.",
    hint: "Usa el compilador de Java."
  },
  {
    id: 122,
    topic: "Proceso de Ejecución",
    difficulty: "basico",
    type: "input",
    prompt: "Si tienes un archivo Programa.class, ¿qué comando usas para ejecutarlo? (solo escribe el comando, sin la extensión)",
    answer: ["java Programa", "java programa"],
    answerText: "java Programa",
    explanation: "Se usa el comando java seguido del nombre de la clase SIN la extensión .class: java Programa.",
    hint: "Usa el ejecutor de Java, pero sin la extensión .class."
  },

  // ============================================
  // CARACTERÍSTICAS CLAVE
  // ============================================
  {
    id: 123,
    topic: "Características Java",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Java funciona en múltiples sistemas operativos (multiplataforma) porque tiene entornos de ejecución en todos los SO principales.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Existen implementaciones de la JVM para Windows, Linux, macOS, Solaris, etc., permitiendo ejecutar el mismo código Java en todos ellos.",
    hint: "La JVM está disponible para muchos sistemas operativos."
  },
  {
    id: 124,
    topic: "Características Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué característica de Java se encarga automáticamente de liberar memoria no utilizada?",
    choices: ["Verificador de Bytecodes", "Compilador JIT", "Garbage Collector", "Class Loader"],
    answer: 2,
    explanation: "El Garbage Collector (Recolector de Basura) gestiona automáticamente la memoria, liberando objetos que ya no se usan.",
    hint: "Recolecta la 'basura' (objetos no utilizados)."
  },
  {
    id: 125,
    topic: "Características Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "A diferencia de C++, Java no tiene punteros explícitos, lo que lo hace más simple y seguro.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Java no permite manipulación directa de punteros como C++, reduciendo errores comunes y mejorando la seguridad.",
    hint: "Es una simplificación respecto a C++."
  },
  {
    id: 126,
    topic: "Características Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué componente de seguridad de Java verifica que los bytecodes no violen las reglas del lenguaje?",
    choices: ["Garbage Collector", "Verificador de Bytecodes", "Compilador JIT", "Class Loader"],
    answer: 1,
    explanation: "El Verificador de Bytecodes examina los archivos .class para asegurar que no contengan código malicioso o que viole las reglas de Java.",
    hint: "Verifica que el código sea seguro."
  },
  {
    id: 127,
    topic: "Características Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es la API de Java para acceso a bases de datos?",
    choices: ["JNDI", "JDBC", "RMI", "JAXP"],
    answer: 1,
    explanation: "JDBC (Java Database Connectivity) es la API estándar de Java para conectarse y trabajar con bases de datos.",
    hint: "Java DataBase Connectivity."
  },

  // ============================================
  // MITOS Y REALIDADES
  // ============================================
  {
    id: 128,
    topic: "Mitos de Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Mito: Java es solo para la Web (Applets). Realidad: Java es de propósito general y se usa en servidores, escritorio y móviles.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Aunque Java se popularizó con Applets, es un lenguaje de propósito general usado en servidores (45%), escritorio (50%) y applets (5%).",
    hint: "Java es mucho más que solo páginas web."
  },
  {
    id: 129,
    topic: "Mitos de Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "Según las estadísticas del material, ¿cuál es el mayor uso de Java?",
    choices: ["Applets Web (5%)", "Aplicaciones de Escritorio (50%)", "Servidores (45%)", "Móviles"],
    answer: 1,
    explanation: "Las aplicaciones de escritorio representan el 50% del uso de Java, seguidas por servidores (45%) y applets web (solo 5%).",
    hint: "La mayoría del código Java no está en navegadores web."
  },
  {
    id: 130,
    topic: "Mitos de Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "El lema 'Write once, run anywhere' es completamente cierto sin ninguna consideración adicional.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. Aunque es mayormente cierto, requiere comprobación. Las interfaces gráficas pueden variar entre SO y el uso de código nativo rompe la portabilidad.",
    hint: "Es cierto, pero con algunas advertencias."
  },
  {
    id: 131,
    topic: "Mitos de Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué puede romper la portabilidad 'Write Once, Run Anywhere' de Java?",
    choices: ["Usar la API estándar", "Usar código nativo específico de la plataforma", "Compilar con javac", "Usar el Garbage Collector"],
    answer: 1,
    explanation: "El uso de código nativo (JNI, bibliotecas específicas del SO) rompe la portabilidad porque vincula el programa a una plataforma específica.",
    hint: "Si usas código específico de Windows, no funcionará en Linux."
  },
  {
    id: 132,
    topic: "Mitos de Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Mito: Java es lento porque es interpretado. Realidad: Los compiladores JIT modernos mitigan esto significativamente.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Aunque Java fue interpretado inicialmente, los compiladores JIT modernos compilan a código nativo, reduciendo mucho la diferencia de velocidad.",
    hint: "El JIT convierte el bytecode a código nativo rápido."
  },
  {
    id: 133,
    topic: "Mitos de Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuánto más lentas pueden ser las aplicaciones Java comparadas con C++ debido a chequeos de seguridad?",
    choices: ["5%", "20%", "50%", "100% (el doble de lento)"],
    answer: 1,
    explanation: "Las aplicaciones Java pueden ser aproximadamente un 20% más lentas que C++ debido a los chequeos de seguridad y abstracción, pero la diferencia se reduce.",
    hint: "Es un porcentaje relativamente bajo."
  },
  {
    id: 134,
    topic: "Mitos de Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Java es siempre la mejor opción para cualquier tipo de proyecto de software.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. No existe la 'bala de plata'. Para utilidades simples/bajo nivel se prefiere C, para alto rendimiento/sistemas se prefiere C++. Depende del uso.",
    hint: "Cada lenguaje tiene sus casos de uso ideales."
  },
  {
    id: 135,
    topic: "Características Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué equilibra Java respecto a C++?",
    choices: ["Velocidad y seguridad", "Productividad de desarrollo y seguridad del sistema", "Tamaño y rendimiento", "Costo y calidad"],
    answer: 1,
    explanation: "Java equilibra la productividad del desarrollo (más simple que C++) con la seguridad del sistema (gestión automática de memoria, sin punteros).",
    hint: "Es más fácil de usar y más seguro que C++."
  }
];

// Temas se cargan desde app.js
