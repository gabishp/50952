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


para ir comprobando los input, hay que cambiar la linea del archivo launch.json que dice "input": ".........." por el archivo que quieras analizar y ademas en el index en la linea 13 tambien se le tiene que cambiar el nombre del archivo a analizar

