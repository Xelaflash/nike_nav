import React from "react";
import { css } from "../../styled-system/css";

type Product = {
  id: number;
  name: string;
  type: string;
  color: string;
  price: number;
  label: string;
};

const ProductGrid: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Nike Dunk Low Retro", type: "Men's Shoes", color: "1 Color", price: 115, label: "Best Seller" },
    { id: 2, name: "Nike Dunk Low", type: "Men's Shoes", color: "1 Color", price: 115, label: "Just In" },
    { id: 3, name: "Nike Air Max 90", type: "Men's Shoes", color: "4 Colors", price: 130, label: "Best Seller" },
    { id: 1, name: "Nike Dunk Low Retro", type: "Men's Shoes", color: "1 Color", price: 115, label: "Best Seller" },
    { id: 2, name: "Nike Dunk Low", type: "Men's Shoes", color: "1 Color", price: 115, label: "Just In" },
    { id: 3, name: "Nike Air Max 90", type: "Men's Shoes", color: "4 Colors", price: 130, label: "Best Seller" },
  ];

  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        padding: "0 8px",
      })}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className={css({
            padding: "0 8px",
          })}
        >
          <div className="card">
            <div
              className={css({
                background: "#F6F6F6",
                height: "400px",
                width: "100%",
              })}
            />
            <div className="card-body">
              <h5
                className={css({
                  color: "#9E3500",
                  fontSize: "16px",
                  fontWeight: "bold",
                })}
              >
                {product.label}
              </h5>
              <p
                className={css({
                  color: "#111111",
                  fontSize: "16px",
                  fontWeight: "bold",
                })}
              >
                {product.name}
              </p>
              <p
                className={css({
                  color: "#707072",
                  fontSize: "16px",
                })}
              >
                {product.type}
              </p>
              <p
                className={css({
                  color: "#707072",
                  fontSize: "16px",
                })}
              >
                {product.color}
              </p>
              <p
                className={css({
                  color: "#111111",
                  fontSize: "16px",
                  fontWeight: "bold",
                })}
              >
                ${product.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ProductGrid };
