/**
 * @swagger
 * components:
 *  schemas:
 *      user:
 *          type: object
 *          properties:
 *              cc_user:
 *                  type: string
 *                  description: Cedula del usuario
 *              first_name:
 *                  type: string
 *                  description: Nombre del usuario
 *              last_name:
 *                  type: string
 *                  description: Apellido del usuario
 *              email:
 *                  type: string
 *                  description: Correo del usuario
 *              city:
 *                  type: string
 *                  description: Ciudad del usuario
 *              address:
 *                  type: string
 *                  description: Direccion del usuario
 *              age:
 *                  type: string
 *                  description: Edad del usuario
 *              uid:
 *                  type: string
 *                  description: Id del usuario, viene de firebase
 *              active_user:
 *                  type: boolean
 *                  description: Estado del usuario
 *          required:
 *              - cc_user
 *              - first_name
 *              - last_name
 *              - email
 *              - city
 *              - address
 *              - age
 *          example:
 *              cc_user: "12345678"        
 *              first_name: "Juan"
 *              last_name: "Perez"
 *              email: "juan@gmail.com"
 *              city: "Bogota"
 *              address: "Calle 1"
 *              age: "20"
 * 
 * @swagger
 * /auth/users/:
 *  post:
 *      summary: Crear un nuevo usuario
 *      tags: [user]
 *      security:
 *          - BearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/user'
 *      responses:
 *          201:
 *              description: created successful
 *          400:
 *              description: Bad Request
 *          500:
 *              description: internal server error    
 * 
 * @swagger
 * /auth/users/:cc_user:      
 *  put:
 *      summary: Actualizar los datos de un usuario
 *      tags: [user]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *         - in: path
 *           name: cc_user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:  
 *                      type: object
 *                      $ref: '#/components/schemas/user'
 *      responses:
 *          200:
 *              description: usuario actualizado
 *          400:
 *              description: Bad Request 
 *          500:
 *              description: internal server error
 * 
 * @swagger
 * /auth/users/:cc_user/:role:
 *  put:
 *      summary: Volver administrador un usuario
 *      tags: [user]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - in: path
 *            name: cc_user
 *          - in: path
 *            name: role
 *            schema:
 *              type: string
 *              enum: [admin, usuario]
 *      responses:
 *          200:
 *              description: usuario ascendido
 *          401:
 *              description: Unauthorized
 * 
 * @swagger
 * /auth/users/:
 *  get:
 *      summary: Obtener todos los usuarios
 *      tags: [user]
 *      security:
 *          - BearerAuth: []
 *      responses:
 *          200:
 *              description: usuarios obtenidos
 *          401:
 *              description: Unauthorized
 */