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

    FORBIDDEN_UPDATED_CART_FIELDS: 6,

    INVALID_UPDATED_CART_FIELDS: 7,

    INVALID_UPTATED_PROD_IN_CART: 8,

    // Productos:

    INVALID_PRODUCT_DATA: 9,

    INVALID_ID_PRODUCT_ERROR: 10,

    INVALID_UPDATED_PRODUCT_FIELDS: 11,

    // Mensajes:

    INVALID_MESSAGE_DATA: 12,

    INVALID_ID_MESSAGE_ERROR: 13,

    // Ticket:

    INVALID_TICKET_DATA: 14,

    INVALID_ID_TICKET_ERROR: 15,

    // Session:

    INVALID_REGISTER_DATA: 16,

    INVALID_LOGIN_DATA: 17,

    INVALID_EMAIL_USER: 18,

    INVALID_NEW_PASS_USER: 19,

    INVALID_ID_USER_ERROR: 20,

}

export default ErrorEnums;