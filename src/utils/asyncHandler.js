// A utils (short for utilities) file is where you store reusable helper functions that are not tied to any specific route or component — but are used across the project.


// Promises wala 
const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=> next(error))
    }
}

export {asyncHandler}























// try catch wala 
// const asyncHandler = (fn)=>async (req,res,next)=> {
//     try {
//         await fn(req,res,next)        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message: error.message
//         })
//     }

// }
// export {asyncHandler}

