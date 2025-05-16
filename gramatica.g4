grammar gramatica;

// Regla principal: una o más time_field separados por espacios
schedule : time_field (WS time_field)* EOF ;

// Un campo puede ser valor, rango, paso, comodín, lista o palabra reservada
time_field: value| range| step| wildcard| list| predefined;

// Valor simple: un número
value: number;

// Rango: número - número, con opción de / número
range: number '-' number ('/' number)?;

// Paso: uno de los elementos seguido de / número
step: (wildcard | range | value) '/' number;

// Comodín
wildcard: '*';

// un item seguido de cero o más repeticiones de ',' item
list: item (',' item)*;

// Un ítem puede ser valor o rango
item: value| range;

// Palabras reservadas
predefined: '@yearly'| '@monthly'| '@weekly'| '@daily'| '@hourly'| '@reboot';

// Número compuesto de uno o más dígitos
number: DIGIT+;

// Dígito
DIGIT: [0-9];

// Caracteres especiales
SPECIAL_CHAR: [*/,-];

// Espacios en blanco (ignorados)
WS: [ \t\r\n]+;