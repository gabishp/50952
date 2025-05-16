ejercicio:
schedule   = time_field { " " time_field } ;
time_field = value | range | step | wildcard | list | predefined ; 
value = number ;
range      = number "-" number ["/" number ] ; 
step       = (wildcard | range | value) "/" number ;
wildcard   = "*" ;
list       = item { "," item } ;
item       = value | range ;
predefined = "@yearly" | "@monthly" | "@weekly" | "@daily" | "@hourly" | "@reboot" ;
number     = digit { digit } ;
digit      = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;
special_char = "*" | "-" | "/" | "," ;


para ir comprobando los input, hay que cambiar la linea del archivo launch.json que dice "input": ".........." por el archivo que quieras analizar

en el input-invalido1 el error esta en el parser ya el * debe estar separado de los números
en el input-invalido2 el error es bastante simple y es que no se puede terminar con , una sentencia

y ya sea el input-valido1 e input-valido2 son validos

