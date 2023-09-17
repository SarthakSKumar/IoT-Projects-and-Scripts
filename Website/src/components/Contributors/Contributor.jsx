import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (
        <div
            className='backdrop bg-[rgba(0,0,0,0.51)] absolute z-10 w-[100vw] h-[100vh] top-0 bottom-0 left-0 right-0'
            onClick={props.closeOverlay}
        ></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className='modal absolute z-20 left-[calc(50%-10rem)] top-[calc(50%-3.5rem)] xs:left-[calc(50%-12.5rem)] xs:top-[calc(50%-5rem)] md:left-[calc(50%-25rem)] md:top-[calc(50%-10rem)]'>
            <div className='content w-[20rem] xs:w-[25rem] md:w-[50rem] md:h-fit bg-white rounded-xl py-10 pb-16'>
                <h1 className="text-2xl font-semibold px-6 py-4 mx-auto">Repo Contributors</h1>
                <img
                    src='https://contrib.rocks/image?repo=SarthakSKumar/IoT-Projects-and-Scripts'
                    alt='contributors'
                    className='mx-auto w-[90%]'
                />
            </div>
        </div>
    );
};

const Contributor = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop closeOverlay={props.closeOverlay} />,
                document.getElementById("backdrop-root")
            )}
            ;{ReactDOM.createPortal(<ModalOverlay />, document.getElementById("overlay-root"))}
        </>
    );
};

export default Contributor;
