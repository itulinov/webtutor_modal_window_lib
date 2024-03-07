export default (param={}) => {

    // тут будет запрос к серверу
    console.log("server: ", param)

                $.ajax({
                    url: "custom_web_template.html?object_id=7151025819625201817",
                    data: {
                        'action': "get-objects-for-modal-window",
                        'catalog': "collaborators",
                        'fields': "id,fullname,code",
                        'find': "id,fullname,code",
                        'value': "Тулинов",
                        'ids': "",
                        'user-where': "1=1",
                        ssql: "",
                        connection: "",
                    },
                    cache: false,
                    type: 'POST',
                    dataType: 'JSON',
                }).done((data) => {
                    console.log(data);
                })
    // а это ответ от сервера
    return [{...param, name: "zhora"}]
}


