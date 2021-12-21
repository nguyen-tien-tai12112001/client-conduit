
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../actions/auth';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from "react-hook-form";
interface IFormInput {
  email: string;
  password: string;
  username:string

}
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
}).required();

const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>({resolver: yupResolver(schema)});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
 
  const onSubmit: SubmitHandler<IFormInput> = data => {
   
    dispatch(signup(data, navigate));

  }



  return (
    <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/login">
                  Have an account?
                </Link>
              </p>

              

              <form onSubmit={handleSubmit(onSubmit)} >
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      {...register("username", { pattern: /^[A-Za-z]+$/i,required:true })}
                       />
  <i style={{color:"red"}}>{errors.username?.message}</i>

                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      {...register("email", { required:true})}
                      />
  <i style={{color:"red"}}>{errors.email?.message}</i>

                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      {...register("password", { required:true })}
                       />
  <i style={{color:"red"}}>{errors.password?.message}</i>

                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-sm-right"
                    type="submit"
                    >
                    Sign up
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
  );
};

export default Register;
