import {http} from "./http";
import "./websocket/client"

http.listen(3333, () => {console.log("Server running port 3333")})  