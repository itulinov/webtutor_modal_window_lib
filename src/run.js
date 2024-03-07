export default (param={}) => {

    // тут будет запрос к серверу
    console.log("server: ", param)

    // а это ответ от сервера
    return [{...param, name: "zhora"}]
}


