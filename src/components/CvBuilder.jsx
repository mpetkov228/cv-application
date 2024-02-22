import Education from "./Education";
import General from "./General";

function CvBuilder() {
    return (
        <section className="cv-builder">
            <General />
            <Education />
        </section>
    )
}

export default CvBuilder;