import express from 'express';
import userRoute from './Routes/user.route';

class App {
  public app: express.Express

  constructor() {
    this.app = express();
    this.app.use('/user', userRoute);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`))
  }

}

new App().start(3000)