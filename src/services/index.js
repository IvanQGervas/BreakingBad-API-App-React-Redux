/**
 * Punto de entrada para:
 *      - Las rutas finales de los Servicios (EndPoints)
 *      - Encapsulador para los diferentes tipos de peticiones HTTP
 *
 */
import EndPoints from './EndPoints';
import * as Http from './Http';

export {
    // Rutas finales de los Servicios (EndPoints)
    EndPoints,
    // Encapsulador para los diferentes tipos de peticiones HTTP
    Http
};