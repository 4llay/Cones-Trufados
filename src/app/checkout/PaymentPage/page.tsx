import Container from "@/components/Container";
import FormWrap from "@/components/inputs/FormWrap";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import PaymentForm from "@/app/checkout/PaymentPage/PaymentForm";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const Checkout = async () => {

    return (
        <div className="p-8">
            <Header />
            <Container>
                <FormWrap>
                    <PaymentForm />
                </FormWrap>
            </Container>
            <Footer />
        </div>
    );
}

export default Checkout;