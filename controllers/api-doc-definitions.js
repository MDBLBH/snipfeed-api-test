/**
 * @apiDefine ServerError
 * @apiError (Error 500) {Object} ServerError Unknown Error.
 * @apiErrorExample {json} ServerError
 *     HTTP/1.1 500 Internal Server Error
 *    {
 *      "error": "ServerError",
 *    }
 */

/**
 * @apiDefine ValidationError
 * @apiError (Error 400) {Object} ValidationError Invalid User Input.
 * @apiErrorExample {json} ValidationError
 *     HTTP/1.1 400 Bad Request
 *    {
 *      "error": "ValidationError"
 *    }
 */
