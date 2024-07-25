import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div>
        <UserContext.Consumer>
          {(data) => <h1 className="text-xl font-bold">{data.loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
      <h2>This is our web series</h2>

      <UserClass name={"Classy Harsh"} location={"Jodhpur"} />
    </div>
  );
};
export default About;
