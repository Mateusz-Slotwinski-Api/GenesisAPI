import { Request, Response } from 'express'

import AuthServices from '@/services/auth'
import { UserLoginReq, UserRegisterReq } from '@/types/auth'

class AuthControllers {
  async Register(req: Request, res: Response) {
    const userData: UserRegisterReq = {
      Name: req.body.Name,
      Surname: req.body.Surname,
      Login: req.body.Login,
      Email: req.body.Email,
      DateOfBirth: req.body.DateOfBirth,
      Degree: req.body.Degree,
      Password: req.body.Password,
    }
    try {
      const query = await AuthServices.Register(userData)
      res.status(200).send(query)
    } catch (e) {
      res.status(422).send(e.message)
    }
  }
  async Login(req: Request, res: Response) {
    const Login = req.body.Login
    const Password = req.body.Password
    const userData: UserLoginReq = {
      Login,
      Password,
    }
    try {
      const query = await AuthServices.Login(userData)
      res.cookie('isWorking', true)
      res.send(query)
    } catch (e) {
      res.status(422).send(e.message)
    }
  }
}

export default new AuthControllers()
