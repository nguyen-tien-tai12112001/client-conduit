
import { yupResolver } from '@hookform/resolvers/yup';

import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { signin } from '../../actions/auth';
interface IFormInput {
  email: string;
  password: string;

}
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();

const Login = () => {
 
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>({resolver: yupResolver(schema)});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    dispatch(signin(data, navigate));
  }
  

 

  return (
   
    <div className="auth-page">
    <div className="container page">
      <div className="row">

        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign In</h1>
          <p className="text-xs-center">
            <Link to="/register">
              Need an account?
            </Link>
          </p>

          

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email"
                  
                 />
  <i style={{color:"red"}}>{errors.email?.message}</i>
              </fieldset>


              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true, minLength: 5 })}
                  
                   />
  <i style={{color:"red"}}>{errors.password?.message}</i>

              </fieldset>

              <button
                className="btn btn-lg btn-primary pull-sm-right"
                type="submit"
                >
                Sign in
              </button>

            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
  );
};

export default Login;
