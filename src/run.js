/**
 * Запрос к серверу
 * @param {object} param
 * @return {Promise}
 */
export default (param={}) => {
    const data = {
        ...param,
        action: "get-objects-for-modal-window",
    }

    // TODO: вынос адреса сервера
    var url = "custom_web_template.html?object_id=7151025819625201817"
    return getDataWithJQuery(url, data)
}


/**
 * Функция обращения к серверу при помощи jQuery
 * @param {string} url
 * @param {object} data
 * @return промис
 */
const getDataWithJQuery = async (url, data) => {
    return await $.ajax({
        url,
        data,
        cache: false,
        type: "POST",
        dataType: "JSON",
    })
}
