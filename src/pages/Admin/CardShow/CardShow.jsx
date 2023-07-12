import { Link } from "react-router-dom";
export default function CardShow (props){
    return <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
    <div className="card m-2">
      <div>
        <img src={props.photo} className="card-img-top" alt="img" />
      </div>
      <div className="card-body">
        <h5 className='card-title'>{props.title}</h5>
        <p className=''>{props.subtitle}</p>
      </div>
      <div className='d-flex align-items-center px-3 pb-3'>
        <Link to={props.link} className="btn btn-primary btn-sm m-1">Edit</Link>
        <button type='button' onClick={props.dlt} className="btn btn-danger btn-sm m-1">Delete</button>
      </div>
    </div>
  </div>;
}