import { getUser, addUser, updateUser, deleteUser } from "../services/user.js";

export const getUserController = async (req, res) => {
    const user = await getUser(req.params.email)
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
}

export const addUserController = async (req, res) => {
    if (await addUser(req.body)) {
        res.json({ message: 'User created successfully' })
    } else {
        res.status(500).json({ message: 'Error while creating user' })
    }
}

export const updateUserController = async (req, res) => {
    if (await updateUser(req.params.id, req.body)) {
        res.json({ message: 'User updated successfully' })
    } else {
        res.status(500).json({ message: 'Error while updating user' })
    }
}

export const deleteUserController = async (req, res) => {
    if (await deleteUser(req.params.id)) {
        res.json({ message: 'User deleted successfully' })
    } else {
        res.status(500).json({ message: 'Error while deleting user' })
    }
}
