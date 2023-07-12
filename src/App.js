import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "./context/Context";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Blogs from "./pages/Admin/Blogs/Blogs";
import Expertise from "./pages/Admin/Expertise/Expertise";
import Solutions from "./pages/Admin/Solutions/Solutions";
import SingleExpertise from "./pages/Admin/Expertise/SingleExpertise";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./pages/PrivacyPolicy/Terms";
import GDPR from "./pages/PrivacyPolicy/GDPR";
import AboutUs from "./components/About-us/About-us";
import AddBlog from "./pages/Admin/Blogs/AddBlog/AddBlog";
import BlogView from "./pages/BlogView/BlogView";
import AddExpertise from "./pages/Admin/Expertise/AddExpertise";
import AddSolution from "./pages/Admin/Solutions/AddSolution";
import AddCaseStudies from "./pages/Admin/CaseStudies/AddCaseStudies";
import BlogSingle from "./pages/BlogSingle/BlogSingle";
import $ from "jquery";
import jQuery from "jquery";
import CaseStudy from "./pages/Admin/CaseStudies/CaseStudy";
import CaseStudySingle from "./pages/CaseStudySingle/CaseStudySingle";
import SingleSolutions from "./pages/Admin/Solutions/SIngleSolutions";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import CaseStudiesSlider from "./components/Case-Studies-Slider/Case-Studies-Slider";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import Categories from "./pages/Admin/Blogs/Categories";

function App() {
    const { user } = useContext(Context);

    const Common = () => {
        const location = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [location]);

        return <></>;
    };

    return (
        <Router>
            <Common />
            {/* <TopBar /> */}
            <Switch>
                <Route exact path="/admin">
                    {<Dashboard />}
                </Route>
                <Route path="/admin/dashboard">{<Dashboard />}</Route>
                <Route path="/admin/blogs">{<Blogs />}</Route>
                <Route path="/admin/adminsidebar">{<AdminSidebar />}</Route>
                <Route path="/admin/add-blog">{<AddBlog />}</Route>
                <Route path="/admin/blog/edit/:ID">{<AddBlog />}</Route>
                <Route path="/admin/expertise">{<Expertise />}</Route>
                <Route path="/admin/add-expertise">{<AddExpertise />}</Route>
                <Route path="/admin/edit-expertise/:ID">
                    {<AddExpertise />}
                </Route>
                <Route path="/admin/solutions">{<Solutions />}</Route>
                <Route path="/admin/add-solutions">{<AddSolution />}</Route>
                <Route path="/admin/edit-solutions/:ID">
                    {<AddSolution />}
                </Route>
                <Route path="/admin/case-study">{<CaseStudy />}</Route>
                <Route path="/admin/categories">{<Categories />}</Route>
                <Route path="/admin/add-case-studies">
                    {<AddCaseStudies />}
                </Route>
                <Route path="/admin/case-study-edit/:ID">
                    {<AddCaseStudies />}
                </Route>
                <div>
                    <TopBar />
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/register">
                        {user ? <Home /> : <Register />}
                    </Route>
                    <Route path="/login">{<Login />}</Route>
                    <Route path="/expertise/:ID">{<SingleExpertise />}</Route>
                    <Route path="/solutions/:ID">{<SingleSolutions />}</Route>
                    <Route path="/privacy-policy">{<PrivacyPolicy />}</Route>
                    <Route exact path="/case-studies">
                        {<CaseStudies />}{" "}
                    </Route>
                    <Route path="/case-studies/:ID">
                        {<CaseStudySingle />}
                    </Route>
                    <Route path="/terms-of-use">{<Terms />}</Route>
                    <Route path="/slider">{<CaseStudiesSlider />}</Route>
                    <Route path="/get-in-touch">{<GetInTouch />}</Route>
                    <Route path="/gdpr">{<GDPR />}</Route>
                    <Route path="/about-us">{<AboutUs />}</Route>
                    <Route exact path="/blog">
                        {<BlogView />}
                    </Route>
                    <Route path="/blog/:postId">{<BlogSingle />}</Route>
                    <Route path="/post/:postId"></Route>
                    <Footer />
                </div>
            </Switch>
        </Router>
    );
}

export default App;
