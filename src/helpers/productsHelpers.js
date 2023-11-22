const dataAdapter = (data) => {

    if (typeof data === 'object') {
        data.id = parseInt(data.id);
        data.precio = parseInt(data.precio);
    }
    else data = parseInt(data);
    return data;
};

const helpers = {
    dataAdapter
};

export default helpers;