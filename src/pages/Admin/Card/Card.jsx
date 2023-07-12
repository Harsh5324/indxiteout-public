import { Link } from "react-router-dom"
export default function Card(props){
    return(
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <div className="card m-2 shadow">
          <div className="card-body">
            <h5 className='card-title'>{props.name}</h5>
              <p className="card-text">{props.desc}</p>
          </div>
          <div className='d-flex align-items-center px-3 pb-3'>
            <Link to={props.to} className="btn btn-primary btn-sm m-1">View</Link>
          </div>
          </div>
         </div>

    )
}