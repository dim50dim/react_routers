import React from "react";
import CategoryDescription from "./CategoryDescription";

function Category() {
    return (
        <div>
            <h1>Category</h1>
            <a href="/cat">Назад</a>
<ul>
<li><a href="/cat/notebook">Ноутбуки</a></li>
<li><a href="/cat/monitor">Мониторы</a></li>
<li><a href="/cat/cellphone">Мобильные телефоны</a></li>
</ul>
            <CategoryDescription />
        </div>
    )
}

export default Category;