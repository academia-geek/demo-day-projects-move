/**
 * @swagger
 * components:
 *  schemas:
 *      service:
 *          type: object
 *          properties:
 *              id_service:
 *                  type: number
 *                  description: Id del servicio (autoincrementable)
 *              id_lender_fk:
 *                  type: number
 *                  description: Id del prestador del servicio
 *              id_taker_fk:
 *                  type: number
 *                  description: Id del solicitante del servicio
 *              placa:
 *                  type: string
 *                  description: Placa del vehiculo
 *              tipe_renta:
 *                  description: Tipo de renta
 *                  enum:
 *                      - "Hora" 
 *                      - "Dia"
 *                      - "Mes"
 *              beginning_service: 
 *                  type: string
 *                  description: Fecha de inicio del servicio (yyyy-mm-dd)
 *              end_service:
 *                  type: string
 *                  description: Fecha de fin del servicio (yyyy-mm-dd)
 *              estate_servicio:
 *                  type: string
 *                  description: Estado del servicio
 * 
 * @swagger
 * /service:
 *  get:
 *      summary: Obtener todos los servicios
 *      tags: [services]
 *      security:
 *          - BearerAuth: []
 *      responses:
 *          200:
 *              description: Retorna todos los servicios
 *          401:
 *              description: No autorizado
 *          500:
 *              description: internal server error
 * 
 * @swagger
 * /taker/rentar:
 *  post:
 *      summary: Rentar un vehiculo
 *      tags: [services]
 *      security:
 *          - BearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          type_renta:
 *                              description: Tipo de renta
 *                              enum:
 *                                  - "Hora"
 *                                  - "Dia"
 *                                  - "Mes"
 *                          placa:
 *                              type: string
 *                              description: Placa del vehiculo
 *                          startDate:
 *                               type: string
 *                               description: Fecha de inicio del servicio (yyyy-mm-dd)
 *                          finishDate:
 *                               type: string
 *                               description: Fecha de fin del servicio (yyyy-mm-dd)
 *      
 *      responses:
 *          200:
 *              description: El servicio se ha rentado
 *          401:
 *              description: No autorizado
 *          500:
 *              description: internal server error             
 */