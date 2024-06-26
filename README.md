# Frontend página web:

## Archivo HttpCliente y Actions:

En el archivo HttpCliente, se programó una función genérica para realizar las peticiones. Las peticiones se realizan con axios y en la carpeta Actions, se usa la función genérica para pedir información a la api sobre diferentes datos.

## Carpeta Context:
Los archivos de esta carpeta se usan para crear un contexto, es importante dado que dependiendo el rol del usuario puede tener acceso a diferentes funciones de la página web, como por ejemplo, puede editar los productos que se venden o agregar a más administradores.

## Carpeta Navegación:
El archivo de esta carpeta implementa un verificación de que el usuario esta logueado antes de acceder a ciertas rutas donde se requiere un inicio de sesión o un rol en específico.

