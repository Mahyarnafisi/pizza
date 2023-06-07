import React from "react";
import "../styles/about.css";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
function About() {
  return (
    <div className="about">
      <div className="about__header">
        <h1 className="about__header__title">About us</h1>
        <p className="about__header__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus necessitatibus, atque minus aliquam, tempora aut dolores, illo autem magnam ab ut quod at iste recusandae quaerat! Iusto omnis, consequatur vitae dignissimos fugiat
          quisquam explicabo amet ad nemo quos tenetur autem eligendi vel obcaecati cupiditate voluptatem veritatis eius in minima sunt natus pariatur, magni quaerat. Nobis magni voluptates laudantium ipsa repellendus molestiae vel
          consequuntur itaque tenetur fugit officia cum, quibusdam doloremque corporis vitae ipsum aspernatur minus autem id! Culpa perferendis saepe minima aspernatur at maiores officia dolorum in vero, provident cupiditate ducimus
          voluptatem, reiciendis a molestiae ratione temporibus porro reprehenderit quibusdam necessitatibus deleniti animi. Voluptatibus vero asperiores magnar perspiciatis laborum doloribus placeat, at ipsam! Eius quidem, quas provident
          eaque ex eum doloremque labore inventore soluta dolorem quos repudiandae dicta pariatur, minima sapiente hic illo voluptatem omnis minus? Delectus tempora pariatur cupiditate minus libero nostrum eos unde sed id nam ullam
          voluptatibus doloremque aliquid dolorem illum voluptas asperiores, in perferendis, quia esse reiciendis at hic aspernatur porro. Corrupti repudiandae nostrum aliquam at consectetur in minima vitae magnam blanditiis repellendus?
          Fugiat perferendis dolores exercitationem numquam error cumque, eligendi voluptatem!
        </p>
      </div>
      <div className="about__body">
        <div className="cards">
          <div className="card">
            <div className="card__header">
              <MdOutlineDeliveryDining className="card__icon" />
              <h2 className="card__title">Fast Delivery</h2>
            </div>
            <div className="card__body">
              <p className="card__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deserunt laborum earum iusto a id harum perferendis quaerat itaque, deleniti, ad numquam in nostrum quas. Maxime illo repudiandae nulla temporibus!.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <FaPizzaSlice className="card__icon" />
              <h2 className="card__title">Quality & Taste</h2>
            </div>
            <div className="card__body">
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo quam rem. Odit vel tenetur tempora eum velit blanditiis, fuga voluptatibus totam aliquid. Repudiandae ducimus, error voluptate pariatur similique consequatur
                inventore dolorem?
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <LuChefHat className="card__icon" />
              <h2 className="card__title">Master Chef</h2>
            </div>
            <div className="card__body">
              <p className="card__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima asperiores totam facere illum quisquam labore repellendus, facilis nostrum modi consequuntur! Iste facere amet quis. Nesciunt assumenda voluptas magni quod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
