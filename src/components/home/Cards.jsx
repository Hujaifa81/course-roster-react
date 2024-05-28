import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = ({handleSelect}) => {
    const [cards,setCards]=useState([])
    useEffect(()=>{
        fetch("./course.json")
        .then((res)=>res.json())
        .then((data)=>setCards(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                cards.map((course,idx)=><Card key={idx} course={course} handleSelect={handleSelect}></Card>)
            }
        </div>
    );
};
Cards.propTypes = {
    
    handleSelect: PropTypes.func
};
export default Cards;