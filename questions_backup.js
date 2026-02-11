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
  }
];

const topics = Array.from(new Set(window.QUESTION_BANK.map((q) => q.topic)));
const topicSelect = document.getElementById("topicSelect");
if (topicSelect) {
  topics.forEach((topic) => {
    const opt = document.createElement("option");
    opt.value = topic;
    opt.textContent = topic;
    topicSelect.appendChild(opt);
  });
}
