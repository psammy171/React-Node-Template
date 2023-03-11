import { useState } from 'react';
import Card from "../Shared/Card";
import Text from "../Shared/Text";
import Button from "../Shared/Button";
import Popup from "../Shared/Popup";

const Field = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [loadingD, setLoadingD] = useState(false)

    const closePopup = () => {
        setOpen(false);
    };

    const clickButton = () => {
        console.log("Called ")
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        },5000)
    }

    const clickButtonD = () => {
        console.log("Called ")
        setLoadingD(true)
        setTimeout(() => {
        setLoadingD(false)
        },5000)
    }

    return(
        <>
             <Card style={{padding:'5px'}}>
                <Text>Content</Text>
                <Text variant="sub-heading">Sub heading</Text>
                <Text variant="heading">Heading</Text>
            </Card>
            <Card style={{padding:'5px'}}>
                <Button loading={loading} >Click me</Button>
                <Button variant="secondary" loading={loading} onClick={clickButton}>Secondary</Button>
            </Card>
            <Card>
                <Button variant="secondary" loading={loadingD} onClick={clickButtonD}>Secondary</Button>
            </Card>
            <Button onClick={() => setOpen(true)} loading={false}>Show Popup</Button>
            <Popup open={open} onClose={closePopup} closeOnOutsideClick={true}>
                <h2>Popup content</h2>
            </Popup>
            {/*<Input label="User name" id="usrName" name="usrName" type="text" placeholder="Enter username"/>
            {/*<Input label="Phone Number" id="phNo" name="phNo" type="number" placeholder="8050541976"/>
            <Input label="Email" id="email" name="email" type="email" placeholder="user@company.com"/>
            <Loader color={"#bcbcbc"} show={true} size="14px"/>
            <Loader show={true} size="20px"/> */}
            <h2>Field </h2>
        </>
    )

}

export default Field;