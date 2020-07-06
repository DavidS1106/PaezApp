import React from 'react';
const CategoriesForm = ({cats,submit}) => {
    return (
    <div>
      <form onSubmit={submit}>
                {
                            cats.map((item,i) => {
                                return (
                                  <div key={i}>
                                    <label>{item.nom}</label><br></br>
                                    <input onChange={submit} type="checkbox" id="{i}" name="name" value={item.id}></input>
                                    <br></br>
                                  </div>
                                );
                            })
                }
                <br></br>
               
            </form>
    </div>  
    )
  }
  
  export default CategoriesForm;