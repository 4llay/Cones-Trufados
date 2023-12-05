import Container from "@/components/Container";
import FormWrap from "@/components/inputs/FormWrap";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrismaClient, Prisma } from '@prisma/client'
import PaymentFormMoney from "./PaymentFormMoney";

const prisma = new PrismaClient()

const Checkout = async () => {

    return (
        <div className="p-8">
            <Header />
            <Container>
                <FormWrap>
                    <PaymentFormMoney />
                </FormWrap>
            </Container>
            <Footer />
        </div>
    );
}

export default Checkout;