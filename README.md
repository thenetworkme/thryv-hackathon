## Compass
![Image](https://github.com/user-attachments/assets/6bb92036-d821-4a65-ba1f-6aa405bdc185)
### Objetivo del aplicativo
El aplicativo *compass* es una aplicacion web en la cual se puede consultar los productos que mejor se ajustan a el presupuesto y necesidades de la empres, asi mismo, este busca las competencias de la empresa en cuestion para poder ofrecer una mejor vision del mercado y apoyar en la planeacion futura.
De esta forma la palicacion busca ofecer una solucion para las personas y empresas que desean iniciar o estan iniciando emprender reducciendo el tiempo que tienen que durar en el proceso de busqueda de productos y analisis de competidores

### Features
Los principales features que presenta la aplicacion son los siguientes:
- Busqueda de productos
- Comparacion de precios teniendo en cuenta la conversion
- Busqueda de competidores

### Pantallas en la ver1.0
Login: En esta pantalla se va a realizar la autenticacion del usuario y se registran nuevos
Getting started: Aqui se presenta un formulario el cual se puede editar otra vez mas adelante, en el cual se presenta una serie de filtros para el analisis de los precios productos
Home: En esta interfaz se encuentras acceso rapido a los dintos features de la apliacion

### Arquitectura
Para la arquetectura del proyecto de esta utilizando:
- Backend: 
    - Node.js con express
    - AWS para almacenamiento
- Frontend:
    - React como famework
    - Tailwind como libreria CSS
- Base de datos:
    - Dynamo

### Costo-Beneficio
Para el analisis de los costos y beneficios del producto tenemos que primero defnir cuales seran los elementos a utilizar de manera espeficica, para este planteamiento se analizan los siguientes puntos: 

Con Dynamo Pricing for On-Demand Capacity por medio de AWS para la base de datos tenemos los siguientes costos:

- Escritura: __*$0.625*__ por 1millon de peticiones
- Lectura: __*$0.125*__ 1millon de peticiones
- Por GB: __*$0.25*__ despues de 25GB

Con Gemini 1.5 flash Pay-as-you-go tenemos por cada millon de tokens:

- Input token: __*0.075*__
- Output token: __*0.3*__
- Context token: __*0.01875*__

Asi mismo para el hosting en AWS con Amazon EC2 tenemos el sigiente costo:

- __*0.9*__ Por cada GB del primer TB al mes 

Asi mismo se ha modelado de manera conservadora la cantidad de Mipymes que usuaran el aplicativo, siendo que hay un alrededor de __1.5 millones de Mipymes__ en el pais, se estima que alrededor de __150__ van a estar usando la aplicacion de manera inicial, de manera que en el primer año con un aumento mensual del 0.025% de las mismas acabar con __563__ empresas. 

Por ultimo antes de ver el analisi monetario aqui hay una serie de supuestos:

- Cantidad de request de escritura por usuario mes: __*50*__
- Cantidad de request de lectura por usuario al mes: __*100*__
- Tamaño en KB ocupado por usuario usuario: __*100*__
- Consultas promedio al mes: __*20*__
- Caracteres por consulta: __*1000*__
- Caracteres por respuesta: __*5000*__
- Cantidad de token de Contexto: __*1000000*__

<img width="527" alt="Image" src="https://github.com/user-attachments/assets/7358d745-cf02-471d-891a-50045ff0093c" />




