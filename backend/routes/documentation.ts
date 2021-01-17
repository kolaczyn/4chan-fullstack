import  express, {Request as Req, Response as Res} from 'express';

const router = express.Router();

router.get('/', (req: Req,res: Res)=> {
  res.render('index', {
    title : 'My Express App',
    article: 'Hello world',
  })
})

module.exports = router;