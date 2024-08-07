const base = "http://localhost:3000"

export const apiUrl = {
    base: base,
    login: `${base}/loginUser`,

    addCustomer: `${base}/addCustomer`,
    getCustomers: `${base}/getCustomers`,

    addOrder: `${base}/addOrder`,
    updateOrder: `${base}/updateOrder`,
    getOrderByID: `${base}/getOrderById`,
    getAllOrders: `${base}/getAllOrders`,

    getProductById: `${base}/products`,
    createProduct: `${base}/addProduct`,
    getAllProducts: `${base}/products`,
    updateProduct: `${base}/updateProductById`,
    uploadBulkProduct: `${base}/uploadBulk`,

    getPaymentByID: `${base}/getPaymentByOrderId`,
    addPaymentToOrder: `${base}/addPaymentToOrderId`,

    getSupplier: `${base}/suppliers`,
    createSupplier: `${base}/suppliers`,
    createMultiSupplier: `${base}/uploadMultiSuppliers`,
    updateSupplier: `${base}/updateSupplierById`,
    getAllSupplierOrders: `${base}/supplyOrders`,

    route:`${base}/routes`,
    updateRoute:`${base}/updateRoutes`,
    OPRoute:`${base}/OProutes`


}