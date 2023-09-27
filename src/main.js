
import data from'./data.json';
import Cardcomp from './card';

function Main() {
  return (
    <>
    <div style={{display:"flex" ,justifyContent:"space-between",gap:"2%",marginTop:"2%"}}>
    {data.map(function(item){

        return(
            <Cardcomp image={item.image_url} title={item.title} description={item.description}/>
        )
    }
    
    )

    }
    </div>
    </>
  );
}

export default Main;