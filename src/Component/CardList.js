import Card from "./Card";

function CardList(props) {
    const products2 =props.products1;
    // console.log(products2);
    return (
        <>
            <p>Products!!</p>
           {
            products2 && products2.map((p, ind)=>{
                return (
                    <Card {...p} key={ind}/>
                )
            })
           }

        </>
    )
}

export default CardList;