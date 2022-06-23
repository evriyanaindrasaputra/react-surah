import React from "react";

type AccordionProps = {
    title: string;
    children: React.ReactNode;
}
export default function Accordion ({title, children}: AccordionProps )  {
    const [show, setShow] = React.useState(false);

    const onAccordionClick = () => {
        setShow(!show);
    }

    return (
        <div className="accordion">
            <div className="accordion-title">
                <h3>{title}</h3>
                <button onClick={() => onAccordionClick()}>{!show ? 'Show' : 'Hide'}</button>
            </div>
            {show && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}
