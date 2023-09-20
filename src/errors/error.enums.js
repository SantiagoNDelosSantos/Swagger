// Diccionario de erroes:

const ErrorEnums = {
    /*
        DATABASE_ERROR: 3,
    */

    // Carrito:

    INVALID_ID_CART_ERROR: 1,

    QUANTITY_INVALID_ERROR: 2,

    PRODUCTS_MISSING_OR_INVALID: 3,

    INVALID_PRODUCT: 4,

    INVALID_EMAIL: 5,

    INVALID_UPDATED_CART_FIELDS: 6,

    INVALID_UPTATED_PROD_IN_CART: 7,

    // Productos:

    INVALID_PRODUCT_DATA: 8,

    INVALID_ID_PRODUCT_ERROR: 9,

    INVALID_UPDATED_PRODUCT_FIELDS: 10,

    // Mensajes:

    INVALID_MESSAGE_DATA: 11,

    INVALID_ID_MESSAGE_ERROR: 12,

    // Ticket:

    INVALID_TICKET_DATA: 13,

    INVALID_ID_TICKET_ERROR: 14,

    // Session:

    INVALID_REGISTER_DATA: 15,

    INVALID_LOGIN_DATA: 16,

    INVALID_EMAIL_USER: 17,

    INVALID_NEW_PASS_USER: 18,

    INVALID_ID_USER_ERROR: 19,

}

export default ErrorEnums;