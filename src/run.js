/**
 * Запрос к серверу
 * @param {object} param
 * @return {Promise}
 */
export default (param={}) => {
    const data = {
        ...param,
        action: "records",
    }

    var url = "custom_web_template.html?object_id=7342889447736440307"
    return getDataWithJQuery(url, {
        method: 'POST',
        body: JSON.stringify(data),
    })
}


/**
 * Функция обращения к серверу при помощи jQuery
 * @param {string} url
 * @param {object} options
 * @return - данные ответа
 */
const getDataWithJQuery = (url, options) => {
    return $.ajax({
        url: url,
        data: options.body,
        cache: false,
        type: options.method,
        dataType: 'JSON',
    })
}
