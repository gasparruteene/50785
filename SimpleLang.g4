grammar SimpleLang;

// ------------------ Parser rules ------------------

testSuite: prueba* ;

prueba: PRUEBA texto LLAVE_ABRE NEWLINE? paso* LLAVE_CIERRA ;

paso: (DADO | CUANDO | ENTONCES) objeto estado? valor (Y valor)* NEWLINE ;

objeto: identificador (PUNTO identificador)* ;

estado: ES | NO_ES | CONTIENE | EXISTE | DEBE ;

valor: texto
     | numero
     | booleano
     | variable
     | lista
     ;

texto: TRIPLE_DOBLE_COMILLA | TRIPLE_SIMPLE_COMILLA ;

lista: CORCHETE_ABRE valor (COMA valor)* CORCHETE_CIERRA ;

identificador: ID ;

variable: DOLAR ID ;

numero: NUMBER ;

booleano: VERDADERO | FALSO ;

// ------------------ Lexer rules ------------------

PRUEBA: 'prueba' ;
DADO: 'dado' ;
CUANDO: 'cuando' ;
ENTONCES: 'entonces' ;
ES: 'es' ;
NO_ES: 'no es' ;
CONTIENE: 'contiene' ;
EXISTE: 'existe' ;
DEBE: 'debe' ;
Y: 'y' ;

TRIPLE_DOBLE_COMILLA: '"""' .*? '"""' ;
TRIPLE_SIMPLE_COMILLA: '\'\'\'' .*? '\'\'\'' ;

LLAVE_ABRE: '{' ;
LLAVE_CIERRA: '}' ;
CORCHETE_ABRE: '[' ;
CORCHETE_CIERRA: ']' ;
COMA: ',' ;
PUNTO: '.' ;
DOLAR: '$' ;

ID: [a-zA-Z_] [a-zA-Z0-9_]* ;
NUMBER: [0-9]+ ;
VERDADERO: 'verdadero' ;
FALSO: 'falso' ;

WS: [ \t\r]+ -> skip ;
NEWLINE: '\r'? '\n' ;

