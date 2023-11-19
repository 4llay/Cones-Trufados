import Container from "@/components/Container";
import CartClient from "./CartClient";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getCurrentUser } from "../../../actions/getCurrentUser";

const Cart = async() => {
    const currentUser = await getCurrentUser()

    return(
        <div className="pt-8">
            <Header />
            <Container>
                {/*@ts-ignore*/}
                <CartClient currentUser={currentUser}/>
            </Container>
            <Footer />
        </div>
    )
}

export default Cart;