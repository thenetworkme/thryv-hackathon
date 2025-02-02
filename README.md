# Compass
![Image](https://github.com/user-attachments/assets/6bb92036-d821-4a65-ba1f-6aa405bdc185)

# Tabla de contenido
- [Compass](#compass)
- [Tabla de contenido](#tabla-de-contenido)
  - [Objetivo del aplicativo](#objetivo-del-aplicativo)
  - [Features](#features)
  - [Pantallas en la ver1.0](#pantallas-en-la-ver10)
  - [Arquitectura](#arquitectura)
  - [Costo-Beneficio](#costo-beneficio)
    - [Beneficios](#beneficios)


## Objetivo del aplicativo
En la republica domiinicana existe una gran cantidad de empresas pequeñas, siendo que estas representan una mayoria del mercado dominicano, no obstante, por su caracteristica de Mipyme puede que estas no tengan los recursos necesarios para comprar los elementso que necesita para el abastecimiento en cualquier proveedor. Nosotros buscamos quitar tiempo en la busqueda de estos recursos para que ldichas empresas puedan mejorar sus procesos y enfocarse en expandirse gastando lo menos posible. Debido a esta idea sale __*Compass*__ 

El aplicativo *Compass* es una aplicacion web en la cual se puede consultar los productos que mejor se ajustan a el presupuesto y necesidades de la empres, asi mismo, este busca las competencias de la empresa en cuestion para poder ofrecer una mejor vision del mercado y apoyar en la planeacion futura. De esta forma la palicacion busca ofecer una solucion para las personas y empresas que desean iniciar o estan iniciando emprender reducciendo el tiempo que tienen que durar en el proceso de busqueda de productos y analisis de competidores

## Features
Los principales features que presenta la aplicacion son los siguientes:
- Busqueda de productos
- Comparacion de precios teniendo en cuenta la conversion
- Busqueda de competidores

## Pantallas en la ver1.0
Login: En esta pantalla se va a realizar la autenticacion del usuario y se registran nuevos
Getting started: Aqui se presenta un formulario el cual se puede editar otra vez mas adelante, en el cual se presenta una serie de filtros para el analisis de los precios productos
Home: En esta interfaz se encuentras acceso rapido a los dintos features de la apliacion

## Arquitectura
Para la arquetectura del proyecto de esta utilizando:
- Backend: 
    - Node.js con express ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
    - AWS para almacenamiento ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
- Frontend:
    - React como famework 	![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
    - Tailwind como libreria CSS ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- Base de datos:
    - Dynamo ![AmazonDynamoDB](https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white)

## Costo-Beneficio
Para el analisis de los costos y beneficios del producto tenemos que primero defnir cuales seran los elementos a utilizar de manera espeficica, para este planteamiento se analizan los siguientes puntos: 

Con Dynamo Pricing for On-Demand Capacity por medio de AWS para la base de datos tenemos los siguientes costos:

- Escritura: __*$0.625*__ por 1millon de peticiones
- Lectura: __*$0.125*__ 1millon de peticiones
- Por GB: __*$0.25*__ despues de 25GB

Con ![Google Gemini](https://img.shields.io/badge/google%20gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white) Gemini 1.5 flash Pay-as-you-go tenemos por cada millon de tokens:

- Input token: __*$0.075*__
- Output token: __*$0.3*__
- Context token: __*$0.01875*__

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

![Image](https://github.com/user-attachments/assets/ea523142-5832-4734-8251-8d77cc38fc7d)

![Image](https://github.com/user-attachments/assets/dbc23e18-77e6-48bd-b9fa-9035664e60bf)


De esta manera tenemos los siguentes datos en cuento a los costos variables del proyecto

- Costo total de almaccemiento: __*$0.19usd*__
- Costo total por consumo de IA: __*$134.66usd*__
- Costo total por hosting: __*$10.8usd*__
- Costo total del primero año: __*$145.65usd*__
- Costo en pesos: __*$8,884.62DOP*__

### Beneficios

Asi mismo se pantea que este servicio tenga un costo de __2 dolares mensuales__ ya que este precio es escequible para la demografia objetivo, no obstante, como para poder deneterminar el punto de equilibrio y el ingreso de equilibrio es necesario los costos fijos (los cuales de momento no se pueden determinar ya que dependera del equipo de trabajo) este precio se planteo en base a la accecibilidad de los negocios objetivo.

De esta manera se ve lo siguiente:

![Image](https://github.com/user-attachments/assets/bb575d91-53d4-42fb-9caa-94eb05e581de)

![Image](https://github.com/user-attachments/assets/417d8000-c13e-4944-938c-1a9850da9bf2)

Lo cual nos genera un total de:

__8,550usd__

Siendo esto un beneficio neto en pesos de:

__521,550DOP__

De manera que tenemos un beneficio real de:

__512,665.38DOP__

