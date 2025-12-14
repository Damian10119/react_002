export default function ProductList(
    {
        products
    }
){
    if(!products || products.length == 0){
        return(
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <div className="text-center text-gray-600 rounded-lg">
                    <h1>There are no products available</h1>
                </div>
        
            </div>
        )
    }

    return(
        <div>
            <table>
                <thead className="bg-gray-200">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody className="bg-white">
                    {
                        products.map((product)=>(
                            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                
                            </tr> 
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}