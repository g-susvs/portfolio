import { FC, Suspense, lazy } from "react";
import { CustomButton } from "../components/CustomButton";

import '../css/home.css'
import { LoaderImage } from "../components/LoaderImage";

const Image = lazy(() => import('../components/LazyImage'))


export const HomeSection: FC = () => {
    return (
        <section id="home" className='home-section'>
            <figure className='img__container'>

                <Suspense fallback={<LoaderImage />}>
                    <Image src={"/assets/jesus.jpg"} alt={"Jesús Valencia"} width="220" height="220" />
                </Suspense>

            </figure>
            <div className="home__body">
                <p className="home__myName">Jesús Valencia</p>
                <h2 className="home__rolDev">{"<Desarrollador Web />"}</h2>
                <div className="buttons-group">
                    <CustomButton
                        customClass="button--linkedIn"
                        title="LinkedIn"
                        href="https://www.linkedin.com/in/jesus-guillermo-valencia-salvador/"
                    >
                        <span className="icon-linkedin2"></span>

                    </CustomButton>
                    <CustomButton
                        customClass="button--github"
                        title="Github"
                        href="https://github.com/g-susvs"
                    >
                        <span className="icon-github"></span>
                    </CustomButton>

                </div>

            </div>
        </section>
    )
}