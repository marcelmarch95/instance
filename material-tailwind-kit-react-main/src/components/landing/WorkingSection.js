import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import Chile from 'assets/img/chile.png';
import Colombia from 'assets/img/colombia.png';
import Peru from 'assets/img/peru.png';
import Rect from 'assets/img/rect.png';
import Image from "@material-tailwind/react/Image";


export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
               

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Image
                                    src = {Rect}
                                />
                        </div>
                        <LeadText color="blueGray">
                            Los mejores en Fullcomerce
                        </LeadText>
                        <H4 color="gray">Somos Instance</H4>
                        <LeadText color="blueGray">
                            Instance gracias a su tecnologia propone una innovación en el comercio digital integrando
                            distintas soluciones para hacer mas eficiente y ágil las ventas del canal digital y proporcionando
                            a las personas una herramienta tecnológica para que generen ingresos por medio de las oportunidades que se generan
                            en este ecosistema.
                        </LeadText>
                        
                            <div className="w-full lg:w-8/12 px-0 ml-left md:mb-0 mb-8">
                                <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                                <Image
                                src = {Chile}
                                />
                                <Image
                                    src = {Colombia}
                                />
                                <Image
                                    src = {Peru}
                                />
                                </div>
                            </div>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-10 lg:mt-0">
                        <Card>
                    <CardHeader color="white">
                        <H5 style={{ marginBottom: -70, color: 'black'}}>
                            Inicia sesión
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-12 px-4 bg-bb">
                            Correo
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                iconName="email"
                            />
                        </div>
                        <div className="mb-8 px-4">
                        Contraseña
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                iconName="lock"
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <Checkbox
                                color="lightBlue"
                                text="Recuerdame"
                                id="remember"
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                            >
                                Inicia tu Onboaring acá; Crea una cuenta
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
