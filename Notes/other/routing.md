# Routing

### How to properly route
```js
/*  src/app.js  */
// route importing
import userRoute from "./routes/user.routes.js"

// route declaration
app.use("/prefix-route/", userRoute)
```
* The first arg to app.use is a prefix route that gets add to all the sub routes.
* The standard practice is importing the routes just above `route declaration` not on top of file.


&nbsp;
### Standard way to handling routes
```js
import {Route} from "express"
const router = Router()

router.route("/home").get(getController).post(postController) /*✅*/

router.get("/home", controller) /*❌*/
router.get("/home", controller).post("/home", controller) /*❌*/
```
* The call back approach is not a clean way because you have to specify route every time you want to add a controller for method.

&nbsp;
### Controller
```js
/* controller.js */

import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler( async(req, res)=>{
  res.status(200).json({
    message: "All working😋"
  })

})
```

&nbsp;
## Standards
When you're developing a backend it is a  good practice to tell its an api with version

```js
app.use("/api/v1/user", userRoute)
```
