import { poolPromise } from  "../DAL/db.js";

export const getUser = async (email) => {
    try {
        const pool = await poolPromise
        const request = pool.request()
        request.input('email', sql.VarChar, email)
        const result = await request.query('SELECT * FROM users WHERE email = @email')
        return result.recordset[0]
    } catch (err) {
        console.log(err)
        return null
    }
}

export const addUser = async (user) => {
    try {
        const pool = await poolPromise
        const request = pool.request()
        request.input('name', sql.VarChar, user.name)
        request.input('email', sql.VarChar, user.email)
        request.input('password', sql.VarChar, user.password)
        await request.query('INSERT INTO users (name, email, password) VALUES (@name, @email, @password)')
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

export const updateUser = async (id, user) => {
    try {
        const pool = await poolPromise
        const request = pool.request()
        request.input('id', sql.Int, id)
        request.input('name', sql.VarChar, user.name)
        request.input('email', sql.VarChar, user.email)
        request.input('password', sql.VarChar, user.password)
        await request.query('UPDATE users SET name = @name, email = @email, password = @password WHERE id = @id')
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

export const deleteUser = async (id) => {
    try {
        const pool = await poolPromise
        const request = pool.request()
        request.input('id', sql.Int, id)
        await request.query('DELETE FROM users WHERE id = @id')
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}
