import { MarvelForm } from "../components/MarvelForm/MarvelForm"
let token = '23eea1a3f4fec6bada59fcae92a0b4e059836f177e0b250c'



export const serverCalls = {
    get: async () => {
        const response = await fetch('https://marvel-character-fake.onrender.com/api/characters', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async (data: any) => {
        const response = await fetch('https://marvel-character-fake.onrender.com/api/characters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to create new data from server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://marvel-character-fake.onrender.com/api/characters/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update data from server')
        }

        console.log(`Successfully update character with id ${id}`)
    },
    
    delete: async (id: string) => {
        const response = await fetch(`https://marvel-character-fake.onrender.com/api/characters/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error('Failed to delete data from server')
        }
    }
}