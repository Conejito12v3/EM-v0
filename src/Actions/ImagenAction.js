export const obtenerDataImagen = imagen => {
    return new Promise((resolve, eject) => {
        const nombre = imagen.name;
        const extension = imagen.name.split(".").pop();

        const lector = new FileReader();
        lector.readAsDataURL(imagen);

        lector.onload = () => resolve (
            {
                Data: lector.result.split(",")[1],
                Nombre: nombre,
                Extension: extension
            }
        );

        lector.onerror = error => PromiseRejectionEvent(error);
    })
}