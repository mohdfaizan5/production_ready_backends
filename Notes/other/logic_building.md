# Logic / Business Logic

The overthing is you have a problem in front of you the way you break down the given problem into small subproblem and solve each at one time and finally after solving all sub problem and wrapping all the sub solution into one core solution of a original and making sure they work together is logic building or apporach towards solving problems

### Break down the core problem down

![diagram-export-1-8-2024-10_48_34-AM](https://github.com/mohdfaizan5/production_ready_backends/assets/79694828/5c0ab306-70ee-40d6-86a6-6791990d453b)


#### User registration breakdown
```
STEPS:

S1: get user details from frontend
S2: Validation: Check if isEmpty, Invalid...
S3: Check if user already exists
S4: Check for images [avatar, coverImage]
S5: Create user object & create entry in db
S6: Remove password and refresh tokens from response
S7: Check if user got created
S8: Return response
```

#### Step 1
get user details from frontend
```js
const register = asyncHandler( async(req, res)=>{
  const {username, email, password, fullName} = req.body
})
```

#### Step 2
Validation: Check if isEmpty, Invalid...
```js
/* Noob method */

if (username === "" || email === null || password === null || fullName=== null){
  throw new ApiError(400, "Enter all fields")
}

// Experienced programmer
if ([username, email, password, fullName].some((field)=> field?.trim() == "")
{
  throw new Api(400, "Enter all fields")
}


```

#### Step 3
Check if user already exists
```js
/* Noob method */
UserModel.findOne({email})

/* Good code */
// We can use Operator in mongoose with `$`

const existedUser = UserModel.findOne({
  // Check whatever values you within the obj
  $or: [{email}, {username}]
})

if(!existedUser){
  throw new ApiError(400, "User already exists")
}
```

#### Step 4
 Check for images [avatar, coverImage]
```js
// Since we have created a multer middleware to upload files
import {upload} from "../middlewares/multer.middleware.js"

// Accepts an array of objs, files we want to upload
const uploadOptions = upload.fields([
  {
    name: "avatar", // This name should be `name` attribute from frontend html element
    maxCount: 1 // How many files you want to accept
  },
  {
    name: "coverImage",
    maxCount: 1
  },
])

router.route("profile/update").post(uploadOptions, userController)


// Industry standard way
router.route("profile/update").post(
  upload.fields
  (  
    {
      name: "avatar",
      maxCount: 1
    },
    {
      name: "coverImage",
      maxCount: 1
    },
  )
, usercontroller
)
```

How to check if image came from Multer and stored in public/temp and retrive the path send to cloudinary and get back the public asset url
```js
let avatarLocalPath;
if (req.files && Array.isArray(req.files.coverImage) && req.files.avatar.length > 0)
{
  avatarLocalPath = req.files.coverImage[0].path
}

let avatar = await uploadOnCloudinary(avatarLocalPath)

if(!avatar){
  throw new ApiError(400, "Avatar file is required")
}
```



#### Step 5
Create user object & create entry in db
```js
User.create(
  fullname,
  username,
  email,
  password,
  avatar: 
  coverImage,
  
)
```

#### Step 6
 Remove password and refresh tokens from response
```js

```

#### Step 7
 Check if user got created
```js

```

#### Step 8
 Return response
```js

```


&nbsp;

#### Final Code
```js

```
