import Container from "@/components/Container";
import FormWrap from "@/components/inputs/FormWrap";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import PaymentFormPix from "./PaymentFormPix";

const Checkout = async () => {

    return (
        <div className="p-8">
            <Header />
            <Container>
                <FormWrap>
                    <PaymentFormPix />
                </FormWrap>
            </Container>
            <Footer />
        </div>
    );
}

export default Checkout;