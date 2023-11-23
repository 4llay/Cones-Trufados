import Container from "@/components/Container";
import FormWrap from "@/components/inputs/FormWrap";
import CheckoutClient from "./CheckoutClient";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const Checkout = () => {
    console.log('a')
    return (
        <div className="p-8">
            <Header />
            <Container>
                <FormWrap>
                    <CheckoutClient />
                </FormWrap>
            </Container>
            <Footer />
        </div>
    );
}

export default Checkout;