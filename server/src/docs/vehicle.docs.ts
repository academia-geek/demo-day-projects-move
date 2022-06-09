/**
 * @swagger
 * components:
 *  schemas:
 *      vehicle:
 *          type: object
 *          properties:
 *              type:
 *                  type: string
 *                  description: item of the vehicle
 *              subtitle:
 *                  type: object
 *                  description: item of the vehicle
 *              share:
 *                  type: object
 *                  description: item of the vehicle
 *              hub:
 *                  type: object
 *                  description: item of the vehicle
 *              artists:
 *                  type: string
 *                  description: item of the vehicle
 *              layout:
 *                  type: string
 *                  description: item of the vehicle
 *              key:
 *                  type: string
 *                  description: item of the vehicle
 *              title:
 *                  type: string
 *                  description: item of the vehicle
 *              url:
 *                  type: string
 *                  description: item of the vehicle
 *          required:
 *              - type
 *              - subtitle
 *              - share
 *              - images
 *              - hub
 *              - artists
 *              - layout
 *              - key
 *              - title
 *              - url
 *          example:
 *              type: "MUSIC"
 *              subtitle: "Moses Sumney"
 *              share: {}
 *              images: {}
 *              hub: {}
 *              artists: [{}]
 *              layout: "5"
 *              key: "501844142"
 *              title: "Keeps Me Alive"
 *              url: "https://www.shazam.com/track/501844142/keeps-me-alive"
 * 
 * @swagger
 * /vehicles:
 *  get:
 *    summary: List all vehicles
 *    tags: [vehicles]
 *    security:
 *      - BearerAuth: []
 *    responses:
 *      200:
 *          description: A list of vehicles
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/vehicle'
 *      401:
 *          description: Unauthorized
 * 
 * /vehicles/:id:
 *  get:
 *      summary: List by id of the vehicle
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
 * /vehicles/:id:
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
 * /vehicles/:id:
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
 * vehicles/range/:inicio/:fin:
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
 *              
 */