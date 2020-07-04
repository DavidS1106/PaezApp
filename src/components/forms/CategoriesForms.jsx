import React from 'react';
const CategoriesForm = ({cats,submit}) => {
    return (
    <div>
      <form onSubmit={submit}>
                {
                            cats.map((item,i) => {
                                return (
                                  <div>
                                    <label>{item}</label><br></br>
                                    <input type="checkbox" id="{i}" name="name" value="{item}"></input>
                                    <br></br>
                                  </div>
                                );
                            })
                }
                <br></br>
                <input type="submit" value="Submit" />
            </form>
    </div>  
    )
  }
  
  export default CategoriesForm;