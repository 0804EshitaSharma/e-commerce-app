import ProductCard from "./ProductCard";
import { ProdListContainer } from "../../Styles/ProdListContainer.styled";

const initialState = {
    list: [
        {
          Name: "Home Lego Orchid",
          Description: "Lego Orchid",
          Category: "Home",
          Price: "59.98",
          Rating: "5",
          Images: ["https://m.media-amazon.com/images/I/71iY-AO2D1L._AC._SR360,460.jpg"]
        },
        {
          Name: "Home Lego Wildflower Bouquet",
          Description: "Lego Wildflower Bouquet",
          Category: "Home",
          Price: "73.99",
          Rating: "4.5",
          Images: ["https://m.media-amazon.com/images/I/91E3Lcl8P2L._AC._SR360,460.jpg"]
        },
        {
          Name: "Home Lego Bonsai Tree Building",
          Description: "Lego Bonsai Tree Building",
          Category: "Home",
          Price: "64.98",
          Rating: "5",
          Images: ["https://m.media-amazon.com/images/I/71pVP0qS4wL._AC_UL800_FMwebp_QL65_.jpg"]
        },
        {
          Name: "Home Lego OrchHarry Potter Hogwarts Expressid",
          Description: "Lego Harry Potter Hogwarts Express",
          Category: "Home",
          Price: "618.98",
          Rating: "5",
          Images: ["https://m.media-amazon.com/images/I/81cuoMC1o6L._AC_UL800_QL65_.jpg"]
        },
        {
          Name: "Home Lego Cabin",
          Description: "Lego Cabin",
          Price: "59.98",
          Rating: "5",
          Images: ["https://m.media-amazon.com/images/I/81juWZTD2HL._AC_UL800_FMwebp_QL65_.jpg"]
        },
        {
          Name: "Home Lego Toy Car Model",
          Description: "Lego Toy Car Model",
          Category: "Home",
          Price: "23.99",
          Rating: "4.5",
          Images: ["https://m.media-amazon.com/images/I/81smQxculNL._AC_UL800_FMwebp_QL65_.jpg"]
        },
        {
          Name: "Electronics Lego Plant Set",
          Description: "Lego Plant Set",
          Category: "Electronics",
          Price: "64.98",
          Rating: "5",
          Images: ["https://m.media-amazon.com/images/I/71OywSYVdzL._AC_UL800_FMwebp_QL65_.jpg"]
        },
        {
          Name: "Electronics Lego Magic Unicorn",
          Description: "Lego Magic Unicorn",
          Category: "Electronics",
          Price: "18.98",
          Rating: "5",
          Images: ["https://m.media-amazon.com/images/I/717CBYoUL7L._AC_UL800_FMwebp_QL65_.jpg"]
        }
      ]
    };

export default function ProductList() {
    return (
        <ProdListContainer>
            {initialState.list.map((item) => (
                <ProductCard key={item.Description} item={item} />
                ))}
        </ProdListContainer> 
    )
}