import React from "react";
import { Container } from "react-bootstrap";
import { frontService } from "../../_services/front.services";
import LoadingScreen from "../LoadingScreen/loadingScreen"
export default function Knowmore({ data }) {

    const [knowmore, setKnowmore] = React.useState(data);
    return (
        <>
            <div className="title-content">
                <h2 className="title" style={{ width: '100%', textAlign: 'center', marginTop: '32px' }} >
                    Know More
                    <i className="fa fa-chevron-up" style={{ marginLeft: 20, }} aria-hidden="true"></i>
                </h2>
            </div>
            {knowmore ? (<>
                <Container className="mb-4 know-more-wrapper shadow p-0 mt-4"><div className="removeknowmore" key={0} dangerouslySetInnerHTML={{ __html: knowmore }} style={{ padding: 30, fontFamily: 'Alata', fontStyle: 'normals', fontSize: 16, textAlign: 'center', }} /> </Container>
            </>) : <LoadingScreen />}


        </>
    )

}