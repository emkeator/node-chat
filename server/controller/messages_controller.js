var messages = [];
//message = {id, text, time, name}
var id = 0;

module.exports = {
    create: (req, res) => {
        console.log(req.body);
        let {text, time, name} = req.body;
        messages.push({id, text, time, name});
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        messages.map((chat) => {
            if (chat.id === +req.params.id) {
                Object.assign(chat, req.body);
            }
            return chat;
        })
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        messages = messages.filter((chat) =>{
            if(chat.id !== +req.params.id){
                return chat;
            }
        })
        res.status(200).send(messages);
    }
}