import express,{IRouter}  from 'express';
import bookRoutes from '../routes/book.route';
const router = express.Router();

const routes =():IRouter=>{

    
    router.get('/', (req,res)=>{
        res.send(" Welcome to E-Book Store");
    })
    return router;
}
export default routes;
