import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
    <div className="flex-col ">
    {<h1 className=" p-3 m-2 " >Contact us on </h1>}
    <div className=" p-3 m-1">
    <Link className=" font-bold p-3 m-2" to="">Send Email </Link> 
    </div>
    <div className=" p-3 m-1">
      <Link className="font-bold   p-3 m-2" to=""> Instagram </Link>
    </div>
    <div className=" p-3 m-1">
      <Link className="font-bold  p-3 m-2" to=""> Tweet us now</Link>
    </div>
    <div className=" p-3 m-1">
    <Link className="font-bold p-3 m-2" to=""> Call Us Now </Link>
    </div>
    </div>
    </>
  )
    
};

export default Contact;
