import AdminSidebar from '../../../components/AdminSidebar/AdminSidebar';
import Blogs from "../Blogs/Blogs";
import Card from "../Card/Card";


export default function Dashboard(){
      return (
        <><AdminSidebar />
        <div className="container w-100vw">
              <div className="row">
                  <div className="col-12 ">
                      <div>
                          <nav className='m-5' style={{ bsBreadcrumbDivider: ">", marginLeft: "100px" }} aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item active"><a href="#">Admin</a></li>
                                  <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                              </ol>
                          </nav>
                      </div>
                     <div className="container">
                      <div className="row d-flex align-items-center justify-content-center my-5">
                          <Card name="Blog" desc="View Content of your Blog from Here" to="/admin/blogs" />
                          <Card name="Expetise" desc="View Content of your Expertise from Here" to="/admin/expertise" />
                          <Card name="Solutions" desc="View Content of your Solutions from Here" to="/admin/solutions" />
                          <Card name="Case studies" desc="View Content of your Case studies from Here" to="/admin/case-study" />
                      </div>
                      </div>
                  </div>
              </div>
          </div></>
      );
    }
 
