export default function ProductList(
    {
        products
    }
){
    if(!products || products.length == 0){
        return(
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center text-gray-600">
                    <h1>There are no products available</h1>
                </div>
        
            </div>
        )
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>

                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            
                        </tr> 
                    ))
                }
            </tbody>
        </table>
    )
}