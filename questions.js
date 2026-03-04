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
    topic: "Estructuras Condicionales",
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
    topic: "Bucle While",
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
    topic: "Bucles",
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
    topic: "Bucles",
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
    topic: "Bucles",
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
    topic: "Bucles",
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
    topic: "Arreglos",
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
    topic: "Arreglos",
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
    topic: "Arreglos",
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
    topic: "Arreglos",
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
    topic: "Arreglos",
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
    topic: "Arreglos",
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
    topic: "Aplicaciones Prácticas",
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
    topic: "Aplicaciones Prácticas",
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
    topic: "Aplicaciones Prácticas",
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
    topic: "Aplicaciones Prácticas",
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
    topic: "Aplicaciones Prácticas",
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
    topic: "Tipos de Datos",
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
    topic: "Aplicaciones Prácticas",
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
    topic: "Aplicaciones Prácticas",
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
    topic: "Tipos de Datos",
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
    topic: "Historia y Características de Java",
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
    topic: "Operadores Aritméticos",
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
    topic: "Bucles",
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
    topic: "Estructuras Condicionales",
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
    topic: "Switch",
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
    topic: "Arreglos",
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
    topic: "Bucle While",
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
    topic: "Bucle Do-While",
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
    topic: "Operadores Lógicos",
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
    topic: "Arreglos",
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
    topic: "Bucle For",
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
    topic: "Arreglos",
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
    topic: "Operadores Aritméticos",
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
    topic: "Bucles",
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
    topic: "Switch",
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
    topic: "Bucle For",
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
    topic: "Arreglos",
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
    topic: "Operadores Aritméticos",
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
    topic: "Estructuras Condicionales",
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
    topic: "Métodos en Java",
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
    topic: "Bucle While",
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
    topic: "Arreglos",
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
    topic: "Operadores Lógicos",
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
    topic: "Métodos en Java",
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
    topic: "Tipos de Datos",
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
    topic: "Arreglos",
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
    topic: "Bucle Do-While",
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
    topic: "Tipos de Datos",
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
    topic: "Operadores Lógicos",
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
    topic: "Bucle For",
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
    topic: "Tipos de Datos",
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
    topic: "Jerarquía de Operadores",
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
    topic: "Métodos en Java",
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
    topic: "Bucles",
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
    topic: "Tipos de Datos",
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
    topic: "Arreglos",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
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
    topic: "Historia y Características de Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué equilibra Java respecto a C++?",
    choices: ["Velocidad y seguridad", "Productividad de desarrollo y seguridad del sistema", "Tamaño y rendimiento", "Costo y calidad"],
    answer: 1,
    explanation: "Java equilibra la productividad del desarrollo (más simple que C++) con la seguridad del sistema (gestión automática de memoria, sin punteros).",
    hint: "Es más fácil de usar y más seguro que C++."
  },

  // ============================================
  // MÉTODOS EN JAVA
  // ============================================
  {
    id: 136,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuáles son las partes que componen la FIRMA de un método en Java?",
    choices: [
      "Nombre + Tipo de retorno",
      "Nombre + Lista de Parámetros (Tipos y Orden)",
      "Modificadores + Nombre + Tipo de retorno",
      "Nombre + Cuerpo del método"
    ],
    answer: 1,
    explanation: "La firma de un método está compuesta por el Nombre y la Lista de Parámetros (tipos y orden). El tipo de retorno NO forma parte de la firma.",
    hint: "El tipo de retorno NO es parte de la firma."
  },
  {
    id: 137,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "truefalse",
    prompt: "El tipo de retorno de un método es parte de su firma en Java.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. La firma de un método en Java está compuesta únicamente por el nombre del método y la lista de parámetros (tipos y orden). El tipo de retorno NO es parte de la firma.",
    hint: "Firma = Nombre + Lista de Parámetros."
  },
  {
    id: 138,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "Dado el encabezado: public static double larger(double x, double y), ¿cuál es el tipo de retorno?",
    choices: ["public", "static", "double", "larger"],
    answer: 2,
    explanation: "En el encabezado 'public static double larger(double x, double y)', el tipo de retorno es 'double', que aparece justo antes del nombre del método.",
    hint: "El tipo de retorno va justo antes del nombre del método."
  },
  {
    id: 139,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "input",
    prompt: "¿Cómo se llama la sección de un método que contiene las instrucciones a ejecutar?",
    answer: ["cuerpo", "cuerpo del método", "body"],
    answerText: "cuerpo del método",
    explanation: "El cuerpo del método (body) es la sección encerrada entre llaves { } que contiene todas las instrucciones que el método ejecuta.",
    hint: "Es la parte encerrada entre llaves { }."
  },
  {
    id: 140,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál de los siguientes es un método VOID (vacío) correcto en Java?",
    choices: [
      "public static int printStars(int n)",
      "public static void printStars(int n)",
      "public void static printStars(int n)",
      "static public printStars(int n)"
    ],
    answer: 1,
    explanation: "Un método void usa la palabra clave 'void' como tipo de retorno. La sintaxis correcta es: public static void printStars(int n).",
    hint: "La palabra clave 'void' indica que el método no devuelve valor."
  },
  {
    id: 141,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Un método void realiza una tarea pero NO devuelve ningún valor.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Un método void usa la palabra clave 'void' como tipo de retorno, lo que indica que no devuelve ningún valor. Se invoca como una sentencia independiente.",
    hint: "void = vacío, sin retorno."
  },
  {
    id: 142,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cómo se invoca correctamente un método void llamado printStars con argumento 5?",
    choices: [
      "int x = printStars(5);",
      "return printStars(5);",
      "printStars(5);",
      "void printStars(5);"
    ],
    answer: 2,
    explanation: "Los métodos void se invocan como una sentencia independiente: printStars(5); No pueden usarse dentro de una expresión ni con return porque no devuelven valor.",
    hint: "Un método void se llama como sentencia independiente, sin asignarlo a ninguna variable."
  },

  // ============================================
  // SENTENCIA RETURN
  // ============================================
  {
    id: 143,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "truefalse",
    prompt: "La sentencia 'return' termina la ejecución del método inmediatamente.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Cuando se ejecuta un 'return', el método termina de inmediato y el control vuelve al lugar desde donde fue llamado. Cualquier código después del return es inalcanzable.",
    hint: "El return detiene el método en ese mismo punto."
  },
  {
    id: 144,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "En el siguiente código: if (x > y) return x; else return y; System.out.println(\"Hola\"); ¿Qué ocurre con el System.out.println?",
    choices: [
      "Se ejecuta siempre",
      "Se ejecuta solo si x > y",
      "Nunca se ejecuta (código inalcanzable)",
      "Solo se ejecuta si x == y"
    ],
    answer: 2,
    explanation: "El System.out.println es código inalcanzable (unreachable code). Como ambas ramas del if-else tienen return, el método siempre termina antes de llegar al println.",
    hint: "El return termina el método inmediatamente. Si todos los caminos tienen return, el código siguiente nunca se ejecuta."
  },
  {
    id: 145,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "truefalse",
    prompt: "El tipo de dato que devuelve la sentencia return debe coincidir con el tipo de retorno declarado en el encabezado del método.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Si un método declara 'double' como tipo de retorno, la sentencia return debe devolver un valor de tipo double (o compatible). De lo contrario, habrá un error de compilación.",
    hint: "El tipo del return debe ser compatible con el tipo declarado en el encabezado."
  },

  // ============================================
  // PARÁMETROS EN MÉTODOS
  // ============================================
  {
    id: 146,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cómo se llaman los parámetros que se definen en el encabezado del método?",
    choices: ["Parámetros actuales", "Parámetros formales", "Argumentos", "Variables globales"],
    answer: 1,
    explanation: "Los parámetros formales son los que se declaran en el encabezado del método (ej: double x, double y). Los parámetros actuales (o argumentos) son los valores que se pasan al invocar el método.",
    hint: "Los de la definición son 'formales', los de la llamada son 'actuales'."
  },
  {
    id: 147,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "Al llamar a un método, los argumentos deben coincidir con los parámetros formales en:",
    choices: [
      "Solo en cantidad",
      "Solo en tipo de dato",
      "Cantidad, orden y tipo de dato",
      "Solo en nombre"
    ],
    answer: 2,
    explanation: "Existe un protocolo estricto: los argumentos deben coincidir en 1) cantidad igual, 2) orden igual y 3) tipo de dato igual con los parámetros formales del método.",
    hint: "Son tres reglas: cantidad, orden y tipo."
  },

  // ============================================
  // FLUJO DE EJECUCIÓN Y SCOPE
  // ============================================
  {
    id: 148,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Las variables locales de un método en Java existen permanentemente mientras el programa está en ejecución.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. La memoria de las variables locales se CREA al entrar al método y se DESTRUYE al salir. Por eso se llaman 'locales': su vida útil está ligada a la ejecución del método.",
    hint: "Las variables locales se crean al entrar y se destruyen al salir del método."
  },
  {
    id: 149,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué significa el 'alcance' (scope) de una variable local?",
    choices: [
      "El tamaño máximo de su valor",
      "El tipo de dato que puede almacenar",
      "La región del código donde la variable es visible y accesible",
      "El número de veces que puede usarse"
    ],
    answer: 2,
    explanation: "El alcance (scope) de una variable define la región del código donde la variable es visible y accesible. Las variables locales solo son visibles dentro del bloque donde fueron declaradas.",
    hint: "El scope define dónde puede 'verse' la variable."
  },
  {
    id: 150,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Una variable local declarada en el método 'main' puede ser accedida directamente desde otro método de la misma clase.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. Las variables locales son visibles SOLO dentro del bloque donde se declaran. Una variable en main no puede accederse desde otro método, aunque estén en la misma clase.",
    hint: "Variables locales: visibles solo dentro de su propio bloque."
  },

  // ============================================
  // PASO POR VALOR
  // ============================================
  {
    id: 151,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "En Java, cuando se pasa un tipo primitivo (int, double, etc.) a un método, modificar el parámetro dentro del método cambia el valor de la variable original.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. Java usa paso por valor para tipos primitivos. Se pasa una COPIA del valor. Los cambios al parámetro formal dentro del método NO afectan a la variable original en el método que lo llamó.",
    hint: "Con tipos primitivos se pasa una 'fotocopia', no el original."
  },
  {
    id: 152,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué tipos de datos en Java aplican el comportamiento de 'paso por valor' donde los cambios NO afectan al original?",
    choices: [
      "String y arrays",
      "int, double, char, boolean (tipos primitivos)",
      "Todos los objetos",
      "Solo los tipos numéricos"
    ],
    answer: 1,
    explanation: "Los tipos primitivos (int, double, char, boolean) se pasan por valor: se copia el valor y los cambios en el método no afectan al original. Con objetos/referencias el comportamiento es diferente.",
    hint: "Los tipos primitivos son: int, double, char, boolean, entre otros."
  },
  {
    id: 153,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Cuando se pasa una variable de referencia (objeto) a un método, ambos parámetros apuntan al mismo objeto en memoria.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Con variables de referencia se copia la dirección (referencia) del objeto, no el objeto en sí. Por eso ambos parámetros apuntan al mismo objeto, y los cambios al objeto son visibles desde fuera del método.",
    hint: "Ambas referencias apuntan a la misma 'casa' (objeto)."
  },

  // ============================================
  // SOBRECARGA DE MÉTODOS (OVERLOADING)
  // ============================================
  {
    id: 154,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "input",
    prompt: "¿Cómo se llama en Java la característica que permite definir varios métodos con el mismo nombre pero diferente lista de parámetros?",
    answer: ["sobrecarga", "overloading", "sobrecarga de métodos", "method overloading"],
    answerText: "sobrecarga (overloading)",
    explanation: "La sobrecarga de métodos (method overloading) permite tener múltiples métodos con el mismo nombre siempre que difieran en su firma (nombre + lista de parámetros).",
    hint: "En inglés se llama 'overloading'."
  },
  {
    id: 155,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál de los siguientes conjuntos de métodos representa sobrecarga válida en Java?",
    choices: [
      "larger(int, int) y larger(int, int)",
      "larger(int, int), larger(double, double) y larger(String, String)",
      "larger(int, int) y larger(int, int, int) con diferente tipo de retorno",
      "No es posible tener métodos con el mismo nombre"
    ],
    answer: 1,
    explanation: "La sobrecarga válida requiere el mismo nombre pero diferente firma. larger(int,int), larger(double,double) y larger(String,String) tienen diferente lista de parámetros, por lo que es sobrecarga válida.",
    hint: "Mismo nombre, diferente lista de parámetros (tipos)."
  },
  {
    id: 156,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "En Java se puede sobrecargar un método cambiando únicamente el tipo de retorno, manteniendo el mismo nombre y la misma lista de parámetros.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. El tipo de retorno NO forma parte de la firma. Para sobrecargar un método, se debe cambiar la lista de parámetros (cantidad, tipo u orden). Cambiar solo el tipo de retorno causará un error de compilación.",
    hint: "El tipo de retorno NO es parte de la firma."
  },

  // ============================================
  // MÉTODOS PREDEFINIDOS (MATH)
  // ============================================
  {
    id: 157,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué devuelve Math.ceil(3.2) en Java?",
    choices: ["3.0", "3.2", "4.0", "3"],
    answer: 2,
    explanation: "Math.ceil() devuelve el entero más pequeño que es mayor o igual a x. Para 3.2, el entero más pequeño mayor o igual es 4.0.",
    hint: "ceil = techo, redondea HACIA ARRIBA."
  },
  {
    id: 158,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué devuelve Math.floor(3.9) en Java?",
    choices: ["4.0", "3.9", "3.0", "3"],
    answer: 2,
    explanation: "Math.floor() devuelve el entero más grande que es menor o igual a x. Para 3.9, el entero más grande menor o igual es 3.0.",
    hint: "floor = piso, redondea HACIA ABAJO."
  },
  {
    id: 159,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "input",
    prompt: "¿Cuál método de la clase Math se usa para calcular x elevado a la potencia y en Java?",
    answer: ["Math.pow", "pow", "Math.pow(x, y)"],
    answerText: "Math.pow(x, y)",
    explanation: "El método Math.pow(double x, double y) devuelve x elevado a la potencia y. Por ejemplo, Math.pow(2.0, 3.0) devuelve 8.0.",
    hint: "Es un método de la clase Math con dos parámetros double."
  },
  {
    id: 160,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué devuelve Math.abs(-7.5) en Java?",
    choices: ["-7.5", "7.0", "7.5", "-7.0"],
    answer: 2,
    explanation: "Math.abs() devuelve el valor absoluto de un número, es decir, su valor sin signo. Math.abs(-7.5) devuelve 7.5.",
    hint: "abs = valor absoluto, siempre positivo."
  },

  // ============================================
  // IMPORTACIÓN ESTÁTICA
  // ============================================
  {
    id: 161,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué sentencia se usa para importar estáticamente todos los miembros de la clase Math en Java?",
    answer: ["import static java.lang.Math.*", "import static java.lang.Math.*;"],
    answerText: "import static java.lang.Math.*;",
    explanation: "La importación estática 'import static java.lang.Math.*;' permite usar los métodos de Math (como pow, sqrt, abs) sin escribir el prefijo 'Math.' cada vez.",
    hint: "Usa 'import static' seguido del nombre completo de la clase y .*"
  },
  {
    id: 162,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "mcq",
    prompt: "Después de escribir 'import static java.lang.Math.*;', ¿cuál es la forma correcta de usar el método pow?",
    choices: [
      "Math.pow(3, 2)",
      "java.lang.Math.pow(3, 2)",
      "pow(3, 2)",
      "static.pow(3, 2)"
    ],
    answer: 2,
    explanation: "Con la importación estática, se puede omitir el nombre de la clase. En lugar de Math.pow(3, 2), se puede escribir simplemente pow(3, 2).",
    hint: "La importación estática permite omitir el nombre de la clase."
  },

  // ============================================
  // STRING vs STRINGBUFFER
  // ============================================
  {
    id: 163,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuál es la diferencia fundamental entre String y StringBuffer en Java?",
    choices: [
      "String es más rápido que StringBuffer",
      "String es INMUTABLE (no se puede modificar), StringBuffer es MUTABLE (se puede modificar)",
      "StringBuffer no puede almacenar texto",
      "No hay diferencia, son equivalentes"
    ],
    answer: 1,
    explanation: "String es inmutable: cuando se 'modifica', en realidad se crea un nuevo objeto en memoria. StringBuffer es mutable: permite modificar el contenido del mismo objeto existente sin crear uno nuevo.",
    hint: "Inmutable = no cambia el objeto. Mutable = sí cambia el objeto."
  },
  {
    id: 164,
    topic: "Métodos en Java",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Cuando se modifica un objeto String en Java, el objeto original se altera directamente.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. String es inmutable. Al 'modificar' un String, Java crea un NUEVO objeto en memoria con el nuevo valor. La referencia pasa a apuntar al nuevo objeto, pero el original queda en memoria.",
    hint: "String es inmutable: cualquier cambio crea un nuevo objeto."
  },
  {
    id: 165,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuándo se recomienda usar StringBuffer en lugar de String?",
    choices: [
      "Cuando el texto nunca cambia",
      "Cuando se necesita comparar dos cadenas",
      "Cuando se necesita modificar el contenido original de la cadena",
      "Cuando el texto es muy corto"
    ],
    answer: 2,
    explanation: "Se recomienda usar StringBuffer cuando se necesita modificar el contenido original de la cadena, ya que StringBuffer permite cambiar el objeto existente sin crear nuevos objetos en memoria.",
    hint: "StringBuffer permite modificar el objeto existente."
  },

  // ============================================
  // MÉTODOS: CONCEPTO Y VENTAJAS
  // ============================================
  {
    id: 166,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "Según la metáfora de la fábrica, ¿a qué se comparan los métodos en Java?",
    choices: [
      "A las ruedas de un automóvil",
      "A partes prefabricadas de automóviles (bloques básicos)",
      "A la pintura del automóvil",
      "Al conductor del automóvil"
    ],
    answer: 1,
    explanation: "Los métodos en Java son como partes prefabricadas de automóviles: son los bloques básicos que se construyen por separado y luego se ensamblan para formar el programa completo.",
    hint: "La metáfora compara el código modular con una fábrica de automóviles."
  },
  {
    id: 167,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuál de las siguientes NO es una ventaja de dividir el código en métodos/módulos?",
    choices: [
      "Reutilización del código",
      "Depuración simplificada",
      "El programa ocupa menos memoria RAM",
      "Dividir y vencer (divide and conquer)"
    ],
    answer: 2,
    explanation: "Las ventajas de usar métodos son: dividir y vencer, reutilización del código y depuración simplificada. La reducción de memoria RAM no es una ventaja directa de modularizar el código.",
    hint: "Las ventajas son: dividir y vencer, reutilización y depuración simplificada."
  },
  {
    id: 168,
    topic: "Métodos en Java",
    difficulty: "basico",
    type: "truefalse",
    prompt: "El código monolítico (todo en un solo bloque) es preferible al código dividido en métodos porque es más fácil de depurar.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. Dividir el código en métodos facilita la depuración, ya que cada módulo puede probarse de forma independiente. El código monolítico es más difícil de mantener y depurar.",
    hint: "Los métodos permiten probar cada parte de forma independiente."
  },

  // ============================================
  // JAVA SWING
  // ============================================
  {
    id: 169,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué es Java Swing?",
    choices: [
      "Un framework para desarrollo web en Java",
      "Una biblioteca para crear interfaces gráficas de usuario (GUI) en Java",
      "Un gestor de bases de datos para Java",
      "Un compilador alternativo para Java"
    ],
    answer: 1,
    explanation: "Java Swing es una biblioteca (parte de Java Foundation Classes - JFC) que proporciona componentes para crear interfaces gráficas de usuario (GUI) en aplicaciones Java de escritorio.",
    hint: "Swing se usa para crear ventanas, botones y demás componentes visuales."
  },
  {
    id: 170,
    topic: "Java Swing",
    difficulty: "basico",
    type: "input",
    prompt: "¿Cuál es el componente principal de una ventana en Java Swing?",
    answer: ["JFrame", "jframe"],
    answerText: "JFrame",
    explanation: "JFrame es el componente principal que representa una ventana en Java Swing. Es el contenedor de nivel superior donde se añaden todos los demás componentes.",
    hint: "Su nombre empieza con J y significa 'marco/ventana'."
  },
  {
    id: 171,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué método se usa para hacer visible un JFrame?",
    choices: [
      "frame.show()",
      "frame.open()",
      "frame.setVisible(true)",
      "frame.display()"
    ],
    answer: 2,
    explanation: "Se usa frame.setVisible(true) para hacer visible un JFrame. Sin esta llamada, la ventana existe en memoria pero no se muestra en pantalla.",
    hint: "El método recibe un booleano true para mostrarlo."
  },
  {
    id: 172,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué método configura el comportamiento al cerrar un JFrame?",
    choices: [
      "frame.setClose(EXIT)",
      "frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)",
      "frame.onClose(EXIT_ON_CLOSE)",
      "frame.closeOperation(true)"
    ],
    answer: 1,
    explanation: "frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE) indica que el programa termina cuando se cierra la ventana. Sin esto, cerrar la ventana no detiene el programa.",
    hint: "El método se llama setDefault... y recibe una constante de JFrame."
  },
  {
    id: 173,
    topic: "Java Swing",
    difficulty: "basico",
    type: "truefalse",
    prompt: "JPanel es un contenedor que se usa para organizar y agrupar componentes dentro de un JFrame.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. JPanel es un contenedor liviano que sirve para organizar y agrupar componentes GUI. Generalmente se añaden JPanels al JFrame para estructurar mejor la interfaz.",
    hint: "JPanel actúa como un 'panel' donde se agrupan componentes."
  },
  {
    id: 174,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué componente de Swing se usa para mostrar un texto no editable en la interfaz?",
    choices: ["JTextField", "JButton", "JLabel", "JTextArea"],
    answer: 2,
    explanation: "JLabel se usa para mostrar texto (o imágenes) no editable en la interfaz. Es ideal para etiquetas descriptivas como 'Nombre:', 'Edad:', etc.",
    hint: "Su nombre en inglés significa 'etiqueta'."
  },
  {
    id: 175,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué componente de Swing permite al usuario ingresar una sola línea de texto?",
    choices: ["JLabel", "JTextArea", "JTextField", "JButton"],
    answer: 2,
    explanation: "JTextField es un campo de texto de una sola línea donde el usuario puede ingresar texto. Para múltiples líneas se usa JTextArea.",
    hint: "Text + Field = campo de texto de una línea."
  },
  {
    id: 176,
    topic: "Java Swing",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué componente de Swing se usa para ingresar texto de múltiples líneas?",
    answer: ["JTextArea", "jtextarea"],
    answerText: "JTextArea",
    explanation: "JTextArea permite ingresar y mostrar texto de múltiples líneas. A diferencia de JTextField que es de una sola línea, JTextArea es ideal para párrafos o descripciones largas.",
    hint: "Es como JTextField pero para múltiples líneas. Text + Area."
  },
  {
    id: 177,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuál es la diferencia entre JCheckBox y JRadioButton en Swing?",
    choices: [
      "No hay diferencia, son iguales",
      "JCheckBox permite selección múltiple; JRadioButton permite solo una opción de un grupo",
      "JRadioButton permite selección múltiple; JCheckBox solo una",
      "JCheckBox es para números; JRadioButton para texto"
    ],
    answer: 1,
    explanation: "JCheckBox permite seleccionar múltiples opciones independientes. JRadioButton se usa en grupos (ButtonGroup) donde solo se puede seleccionar una opción a la vez.",
    hint: "Radio = solo uno del grupo. Checkbox = varios a la vez."
  },
  {
    id: 178,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué clase se usa para agrupar JRadioButtons y asegurar que solo uno pueda seleccionarse a la vez?",
    choices: ["JPanel", "ButtonGroup", "JGroup", "RadioGroup"],
    answer: 1,
    explanation: "ButtonGroup es la clase que agrupa JRadioButtons lógicamente. Al añadir varios JRadioButton a un ButtonGroup, Swing garantiza que solo uno pueda estar seleccionado al mismo tiempo.",
    hint: "Button + Group = grupo de botones."
  },
  {
    id: 179,
    topic: "Java Swing",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué componente de Swing muestra una lista desplegable de opciones?",
    answer: ["JComboBox", "jcombobox"],
    answerText: "JComboBox",
    explanation: "JComboBox muestra una lista desplegable (dropdown) de opciones donde el usuario puede seleccionar una. Es útil cuando hay varias opciones pero no se quiere ocupar mucho espacio.",
    hint: "En inglés, un menú desplegable también se llama 'combo box'."
  },
  {
    id: 180,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué Layout Manager organiza los componentes en una fila horizontal (de izquierda a derecha)?",
    choices: ["BorderLayout", "GridLayout", "FlowLayout", "BoxLayout"],
    answer: 2,
    explanation: "FlowLayout organiza los componentes en una fila de izquierda a derecha. Cuando no caben más en una línea, pasa a la siguiente. Es el layout por defecto de JPanel.",
    hint: "Flow = flujo, como el flujo de texto de izquierda a derecha."
  },
  {
    id: 181,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cuántas regiones define BorderLayout para colocar componentes?",
    choices: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "BorderLayout divide el contenedor en 5 regiones: NORTH (arriba), SOUTH (abajo), EAST (derecha), WEST (izquierda) y CENTER (centro). Solo puede haber un componente por región.",
    hint: "Norte, Sur, Este, Oeste y Centro."
  },
  {
    id: 182,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué Layout Manager organiza los componentes en una cuadrícula de filas y columnas del mismo tamaño?",
    choices: ["FlowLayout", "BorderLayout", "GridLayout", "CardLayout"],
    answer: 2,
    explanation: "GridLayout organiza los componentes en una cuadrícula (grid) donde todas las celdas tienen el mismo tamaño. Se especifica el número de filas y columnas al crearlo: new GridLayout(filas, columnas).",
    hint: "Grid = cuadrícula. Piensa en una tabla de Excel."
  },
  {
    id: 183,
    topic: "Java Swing",
    difficulty: "basico",
    type: "truefalse",
    prompt: "FlowLayout es el layout manager que viene por defecto en un JPanel.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. JPanel usa FlowLayout por defecto. En cambio, JFrame usa BorderLayout por defecto.",
    hint: "JPanel → FlowLayout por defecto. JFrame → BorderLayout por defecto."
  },
  {
    id: 184,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué interfaz debe implementarse para manejar eventos de clic en un JButton?",
    choices: ["MouseListener", "ActionListener", "KeyListener", "EventListener"],
    answer: 1,
    explanation: "ActionListener es la interfaz que se implementa para responder a eventos de acción como clics en botones. Requiere implementar el método actionPerformed(ActionEvent e).",
    hint: "Action = acción. Los clics son 'acciones'."
  },
  {
    id: 185,
    topic: "Java Swing",
    difficulty: "medio",
    type: "input",
    prompt: "¿Cuál es el nombre del método que se debe implementar al usar ActionListener en Swing?",
    answer: ["actionPerformed", "actionPerformed(ActionEvent e)"],
    answerText: "actionPerformed",
    explanation: "Al implementar la interfaz ActionListener, se debe sobrescribir el método actionPerformed(ActionEvent e), que contiene el código que se ejecuta cuando ocurre el evento.",
    hint: "action + Performed = acción realizada."
  },
  {
    id: 186,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cómo se registra un ActionListener en un JButton llamado 'btnOk'?",
    choices: [
      "btnOk.listen(new MiListener())",
      "btnOk.addActionListener(new MiListener())",
      "btnOk.setActionListener(new MiListener())",
      "ActionListener.add(btnOk, new MiListener())"
    ],
    answer: 1,
    explanation: "Se usa el método addActionListener() del componente para registrar un listener. Por ejemplo: btnOk.addActionListener(new MiListener()); donde MiListener implementa ActionListener.",
    hint: "add + ActionListener = añadir escuchador de acciones."
  },
  {
    id: 187,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué clase de Swing permite mostrar ventanas de diálogo simples (mensajes, confirmaciones, inputs)?",
    choices: ["JDialog", "JOptionPane", "JAlert", "JMessageBox"],
    answer: 1,
    explanation: "JOptionPane proporciona métodos estáticos para mostrar diálogos estándar: showMessageDialog (mensajes), showConfirmDialog (confirmaciones), showInputDialog (entrada de texto).",
    hint: "Option + Pane = panel de opciones/diálogos."
  },
  {
    id: 188,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué método de JOptionPane se usa para mostrar un mensaje al usuario?",
    choices: [
      "JOptionPane.showMessage(null, \"Hola\")",
      "JOptionPane.showMessageDialog(null, \"Hola\")",
      "JOptionPane.message(\"Hola\")",
      "JOptionPane.alert(null, \"Hola\")"
    ],
    answer: 1,
    explanation: "JOptionPane.showMessageDialog(parent, mensaje) muestra una ventana de diálogo con un mensaje. El primer parámetro es el componente padre (null para centrar en pantalla).",
    hint: "show + Message + Dialog = mostrar diálogo de mensaje."
  },
  {
    id: 189,
    topic: "Java Swing",
    difficulty: "medio",
    type: "truefalse",
    prompt: "En Swing, se puede añadir un componente directamente a un JFrame sin necesidad de usar su Content Pane.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. A partir de Java 5, se puede añadir componentes directamente al JFrame con frame.add(componente) ya que internamente Java redirige la llamada al Content Pane automáticamente.",
    hint: "En versiones modernas de Java, frame.add() funciona directamente."
  },
  {
    id: 190,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué método se usa para obtener el texto ingresado en un JTextField?",
    choices: [
      "campo.value()",
      "campo.getText()",
      "campo.getString()",
      "campo.read()"
    ],
    answer: 1,
    explanation: "campo.getText() devuelve el texto actual contenido en el JTextField como un String. Su contraparte es campo.setText(\"...\") para establecer el texto.",
    hint: "get + Text = obtener texto."
  },
  {
    id: 191,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál de los siguientes es el orden correcto para crear y mostrar una ventana básica en Swing?",
    choices: [
      "setVisible → setSize → new JFrame",
      "new JFrame → add(componentes) → setSize → setVisible(true)",
      "add(componentes) → new JFrame → setVisible(true)",
      "setSize → new JFrame → setVisible(true)"
    ],
    answer: 1,
    explanation: "El orden correcto es: 1) crear el JFrame, 2) añadir componentes, 3) configurar tamaño con setSize(), 4) hacer visible con setVisible(true). Llamar setVisible antes puede causar problemas de renderizado.",
    hint: "Primero se crea, luego se configura, finalmente se muestra."
  },
  {
    id: 192,
    topic: "Java Swing",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué método del JFrame se usa para definir el tamaño de la ventana en píxeles?",
    answer: ["setSize", "setSize()"],
    answerText: "setSize()",
    explanation: "setSize(ancho, alto) define el tamaño de la ventana en píxeles. Por ejemplo, frame.setSize(400, 300) crea una ventana de 400px de ancho por 300px de alto.",
    hint: "set + Size = establecer tamaño."
  },

  // ============================================
  // JLABEL CON IMÁGENES EN NETBEANS
  // ============================================
  {
    id: 193,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué clase de Java Swing se usa para cargar y representar una imagen como ícono?",
    choices: ["ImageLoader", "ImageIcon", "JImage", "PictureIcon"],
    answer: 1,
    explanation: "ImageIcon es la clase que se usa para cargar imágenes (PNG, JPG, GIF) y usarlas como íconos en componentes Swing como JLabel o JButton.",
    hint: "Image + Icon = ícono de imagen."
  },
  {
    id: 194,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué método de JLabel se usa para asignarle una imagen (ícono)?",
    choices: ["setImage()", "setIcon()", "setPicture()", "addIcon()"],
    answer: 1,
    explanation: "label.setIcon(imageIcon) asigna un ImageIcon a un JLabel para que muestre la imagen. Ejemplo: miLabel.setIcon(new ImageIcon(\"foto.png\"));",
    hint: "set + Icon = establecer ícono."
  },
  {
    id: 195,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es la forma recomendada de cargar una imagen en NetBeans para que funcione dentro del proyecto sin importar dónde esté instalado?",
    choices: [
      "new ImageIcon(\"C:/imagenes/foto.png\")",
      "new ImageIcon(getClass().getResource(\"foto.png\"))",
      "Image.load(\"foto.png\")",
      "JLabel.loadImage(\"foto.png\")"
    ],
    answer: 1,
    explanation: "getClass().getResource(\"foto.png\") carga la imagen de forma relativa al paquete del proyecto. Es la manera correcta en NetBeans porque usa la ruta relativa, evitando rutas absolutas que rompen el proyecto en otros equipos.",
    hint: "getClass().getResource() busca el archivo relativo al paquete actual."
  },
  {
    id: 196,
    topic: "Java Swing",
    difficulty: "medio",
    type: "truefalse",
    prompt: "En NetBeans, al usar getClass().getResource(\"foto.png\"), la imagen debe estar en el mismo paquete (carpeta) que el archivo .java que la usa.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Al usar getClass().getResource(\"foto.png\") sin ruta adicional, NetBeans busca la imagen dentro del mismo paquete donde está el archivo .java. Si está en otro lugar, hay que especificar la ruta relativa.",
    hint: "El archivo de imagen debe estar junto al .java en el mismo paquete."
  },
  {
    id: 197,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "Para redimensionar una imagen antes de mostrarla en un JLabel, ¿qué método se usa?",
    choices: [
      "imageIcon.resize(ancho, alto)",
      "imagen.getScaledInstance(ancho, alto, Image.SCALE_SMOOTH)",
      "ImageIcon.scale(ancho, alto)",
      "label.setImageSize(ancho, alto)"
    ],
    answer: 1,
    explanation: "Se usa imagen.getScaledInstance(ancho, alto, Image.SCALE_SMOOTH) para escalar la imagen. Luego se convierte de nuevo a ImageIcon: new ImageIcon(imagenEscalada).",
    hint: "getScaledInstance() pertenece a la clase Image, no a ImageIcon."
  },
  {
    id: 198,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué método se usa para obtener el objeto Image a partir de un ImageIcon?",
    choices: ["icon.toImage()", "icon.getImage()", "icon.asImage()", "icon.extractImage()"],
    answer: 1,
    explanation: "imageIcon.getImage() devuelve el objeto Image contenido en el ImageIcon. Esto es necesario para poder escalar la imagen con getScaledInstance().",
    hint: "get + Image = obtener la imagen del ícono."
  },
  {
    id: 199,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el orden correcto para redimensionar y mostrar una imagen en un JLabel?",
    choices: [
      "setIcon → getScaledInstance → getImage → new ImageIcon",
      "new ImageIcon → getImage → getScaledInstance → new ImageIcon → setIcon",
      "getScaledInstance → new ImageIcon → getImage → setIcon",
      "new ImageIcon → setIcon → getImage → getScaledInstance"
    ],
    answer: 1,
    explanation: "El proceso correcto es: 1) Crear ImageIcon con la ruta, 2) obtener Image con getImage(), 3) escalar con getScaledInstance(), 4) crear nuevo ImageIcon con la imagen escalada, 5) asignar al JLabel con setIcon().",
    hint: "Primero se carga, luego se escala, finalmente se asigna."
  },
  {
    id: 200,
    topic: "Java Swing",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Un JLabel en Swing puede mostrar tanto texto como una imagen al mismo tiempo.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. JLabel puede mostrar texto (setText), una imagen (setIcon) o ambos al mismo tiempo. Con setHorizontalTextPosition y setVerticalTextPosition se controla la posición del texto respecto al ícono.",
    hint: "JLabel admite texto, imagen o ambos."
  },
  {
    id: 201,
    topic: "Java Swing",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué método de JLabel se usa para cambiar el texto que muestra?",
    answer: ["setText", "setText()"],
    answerText: "setText()",
    explanation: "label.setText(\"Hola\") cambia el texto mostrado por el JLabel. Su contraparte es label.getText() para obtener el texto actual.",
    hint: "set + Text = establecer texto."
  },
  {
    id: 202,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué constante de Image se recomienda usar al escalar imágenes para obtener mejor calidad visual?",
    choices: ["Image.SCALE_FAST", "Image.SCALE_DEFAULT", "Image.SCALE_SMOOTH", "Image.SCALE_AREA_AVERAGING"],
    answer: 2,
    explanation: "Image.SCALE_SMOOTH prioriza la calidad de la imagen sobre la velocidad al redimensionar. Es la opción más usada cuando se quiere que la imagen se vea bien en la interfaz.",
    hint: "Smooth = suave, mejor calidad visual."
  },

  // ============================================
  // JTABLE Y DEFAULTTABLEMODEL
  // ============================================
  {
    id: 203,
    topic: "Java Swing",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué clase se importa para manejar el modelo de datos de una JTable en Swing?",
    answer: ["DefaultTableModel", "javax.swing.table.DefaultTableModel"],
    answerText: "DefaultTableModel",
    explanation: "Se importa javax.swing.table.DefaultTableModel para manejar el modelo de datos de una JTable. Esta clase permite agregar/eliminar filas y columnas dinámicamente.",
    hint: "Default + Table + Model = modelo por defecto de tabla."
  },
  {
    id: 204,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cómo se declara un atributo DefaultTableModel en la clase del formulario?",
    choices: [
      "DefaultTableModel dtm = new DefaultTableModel();",
      "private DefaultTableModel dtm;",
      "static DefaultTableModel dtm;",
      "public TableModel dtm = new DefaultTableModel();"
    ],
    answer: 1,
    explanation: "Se declara como atributo privado de la clase: private DefaultTableModel dtm; para que sea accesible desde todos los métodos del formulario. Se inicializa luego en el constructor.",
    hint: "Se declara como atributo privado de la clase, no dentro de un método."
  },
  {
    id: 205,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es la forma correcta de crear un DefaultTableModel con cabeceras de columna llamadas 'Nombre' y 'Edad'?",
    choices: [
      "new DefaultTableModel(\"Nombre\", \"Edad\")",
      "new DefaultTableModel(null, new String[]{\"Nombre\",\"Edad\"})",
      "DefaultTableModel.create(\"Nombre\", \"Edad\")",
      "new DefaultTableModel(new String[]{\"Nombre\",\"Edad\"}, null)"
    ],
    answer: 1,
    explanation: "Se crea así: String[] cabeceras = {\"Nombre\",\"Edad\"}; dtm = new DefaultTableModel(null, cabeceras); El primer argumento es la data inicial (null = vacío) y el segundo son las cabeceras.",
    hint: "El constructor recibe (datos, cabeceras). Los datos pueden ser null al inicio."
  },
  {
    id: 206,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué método se usa para asignar el DefaultTableModel a una JTable?",
    choices: [
      "tabla.setData(dtm)",
      "tabla.setModel(dtm)",
      "tabla.addModel(dtm)",
      "dtm.attachTo(tabla)"
    ],
    answer: 1,
    explanation: "tabla.setModel(dtm) asigna el modelo al componente JTable. Esto conecta el modelo de datos con la vista de la tabla para que los cambios en el modelo se reflejen automáticamente.",
    hint: "set + Model = establecer el modelo de datos de la tabla."
  },
  {
    id: 207,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué método de DefaultTableModel se usa para agregar una nueva fila a la tabla?",
    choices: [
      "dtm.insertRow(fila)",
      "dtm.addRow(nuevaFila)",
      "dtm.appendRow(nuevaFila)",
      "dtm.newRow(nuevaFila)"
    ],
    answer: 1,
    explanation: "dtm.addRow(nuevaFila) agrega una fila al final de la tabla. El argumento es un arreglo Object[] con los valores de cada celda: Object[] nuevaFila = {txtNombre.getText(), txtEdad.getText()}; dtm.addRow(nuevaFila);",
    hint: "add + Row = agregar fila."
  },
  {
    id: 208,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué tipo de arreglo se usa para crear una nueva fila con los valores de los campos de texto?",
    choices: [
      "String[] nuevaFila = {txtNombre.getText(), txtEdad.getText()};",
      "Object[] nuevaFila = {txtNombre.getText(), txtEdad.getText()};",
      "int[] nuevaFila = {txtNombre.getText(), txtEdad.getText()};",
      "Row[] nuevaFila = {txtNombre.getText(), txtEdad.getText()};"
    ],
    answer: 1,
    explanation: "Se usa Object[] porque las celdas de la tabla pueden contener cualquier tipo de dato (String, int, double, etc.). Object es la superclase de todos los tipos en Java.",
    hint: "Object[] acepta cualquier tipo de dato."
  },
  {
    id: 209,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué método de DefaultTableModel se usa para agregar una nueva columna a la tabla?",
    choices: [
      "dtm.addColumn(\"Apellido\", datos)",
      "dtm.insertColumn(\"Apellido\", datos)",
      "dtm.appendColumn(\"Apellido\", datos)",
      "dtm.newColumn(\"Apellido\", datos)"
    ],
    answer: 0,
    explanation: "dtm.addColumn(\"Apellido\", datosColumna) agrega una nueva columna. El primer argumento es el nombre de la cabecera y el segundo es un arreglo con los datos de esa columna (puede ser vacío: new String[]{}).",
    hint: "add + Column = agregar columna."
  },
  {
    id: 210,
    topic: "Java Swing",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Al usar DefaultTableModel, los cambios en el modelo (agregar filas/columnas) se reflejan automáticamente en la JTable sin necesidad de actualizarla manualmente.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. DefaultTableModel notifica automáticamente a la JTable cuando sus datos cambian (patrón Observer/MVC). Esto es una de las ventajas de usar un modelo separado de la vista.",
    hint: "El modelo notifica a la vista automáticamente. Patrón MVC."
  },

  // ============================================
  // JSPINNER
  // ============================================
  {
    id: 211,
    topic: "Java Swing",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Para qué sirve el componente JSpinner en Swing?",
    choices: [
      "Para mostrar una lista desplegable de texto",
      "Para ingresar un valor numérico con botones de incremento/decremento",
      "Para girar imágenes en la interfaz",
      "Para mostrar una barra de progreso"
    ],
    answer: 1,
    explanation: "JSpinner permite al usuario seleccionar un valor (número, fecha o elemento de lista) usando botones de incremento/decremento (flechas arriba/abajo), evitando escritura libre.",
    hint: "Spinner = ruleta/control con flechas de + y -."
  },
  {
    id: 212,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué propiedad del JSpinner se configura para definir su tipo de datos (Number, Date, List)?",
    choices: ["dataType", "model", "type", "spinnerType"],
    answer: 1,
    explanation: "La propiedad 'model' del JSpinner define el tipo de datos que maneja. Puede ser SpinnerNumberModel (números), SpinnerDateModel (fechas) o SpinnerListModel (lista de valores).",
    hint: "El 'model' define qué tipo de datos controla el spinner."
  },
  {
    id: 213,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "Al configurar el model de un JSpinner como Number en NetBeans, ¿qué tipo de número se recomienda para precios con decimales?",
    choices: ["Integer", "Long", "Double", "Float"],
    answer: 2,
    explanation: "Se usa Double para valores con decimales como precios. En NetBeans, al configurar el SpinnerNumberModel con Number Type: Double, el spinner acepta valores como 15.5.",
    hint: "Para precios con decimales se necesita un tipo de punto flotante de doble precisión."
  },
  {
    id: 214,
    topic: "Java Swing",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué método se usa para obtener el valor actual de un JSpinner?",
    choices: [
      "spinner.getText()",
      "spinner.getValue()",
      "spinner.getNumber()",
      "spinner.getCurrentValue()"
    ],
    answer: 1,
    explanation: "spinner.getValue() devuelve el valor actual del JSpinner como Object. Para usarlo como número hay que hacer casting: (Double) numPrecio.getValue() o (Integer) numCantidad.getValue().",
    hint: "get + Value = obtener valor."
  },
  {
    id: 215,
    topic: "Java Swing",
    difficulty: "medio",
    type: "truefalse",
    prompt: "El JSpinner con SpinnerNumberModel puede configurar un valor mínimo y máximo permitido.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. El SpinnerNumberModel tiene propiedades: Initial Value (valor inicial), Minimum (mínimo), Maximum (máximo) y Step Size (tamaño del paso al incrementar/decrementar).",
    hint: "Minimum y Maximum limitan el rango de valores del spinner."
  },

  // ============================================
  // CAPÍTULO 7 — MÉTODOS DEFINIDOS POR EL USUARIO (D.S. Malik)
  // ============================================

  // — CLASE MATH —
  {
    id: 216,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué valor devuelve Math.ceil(56.34)?",
    choices: ["56.0", "57.0", "56.34", "56"],
    answer: 1,
    explanation: "Math.ceil(x) devuelve el valor entero más pequeño que NO es menor que x, de tipo double. ceil(56.34) = 57.0.",
    hint: "ceil 'sube' al entero inmediatamente superior."
  },
  {
    id: 217,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué valor devuelve Math.floor(65.78)?",
    choices: ["66.0", "65.78", "65.0", "65"],
    answer: 2,
    explanation: "Math.floor(x) devuelve el entero más grande que es menor que x, de tipo double. floor(65.78) = 65.0.",
    hint: "floor 'trunca' hacia abajo al entero inferior."
  },
  {
    id: 218,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Qué valor devuelve Math.round(18.35)?",
    choices: ["19", "18", "18.35", "18.0"],
    answer: 1,
    explanation: "Math.round(18.35) devuelve 18. round(x) devuelve el entero más cercano; como .35 < .5 redondea hacia abajo.",
    hint: "Si la parte decimal es menor a 0.5, redondea hacia abajo."
  },
  {
    id: 219,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "truefalse",
    prompt: "El método Math.pow(x, y) siempre devuelve un valor de tipo double, incluso si x y y son enteros.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. Math.pow(x, y) siempre devuelve un valor de tipo double. Por eso Math.pow(2, 3) = 8.0 (no 8).",
    hint: "El tipo de retorno de pow está fijo como double independientemente de los parámetros."
  },
  {
    id: 220,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el tipo de dato que devuelve Math.abs(-67) si el argumento es de tipo int?",
    choices: ["double", "long", "int", "float"],
    answer: 2,
    explanation: "Math.abs() devuelve el mismo tipo que recibe: si el argumento es int devuelve int; si es double devuelve double, etc.",
    hint: "abs se adapta al tipo del parámetro recibido."
  },
  {
    id: 221,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "input",
    prompt: "¿Cuál es el paquete que contiene la clase Math y la clase Character en Java?",
    answer: ["java.lang", "java.lang.*"],
    answerText: "java.lang",
    explanation: "Tanto la clase Math como la clase Character pertenecen al paquete java.lang. Java importa este paquete automáticamente, por lo que no se necesita instrucción import explícita.",
    hint: "Es el paquete que Java importa automáticamente en todo programa."
  },

  // — CLASE CHARACTER —
  {
    id: 222,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "basico",
    type: "truefalse",
    prompt: "Character.isDigit('*') devuelve verdadero.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. Character.isDigit(ch) devuelve verdadero solo si ch es un dígito (0-9). El asterisco '*' no es un dígito.",
    hint: "Solo los caracteres del '0' al '9' son dígitos."
  },
  {
    id: 223,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué devuelve Character.toUpperCase('j')?",
    answer: ["J", "'J'"],
    answerText: "J",
    explanation: "Character.toUpperCase(ch) devuelve el equivalente en mayúscula. toUpperCase('j') devuelve 'J'.",
    hint: "Convierte la letra al equivalente en mayúscula."
  },
  {
    id: 224,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "basico",
    type: "input",
    prompt: "¿Qué devuelve Character.toLowerCase('D')?",
    answer: ["d", "'d'"],
    answerText: "d",
    explanation: "Character.toLowerCase(ch) devuelve el equivalente en minúscula. toLowerCase('D') devuelve 'd'.",
    hint: "Convierte la letra al equivalente en minúscula."
  },
  {
    id: 225,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "input",
    prompt: "¿Qué devuelve Character.toUpperCase('8')?",
    answer: ["8", "'8'"],
    answerText: "8",
    explanation: "Si ch no tiene un equivalente en mayúscula (como los dígitos), toUpperCase devuelve el mismo ch sin cambio. toUpperCase('8') = '8'.",
    hint: "Los dígitos no tienen versión en mayúscula."
  },

  // — STATIC IMPORT —
  {
    id: 226,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "mcq",
    prompt: "Después de incluir `import static java.lang.Math.*;`, ¿cuál de las siguientes formas es INCORRECTA para calcular 2.5³?",
    choices: ["pow(2.5, 3.5)", "Math.pow(2.5, 3.5)", "java.lang.Math.pow(2.5, 3.5)", "static pow(2.5, 3.5)"],
    answer: 3,
    explanation: "Con static import puedes usar pow(...) directamente o seguir usando Math.pow(...). La forma 'static pow(...)' no es sintaxis válida en Java.",
    hint: "static import permite omitir el nombre de la clase, pero no se escribe 'static' al invocar."
  },
  {
    id: 227,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "truefalse",
    prompt: "La instrucción `import static java.lang.Math.*;` permite utilizar cualquier método public static de la clase Math sin escribir 'Math.' antes del nombre.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. El static import permite omitir el nombre de la clase y el operador punto. Después de esta instrucción puedes escribir pow(2,3) en lugar de Math.pow(2,3).",
    hint: "Es exactamente el propósito del static import: simplificar el uso de métodos estáticos."
  },

  // — DEFINICIÓN DE MÉTODOS —
  {
    id: 228,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "mcq",
    prompt: "Según el libro, ¿cuántas propiedades se asocian con un método (tanto con retorno de valor como vacío)?",
    choices: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "Un método tiene 5 propiedades: 1) nombre, 2) número de parámetros, 3) tipo de datos de cada parámetro, 4) tipo de retorno, 5) el código (cuerpo del método).",
    hint: "Las 4 primeras forman el encabezado; la quinta es el cuerpo."
  },
  {
    id: 229,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿En qué tipo de instrucción se debe utilizar un método con retorno de valor?",
    choices: ["Solo en instrucciones de salida", "Solo en instrucciones de asignación", "En una expresión (de asignación, salida o como parámetro)", "Como instrucción autónoma"],
    answer: 2,
    explanation: "Un método con retorno de valor devuelve un valor único, por lo que se utiliza dentro de una expresión: instrucción de asignación, instrucción de salida o como parámetro de otro método.",
    hint: "Su valor debe 'usarse' en algún lado: guardarse, calcularse o imprimirse."
  },
  {
    id: 230,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "basico",
    type: "mcq",
    prompt: "¿Cómo se debe invocar un método vacío (void)?",
    choices: ["Dentro de una expresión aritmética", "Como instrucción autónoma", "Dentro de una instrucción de asignación", "Como argumento de otro método"],
    answer: 1,
    explanation: "Los métodos vacíos no devuelven un valor, por lo que no pueden usarse dentro de expresiones. Se invocan como instrucciones autónomas: nombreMetodo(params);",
    hint: "void = no devuelve nada, entonces no se puede usar en expresiones."
  },

  // — PARÁMETROS FORMALES VS ACTUALES —
  {
    id: 231,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es la diferencia entre un parámetro formal y un parámetro actual?",
    choices: [
      "El formal está en la invocación; el actual en el encabezado del método",
      "El formal está en el encabezado del método; el actual en la invocación",
      "Son términos sinónimos, significan lo mismo",
      "El formal es de tipo primitivo; el actual es de referencia"
    ],
    answer: 1,
    explanation: "Parámetro formal: variable declarada en el encabezado del método. Parámetro actual: variable o expresión listada en la invocación al método.",
    hint: "El 'formal' define la interfaz; el 'actual' es el valor que pasas al llamar."
  },
  {
    id: 232,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "truefalse",
    prompt: "En una invocación a un método, se debe especificar el tipo de dato del parámetro actual, por ejemplo: larger(double 5.0, double 3.0).",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. En una invocación solo se especifican los valores (parámetros actuales), no el tipo de dato. Escribir el tipo es un error de sintaxis: larger(5.0, 3.0) es correcto.",
    hint: "Los tipos de datos se declaran en los parámetros formales (encabezado), no al invocar."
  },
  {
    id: 233,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Los parámetros actuales y formales deben tener una correspondencia uno a uno en número y tipo de datos.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. El número de parámetros actuales debe coincidir con los formales y sus tipos también deben coincidir en el orden dado.",
    hint: "Cada parámetro actual corresponde exactamente a un parámetro formal."
  },

  // — INSTRUCCIÓN RETURN —
  {
    id: 234,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Cuando se ejecuta una instrucción return dentro de un método, ese método termina inmediatamente y el control regresa al solicitante.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. La instrucción return termina el método de inmediato. Cualquier instrucción que esté después del return en esa ruta de ejecución no se ejecuta.",
    hint: "return = terminar aquí y regresar al llamador."
  },
  {
    id: 235,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué error genera el compilador si pone instrucciones después de un return en un método, como en:\n\npublic static int f(int z) {\n    return z;\n    System.out.println(z);\n}",
    choices: ["Error en tiempo de ejecución", "Error de sintaxis: instrucción inalcanzable y falta de return", "El programa funciona e ignora la línea extra", "Error de lógica sin mensaje del compilador"],
    answer: 1,
    explanation: "El compilador detecta que System.out.println(z) es inalcanzable (unreachable) y genera un error de sintaxis. Además señala 'missing return statement' después de esa línea.",
    hint: "El compilador es listo: si ve que un código nunca se puede alcanzar, lo reporta."
  },

  // — PASO POR VALOR (PRIMITIVOS) —
  {
    id: 236,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Si se pasa una variable int como parámetro a un método y ese método cambia el valor del parámetro formal, la variable original en el método que llama también cambia.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. Con tipos primitivos, el valor se COPIA en el parámetro formal. Cambiar el formal no afecta al actual. Los parámetros formales primitivos proporcionan un vínculo en UNA sola dirección.",
    hint: "Tipos primitivos = paso por valor = copia. No hay conexión de vuelta."
  },
  {
    id: 237,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué imprime este programa?\n\npublic static void main(String[] args) {\n    int number = 6;\n    cambiar(number);\n    System.out.println(number);\n}\npublic static void cambiar(int num) {\n    num = 15;\n}",
    choices: ["15", "6", "Error de compilación", "null"],
    answer: 1,
    explanation: "Imprime 6. El parámetro number es de tipo primitivo (int). Al llamar cambiar(number), el valor 6 se copia en num. Cambiar num a 15 no afecta a number.",
    hint: "Los tipos primitivos se pasan por valor: solo se copia el valor, no hay conexión."
  },

  // — STRING VS STRINGBUFFER COMO PARÁMETROS —
  {
    id: 238,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Si se pasa una variable String como parámetro a un método y dentro del método se usa el operador de asignación para cambiar esa cadena, la variable String original cambia.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. Cuando se asigna una nueva cadena al parámetro formal String con =, el parámetro formal apunta a un nuevo objeto pero el parámetro actual (variable original) sigue apuntando al objeto original.",
    hint: "String es inmutable: asignar una nueva cadena al parámetro formal crea una referencia nueva, no modifica el original."
  },
  {
    id: 239,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Si se pasa una variable StringBuffer como parámetro y dentro del método se usa append() para agregar texto, la variable StringBuffer original también cambia.",
    choices: ["Verdadero", "Falso"],
    answer: 0,
    explanation: "Verdadero. StringBuffer es mutable. Al pasar la referencia, tanto el parámetro formal como el actual apuntan al MISMO objeto. Usar append() modifica ese objeto compartido, por lo que el original también cambia.",
    hint: "StringBuffer permite modificar el contenido del objeto. Ambas referencias apuntan al mismo objeto en memoria."
  },
  {
    id: 240,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué clase se debe usar si se necesita pasar una cadena como parámetro a un método Y que el método pueda modificar esa cadena de forma que afecte al llamador?",
    choices: ["String", "StringBuffer", "StringBuilder (cualquiera de los dos)", "char[]"],
    answer: 1,
    explanation: "Se debe usar StringBuffer. A diferencia de String, StringBuffer permite modificar el contenido del objeto (con append, delete, etc.) y esos cambios se reflejan en el parámetro actual porque ambos apuntan al mismo objeto.",
    hint: "String NO se puede modificar una vez creado; StringBuffer sí."
  },

  // — ALCANCE —
  {
    id: 241,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el alcance (scope) de una variable declarada dentro de un bloque (entre llaves)?",
    choices: [
      "Toda la clase",
      "Todo el método donde está el bloque",
      "Solo desde el punto de declaración hasta el final de ese bloque",
      "Todo el programa"
    ],
    answer: 2,
    explanation: "Una variable local declarada dentro de un bloque es accesible solo desde el punto en que se declara hasta el cierre del bloque (}) y en los bloques anidados dentro de él.",
    hint: "Scope = visibilidad reducida al bloque que la contiene."
  },
  {
    id: 242,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Java permite definir un método dentro de otro método (métodos anidados).",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. Java NO permite el anidado de métodos. No se puede incluir la definición completa de un método dentro del cuerpo de otro método.",
    hint: "En Java los métodos son miembros de la clase, no pueden estar dentro de otros métodos."
  },
  {
    id: 243,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Cuál es el alcance de una variable de control declarada en el encabezado de un bucle for, como en `for (int count = 0; ...)`?",
    choices: [
      "Todo el método",
      "Toda la clase",
      "Solo el cuerpo del bucle for",
      "Desde la declaración hasta el final del método"
    ],
    answer: 2,
    explanation: "El alcance de una variable declarada en la inicialización del for está limitado al cuerpo del bucle for. No puede usarse fuera del bucle.",
    hint: "Declarar la variable dentro del for la limita a ese for."
  },

  // — SOBRECARGA —
  {
    id: 244,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "mcq",
    prompt: "¿Qué constituye la FIRMA (signature) de un método en Java, según el libro?",
    choices: [
      "Solo el nombre del método",
      "El nombre del método y su tipo de retorno",
      "El nombre del método y su lista de parámetros formales",
      "El nombre del método, el tipo de retorno y los modificadores"
    ],
    answer: 2,
    explanation: "La firma de un método = nombre del método + lista de parámetros formales. El tipo de retorno NO forma parte de la firma.",
    hint: "El tipo de retorno NO está incluido en la firma."
  },
  {
    id: 245,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "truefalse",
    prompt: "Es válido sobrecargar un método teniendo dos versiones con el mismo nombre, mismos parámetros pero diferente tipo de retorno.",
    choices: ["Verdadero", "Falso"],
    answer: 1,
    explanation: "Falso. Para sobrecargar un método las listas de parámetros formales DEBEN ser diferentes. Mismo nombre + mismos parámetros + diferente tipo de retorno genera un error de compilación.",
    hint: "La sobrecarga se distingue por los parámetros, no por el tipo de retorno."
  },
  {
    id: 246,
    topic: "Cap. 7 - Métodos Usuario",
    difficulty: "medio",
    type: "mcq",
    prompt: "Tienes estos métodos sobrecargados:\n\nint larger(int x, int y)\nchar larger(char a, char b)\ndouble larger(double u, double v)\n\n¿Cuál se ejecuta con larger('A', '9')?",
    choices: ["int larger(int x, int y)", "char larger(char a, char b)", "double larger(double u, double v)", "Error de compilación: ambigüedad"],
    answer: 1,
    explanation: "'A' y '9' son literales de tipo char, por lo que coinciden con el método larger(char, char). La lista de parámetros actuales determina cuál método sobrecargado se ejecuta.",
    hint: "Los parámetros actuales determinan cuál versión sobrecargada se invoca."
  }
];

// Temas se cargan desde app.js
