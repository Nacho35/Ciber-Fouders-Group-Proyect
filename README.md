# Ciber-Founders-Group Project

## Descripción

# Fast Diary: Tu Asistente para la Gestión del Tiempo

Fast Diary es una aplicación web de administración de tiempo diseñada para ayudarte a llevar un estilo de vida organizado y productivo. Con un conjunto de herramientas poderosas y un asistente dedicado a ayudarte a usar la aplicación, Fast Diary es tu compañero perfecto para optimizar tu día a día.

## Características Destacadas

### Calendario Integrado

Fast Diary te permite agendar eventos, reuniones y recordatorios en un calendario interactivo y fácil de usar. Nunca más olvidarás una cita importante o una fecha límite.

### Lista de Tareas

Organiza tus tareas y pendientes en una lista de tareas personalizada. Marca las tareas completadas y lleva un seguimiento de tu progreso.

### Reloj y Temporizador

Accede rápidamente a un reloj en pantalla para mantener un registro preciso del tiempo. Además, puedes utilizar el temporizador para gestionar eficazmente tus intervalos de trabajo y descanso.

### Asistente para Usar la App

El asistente de Fast Diary está aquí para ayudarte a aprender a usar la aplicación de manera efectiva. Puedes hacerle preguntas sobre cómo realizar tareas específicas dentro de la aplicación o para obtener consejos sobre cómo aprovechar al máximo sus características.

## Beneficios Clave

- Organización Total: Mantén tu vida personal y profesional en orden con todas tus citas y tareas en un solo lugar.

- Mejora la Productividad: Gestiona tu tiempo de manera efectiva, lo que te permite ser más productivo y cumplir tus objetivos.

- Ayuda Personalizada: Nuestro asistente está aquí para guiarte y responder a tus preguntas mientras aprendes a usar Fast Diary.

- Accesible en Cualquier Lugar: Fast Diary es una aplicación web, por lo que puedes acceder a ella desde cualquier dispositivo con conexión a Internet.

## ¡Únete a la Revolución de la Gestión del Tiempo!

Fast Diary está diseñado para personas que desean sacar el máximo provecho de su tiempo y mantenerse organizadas. Únete a nuestra comunidad y descubre cómo puedes mejorar tu vida con una gestión del tiempo efectiva y un asistente amigable que te guía en el uso de la aplicación.

¡Simplifica tu vida con Fast Diary hoy mismo!

## Contenido

- Requisitos
- Instalación
- Uso
- Contribución

## Requisitos

Antes de comenzar, asegúrate de tener lo siguiente:

## Crear un Proyecto en Google Cloud y Habilitar la API de Dialogflow

## Crear un Proyecto en Google Cloud

1. Inicia sesión en tu cuenta de Google:
   Asegúrate de estar conectado a tu cuenta de Google o crea una cuenta si aún no tienes una.

2. Accede al Panel de Control de Google Cloud:
   Dirígete al Panel de Control de Google Cloud utilizando tu navegador web.

3. Crea un Nuevo Proyecto:
   En la parte superior de la página, haz clic en el menú desplegable junto al nombre del proyecto actual (o "Seleccionar proyecto") y selecciona "Crear proyecto".

4. Completa la Información del Proyecto:
   Aparecerá un cuadro de diálogo. Aquí, debes ingresar un nombre para tu proyecto, opcionalmente cambiar el ID del proyecto y seleccionar la organización o carpeta en la que desees ubicarlo. Una vez completado, haz clic en "Crear".

5. Espera a que se Cree el Proyecto:
   Google Cloud creará el proyecto y te redirigirá automáticamente a la página de resumen del proyecto.

## Habilitar la API de Dialogflow

6. Habilita la API de Dialogflow:
   En la página de resumen del proyecto, haz clic en el botón "Habilitar APIs y servicios".

7. Busca "Dialogflow" y selecciona la API:
   En la barra de búsqueda, ingresa "Dialogflow" y selecciona "Dialogflow API".

8. Habilita la API:
   Haz clic en el botón "Habilitar" para habilitar la API de Dialogflow en tu proyecto.

## Configurar un Agente de Dialogflow

9. Crea un Agente de Dialogflow:
   Después de habilitar la API, puedes acceder a la consola de Dialogflow. Allí, podrás crear y configurar un agente de Dialogflow Essential.

10. Configura tu Agente:
    Dentro de la consola de Dialogflow, crea un nuevo agente y configura las intenciones, entidades y demás ajustes según tus necesidades.

## Conectar tu Aplicación a la API de Dialogflow

11. Conecta tu Aplicación a la API de Dialogflow:
    Puedes conectar tu aplicación o servicio a la API de Dialogflow para interactuar con el agente que has configurado. La documentación de Dialogflow proporciona información detallada sobre cómo hacerlo.

12. Prueba tu Agente:
    Utiliza la interfaz de prueba de Dialogflow para probar y depurar tu agente antes de implementarlo en tu aplicación o servicio.

13. Generar un Archivo JSON de Credenciales: Luego de conectar tu aplicación a la API, podrás generar un archivo JSON con las credenciales necesarias. Este archivo se utilizará para autenticarte en Dialogflow. Deberás colocarlo en la carpeta "keys" del proyecto. 

14. Configurar el Project ID: Google Cloud te proporcionará un Project ID. Deberás colocar este Project ID en la variable de entorno del proyecto. Se han proporcionado ejemplos en el archivo .env de muestra. Recuerda que la autenticación y la configuración de las credenciales son fundamentales para que tu aplicación pueda comunicarse con Dialogflow de manera segura y efectiva. Asegúrate de seguir las instrucciones proporcionadas por Google Cloud y Dialogflow para configurar correctamente las credenciales y la variable de entorno del Project ID.
        
        ## Vincular Firebase con Dialogflow y Obtener Credenciales de Firestore
        
        1. Crea un Proyecto de Firebase:
           
           - Ve al Panel de Firebase.
           - Haz clic en "Agregar proyecto" y sigue las instrucciones para crear un nuevo proyecto de Firebase.
        
        2. Asocia el Proyecto de Firebase con Google Cloud:
           
           - Accede a la configuración del proyecto de Firebase desde la pestaña "Configuración del proyecto".
           - En la pestaña "General", selecciona la opción para asociar tu proyecto de Firebase con un proyecto de Google Cloud que hayas creado previamente.
        
        3. Habilita Firestore:
           
           - En la pestaña "Firestore", selecciona "Crear base de datos" para habilitar Firestore en tu proyecto de Firebase.
           - Configura las reglas de seguridad de Firestore según tus necesidades.
        
        4. Obtén las Credenciales de Firestore:
           
           - En la misma pestaña "Firestore", haz clic en "Configuración del proyecto de Firebase" en la parte superior de la página. Esto te llevará a la configuración del proyecto de Firebase en la consola de Firebase.
        
        5. Accede a la Configuración del Proyecto de Firebase:
           
           - En la configuración del proyecto de Firebase, ve a la sección "Configuración del proyecto" en el menú de la izquierda.
        
        6. Genera una Clave de Firebase Admin SDK:
           
           - En la sección "SDK de Firebase Admin", haz clic en "Generar nueva clave privada".
           - Esto descargará un archivo JSON que contiene las credenciales necesarias para acceder a Firestore y otras partes de Firebase desde tu aplicación.
        
        7. Integra las Credenciales en tu Proyecto de Dialogflow:
           
           - Copia el archivo JSON que descargaste en el paso anterior (las credenciales del Firebase Admin SDK).
           - Coloca este archivo JSON en la carpeta de tu proyecto que desees, como "keys".
           - En tu código, configura Firebase Admin SDK utilizando las credenciales. Puedes encontrar ejemplos de cómo hacerlo en la documentación de Firebase para tu lenguaje de programación específico.
        
        8. Utiliza Firestore en tu Proyecto de Dialogflow:
           
           - Ahora puedes usar el SDK de Firebase Admin para interactuar con Firestore desde tu proyecto de Dialogflow. Puedes almacenar y recuperar datos en Firestore según sea necesario para tu aplicación.
        
            Estos pasos te permitirán vincular Firebase con Dialogflow y     obtener las credenciales de Firestore para acceder y utilizar     Firestore desde tu proyecto de Dialogflow. Asegúrate de seguir     la documentación de Firebase y Dialogflow para obtener     detalles específicos sobre cómo configurar y utilizar estas     herramientas en tu proyecto.
        
        ## Importar Respuestas del Chatbot
        
        Dentro del proyecto, encontrarás una carpeta llamada "extras". En esta carpeta, se encuentra un archivo .RAR que contiene respuestas predefinidas para el chatbot. Puedes utilizar estas respuestas importándolas a tu cuenta de Dialogflow, o si lo prefieres, puedes crear tus propias respuestas personalizadas.
        
        Para importar las respuestas predefinidas a tu cuenta de Dialogflow, sigue estos pasos:
        
        1. Inicia sesión en tu cuenta de Dialogflow.
        
        2. Ve al agente de Dialogflow que deseas configurar.
        
        3. En la barra lateral izquierda, selecciona "Configuración" y luego "Exportar y restaurar".
        
        4. Haz clic en "Restaurar desde archivo" y selecciona el archivo .RAR que se encuentra en la carpeta "extra" del proyecto.
        
        5. Sigue las instrucciones para importar las respuestas al agente.
        
        Si prefieres crear tus propias respuestas personalizadas, puedes hacerlo directamente en la plataforma de Dialogflow. Personalizar las respuestas te permitirá adaptar el chatbot a tus necesidades específicas y proporcionar una experiencia única a los usuarios.

## Instalación

Para instalar Time Sage, sigue estos pasos:

1. Clona este repositorio en tu máquina local: 
   
   ```
   git clone https://github.com/Nacho35/Ciber-Fouders-Group-Proyect.git
   ```
   
   2. Accede al directorio del proyecto:
   
   ```
   cd Ciber-Fouders-Group-Proyect/time-sage
   ```
   
   3. Instala las Dependencias:
      
      Luego, ejecuta el siguiente comando para instalar las dependencias necesarias en el directorio correspondiente: 
      
      ```
      npm install
      ```

# Uso de Time Sage

Para utilizar Time Sage, sigue estos pasos después de haber completado la instalación:

## Iniciar los Servidores

Time Sage utiliza varios servidores para su funcionamiento. Asegúrate de que estén todos en ejecución antes de utilizar la aplicación.

1. JSON Server (Simulación de Base de Datos):
   
   Ejecuta el siguiente comando para iniciar el servidor JSON que simula la base de datos:
   
   ```bash
   npm run server
   ```

2. Servidor Express (Backend):

Ejecuta el siguiente comando para iniciar el servidor Express para la lógica de backend:

```
npm run express
```

3. Servidor React y Next (Interfaz de Usuario):
   
   Ejecuta el siguiente comando para iniciar el servidor React y Next para la interfaz de usuario:
   
   ```
   npm run dev
   ```

4. ## Acceder a la Aplicación
   
   Una vez que todos los servidores estén en ejecución, puedes acceder a Time Sage en tu navegador web visitando la URL correspondiente (generalmente, http://localhost:3000)

> Nota: En este proyecto he utilizado los siguentes puertos: el 3000 por defecto para la interfaz de usuario, el 3001 para el Json-Server, y el  8080 para el backend. Puedes cambiarlos si tu quieres.

## Interactuar con Time Sage

Una vez que hayas accedido a la aplicación, puedes comenzar a utilizar las diversas funciones de Time Sage, como gestionar tu tiempo, programar eventos y utilizar las herramientas disponibles.

¡Disfruta de la experiencia de Time Sage y mejora tu gestión del tiempo!



# Contribución al Proyecto

Tu ayuda es valiosa para mejorar esta aplicación y hacerla aún más útil Aquí hay algunas formas en las que puedes contribuir:

## Reportar Problemas

Si encuentras errores o problemas en la aplicación, por favor, abre un nuevo problema en el repositorio. Asegúrate de proporcionar detalles completos sobre el problema, incluyendo pasos para reproducirlo si es posible.

## Proponer Mejoras

Si tienes ideas para mejorar la aplicación o agregar nuevas características, no dudes en crear una solicitud de extracción (pull request) con tus cambios propuestos. Estaremos encantados de revisar y discutir tus contribuciones.

## Ayudar a Resolver Problemas Abiertos

Revisa la lista de problemas abiertos en el repositorio y si encuentras alguno que puedas abordar, siéntete libre de trabajar en ello y enviar una solicitud de extracción. Tu ayuda es fundamental para solucionar problemas y mejorar la aplicación.

## Compartir Ideas y Feedback

Si tienes sugerencias, comentarios o ideas sobre cómo mejorar Time Sage, siéntete libre de compartirlas en la sección de problemas o en las discusiones del repositorio. Valoramos tu feedback y estamos abiertos a nuevas ideas.

## Contribuir a la Documentación

La documentación clara y concisa es esencial. Si notas que la documentación necesita mejoras o correcciones, por favor, envía una solicitud de extracción con tus cambios.

¡Gracias por usar Time Sage!
