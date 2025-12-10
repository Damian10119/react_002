

const API_BASE_URL = 'http://ec2-3-236-168-225.compute-1.amazonaws.com/api'

export const productService = {
    async getAll(){
        try {
            const response = await fetch (`${API_BASE_URL}/product`)
            console.log(response)

            if(!response.ok){
                throw new Error('Error fecthing products')
            }
            return await response.json()
        } catch(error){
            console.error(`Error: ${error}`)
            throw error
        }

    }
}

export default productService