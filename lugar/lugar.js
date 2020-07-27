const axios = require('axios');
const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=1c414f2b4b40dfa2a72db293f5f7851b&units=metric`
    });

    const resp = await instance.get();
    if (resp.data.main.lenght === 0) {
        throw new Error(`No hay datos para la dirección ${encodeUrl}`);
    }
    const data = resp.data.main;
    return {
        data,
    }

}
module.exports = {
    getLugarLatLng
}