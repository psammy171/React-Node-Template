import React from "react";
import Text from "../Shared/Text";

const Home = () => {
    return (
        <>
            <Text variant="heading">Its from home first</Text>
            <Text>Env : {process.env.REACT_APP_API_URL} last</Text>
        </>
    )
}

export default Home;