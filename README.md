# Procedimiento de creación y documentación.

## Archivo APK 
Esta en el repositorio con el nombre de: appNotcia.apk

## Dependencias previamente instaladas para la correcta utilización

* <a href="https://nodejs.org/en/download/package-manager" target="_blank">Node.Js</a> 
* <a href="https://metrobundler.dev/" target="_blank">Metro</a>
* <a href="https://developer.android.com/studio?hl=es-419" target="_blank">Android Studio</a>
* Preconfiguración de <a href="https://reactnative.dev/docs/set-up-your-environment" target="_blank">React native</a>

## Configuración del entorno de trabajo y proyecto.

### Creación del proyecto.

      npx @react-native-community/cli@latest init NewsApp

### levantamiento de servidor local.

En primer lugar abrimos 2 terminales y nos dirigiremos en cada una a la carpeta que se nos creo al crear el proyecto.

La primer terminal tendrá el servidor de metro para levantarlo usamos el siguiente comando:

#### Iniciar Metro

      npm start

#### Iniciar el proyecto

En la segunda terminal instala las dependencias de NPM con 

      npm install

y despues levanta el servidor

      npm run android

## Consideraciones del desarrollo

La API proporcionada para la obtención de los datos en algunos casos manda información incompleta o simplemente no manda nada, se debe tener en cuenta esa situación, doy un ejemplo, usando la siguiente URL
https://newsapi.org/v2/top-headlines?country=mx&apiKey=f129bf5597f14222b83616f8d244642f

         {
            status	      "ok"
            totalResults	0
            articles	   []
         }
      
y asi dependiendo de la solicitud


## Documentación

Los componentes creados tienen su correspondiente documentación para que puedan ser leídos.

## Inconvenientes

Durante el desarrollo de la aplicación hubieron distintas fallas, para poder tener un control de estas fallas se agrego una rama adicional git, la cual permite si en dado caso hay un error en la implementación de paqueterias, procesos y/o algún archivo que sea vital para el correcto funcionamiento, solo retornamos a la rama principal para evitar ese problema.

### Error con los ICONS

En este error, añadí mal una paqueteria, asi que para solucionarlo solamente eliminé y reinstale toda la paqueteria correspondiente.

### Error en el  splash screen 

Cómo era la primera vez que hacia algo asi, busqué como realizarlo, sin embargo, la mayoria de recursos que encontre estaban desactualizados y/o no funcionaban por falta de mantenimiento hasta que encontré un tutorial de como realizarlo de manera nativa y sin nada de terceros. <a href = 'https://medium.com/react-native-development/change-splash-screen-in-react-native-android-app-74e6622d699' target='_blank'>Link del tutorial</a>




