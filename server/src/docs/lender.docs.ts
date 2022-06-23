/**
 * @swagger
 * components:
 *  schemas:
 *      lender:
 *          type: object
 *          properties:
 *              id_lender:
 *                  type: string
 *                  description: Id del prestador (Autogenerado)
 *              cc_user_fk:
 *                  type: string
 *                  description: Cedula del prestador viene del usuario tiene que estar registrado
 *              conductor:
 *                  type: string
 *                  description: El prestador desea ser conductor o no
 *              active_lender:
 *                  type: boolean
 *                  description: Estado del prestador por defecto es false
 *              balance_lender:
 *                  type: int
 *                  description: Saldo del prestador por defecto es 0
 *              total_loans:
 *                  type: int
 *                  description: Total de prestamos del prestador por defecto es 0
 *              commissions:
 *                  type: int
 *                  description: Comision que nos debe pagar el prestador por defecto es 0
 *          required:
 *              - cc_user_fk
 *              - conductor
 *          example:
 *              id_lender: 0
 *              cc_user_fk: "12345678"   
 *              conductor: true
 *              active_lender: false
 *              balance_lender: 0
 *              total_loans: 0
 *              commissions: 0
 * @swagger
 * components:
 *  schemas:
 *      price-vehicle:
 *          type: object
 *          properties:
 *              price:
 *                  type: string
 *                  description: precio que propone el prestador de sus vehiculo
 *          required:
 *              - price
 *          example:
 *              price: 20000
 * @swagger
 * /lender/{cc_user}:
 *  put:
 *      summary: Ingresar el valor del vehiculo
 *      tags: [lenders]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - in: path
 *            name: cc_user
 *            required: true
 *            type": string
 *            description: cc_user del properties del vehiculo
 *      requestBody:     
 *           content:
 *               application/json:
 *                   schema:
 *                       type: object
 *                       $ref: '#/components/schemas/price-vehicle'
 *      responses:
 *          201:
 *              description: El precio del vehiculo ha sido actualizado
 *          400:
 *              description: Bad Request o No se pudo actualizar el precio ya que no eres prestador
 *          500:
 *              description: internal server error    
 * 
 * @swagger
 * /admin/info-lender:
 *  get:   
 *      summary: Puedo ver los usuarios registrados como conductor de su vehiculo o los que ofrecieron solo su vehiculo
 *      tags: [lender]      
 *      security:
 *          - BearerAuth: []
 *      responses:
 *          200:
 *              description: Los usuarios registrados como conductor de su vehiculo o los que ofrecieron solo su vehiculo
 *          401:
 *              description: No autorizado
 *          500:
 *              description: internal server error
 * 
 * @swagger
 * /admin/rented-cars/{inicio}/{fin}:
 *  get:
 *      summary: Yo como usuario administrador quiero ver el número de carros rentados según un filtro por fechas
 *      tags: [vehicles]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - in: path
 *            name: inicio
 *            required: true
 *            type: string
 *            description: Fecha de inicio (AAA-MM-DD)
 *          - in: path
 *            name: fin
 *            required: true
 *            type: string
 *            description: Fecha de fin (AAA-MM-DD)
 *      responses:
 *          200:
 *              description: El número de carros rentados según un filtro por fechas
 *          401:
 *              description: No autorizado
 *          500:
 *              description: internal server error
 * 
 * @swagger
 * /admin/lender/report:
 *  get:
 *      summary: Ver la lista de prestadores y el reporte de sus comisiones
 *      tags: [lender]
 *      security:
 *          - BearerAuth: []
 *      responses:
 *          200:
 *              description: La lista de prestadores y el reporte de sus comisiones
 *          401:
 *              description: No autorizado
 *          500:
 *              description: internal server error
 * 
 * @swagger
 * /admin/taker:
 *  get:
 *      summary: Traer todos los usuarios que son tomadores y su informacion
 *      tags: [taker]
 *      security:
 *          - BearerAuth: []
 *      responses:
 *          200:
 *              description: Los usuarios que son tomadores y su informacion
 *          401:
 *              description: No autorizado
 *          500:    
 *              description: internal server error
 * 
 * @swagger
 * /admin/taker/{cc_user}:
 *  put:
 *      summary: Actualizar el estado del usuario que es tomador
 *      tags: [taker]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - in: path
 *            name: cc_user
 *            required: true
 *            type: string
 *            description: cc_user del usuario que es tomador
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          active_user:
 *                              type: boolean
 *                              description: Estado del usuario que es tomador
 *      responses:
 *          200:
 *              description: El estado del usuario que es tomador ha sido actualizado
 *          400:
 *              description: Bad Request o No se pudo actualizar el estado del usuario que es tomador
 *          401:
 *              description: No autorizado
 *          500:
 *              description: internal server error
 *      
 */