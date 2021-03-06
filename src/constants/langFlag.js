/**
 * Archivos SVG de banderas asociadas a cada idioma.
 * La clave de cada bandera corresponde a su código de idioma.
 * 
 */
// Constantes
import lang from './lang';

// SVG
import En from '../app/assets/svg/en.svg';
import Es from '../app/assets/svg/es.svg';

 const langFlag = {
    [lang.ES]: Es,
    [lang.EN]: En
};

export default langFlag;