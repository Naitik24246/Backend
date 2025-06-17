import { asyncHandler } from "../utils/asyncHandler.js";
import { APIError } from "../utils/APIError.js";
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudiNary.js";
import { APIResponse } from "../utils/APIResponse.js";





const registerUser= asyncHandler(async(req,res)=> {
    // get user details from frontend 
    // validation - not empty
    // check if user already exist :m username or email
    // file empty or not 
    // check for file and avatar and upload them to cloudinary ,avatar
    // create MongoDB create user - create entry in db 
    // remove password and refresh token field from response 
    // check for user creation 
    // return res

    const {fullName,email,username,password}=req.body
    console.log("email:",email);
    if (fullName === " "){
        throw new APIError(400,"FullName is Required")
    }
    if (email === ""){
        throw new APIError(400,"Email is required")
    }
    if (email.endsWith("@gmail.com")){
        throw new APIError(500,"Invalid Email Id")
    }
    if (!fullName && !email && !username && !password){
        throw new APIError(200,"All fields are Required")
    }
    if (password===""){
        throw new APIError(400,"Password is required")
    }
    const existedUser= User.findOne({
        $or :[{ username } ,{ email }]
    })
    if (existedUser){
        throw new APIError(409,"User with email or username exists")
    }
    const avatarLocalPath= req.files?.avatar[0]?.path;
    const coverimageLocalPath= req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new APIError(400,"Avatar Image is Required")
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverimage= await uploadOnCloudinary(coverimageLocalPath)
    if (!avatar){
        throw new APIError(400,"Avatar file is Required")
    }

    const user = await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createdUser){
        throw new APIError(500,"Something went wrong while registering the user ")
    }

    return res.status(201).json(
        new APIResponse(200,createdUser,"User Registered Successfully")
    )


})



export {registerUser}