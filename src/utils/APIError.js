//You're looking at a custom error class in JavaScript/Node.js designed to handle API errors in a clean and consistent way.

class APIError extends Error{
    constructor(
        statusCode,
        message="Something went Wrong",
        errors=[],
        stack="",
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors

        if (stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }


}
export {APIError}