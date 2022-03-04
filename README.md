# Backend CRUD API REST

_Ejemplo de WS REST con NodeJS que proporciona un API CRUD para gestionar una DB MongoDB._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Ver **Deployment** para conocer cómo desplegar el proyecto.


### Pre-requisitos 📋

·Es necesario tener un equpo Windows, Linux u OS X con conexión a internet. 
·Es preferible tener instalada una máquina virtual con LINUX para tener un seguimiento y mantenimiento futuros más sencillos. 
 Es recomendable que la máquina virtual:
	-tenga un mínimo de 2GHz de procesador
	-tenga mínimo 4GB de RAM
	-tenga 25GB de HD
	-asegurarnos de tener la última versión estable de 64 bits de la distribución de Ubuntu de Linux, por el momento es la 20.04 LTS.
(La máquina virtual se puede crear desde VirtualBox.)
·Tener instaladas las siguientes aplicaciones:
	-Visual Studio Code más plugins para Node, JS y TS.
	-Postman
	-NodeJs- node y npm
	-Git, con una cuenta con un repositorio en GitHub o bitbacket
	-MongoDB

Para comprobar los datos de la máquina virtual abrimos una terminal con 
```
<Ctrl+Alt+T>
$ lsb_release -a
$ uname -m
$ df -h
```

### Instalación 🔧
Instalar navegador, editor de texto express nodemon

Instalaremos:
	·Un editor de texto, en este caso Visual Studio Code.
	
	·Un testing de API REST, postman.
	
	·Un entorno en tiempo de ejecución multiplataforma basado en JavaScript, Node js
	
	·Un gestor de repositorios, git.
	
	·Un gestor de proyectos que impide que tengamos que estar constantemente reiniciando nuestra aplicación con cada cambio en el código fuente, nodemon.
	
	·Una política de registro logs, Morgan.

	·Una base de datos, Mongo db
_Instalación de Visual Studio Code y cómo lanzarlo_

```
<Ctrl+Alt+T>
sudo snap install --classic code
code .
```
_Instalación de Postman y cómo lanzarlo_

```
<Ctrl+Alt+T>
sudo snap install postman
postman &
```
_Instalación de Node JS, instalaremos primero el gestor de paquetes de Node_

```
<Ctrl+Alt+T>
sudo apt update
sudo apt install npm
```
Instalación de una utilidad que ayuda a instalar y mantener las veriones

```
<Ctrl+Alt+T>
sudo npm clean -f
sudo npm i -g n
```
Finalmente instalación de la última versión estable de Node JS
```
sudo n stable

```
_Instalación del gestor de repositorios y configuración con los datos de acceso_
```
sudo apt install git
git config --global user.name tu_nombre_de_usuario
git config --global user.email tu_correo_electrónico
git config --list
```
_Intalación de nodemon_
```
npm i -D nodemon
```
También debemos incluir una línea en nuestro package.json creando el scrip:
```
start: "nodemon index.js"
```
_Instalación de Morgan_
```
npm i -S morgan

```
_Instalación de mongodb_
```
sudo apt update
sudo apt install -y mongodb
```

## Ejecutando las pruebas ⚙️

_Para poder ejecutar las pruebas habrá que realizar primero el despliegue_
En el navegador podrás ejecutar los get, pero para poder realizar tanto los post, los put y los delete tendrás que utilizar postman.
Hay que tener en cuenta de que si realizas los get sin tener datos guardados no se va a obtener nada como respuesta.
Por ello primero es conveniente realizar algún post.

### Analice las pruebas end-to-end 🔩

Al realizar las pruebas con el postman, los datos se guardarán en la base creada en MongoDB, entonces podrás utilizar comandos de mongo en la terminal para poder ver o encontrar los datos de tu base de datos.
Por ejemplo:
Después de realizar el código observamos con el get que la información se nos ha guardado correctamente. Pero también podemos ver en la terminal si ejecutamos el siguiente código lo que nos saldría
```
> show dbs
SD      0.000GB
admin   0.000GB
config  0.000GB
local   0.000GB
> use SD
switched to db SD
> show collections
familia
mascotas
> db.familia.find()
{ "_id" : ObjectId("62209c7e4a63952e8d02da88"), "tipo" : "Hermano", "nombre" : "Pepe", "edad" : 46 }
{ "_id" : ObjectId("6220b13784609e343ebc01ee"), "tipo" : "cuñado", "nombre" : "Juan", "edad" : 47, "comida" : "Cocido" }
> db.mascotas.find()
{ "_id" : ObjectId("6220b26b84609e343ebc01ef"), "tipo" : "perro", "raza" : "galgo", "nombre" : "Boby" }
{ "_id" : ObjectId("6220b2b084609e343ebc01f0"), "tipo" : "gato", "raza" : "siamés", "nombre" : "Nica", "color" : "marrón" }

```
Así comprobamos que nuestro servicio de base de datos se ha creado correctamente.

## Despliegue 📦
Primero se tendrá que clonar el repositorio con git clone https://github.com/amsg18/api-rest.git
Tendrás que  lanzar Node Js en la ruta de tu proyecto
```
start npm
```
También tendrás que iniciar mongo y su host, esto se hará en otra terminal diferente a la de Node JS:
```
sudo systemctl start mongodb
mongo --host localhost:27017
```

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_
postman, visual studio

* [Postman](https://www.postman.com/) - Plataforma API.
* [Visual Studio](https://code.visualstudio.com/) - Editor de texto
* [Mongodb](https://www.mongodb.com/) - Base de datos utilizada



## Versionado 📌
Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/amsg18/api-rest/tags).

## Autores ✒️

* **Ana Mª Soler** - *Realización del trabajo y documentación* - [amsg18](#https://github.com/amsg18)


## Licencia 📄
Este proyecto no está bajo ninguna licencia.
 
