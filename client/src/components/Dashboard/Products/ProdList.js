import ProductCard from "./ProductCard";
import { ProdListContainer } from "../../Styles/ProdListContainer.styled";

const initialState = {
    list: [
        {
          description: "Lego Orchid",
          price: "59.98",
          rating: "5",
          image: "https://m.media-amazon.com/images/I/71iY-AO2D1L._AC._SR360,460.jpg",
        },
        {
          description: "Lego Wildflower Bouquet",
          price: "73.99",
          rating: "4.5",
          image: "https://m.media-amazon.com/images/I/91E3Lcl8P2L._AC._SR360,460.jpg",
        },
        {
            description: "Lego Bonsai Tree Building",
            price: "64.98",
            rating: "5",
            image: "https://m.media-amazon.com/images/I/71pVP0qS4wL._AC_UL800_FMwebp_QL65_.jpg"
        },
        {
            description: "Lego Harry Potter Hogwarts Express",
            price: "618.98",
            rating: "5",
            image: "https://m.media-amazon.com/images/I/81cuoMC1o6L._AC_UL800_QL65_.jpg"
        },
        {
          description: "Lego Cabin",
          price: "59.98",
          rating: "5",
          image: "https://m.media-amazon.com/images/I/81juWZTD2HL._AC_UL800_FMwebp_QL65_.jpg",
        },
        {
          description: "Lego Toy Car Model",
          price: "23.99",
          rating: "4.5",
          image: "https://m.media-amazon.com/images/I/81smQxculNL._AC_UL800_FMwebp_QL65_.jpg",
        },
        {
            description: "Lego Plant Set",
            price: "64.98",
            rating: "5",
            image: "https://m.media-amazon.com/images/I/71OywSYVdzL._AC_UL800_FMwebp_QL65_.jpg"
        },
        {
            description: "Lego Magic Unicorn",
            price: "18.98",
            rating: "5",
            image: "https://m.media-amazon.com/images/I/717CBYoUL7L._AC_UL800_FMwebp_QL65_.jpg"
        }
      ]
    };

export default function ProductList() {
    return (
        <ProdListContainer>
            {initialState.list.map((item) => (
                <ProductCard key={item.description} item={item} />
                ))}
        </ProdListContainer> 
    )
}