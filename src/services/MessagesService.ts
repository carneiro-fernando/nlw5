import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessageCreate {
    admin_id?: string,
    text: string,
    user_id: string
}


class MessagesService {

    private messagesRepository : Repository <Message>;

    constructor(){
        this.messagesRepository =getCustomRepository(MessagesRepository);
    }

    async create({ admin_id, text, user_id }: IMessageCreate) {
        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id,
        });

        await this.messagesRepository.save(message);

        return message;
    }

    async listByUser(user_id: string) {
        const list = await this.messagesRepository.find({ user_id })
        /** Poderia fazer também no lugar de ({user_id}):
         *### where: {user_id},
         *### relations: ["user"],
         *Isso traria a informação do usuário relacionada com a mensagem**/
        return list;
    }
}

export { MessagesService }