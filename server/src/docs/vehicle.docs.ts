/**
 * @swagger
 * components:
 *  schemas:
 *      vehicle:
 *          type: object
 *          properties:
 *              cc_owner:
 *                  type: string
 *                  description: cedula del propietario del vehiculo
 *              placa:
 *                  type: object
 *                  description: placa del vehiculo
 *              url_image:
 *                  type: array
 *                  description: array de imagenes del vehiculo montadas por el usuario
 *              marca:
 *                  type: string
 *                  description: modelo del vehiculo
 *              modelo:
 *                  type: number
 *                  description: modelo del vehiculo
 *              color:
 *                  type: string
 *                  description: color del vehiculo
 *              fecha_disponibilidad:
 *                  type: object
 *                  description: Lista de fecha de disponibilidad
 *              url_soat:
 *                  type: string
 *                  description: url de la imagen del soat del vehiculo
 *              url_tecnicomecanica:
 *                  type: string
 *                  description: url de la imagen del tecnomecanica del vehiculo
 *              url_ficha_tecnica:
 *                  type: string
 *                  description: url de la imagen de la ficha tecnica del vehiculo
 *              activo:
 *                  type: boolean
 *                  description: estado del vehiculo en la plataforma
 *              gama:
 *                  type: string
 *                  description: Vehiculo es de gama [alta, media, baja]
 *              comision_renta:
 *                  type: decimal
 *                  description: porcentaje de la comision de renta del vehiculo
 *              poliza:
 *                  type: string
 *                  description: url de la imagen del soat del vehiculo
 *              tipo_vehiculo:
 *                  type: string
 *                  description: que tipo de vehiculo es [carro, moto, patineta]
 *              tipo_combustible:
 *                  type: string
 *                  description: que tipo de combustible es [gasolina, diesel, gas, electrico]
 *              valor_combustible:
 *                  type: boolean
 *                  description: valor de combustible del vehiculo en el mercado de las ciudades
 *              zone:
 *                  type: array
 *                  description: Sede de los vehiculos estan en las zonas [Pereira, Medellin, Cali, Manizales] 
 *              price:
 *                  type: number
 *                  description: el usuario puede ingresar el valor que tiene su vehiculo
 *          required:
 *              - cc_owner
 *          example:
 *              cc_owner: "1005206688"
 *              placa: "ABC123"
 *              url_image: [{"url": "https://upload.wikimedia.org/wikipedia/commons/2/29/1969_Ford_Mustang_Mach_1_%2837901276352%29.jpg"}]
 *              modelo: 2018
 *              color: "rojo"
 *              fecha_disponibilidad: {"fecha_inicio": "2018-01-01","fecha_fin": "2018-12-31"}
 *              url_soat: "https://www.soat.com/"
 *              url_tecnicomecanica: "https://www.tecnomecanica.com/"
 *              url_ficha_tecnica: "https://www.fichatecnica.com/"
 *              url: "https://www.shazam.com/track/501844142/keeps-me-alive"
 *              activo: false
 *              gama: "alta"
 *              comision_renta: 0.1
 *              poliza: true
 *              tipo_vehiculo: "combustion"
 *              tipo_combustible: "gasolina"
 *              valor_combustible: 20000
 *              zone: ["Pereira", "Medellin", "Cali", "Manizales"]
 *              price: 20000
 * 
 * @swagger
 * /vehicles:
 *  get:
 *    summary: List all vehicles
 *    tags: [vehicles]
 *    responses:
 *      200:
 *          description: A list of vehicles
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/vehicle'
*      400:
*           description: Bad Request
*      500:
*           description: internal server error  
 * @swagger
 * /vehicles/{id}:
 *  get:
 *      summary: List by id of the vehicle
 *      tags: [vehicles]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id of the vehicle registered in the platform
 *      responses:
 *          200:
 *              description: A vehicle
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/vehicle'
 *          401:
 *              description: Unauthorized
 * @swagger
 * /vehicles:
 *  post:
 *      summary: Create a new vehicle
 *      tags: [vehicles]
 *      security:
 *          - BearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/vehicle'
 *      responses:
 *          200:
 *              description: A vehicle created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/vehicle'
 *          401:
 *              description: Unauthorized         
 *                          
 * @swagger
 * /vehicles/{id}:
 *  put:
 *      summary: Update a vehicle
 *      tags: [vehicles]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id of the vehicle
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/vehicle'
 *      responses:
 *          200:
 *              description: A vehicle updated
 *          401:
 *              description: Unauthorized
 * @swagger
 * /vehicles/{id}:
 *  delete:
 *      summary: Delete a vehicle
 *      tags: [vehicles]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id of the vehicle
 *      responses:
 *          200:
 *              description: A vehicle deleted
 *          401:
 *              description: Unauthorized
 * 
 * @swagger
 * /vehicles/range/{inicio}/{fin}:
 *  get:
 *      summary: Trae los vehiculos por un rango de fechas
 *      tags: [vehicles]
 *      parameters:
 *          - in: path
 *            name: inicio
 *            schema:
 *              type: string
 *            required: true
 *            description: Fecha de inicio (AAA-MM-DD)
 *          - in: path
 *            name: fin
 *            schema:
 *              type: string
 *            required: true
 *            description: Fecha de fin (AAA-MM-DD)
 *      responses:
 *          200:
 *              description: Lista los vehiculos por fecha
 *     
 * @swagger
 * /vehicles/filter/{gama}:
 *  get:
 *      summary: Trae los vehiculos por gama
 *      tags: [vehicles]
 *      parameters:
 *          - in: path
 *            name: gama
 *            schema:
 *              type: string
 *            required: true
 *            description: Gama del vehiculo 
 *      responses:
 *          200:
 *              description: Lista los vehiculos por gama
 *          500:
 *              description: internal server error      
 *              
 */