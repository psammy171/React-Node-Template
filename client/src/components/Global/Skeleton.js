import Header from "./Header";
import Footer from "./Footer";

const Skeleton = (props) => {
    return (
    <>
        <Header />
        {props.children}
        <Footer />
    </>)
}

export default Skeleton;