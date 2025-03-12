import {Router, Request, Response} from 'express';
import {FeedRouter} from './feed/routes/feed.router';

const router: Router = Router();

router.use('/feed', FeedRouter);

router.get('/', async (req: Request, res: Response) => {
  console.debug( 'DKTEST ==> index.router.ts router.get()' );
  res.send(`V0`);
});

export const IndexRouter: Router = router;
