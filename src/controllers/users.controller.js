import { hash } from "bcrypt";


const usersRepository = new UsersRepository();

export const getUsers = (req, res) => {
    const users = usersRepository.getUsers();

    if (!users){
        return res.status(400).send ({ message: "não há usuario cadastrados!"});
    }
};

export const getUserById = (req, res) => {
    const { id } = req.params;
    const user = usersRepository.getUserById(id)

    if(!user) {
        return res.status(404).send({ message: "usuario não encontrado!"})
    }
    return res.status(200).send ({ message: "usuario encontrado com sucessol!"})
};

export const createUser = async (req, res) => {
    const { name, email, password} = req.body

    const userAlreadyExists = usersRepository. getUserByIdUserByEmail(email);

    if (userAlreadyExists){
        return res.status(400). send ({ message: "usuario já cadastrado!"})
    }

    const passwordHash = await hash (password, 8);
    const user = new user(name, email, passwordHash);
    usersRepository.createUser(user);


}
    export const updateUser = async (req, res) => {
        const { id } = req.params;
        const { name, email, password} = req.body;

        const getUserById = usersRepository.getUserById(id);    
        const getUserByEmail = usersRepository.getUserByEmail(email);

        if (!userById) {
            return res.status(404).send({ message: "usuario não encontrado!"})
        }

       if (userByEmail && userByEmail.id !== id) {
           return res.status(400).send({ message: "email já cadastrado!"})  
       }
        const passwordHash = await hash(password, 8);
        const user = usersRepository.updateUser(id, name, email, passwordHash);

        usersRepository.updateUser(id, name, email, passwordHash);

        return res.status(200).send({ message: "usuario atualizado com sucesso!"})
    }
    export const deleteUser = (req, res) => {
        const { id } = req.params;
        const user = usersRepository.getUserById(id);

        if (!user) {
            return res.status(404).send({ message: "usuario não encontrado!"})
        }

        usersRepository.deleteUser(id);
        return res.status(200).send({ message: "usuario deletado com sucesso!"})
    }   

