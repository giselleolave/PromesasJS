//Funición para enviar mensaje posterior a tres segundos
const enviarInformacion = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000); //3 segundos
    });
};

//Funcion para traer solo los primeros 20 títulos.
const traerTitulos = async () => {
    const titulos = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(titulos);
        const datos = await response.json();
        datos.slice(0, 20).forEach(post =>{ //Tambien se pudo usar MAP
            console.log(post.title);
        });
        // Uso de función posterior a tres segundos
        return await enviarInformacion();

        
    } catch (error) {
        console.error('Error al mostrar datos',error);
    }
    
}
const ImpresionTitulos = async () => {
    const mensaje = await traerTitulos();
    console.log(mensaje);// Esto imprimirá la función para traer titulos y luego el mensaje, esto debido a que se encuntra dentro de la otra función
};

//Llamada a función final
ImpresionTitulos();




