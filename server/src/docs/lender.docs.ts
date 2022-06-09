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
 *
 * @swagger
 * /auth/users/lender/:
 *  post:
 *      summary: Solicitar ser prestador
 *      tags: [lenders]
 *      security:
 *          - BearerAuth: []   
 *      requestBody:
 *          required: true      
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/lender'   
 *              
 */