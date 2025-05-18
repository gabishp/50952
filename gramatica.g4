grammar gramatica;

// Regla principal: una o más time_field separados por espacios
schedule : time_field (WS time_field)* EOF ;

// Un campo puede ser valor, rango, paso, comodín, lista o palabra reservada
time_field: value| range| step| wildcard| list| predefined;

// Valor simple: un número
value: number;

// Rango: número GUION número, con opción de BARRA número
range: number GUION number (BARRA number)?;

// Paso: uno de los elementos seguido de BARRA número
step: (wildcard | range | value) BARRA number;

// Comodín
wildcard: ASTERISCO;

// un item seguido de cero o más repeticiones de COMA item
list: item (COMA item)*;

// Un ítem puede ser valor o rango
item: value| range;

// Palabras reservadas
predefined: YEARLY | MONTHLY | WEEKLY | DAILY | HOURLY | REBOOT;

// Número compuesto de uno o más dígitos
number: DIGIT+;

// Agrupación de caracteres especiales
special_char: GUION | BARRA | ASTERISCO | COMA;

// Palabras reservadas
YEARLY: '@yearly';
MONTHLY: '@monthly';
WEEKLY: '@weekly';
DAILY: '@daily';
HOURLY: '@hourly';
REBOOT: '@reboot';

// Dígito
DIGIT: [0-9];

//caracteres especiales
GUION: '-';
BARRA: '/';
ASTERISCO: '*';
COMA: ',' ;

// Espacios en blanco (ignorados)
WS: [ \t\r\n]+;

